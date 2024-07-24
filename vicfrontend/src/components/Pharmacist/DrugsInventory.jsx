import React, { useEffect, useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const PrescriptionInventory = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const response = await fetch('http://192.168.91.25:5500/api/prescription/view-all-prescriptions');
                const data = await response.json();
                setPrescriptions(data); // Assuming data is an array of prescription objects
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchPrescriptions();
    }, []);

    return (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Prescription Inventory
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Prescription ID</TableCell>
                            <TableCell>Patient Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Upload Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {prescriptions.map((prescription) => (
                            <TableRow key={prescription.prescriptionId}>
                                <TableCell>{prescription.prescriptionId}</TableCell>
                                <TableCell>{prescription.patientName}</TableCell>
                                <TableCell>{prescription.patientEmail}</TableCell>
                                <TableCell>{prescription.uploadDate}</TableCell> {/* Adjust as per your backend response */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default PrescriptionInventory;
