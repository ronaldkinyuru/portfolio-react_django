import React from 'react';
import Sidebar from "../components/SideBar/SideBar";
//import SearchBar from "../components/SearchBar/SearchBar";
import { Box } from '@mui/material';
import ModernLabForm from '../components/ModernLaboratory/ModernLabForm';


function ModernLabPage() {
    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
          {/* Sidebar on the left with margin-right */}
          <Sidebar sx={{ marginRight: '32px' }} /> {/* Increase margin-right to create a larger gap */}
    
          {/* Search bar and Medical services content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1 }}>
            {/* Search bar */}
           <ModernLabForm />
    
            {/* Medical services content with margin-left */}
            <Box sx={{ marginTop: '48px', overflowY: 'auto', height: 'calc(100vh - 48px)', position: 'relative', marginLeft: '32px' }}> {/* Increase marginLeft to create a larger gap */}
              {/* Medical services content goes here */}
            </Box>
          </Box>
        </Box>
      );
    };

export default ModernLabPage
