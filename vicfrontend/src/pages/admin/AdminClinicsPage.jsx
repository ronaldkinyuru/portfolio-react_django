// src/App.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import Clinics from '../../components/Admin/AdminClinics';
import { Box } from '@mui/material';

function ClinicsPage() {
  return (
    
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: '0 0 240px', overflowY: 'auto' }}>
          <AdminSidebar />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <Clinics />
        </Box>
      </Box>
    
  );
}

export default ClinicsPage;
