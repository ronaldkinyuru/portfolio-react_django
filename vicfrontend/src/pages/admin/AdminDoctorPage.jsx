// src/App.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import { Box } from '@mui/material';
import Doctors from '../../components/Admin/AdminDoctor';

function DoctorsPage() {
  return (
    
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: '0 0 240px', overflowY: 'auto' }}>
          <AdminSidebar />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <Doctors />
        </Box>
      </Box>
    
  );
}

export default DoctorsPage;
