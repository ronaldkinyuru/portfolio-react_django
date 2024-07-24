import React from 'react'
import MyHealthRecords from '../components/MyHealthRecords/MyHealthRecords'
import Sidebar from '../components/SideBar/SideBar'
import { Box } from '@mui/system'

function MyhealthRecordsPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
    {/* Sidebar on the left with margin-right */}
  <Box sx={{display: 'flex', flexDirection: 'column', flex: 'o o auto', marginRight: '32px'}}>
    <Sidebar /> 
  </Box>
  <Box sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '48px', marginLeft: '32px'}}>
      < MyHealthRecords/>
  </Box>
    </ Box>
  )
}

export default MyhealthRecordsPage
