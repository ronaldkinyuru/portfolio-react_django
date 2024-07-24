// src/App.jsx
import React from 'react';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import Roles from '../../components/Admin/Roles';
import { Box } from '@mui/material';

function RolesPage() {
  return (
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Box sx={{ flex: '0 0 250px', overflowY: 'auto' }}>
          <AdminSidebar />
        </Box>
        <Box sx={{ flex: 1, overflowY: 'auto' }}>
          <Roles />
        </Box>
      </Box>
   
  );
}

export default RolesPage;
