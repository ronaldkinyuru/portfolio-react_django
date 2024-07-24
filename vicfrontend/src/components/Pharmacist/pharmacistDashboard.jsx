import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const colors = [
    "#FFCDD2", // Light Red
    "#F8BBD0", // Light Pink
    "#E1BEE7", // Light Purple
    "#D1C4E9", // Light Deep Purple
    "#C5CAE9", // Light Indigo
    "#BBDEFB", // Light Blue
    "#B3E5FC", // Light Light Blue
    "#B2EBF2", // Light Cyan
    "#B2DFDB", // Light Teal
    "#C8E6C9", // Light Green
];

function PharmacistDashboard({ sidebarItems, onCardClick }) {
    return (
        <div style={{ backgroundColor: "#F5F5F5", minHeight: "100vh", padding: "20px" }}>
            <Grid container spacing={3}>
                {sidebarItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            component="button" // Render Card as a button
                            style={{
                                width: "100%",
                                height: "100%",
                                backgroundColor: colors[index % colors.length],
                                color: "#000",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "20px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                transition: "transform 0.2s, box-shadow 0.2s",
                            }}
                            onClick={() => onCardClick(item.route)} // Call onCardClick with the route on click
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "scale(1.05)";
                                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.2)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
                            }}
                        >
                            <CardContent>
                                <Typography variant="h5" component="div" align="center" style={{ fontWeight: "bold" }}>
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default PharmacistDashboard;
