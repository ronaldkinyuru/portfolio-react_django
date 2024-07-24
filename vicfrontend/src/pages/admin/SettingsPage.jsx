import React from 'react'
import { Box } from '@mui/system';
import Settings from '../../components/Admin/settings'
import AdminSidebar from '../../components/Admin/AdminSidebar'

function SettingsPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    <Box sx={{ flex: '0 0 250px', overflowY: 'auto' }}>
      <AdminSidebar />
    </Box>
    <Box sx={{ flex: 1, overflowY: 'auto' }}>
      <Settings />
    </Box>
  </Box>
  )
}

export default SettingsPage;