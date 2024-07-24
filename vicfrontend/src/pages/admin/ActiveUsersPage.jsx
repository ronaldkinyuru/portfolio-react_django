import React from 'react'
import ActiveUsers from '../../components/Admin/ActiveUsers'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import { Box } from '@mui/system'



const ActiveUsersPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: "#D9D9D9"}}>
        <Box>
        <AdminSidebar sx={{ flex: '0 0 auto', minWidth: '200px', overflowY: 'auto', height: '100vh' }}/>
        </Box>
        <Box>
        <ActiveUsers/>
        </Box>
    </Box>
  )
}

export default ActiveUsersPage
