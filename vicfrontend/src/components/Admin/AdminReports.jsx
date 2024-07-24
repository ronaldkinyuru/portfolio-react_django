// src/Reports.jsx
import React from 'react';
import { Box, TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { KeyboardArrowUp, KeyboardArrowDown, Add } from '@mui/icons-material';

const bookings = [
  { name: "Emmanuel Cheruiyot", email: "emmanuel.cheruiyot@gmail.com", location: "Kisumu", phone: "0705811122", date: "12/04/2024" },
  // Add more sample data as needed
];

const Reports = () => {
  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Typography variant="h5" gutterBottom>
        Reports
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextField label="Search customer" variant="outlined" sx={{ width: '300px' }} />
        <Box>
        <IconButton color="primary" aria-label="Import">
             <KeyboardArrowDown fontSize="small" />
             <Typography variant="caption">Import</Typography>
        </IconButton>
        <IconButton color="primary" aria-label="Export">
         <KeyboardArrowUp fontSize="small" />
             <Typography variant="caption">Export</Typography>
        </IconButton>
          <Button variant="contained" color="primary" sx={{ marginLeft: 2 }}>
            Add Customers <Add />
          </Button>        
        </Box>
          </Box>
          <Typography variant="h6" gutterBottom>
        Latest Bookings
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Registration Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.map((booking, index) => (
              <TableRow key={index}>
                <TableCell>{booking.name}</TableCell>
                <TableCell>{booking.email}</TableCell>
                <TableCell>{booking.location}</TableCell>
                <TableCell>{booking.phone}</TableCell>
                <TableCell>{booking.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Reports;
