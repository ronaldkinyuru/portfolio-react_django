import React from 'react'
import AdminServiceManagement from '../../components/Admin/AdminServiceManagement'
import { Box } from '@mui/material'
import AdminSidebar from '../../components/Admin/AdminSidebar'

function AdminServicesPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }} >
    <AdminSidebar sx={{display: 'flex', flexDirection: 'column', flex: '0 auto', marginRight: '32px'}}/>
      <Box sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '10px', marginLeft: '32px'}}>
      <AdminServiceManagement/>
  </Box>
    </Box>
  )
}

export default AdminServicesPage
