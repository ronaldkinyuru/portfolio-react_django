import { Card, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

function AppointmentStatus() {
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleClose = () => {
    navigate("/dashboard"); // Navigate to the dashboard page
  };

  return (
    <Card
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        marginTop: "10px",
        backgroundColor: "#d9d9d9",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Appointment Status</h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#c00100",
                color: "white",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#c08000",
                color: "white",
              }}
            >
              Service
            </th>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#009688",
                color: "white",
              }}
            >
              Booking Date
            </th>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#6200ea",
                color: "white",
              }}
            >
              Physical/Virtual
            </th>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#3f51b5",
                color: "white",
              }}
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Add more rows with unique background colors */}
          <tr style={{ backgroundColor: "#f9f9f9" }}>
            <td style={{ padding: "10px" }}>Jane Doe</td>
            <td style={{ padding: "10px" }}>Checkup</td>
            <td style={{ padding: "10px" }}>2024-03-21</td>
            <td style={{ padding: "10px" }}>Physical</td>
            <td style={{ padding: "10px" }}>Pending</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      {/* Close button */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px" }}
        onClick={handleClose} // Call handleClose function on button click
      >
        Close
      </Button>
    </Card>
  );
}

export default AppointmentStatus;
