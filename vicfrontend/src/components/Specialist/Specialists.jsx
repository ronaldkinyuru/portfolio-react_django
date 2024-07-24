import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, TextField, CssBaseline, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom';

const servicesData = [
  { id: 1, name: 'Consultation', image:'src/assets/consultation.jpg', route: '/book-appointment' },
  { id: 2, name: 'Dental', image: 'src/assets/dental.jpg', route: '/dental' },
  { id: 3, name: 'Surgical', image: 'src/assets/surgical.jpg', route: '/surgical' },
  { id: 4, name: 'Ob-Gyn', image: 'src/assets/ob_gyn.jpeg', route: '/ob_gyn' },
  { id: 5, name: 'ENT', image: 'src/assets/ent.jpg', route: '/ent' },
  { id: 6, name: 'Orthopedics', image: 'src/assets/orthopedic.jpg', route: '/orthopedics' },
  { id: 7, name: 'Paediatrics', image: 'src/assets/paediatrics.jpeg', route: '/paediatric' },
];

const SpecialistServices = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const handleSearch = (value) => {
    const filtered = servicesData.filter(
      (service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.route.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    handleSearch(value);
  }

  return (
    <>
      <CssBaseline />
      <div style={{ textAlign: 'start', marginRight: '20px', marginLeft: '0px'}}>
        <div style={{ display: 'flex', position: 'sticky', top: '0', backgroundColor: '#ffffff', zIndex: '999', padding: '10px', marginBottom: '10px',marginRight: '70px', marginLeft: '-8px' }}>
          <TextField
            label="Search Services"
            variant="outlined"
            value={searchQuery}
            onChange={handleChange}
            style={{ width: '50%', borderRadius: '50px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <Grid container spacing={2}>
          {(filteredServices.length > 0 ? filteredServices : servicesData).map((service) => (
            <Grid item key={service.id} xs={12} sm={6} md={4} lg={4}>
              <Card style={{ backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
                <CardContent>
                  <Link to={service.route}>
                    <img src={service.image} alt={service.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  </Link>
                  <Typography variant="h6">{service.name}</Typography>
                  {/* Removed the details */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default SpecialistServices;
