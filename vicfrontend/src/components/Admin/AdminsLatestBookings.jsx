import React, { useState, useEffect } from 'react';
import { Box, IconButton, InputBase, Typography, ThemeProvider, createTheme, MenuItem, Select } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'; // Import Link for navigation

const theme = createTheme({
  palette: {
    primary: {
      main: '#c00100',
    },
  },
});

const AdminsLatestBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalBookings, setTotalBookings] = useState(0);

  // Mock function to fetch bookings from the backend
  const fetchLatestBookings = async () => {
    try {
      // Fetch data from the backend
      const response = await fetch(`your_backend_url/bookings?page=${page}&limit=${rowsPerPage}`);
      const data = await response.json();
      setBookings(data.bookings);
      setTotalBookings(data.total);
    } catch (error) {
      console.error('Error fetching latest bookings:', error);
    }
  };

  useEffect(() => {
    fetchLatestBookings();
  }, [page, rowsPerPage]);

  const handleSearch = () => {
    // Add logic for handling search
    console.log('Search button clicked');
  };

  const handleNotifications = () => {
    // Add logic for handling notifications
    console.log('Notifications button clicked');
  };

  const handleProfile = () => {
    // Add logic for handling profile button
    console.log('Profile button clicked');
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1); // Reset page to 1 when changing rows per page
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25vh 2.08vw' }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: '2.08vw', fontWeight: 'bold' }}>
              LatestBookings
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: '20vw' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '0.104vw solid gray',
                  borderRadius: '0.208vw',
                  padding: '0.156vh 0.625vw',
                  '&:focus-within': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <InputBase placeholder="Search..." sx={{ color: 'primary.main', width: '25vw' }} />
                <IconButton color="primary" onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </Box>
              <IconButton color="primary" onClick={handleNotifications} sx={{ marginLeft: '3vw' }}>
                <NotificationsIcon />
              </IconButton>
              <Link to="/admins-profile"> {/* Use Link for navigation */}
                <IconButton color="primary" onClick={handleProfile} sx={{ marginLeft: '2vw' }}>
                  <AccountCircleIcon />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </header>
        <body>
          <table style={{ width: '80vw' }}>
            <thead style={{ backgroundColor: '#d9d9d9' }}>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>
                <th>Phone</th>
                <th>Registration Date</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.name}</td>
                  <td>{booking.email}</td>
                  <td>{booking.location}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.registrationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '1vh 2.08vw' }}>
            <Box sx={{ marginRight: '2vw' }}>
              <IconButton
                sx={{ backgroundColor: '#c00100', color: 'white', '&:hover': { backgroundColor: '#a30000' } }}
                disabled={page === 1}
                onClick={() => handleChangePage(page - 1)}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                sx={{ backgroundColor: '#c00100', color: 'white', '&:hover': { backgroundColor: '#a30000' } }}
                disabled={page * rowsPerPage >= totalBookings}
                onClick={() => handleChangePage(page + 1)}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
            <Select
              value={rowsPerPage}
              onChange={handleChangeRowsPerPage}
              variant="outlined"
              sx={{ width: '8vw' }}
            >
              <MenuItem value={10}>10 per page</MenuItem>
              <MenuItem value={15}>15 per page</MenuItem>
            </Select>
          </Box>
        </body>
      </div>
    </ThemeProvider>
  );
};

export default AdminsLatestBookings;
