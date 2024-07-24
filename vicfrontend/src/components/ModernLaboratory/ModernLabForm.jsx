import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

function ModernLabForm() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleMedicalServicesClick = () => {
    navigate('/medical-services'); // Navigate to the medical-services page
  };

  const handleBookAppointmentClick = () => {
    navigate('/book-appointment'); // Navigate to the book-appointment page
  };

  return (
    <Box sx={{ bgcolor: '#FCF4F4', width: '850px', marginLeft: '30px', marginTop: '20px', borderRadius: '20px', height: '1000vh' }}>
      <Box>
        <IconButton sx={{ transform: 'rotate(90deg)', marginLeft: '70px', height: '40px' }} onClick={handleMedicalServicesClick}>
          <ArrowDropDownIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <img
         src='/src/assets/equity-afia.jpg'
          alt="Modern Lab"
          style={{ marginLeft: '200px', marginTop: '40px', height: '70px', backgroundColor: '#FCF4F4', borderRadius: '10px' }}
        />
      </Box>
      <h4 style={{ marginLeft: '70px', color:'#C00000' }}>Modern Laboratory</h4>
      <Box sx={{ marginLeft: '70px', border: '1px solid #000', borderRadius: '20px', textAlign: 'center', marginRight: '70px' }}>
       <br/><br/>
        Our laboratory is equipped with modern equipment
        and is operated by experienced and efficient laboratory
        technologists. Equity Afia has developed and implemented
        a comprehensive quality assurance program that address
        all aspects of specimen testing including; requisition,
        patient identification/preparation, sample collection and storage,
        processing, validation and interpretation of patient test results
        and regular internal audits. Our process assures staff and patients
        that laboratory test results are reliable, reproducible and relevant.
        <br/><br/><br/>
      </Box>
      <Button sx={{ marginLeft: '350px', marginTop: '50px', backgroundColor: '#C00000', textTransform: 'none', color: 'white' }} onClick={handleBookAppointmentClick}>Book Appointment</Button>
      <p style={{ marginLeft: '290px', marginTop: '50px', textTransform: 'none', color: '#C00000', fontWeight: 'bold' }}>Quality, Affordable healthcare for all</p>
    </Box>
  );
}

export default ModernLabForm;
