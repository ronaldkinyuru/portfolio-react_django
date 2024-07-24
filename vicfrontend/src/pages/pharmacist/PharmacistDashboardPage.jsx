import React, { useState } from 'react';
import PharmacistDashboard from '../../components/Pharmacist/pharmacistDashboard';
import PharmacistSidebar from '../../components/Pharmacist/PharmacistSidebar';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';

function PharmacistDashboardPage() {
    const [brightnessMode, setBrightnessMode] = useState(false);
    const [fullscreenMode, setFullscreenMode] = useState(false);
    const navigate = useNavigate(); // Hook to navigate to different routes

    const toggleBrightnessMode = () => {
        setBrightnessMode(!brightnessMode);
    };

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setFullscreenMode(!fullscreenMode);
    };

    const sidebarItems = [
        { text: "Prescription Uploads", route: "/prescription-uploads" },
        { text: "Dispatches", route: "/dispatches" },
        { text: "Contact Info", route: "/contact-info" },
        { text: "Drug Inventory", route: "/drug-inventory" }
    ];

    const handleCardClick = (route) => {
        navigate(route); // Navigate to the specified route
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ width: 240 }}>
                <PharmacistSidebar
                    brightnessMode={brightnessMode}
                    fullscreenMode={fullscreenMode}
                    toggleBrightnessMode={toggleBrightnessMode}
                    toggleFullscreen={toggleFullscreen}
                />
            </Box>
            <Box sx={{ flexGrow: 1, padding: 3 }}>
                <PharmacistDashboard sidebarItems={sidebarItems} onCardClick={handleCardClick} />
            </Box>
        </Box>
    );
}

export default PharmacistDashboardPage;
