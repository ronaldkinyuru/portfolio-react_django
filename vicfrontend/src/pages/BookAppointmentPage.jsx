import React from 'react'
import { Box } from '@mui/system';
import Sidebar from '../components/SideBar/SideBar'
import BookAppointment from '../components/Appointments/BookAppointment';



const BookAppointmentPage = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ marginTop: '20px', overflowY: 'auto', height: 'calc(100vh - 48px)', position: 'relative', marginLeft: '5px'}}>
        <BookAppointment />
      </Box>
    </Box>
  );
}

export default BookAppointmentPage
