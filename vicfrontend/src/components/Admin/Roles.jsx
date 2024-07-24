// src/Roles.jsx
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Roles = () => {
  return (
    <Box sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#FFFFFF' }}>
      <Typography variant="h5" gutterBottom>
        Create A New Role
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '300px' }}>
        <TextField label="Role Name" variant="outlined" fullWidth />
        <TextField label="Role Type" variant="outlined" fullWidth />
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#9C0D0D' }}>
          Create
        </Button>
      </Box>
    </Box>
  );
};

export default Roles;
