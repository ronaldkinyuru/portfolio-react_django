import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Home,
  Person,
  ListAlt,
  Done,
  Notifications,
  ContactSupport,
  Brightness4,
  ExitToApp,
} from "@mui/icons-material";
import logo from "../../assets/equityafia_logo.png";

const DoctorsSideBar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        width: "17vw",
        minHeight: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        background: darkMode ? "#7b0100" : "#fff",
        color: darkMode ? "#fff" : "#c00100",
        zIndex: 1000,
        outline: "1px solid #c00100",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          padding: "2vh 0",
        }}
      >
        <img
          src={logo}
          alt="EquityAfia Logo"
          style={{ width: "40%", marginRight: "2vw" }}
        />
        <h2 style={{ margin: 0 }}>Teleafya</h2>
      </div>

      <List>
        <Divider />
        <ListItem
          button
          component={Link}
          to="/doctors-dashboard"
          style={{
            backgroundColor:
              location.pathname === "/doctors-dashboard"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <Home color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/doctors-profile"
          style={{
            backgroundColor:
              location.pathname === "/doctors-profile"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <Person color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/reviewed-patients"
          style={{
            backgroundColor:
              location.pathname === "/reviewed-patients"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <ListAlt color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Reviewed Patients" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/approved-bookings"
          style={{
            backgroundColor:
              location.pathname === "/approved-bookings"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <Done color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Approved Bookings" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/pending-bookings"
          style={{
            backgroundColor:
              location.pathname === "/pending-bookings"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <Notifications color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Pending Bookings" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/doctors-customer-care"
          style={{
            backgroundColor:
              location.pathname === "/doctors-customer-care"
                ? "#670909"
                : "transparent",
          }}
        >
          <ListItemIcon>
            <ContactSupport color={darkMode ? "white" : "black"} />
          </ListItemIcon>
          <ListItemText primary="Customer Care" />
        </ListItem>
      </List>
      <Divider />

      <div style={{ marginTop: "auto", color: darkMode ? "#fff" : "#333" }}>
        <List>
          <ListItem button onClick={toggleTheme}>
            <ListItemIcon>
              <Brightness4 color={darkMode ? "white" : "black"} />
            </ListItemIcon>
            <ListItemText primary={darkMode ? "Light Mode" : "Dark Mode"} />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExitToApp color={darkMode ? "white" : "black"} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default DoctorsSideBar;
