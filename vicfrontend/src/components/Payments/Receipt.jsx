import { Card, CardContent } from "@mui/material";

const Receipt = ({ facilityName, facilityTel, facilityEmail }) => {
  return (
    <Card
      style={{
        width: "35%",
        height: "auto",
        backgroundColor: "#F0EAEA",
        marginLeft: "40%",
      }}
    >
      <CardContent
        style={{
          margin: "5% 5%", // Adjusted margin for minimal space
          padding: "2%", // Adjusted padding for minimal space
          outline: "solid 1px #670909",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{ color: "#670909", margin: "0", marginBottom: "5px" }}>
            {facilityName}
          </h3>
          <p style={{ color: "#670909", margin: "0", marginBottom: "2px" }}>
            TEL: {facilityTel}
          </p>
          <p style={{ color: "#670909", margin: "0", marginBottom: "2px" }}>
            Email: {facilityEmail}
          </p>
          <h3 style={{ margin: "5px 0" }}>PAYMENT RECEIPT</h3>
        </div>
        <div style={{ alignItems: "left" }}>
          <h5 style={{ margin: "5px 0" }}>Name: {""}</h5>
          <h5 style={{ margin: "5px 0" }}>Reg. No.: {""}</h5>
          <h5 style={{ margin: "5px 0" }}>Bill No.: {""}</h5>
          <h5 style={{ margin: "5px 0" }}>Date: {""}</h5>
        </div>
        <div>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #670909", padding: "5px" }}>
                  Service
                </th>
                <th style={{ border: "1px solid #670909", padding: "5px" }}>
                  Description
                </th>
                <th style={{ border: "1px solid #670909", padding: "5px" }}>
                  Qty
                </th>
                <th style={{ border: "1px solid #670909", padding: "5px" }}>
                  Rate
                </th>
                <th style={{ border: "1px solid #670909", padding: "5px" }}>
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{ border: "1px solid #670909", padding: "5px" }}
                  colSpan="4"
                >
                  Bill Amount
                </td>
                <td style={{ border: "1px solid #670909", padding: "5px" }}>
                  {0.0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h5 style={{ margin: "0", marginBottom: "2px" }}>Mode of Payment</h5>
          <h5 style={{ margin: "0", marginBottom: "2px" }}>Amount Received</h5>
        </div>
        <h3 style={{ margin: "10px 0" }}>Amount: 00</h3>
      </CardContent>
    </Card>
  );
};

export default Receipt;
