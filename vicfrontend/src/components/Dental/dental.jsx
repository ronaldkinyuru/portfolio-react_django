import React from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, MenuItem } from '@mui/material';

const DentalCard = () => {
  // Define myImage variable with the path to your image
  const myImage = 'path_to_your_image.jpg'; 

  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '500px',
          height: '600px',
          overflowY: 'auto', // Add scrollbar if content exceeds height
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          outline: '1px solid #c00100',
        }}
      >
        <CardContent>
          <Typography variant="h3" gutterBottom>Dental</Typography>
          <br/>
          <Typography variant="h5" gutterBottom>Select Facility</Typography>
          <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <TextField
            select
            label='Facility'
            variant="outlined"
            style={{width: '75%', marginBottom: '40px',}}
            defaultValue=''
               // Increase space between elements
          >
            <MenuItem value="facility1">Facility 1</MenuItem>
            <MenuItem value="facility2">Facility 2</MenuItem>
            <MenuItem value="facility3">Facility 3</MenuItem>
          </TextField>
          <img
            src={myImage}
            alt="Dental Image"
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              marginBottom: '20px', // Increase space between elements
            }}
          />
          </Box>
          <Button
            variant="contained"
            style={{
              backgroundColor: '#c00100',
              color: 'white',
              marginTop: '10px',
              cursor: 'pointer',
            }}
          >
            Book Appointment {/* Placeholder for button content */}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DentalCard;
