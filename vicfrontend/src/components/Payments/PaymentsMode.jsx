import React, { useState } from "react";
import { Box, Button, TextField, CircularProgress } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../../assets/Lipanampesa.png";
import myImage from "../../assets/CardImage.png";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c00100",
    },
  },
});

const commonStyles = {
  container: {
    height: "28.125rem",
    marginTop: "4rem",
    width: "27.25rem",
    backgroundColor: "#ffffff",
    borderRadius: "1.25rem",
    padding: "1.25rem",
  },
  borderedBox: {
    outline: "1px solid #600100",
    borderRadius: "0.625rem",
    padding: "1.25rem",
  },
  sendButton: {
    backgroundColor: "#c00100",
    color: "white",
    borderRadius: "0.625rem",
    width: "25%",
    marginLeft: "75%",
    marginTop: "0.125rem",
    paddingBottom: "0",
  },
  confirmButton: {
    backgroundColor: "#c00100",
    color: "white",
    borderRadius: "0.625rem",
    width: "100%",
    marginTop: "0.625rem",
  },
};

const PaymentsMode = ({  billingId }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [paymentError, setPaymentError] = useState(null);
  const [loadingMpesa, setLoadingMpesa] = useState(false);
  const [loadingCard, setLoadingCard] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  /*const stripePromise = loadStripe(
    "pk_test_51OyFrWRuEfqcYjyYRpY3UtADfKTeMjLRWHlLLdWEZ0vw7BwVzGwgIVoFZkF1rrQgILiLafzoSTYBgkqF0oFJrM7H00qYzKsf98"
  );*/

  const getTokensFromStorage = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("Refresh-Token");
    return { accessToken, refreshToken };
  };

  const handleLipaNaMpesaClick = async () => {
    setLoadingMpesa(true);
    if (validateMobileNumber(mobileNumber)) {
      const mpesaData = {
        mobileNumber: mobileNumber,
        billingId: billingId,
      };

      const { accessToken, refreshToken } = getTokensFromStorage();

      try {
        const response = await fetch(
          "https://2835-102-210-244-174.ngrok-free.app/api/payments/makestkpayments/B00001",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
              "Refresh-Token": `Bearer ${refreshToken}`,
            },
            body: JSON.stringify(mpesaData),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to make M-Pesa payment");
        }

        const data = await response.json();
        console.log("Response from M-Pesa backend:", data);
        // Further processing if needed
        navigate("/dashboard");
      } catch (error) {
        console.error("Error making M-Pesa payment:", error.message);
        setPaymentError("Failed to make M-Pesa payment");
      } finally {
        setLoadingMpesa(false);
      }
    } else {
      console.error("Invalid phone number");
    }
  };

  const handleConfirmClick = async () => {
    setLoadingCard(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        throw new Error(error.message);
      }

      const cardData = {
        paymentMethodId: paymentMethod.id,
        billingId: billingId,
      };

      const { accessToken, refreshToken } = getTokensFromStorage();

      const response = await fetch(
        "https://192.168.89.43:5500/api/payments/makecardpayments/B00001",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            "Refresh-Token": `Bearer ${refreshToken}`,
          },
          body: JSON.stringify(cardData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to make card payment");
      }

      const data = await response.json();
      console.log("Response from card payment backend:", data);
      // Further processing if needed
    } catch (error) {
      console.error("Error making card payment:", error.message);
      setPaymentError("Failed to make card payment");
    } finally {
      setLoadingCard(false);
    }
  };

  const validateMobileNumber = (value) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box style={commonStyles.container}>
        <h4 style={{ ...commonStyles.borderedBox, padding: "0.3125rem 8.25rem", textAlign: "center" }}>Pay Via</h4>

        <Box style={{ ...commonStyles.borderedBox, ...{ marginBottom: "0.625rem", marginTop: "0.625rem" } }}>
          <h4 style={{ marginTop: "0", textAlign: "left" }}>Lipa na M-Pesa</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Lipa na M-Pesa image" style={{ width: "7.5rem", height: "auto", marginRight: "1.25rem", marginTop: "0" }} />
            <TextField style={{ flex: "1" }} label="Enter Mobile Number" variant="outlined" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          </div>
          <Button style={commonStyles.sendButton} onClick={handleLipaNaMpesaClick} disabled={!mobileNumber || mobileNumber.length !== 10 || isNaN(mobileNumber) || loadingMpesa}>
            {loadingMpesa ? (<CircularProgress size={24} color="inherit" />) : ("Send")}
          </Button>
          {paymentError && <div>{paymentError}</div>}
        </Box>

        <Box style={{ ...commonStyles.borderedBox, ...{ marginBottom: "1.875rem", marginTop: "1.875rem" } }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4 style={{ marginTop: "0", flex: "1", textAlign: "left" }}>Pay with card</h4>
            <img src={myImage} alt="Card payment image" style={{ width: "5rem", height: "auto", marginLeft: "1.25rem" }} />
          </div>
          <CardElement options={{ style: { base: { fontSize: "16px", marginTop: "1.25rem", color: "#000", "::placeholder": { color: "#aab7c4" }, }, invalid: { color: "#9e2146", }, }, hidePostalCode: true, }} />
          <Button style={commonStyles.confirmButton} onClick={handleConfirmClick} disabled={loadingCard}>
            {loadingCard ? (<CircularProgress size={24} color="inherit" />) : ("Confirm")}
          </Button>
          
        </Box>
      </Box>
    </ThemeProvider>
  );
};

PaymentsMode.propTypes = {
  billingId: PropTypes.string,
};

export default PaymentsMode;
