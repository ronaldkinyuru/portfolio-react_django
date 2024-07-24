import React from 'react';
import { Paper, Card, CardContent, Typography, Button, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  };

  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <img src={service.image} alt={service.name} style={{ width: '100%', height: 'auto' }} />
        <Typography variant="h5" component="div" style={{ marginTop: '10px' }}>
          {service.name}
        </Typography>
        <Button variant="contained" onClick={() => handleClick(service.route)} style={{ marginTop: '10px', backgroundColor: '#c00100' }}>
          Click Here!
        </Button>
      </CardContent>
    </Card>
  );
};

const ServiceContainer = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredServices, setFilteredServices] = React.useState([]);

  const medicalServices = [
    { name: 'General consultation', image: 'src/assets/general_consultation.jpg', route: '/book-appointment' },
    { name: 'Modern lab', image: 'src/assets/modern_lab.jpg', route: '/modern-lab' },
    { name: 'Pharmacy', image: 'src/assets/pharmacy_image.jpg', route: '/e-pharmacy' },
    { name: 'Specialist services', image: 'src/assets/specialist_services.jpg', route: '/specialists' }
  ];

  const handleSearch = () => {
    const filtered = medicalServices.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ marginBottom: '20px', marginTop: '30px', marginLeft: '170px', width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Search Services"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button variant="contained" onClick={handleSearch} style={{ marginLeft: '10px' }}>Search</Button>
      </div>
      <Paper elevation={3} style={{ padding: '20px', marginLeft: '10px', width: '80%',marginTop:'60px' }}>
        <Grid container spacing={3}>
          {(filteredServices.length > 0 ? filteredServices : medicalServices).map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default ServiceContainer;

