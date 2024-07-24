import React, { useState, useEffect } from 'react';
import AvatarWithProfileDetails from '../Profile/ProfileDetails';
import { List, Box, Typography, Button, IconButton, Avatar } from '@mui/material';
import { ArrowForward, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

const Notification = ({ message }) => {
  return <div>{message}</div>;
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  const serviceRequestsData = [
    { name: "Medical services", requests: 65 },
    { name: "Specialists", requests: 59 },
    { name: "Appointments", requests: 81 },
    { name: "Teleclinics", requests: 56 },
    { name: "Other services", requests: 40 },
  ];

  const healthServices = [
    {
      name: "Medical services",
      photo: "src/assets/medical_services_photo.jpg",
      route: "/medical-services",
    },
    {
      name: "Specialists",
      photo: "src/assets/specialists_photo.jpg",
      route: "/specialists",
    },
    {
      name: "My health Records",
      photo: "src/assets/health_records_photo.jpg",
      route: "/health-records",
    },
    {
      name: "My appointments",
      photo: "src/assets/appointments_photo.jpg",
      route: "/appointments",
    },
    {
      name: "Teleclinics",
      photo: "src/assets/teleclinics_photo.jpg",
      route: "/teleclinics",
    },
    {
      name: "Payments",
      photo: "src/assets/payments_photo.jpg",
      route: "/payments",
    },
    {
      name: "Customer care",
      photo: "src/assets/customer_care_photo.jpg",
      route: "/customer-care",
    },
    {
      name: "Other services",
      photo: "src/assets/other_services_photo.jpg",
      route: "/other-services",
    },
  ];

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("/api/notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  const handleSearch = () => {
    const filtered = healthServices.filter((service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1px solid #ccc' }}>
      <Box style={{ position: 'sticky', top: '0', backgroundColor: '#ffffff', zIndex: '999', padding: '10px', marginBottom: '30px', width: '100%', margin: '0 auto', maxWidth: '1500px', border: '1px solid #ccc', borderRadius: '0px' }}>
        <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ height: '40px', borderRadius: '5px', border: '1px solid #ccc', marginRight: '10px', width: '537px' }}
            />
            <Button variant="contained" sx={{ height: '40px', backgroundColor: '#C00100', marginRight: '40px' }} onClick={handleSearch}>Search</Button>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton size="small" sx={{ color: '#C00100', marginRight: '20px', marginLeft: '100px' }}>
              <Notifications />
            </IconButton>
            <AvatarWithProfileDetails />
          </Box>
        </Box>

        <Box style={{ marginBottom: '30px', width: '100%', margin: '0 auto', border: '1px solid #ccc', borderRadius: '0px', marginTop: '20px', maxWidth: '1500px' }}>
          <LineChart
            width={1000}
            height={250}
            data={serviceRequestsData}
            margin={{ top: 5, right: 70, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" label={{ value: 'Month', position: 'insideBottom', dy: 30, color: 'blue' }} />
            <YAxis />
            <Tooltip />
            <Legend align="left" verticalAlign="middle" layout="vertical" />
            <Line type="monotone" dataKey="requests" stroke="#8884d8" />
          </LineChart>
        </Box>

        <List sx={{ display: 'flex', flexWrap: 'wrap', gap: '40px', padding: 0, marginTop: '10px', border: '1px solid #ccc', borderRadius: '0px', width: '100%', maxWidth: '1500px' }}>
          {(filteredServices.length > 3 ? filteredServices : healthServices).map((service, index) => (
            <Box
              key={index}
              sx={{
                position: 'relative',
                width: '280px',
                height: '200px',
                borderRadius: '0px',
                overflow: 'hidden',
                textAlign: 'center',
                marginTop: '10px',
                border: '1px solid #ccc',
              }}
            >
              <img src={service.photo} alt={service.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', color: 'white', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))', padding: '8px', borderRadius: '8px 8px 0 0' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>{service.name}</Typography>
              </Box>
              <Button onClick={() => handleClick(service.route)} sx={{ width: '40px', height: '40px', position: 'absolute', bottom: '4px', right: '4px', backgroundColor: 'white', color: 'black', fontWeight: 'bold', transform: 'rotate(-45deg)', borderRadius: '50%', padding: 0, minWidth: 0 }}>
                <ArrowForward sx={{ fontSize: 20 }} />
              </Button>
            </Box>
          ))}
        </List>

        <Box style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
          <ul>
            {notifications.map((notification, index) => (
              <Notification key={index} message={notification.message} />
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
