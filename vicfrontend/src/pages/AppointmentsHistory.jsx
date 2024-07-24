import React from "react";
import Sidebar from "../components/SideBar/SideBar";
import AppointmentHistory from "../components/Appointments/MyAppointments";
import { Box } from "@mui/system";

const AppointmentsHistoryPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar on the left with margin-right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "o o auto",
          marginRight: "32px",
        }}
      >
        <Sidebar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: "1",
          overflowY: "auto",
          marginTop: "48px",
          marginLeft: "32px",
        }}
      >
        <AppointmentHistory />
      </Box>
    </Box>
  );
};

export default AppointmentsHistoryPage;
