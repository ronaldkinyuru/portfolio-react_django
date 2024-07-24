import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, CssBaseline, IconButton } from "@mui/material";
import { Dashboard, UploadFile, LocalShipping, ContactMail, Inventory2, Fullscreen, FullscreenExit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledListItem = styled(ListItem)`
  && {
    padding-top: ${({ theme }) => theme.paddingTop};
  }
`;

const SidebarContainer = styled.div`
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
`;

const PharmacistSidebar = ({ brightnessMode, fullscreenMode, toggleBrightnessMode, toggleFullscreen }) => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        if (route === '/light-mode') {
            toggleBrightnessMode();
        } else {
            navigate(route);
        }
    };

    const sidebarItems = [
        { text: "Dashboard", icon: <Dashboard />, route: "/pharmacist-dashboard" },
        { text: "Prescription Uploads", icon: <UploadFile />, route: "/prescription-uploads" },
        { text: "Dispatches", icon: <LocalShipping />, route: "/dispatches" },
        { text: "Contact Info", icon: <ContactMail />, route: "/contact-info" },
        { text: "Drug Inventory", icon: <Inventory2 />, route: "/drug-inventory" }
    ];

    return (
        <>
            <CssBaseline />
            <SidebarContainer>
                <List
                    sx={{
                        width: 240,
                        height: "100%",
                        backgroundColor: brightnessMode ? "#FFFFFF" : "#7B0100",
                        color: brightnessMode ? "#000000" : "white",
                        paddingTop: 0,
                    }}
                >
                    {sidebarItems.map((item, index) => (
                        <StyledListItem button key={index} onClick={() => handleNavigation(item.route)}>
                            <ListItemIcon sx={{ color: brightnessMode ? "#000000" : "white", marginRight: -3 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                            {item.text === "Dashboard" && (
                                <IconButton
                                    onClick={toggleFullscreen}
                                    sx={{ color: brightnessMode ? "#000000" : "white" }}
                                >
                                    {fullscreenMode ? <FullscreenExit /> : <Fullscreen />}
                                </IconButton>
                            )}
                        </StyledListItem>
                    ))}
                </List>
            </SidebarContainer>
        </>
    );
};

export default PharmacistSidebar;
