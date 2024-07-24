import React from 'react';
import { Card, Typography, Button } from '@mui/material';

function CardData({name, image}) {
  return (
    <Card style={{ backgroundColor: '#f0f0f0', border: '1px solid #ddd' }}>
        <CardContent> 
        <img src={image} alt={image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <Typography variant="h6">{name}</Typography>
        {/* <Typography variant="body2" paragraph>{service.details}</Typography> */}
        {/* <Button
            variant="outlined"
            onClick={() => handleServiceClick(service.id)}
            style={{ backgroundColor: '#c00100'}}
        >
            View Details
        </Button> */}
        </CardContent>
    </Card>
  )
}

export default CardData;