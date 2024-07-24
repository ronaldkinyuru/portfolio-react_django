import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  IconButton,
} from "@mui/material";
import {
  Dashboard,
  EventNote,
  PeopleAlt,
  History,
  Payment,
  Headset,
  AccountCircle,
  Brightness4,
  Brightness7,
  Logout,
  Fullscreen,
  FullscreenExit,
  LocalPharmacy
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios library for making HTTP requests

function Sidebar() {
  const navigate = useNavigate();
  const [brightnessMode, setBrightnessMode] = useState(false);
  const [fullscreenMode, setFullscreenMode] = useState(false); // Define fullscreen mode state


  // Function to store tokens in localStorage
const storeTokens = (accessToken, refreshToken) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('Refresh-Token', refreshToken);
};

// Function to retrieve access token from localStorage
const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

// Function to retrieve refresh token from localStorage
const getRefreshToken = () => {
  return localStorage.getItem('Refresh-Token');
};

// Function to perform logout
const handleLogout = async () => {
  try {
    const accessToken = getAccessToken(); 
    const refreshToken = getRefreshToken();
    const response = await axios.post(
      'https://b87f-102-210-244-74.ngrok-free.app/api/logout',
      null,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Refresh-Token': `Bearer ${refreshToken}`
        }
      }
    );
    if (response.status === 200) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      navigate('/login');
    } else {
      console.error('Logout failed');
    }
  } catch (error) {
    console.error('Logout failed:', error);
  }
};



  const handleNavigation = (route) => {
    if (route === '/light-mode') {
      setBrightnessMode(!brightnessMode); // Toggle brightness mode
    } else {
      navigate(route);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // If fullscreen is not active, request fullscreen
      document.documentElement.requestFullscreen();
    } else {
      // If fullscreen is active, exit fullscreen
      document.exitFullscreen();
    }
    // Update the state to reflect the change in fullscreen mode
    setFullscreenMode(!fullscreenMode);
  };

  return (
    <>
      <CssBaseline />
      <List
        sx={{
          width: 240,
          height: "100%",
          backgroundColor: brightnessMode ? "#FFFFFF" : "#C00100",
          color: brightnessMode ? "#000000" : "white",
          paddingTop: 0,
        }}
      >
        {/* Main Menu Items */}
        <ListItem button onClick={() => handleNavigation("/dashboard")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          <IconButton
              onClick={toggleFullscreen}
              sx={{ color: brightnessMode ? "#000000" : "white" }}
            >
              {fullscreenMode ? <FullscreenExit /> : <Fullscreen />}
            </IconButton>
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/appointments-history")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <EventNote />
          </ListItemIcon>
          <ListItemText primary="My Appointments" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/specialists")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <PeopleAlt />
          </ListItemIcon>
          <ListItemText primary="Specialists" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/health-records")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <History />
          </ListItemIcon>
          <ListItemText primary="My History" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/payments")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <Payment />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/customer-care")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <Headset />
          </ListItemIcon>
          <ListItemText primary="Customer Care" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/my-account")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/e-pharmacy")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            <LocalPharmacy />
          </ListItemIcon>
          <ListItemText primary="E-Pharmacy" />
        </ListItem>
        {/* Additional Items */}
        <ListItem button sx={{ paddingTop: 15 }} onClick={() => handleNavigation("/light-mode")}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
            {brightnessMode ? <Brightness7 /> : <Brightness4 />}
          </ListItemIcon>
          <ListItemText primary="Light Mode" />
        </ListItem>
        <ListItem button onClick={handleLogout}>
          <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3,paddingBottom:'0px' }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </>
  );
}

export default Sidebar;
