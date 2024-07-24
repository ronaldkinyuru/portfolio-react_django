import React, { useEffect, useState } from 'react';
import { Box, Typography, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { ChevronLeft, ChevronRight, Done } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const PrescriptionGallery = () => {
    const [patients, setPatients] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPatient, setCurrentPatient] = useState(null);

    useEffect(() => {
        const fetchPrescriptions = async () => {
            try {
                const response = await fetch('http://192.168.90.165:5500/api/prescription/view-all-prescriptions');
                const data = await response.json();

                setPatients(data);
            } catch (error) {
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchPrescriptions();
    }, []);

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleImageClick = (patient) => {
        setCurrentPatient(patient);
        setCurrentIndex(0);
        setOpenDialog(true);
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (currentPatient?.images?.length || 0));
    };

    const handlePreviousImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (currentPatient?.images?.length || 0)) % (currentPatient?.images?.length || 0));
    };

    const handleApprove = async () => {
        try {
            if (!currentPatient || currentPatient.prescriptionStatus !== 'Pending') {
                throw new Error('Invalid prescription or status');
            }

            const response = await fetch(`http://192.168.90.165:5500/api/prescription/approve-prescription/${currentPatient.prescriptionId}`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error approving prescription ${currentPatient.prescriptionId}: ${errorData.message}`);
            }

            // Update prescription status locally
            const updatedPatients = patients.map(patient => {
                if (patient.prescriptionId === currentPatient.prescriptionId) {
                    return { ...patient, prescriptionStatus: 'Approved' };
                }
                return patient;
            });
            setPatients(updatedPatients);

            handleDialogClose();
        } catch (error) {
            console.error('Error approving prescription:', error);
            alert(`Failed to approve prescription: ${error.message}`);
        }
    };

    const handleDecline = async () => {
        try {
            if (!currentPatient || currentPatient.prescriptionStatus !== 'Pending') {
                throw new Error('Invalid prescription or status');
            }

            const response = await fetch(`http://192.168.90.165:5500/api/prescription/decline-prescription/${currentPatient.prescriptionId}`, {
                method: 'POST',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error declining prescription ${currentPatient.prescriptionId}: ${errorData.message}`);
            }

            // Update prescription status locally
            const updatedPatients = patients.map(patient => {
                if (patient.prescriptionId === currentPatient.prescriptionId) {
                    return { ...patient, prescriptionStatus: 'Declined' };
                }
                return patient;
            });
            setPatients(updatedPatients);

            handleDialogClose();
        } catch (error) {
            console.error('Error declining prescription:', error);
            alert(`Failed to decline prescription: ${error.message}`);
        }
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Typography variant="h5" gutterBottom>
                Prescription Images
            </Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Prescription ID</TableCell>
                            <TableCell>Patient Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Images</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patients.map((patient) => (
                            <TableRow key={patient.prescriptionId}>
                                <TableCell>{patient.prescriptionId}</TableCell>
                                <TableCell>{patient.patientName}</TableCell>
                                <TableCell>{patient.patientEmail}</TableCell>
                                <TableCell>
                                    <Button variant="outlined" onClick={() => handleImageClick(patient)}>
                                        {patient.images.length} {patient.images.length > 1 ? 'images' : 'image'}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    {patient.prescriptionStatus}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
                <DialogTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">Review Prescription</Typography>
                    <IconButton onClick={handleDialogClose}>
                        <Done />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {currentPatient && (
                        <>
                            <Typography variant="body1">File {currentIndex + 1} of {currentPatient.images.length}</Typography>
                            <img
                                src={currentPatient.images[currentIndex]}
                                alt={`Prescription ${currentIndex + 1}`}
                                style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', margin: '20px 0' }}
                            />
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={handlePreviousImage} disabled={currentPatient?.images.length <= 1}>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton onClick={handleNextImage} disabled={currentPatient?.images.length <= 1}>
                        <ChevronRight />
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApprove}
                        disabled={!currentPatient || currentPatient.prescriptionStatus !== 'Pending'}
                    >
                        Approve
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleDecline}
                        disabled={!currentPatient || currentPatient.prescriptionStatus !== 'Pending'}
                    >
                        Decline
                    </Button>
                </DialogActions>
            </Dialog>
            <Link to="/pharmacist-dashboard">
                <Button variant="contained" color="primary" backgroundColor="maroon">Go back to Dashboard</Button>
            </Link>
        </Box>
    );
};

export default PrescriptionGallery;