import React, { useState, useEffect } from "react";
import {
	Button,
	TextField,
	Card,
	CardContent,
	Modal,
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import confirmIcon from "../../assets/paymentStatus.png";
import togetherIcon from "../../assets/together.jpeg";
import PaymentsMode from "./PaymentsMode";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentDetails = () => {
	const [serviceCharge, setServiceCharge] = useState(0);
	const [referenceCode, setReferenceCode] = useState("");
	const [serviceType, setServiceType] = useState("");
	const [payBill, setPayBill] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [billingId, setBillingId] = useState("");
	const [openPopup, setOpenPopup] = useState(false);
	const [isBookingAppointment, setIsBookingAppointment] = useState(false);

	const navigate = useNavigate();

	const theme = responsiveFontSizes(
		createTheme({
			palette: {
				primary: {
					main: "#c00100",
				},
			},
		})
	);

	const stripePromise = loadStripe("your_stripe_public_key_here");

	const fetchBillingDetails = async () => {
		try {
			const response = await fetch("backend_api_endpoint_here");
			const data = await response.json();
			setServiceCharge(data.charge);
			setBillingId(data.billingId);
			setServiceType(data.serviceType); // Fetch and set service type
			setPayBill(data.payBill);
			setAccountNumber(data.accountNumber);
		} catch (error) {
			console.error("Error fetching billing details:", error);
		}
	};

	const sendVerificationCode = async () => {
		try {
			const response = await fetch("backend_verification_endpoint_here", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ code: referenceCode }),
			});
			if (response.ok) {
				console.log("Verification code sent successfully");
				toast.success("Verification code sent successfully");
				handleTransactionComplete();
			} else {
				console.error("Error sending verification code");
				toast.error("Error sending verification code");
			}
		} catch (error) {
			console.error("Error sending verification code:", error);
			toast.error("Error sending verification code");
		}
	};

	const handleTransactionComplete = () => {
		console.log("Transaction completed with reference code:", referenceCode);
		setOpenPopup(true);
		setIsBookingAppointment(serviceType === "Appointment"); // Set booking appointment state based on service type
	};

	const handleClosePopup = (shouldNavigate) => {
		setOpenPopup(false);
		if (shouldNavigate) {
			if (isBookingAppointment) {
				navigate("/appointment-status");
			} else {
				// No navigation needed for pharmacy payments
			}
		}
	};

	const downloadReceipt = () => {
		// Add logic to download the receipt
		console.log("Downloading receipt...");
	};

	useEffect(() => {
		fetchBillingDetails();
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					marginRight: "3.125rem", // 50px
				}}
			>
				<ToastContainer />

				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
					}}
				>
					<Card
						style={{
							backgroundColor: "#D9D9D9",
							borderRadius: "1.875rem", // 30px
							padding: "1.25rem", // 20px
							width: "18.75rem", // 300px
							textAlign: "center",
						}}
					>
						<CardContent>
							<h4
								style={{
									fontWeight: "bold",
									fontSize: "clamp(0.875rem, 3vw, 1.125rem)", // 14px, 3vw, 18px
									borderBottom: "1px solid #c00100",
									margin: "0 0 1.25rem", // 0 0 20px
								}}
							>
								Billing Information
							</h4>
							<h5>Services: {serviceType}</h5>
							<h5
								style={{
									fontSize: "clamp(0.625rem, 2vw, 0.75rem)", // 10px, 2vw, 12px
									fontWeight: "bold",
								}}
							>
								Amount : {serviceCharge}
							</h5>
							<h5
								style={{
									fontSize: "clamp(0.625rem, 2vw, 0.75rem)", // 10px, 2vw, 12px
									fontWeight: "bold",
								}}
							>
								Paybill : {payBill}
							</h5>
							<h5
								style={{
									fontSize: "clamp(0.625rem, 2vw, 0.75rem)", // 10px, 2vw, 12px
									fontWeight: "bold",
								}}
							>
								Acc. Number : {accountNumber}
							</h5>
							{/* Display billing ID */}
							<h5
								style={{
									fontSize: "clamp(0.625rem, 2vw, 0.75rem)", // 10px, 2vw, 12px
									fontWeight: "bold",
								}}
							>
								Billing ID : {billingId}
							</h5>
							<TextField
								style={{
									width: "100%",
									padding: "0.3125rem 0", // 5px 0
									color: "#c00100",
									borderRadius: "1.875rem", // 15px
									marginBottom: "0.625rem", // 10px
								}}
								label="Enter Reference Code"
								value={referenceCode}
								onChange={(e) => setReferenceCode(e.target.value)}
							/>
							<Button
								style={{
									backgroundColor: "#c00100",
									color: "white",
									fontSize: "clamp(0.625rem, 2vw, 0.75rem)", // 10px, 2vw, 12px
									width: "100%",
									height: "2.5rem", // 40px
									marginTop: "0.625rem", // 10px
								}}
								onClick={sendVerificationCode}
							>
								Complete Transaction
							</Button>
						</CardContent>
					</Card>
				</div>
				<Modal
					open={openPopup}
					onClose={() => handleClosePopup(false)}
					aria-labelledby="transaction-successful"
					aria-describedby="transaction-successful-description"
				>
					<div
						style={{
							position: "absolute",
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							backgroundColor: "white",
							borderRadius: "1.875rem", // 30px
							padding: "1.25rem", // 20px
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							width: "18.75rem", // 300px
							textAlign: "center",
						}}
					>
						<img
							src={confirmIcon}
							alt="checkmark"
							style={{ width: "4.6875rem", height: "6.25rem" }} // 75px, 100px
						/>
						<h3>Transaction successful!</h3>
						<h3>Thank you for choosing Equityafya</h3>
						<img
							src={togetherIcon}
							alt="Handshake image"
							style={{ width: "4.6875rem", height: "4.6875rem" }} // 75px, 75px
						/>
						{isBookingAppointment ? (
							<Button
								onClick={() => handleClosePopup(true)}
								style={{
									backgroundColor: "#c00100",
									color: "#ffffff",
									marginBottom: "0.625rem", // 10px
									marginTop: "0.625rem", // 10px
								}}
							>
								Check Appointment Status
							</Button>
						) : (
							<>
								<Button
									onClick={downloadReceipt}
									style={{
										backgroundColor: "#c00100",
										color: "#ffffff",
										marginBottom: "0.625rem", // 10px
										marginTop: "0.625rem", // 10px
									}}
								>
									Download Receipt
								</Button>
								<Button
									onClick={() => handleClosePopup(false)}
									style={{
										backgroundColor: "#c00100",
										color: "#ffffff",
										width: "4.6875rem", // 75px
										height: "2.1875rem", // 35px
									}}
								>
									Close
								</Button>
							</>
						)}
					</div>
				</Modal>
				<Elements stripe={stripePromise}>
					<PaymentsMode billingId={billingId} />
				</Elements>
			</div>
		</ThemeProvider>
	);
}

export default PaymentDetails;
