import React, { useState, useEffect } from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@mui/material';
import api from '../../services/api'; // Assuming you have an API service
import CreateUsers from './UserRegistration';

const ActiveUsers = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openRegistration, setOpenRegistration] = useState(false); // Initialize as false

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Assuming you have a function in your API service to fetch data
        const data = await api.fetchData();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleAddUserClick = () => {
    setOpenRegistration(true); // Open the registration form popup
  };

  // Adding event listeners to all buttons
  useEffect(() => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        console.log(`${button.textContent} button clicked`);
      });
    });

    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', (event) => {
          console.log(`${button.textContent} button clicked`);
        });
      });
    };
  }, []);

  return (
    <Box sx={{marginTop: '3.7vh'}}>
      {openRegistration ? (
        <CreateUsers />
      ) : (
        <Box sx={{marginLeft: '2.08vw'}}>
          <Box sx={{marginRight: '2.08vw'}}>
            <Typography sx={{ fontWeight: 'bold' }}>USERS</Typography>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box>
              <InputLabel htmlFor="role-select">Filter By Role</InputLabel>
              <Select
                value={selectedRole}
                onChange={handleRoleChange}
                label="Filter By"
                placeholder="Role"
                id="role-select"
                fullWidth
                variant="outlined"
                sx={{ mb: 2, width: '15.6vw' }}
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="CHP">CHP</MenuItem>
              </Select>
            </Box>
            <Box sx={{marginLeft: '26vw'}}>
              <Button color='primary' sx={{backgroundColor: '#930100', color: 'white'}}>
                Export Data
              </Button>
            </Box>
            <Box sx={{marginLeft: '1.04vw'}}>
              <Button onClick={handleAddUserClick} color='primary' sx={{backgroundColor: '#930100', color: 'white'}}>
                Add User
              </Button>
            </Box>
          </Box>
        
          <Container maxWidth="md" sx={{marginRight: '3.12vw'}}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
              ACTIVE USERS
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Registration Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        <CircularProgress />
                      </TableCell>
                    </TableRow>
                  ) : formData.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No data available
                      </TableCell>
                    </TableRow>
                  ) : (
                    formData.map((data) => (
                      <TableRow key={data.name}>
                        <TableCell>{data.name}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>{data.role}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>{data.registrationDate}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default ActiveUsers;

