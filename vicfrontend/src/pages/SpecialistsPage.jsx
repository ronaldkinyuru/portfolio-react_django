import React from 'react'
import SpecialistServices from '../components/Specialist/Specialists';
import Sidebar from "../components/SideBar/SideBar";
//import SearchBar from "../components/SearchBar/SearchBar";;
import { Box } from "@mui/material";


function SpecialistsPage() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar on the left with margin-right */}
    <Box sx={{display: 'flex', flexDirection: 'column', flex: '0 0 auto', marginRight: '32px'}}>
      <Sidebar /> 
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', overflowY: 'auto', marginTop: '0px', marginLeft: '0px', marginRight: '0px', width: '100%'}}>
        < SpecialistServices />
    </Box>
      </ Box>
  );
}

export default SpecialistsPage;
