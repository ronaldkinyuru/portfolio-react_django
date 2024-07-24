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
 ShoppingCart,
 BarChart,
 Store,
 LocalPharmacy,
 ShoppingBag,
 Receipt,
 Brightness4,
 Brightness7,
 Fullscreen,
 FullscreenExit,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function EpharmacySidebar() {
 const navigate = useNavigate();
 const [brightnessMode, setBrightnessMode] = useState(false);
 const [fullscreenMode, setFullscreenMode] = useState(false);

 const handleNavigation = (route) => {
    navigate(route);
 };

 const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setFullscreenMode(!fullscreenMode);
 };

 return (
    <>
      <CssBaseline />
      <List
        sx={{
          width: 240,
          height: "100%",
          backgroundColor: "#800000",
          color: "#FFFFFF",
          paddingTop: 0,
        }}
      >
        <ListItem button onClick={() => handleNavigation("/dashboard")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/products")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <ShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/cart")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <ShoppingBag />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/payments")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <Store />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/my-orders")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="My Orders" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/prescriptions")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <LocalPharmacy />
          </ListItemIcon>
          <ListItemText primary="Prescriptions" />
        </ListItem>
        <ListItem button onClick={() => handleNavigation("/delivery-info")}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            <LocalPharmacy />
          </ListItemIcon>
          <ListItemText primary="Delivery Information" />
        </ListItem>
        <ListItem button sx={{ paddingTop: 20 }} onClick={() => setBrightnessMode(!brightnessMode)}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            {brightnessMode ? <Brightness7 /> : <Brightness4 />}
          </ListItemIcon>
          <ListItemText primary="Light Mode" />
        </ListItem>
        <ListItem button onClick={toggleFullscreen}>
          <ListItemIcon sx={{ color: "#FFFFFF", marginRight: -3 }}>
            {fullscreenMode ? <FullscreenExit /> : <Fullscreen />}
          </ListItemIcon>
          <ListItemText primary="Fullscreen" />
        </ListItem>
      </List>
    </>
 );
}

export default EpharmacySidebar;

