import React from 'react'
import Sidebar from '../components/E-Pharmacy/EpharmacySideBar/EpharmacySidebar'
import { Box } from '@mui/material'
import Prescriptions from '../components/E-Pharmacy/Prescriptions/Prescriptions'

function PrescriptionsPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    {/* EpharmacySidebar on the left with margin-right */}
    <Sidebar sx={{display: 'flex', flexDirection: 'column', flex: '0 auto', marginRight: '32px'}} /> {/* Increase margin-right to create a larger gap */}

    <Box sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '10px', marginLeft: '32px'}}>
      <Prescriptions />
    </Box>
</Box>
  )
}

export default PrescriptionsPage

