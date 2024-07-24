// src/App.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import Reports from '../../components/Admin/AdminReports';
import { Box } from '@mui/material';

function ReportsPage() {
  return (
    
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: '0 0 240px', overflowY: 'auto' }}>
          <AdminSidebar />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <Reports />
        </Box>
      </Box>
    
  );
}

export default ReportsPage;
