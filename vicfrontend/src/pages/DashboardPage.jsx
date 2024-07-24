import React from 'react';
import Sidebar from "../components/SideBar/SideBar";
{/*import SearchBar from "../components/SearchBar/SearchBar";*/}

import { Box } from '@mui/material';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar on the left with margin-right */}
      <Sidebar sx={{display: 'flex', flexDirection: 'column', flex: '0 auto', marginRight: '32px'}} /> {/* Increase margin-right to create a larger gap */}

      
        {/* Health services list with margin-left */}
        <Box sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '10px', marginLeft: '32px'}}>
          <Dashboard/>
        </Box>
      </Box>
  
  );
};

export default DashboardPage;
