import React from 'react';
import { Box } from '@mui/material';
import AdminSidebar from '../../components/Admin/AdminSidebar';
import AdminTopBar from '../../components/Admin/AdminTopBar';
import AdminBarGraph from '../../components/Admin/AdminGraph';
import DevicesTraffic from '../../components/Admin/DeviceTraffic';
import AdminBookings from '../../components/Admin/AdminBookings';

function AdminDashboardPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: "#D9D9D9"}}>
      <AdminSidebar sx={{ flex: '0 0 auto', minWidth: '200px', overflowY: 'auto', height: '100vh' }}/>
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Box sx={{ marginLeft: "20px", overflow: 'auto' }}>
          <AdminTopBar />
        </Box>
        <Box sx={{ display:'flex', overflow: 'auto' }}>
          <Box sx={{ marginTop: '20px', overflow: 'auto' }}>
            <AdminBarGraph/>
          </Box>
          <Box sx={{ marginLeft: '20px', marginTop: '40px', marginRight:'20px', backgroundColor:'#FFFF', borderRadius:'8px', paddingTop:'50px', overflow: 'auto' }}>
            <DevicesTraffic/>
          </Box>
        </Box>
        <Box sx={{ marginTop: "50px", overflow: 'auto' }}>
          {/* <AdminDashboard/> */}
          <AdminBookings/>
        </Box>
      </Box>
    </Box>
  );
}

export default AdminDashboardPage;
