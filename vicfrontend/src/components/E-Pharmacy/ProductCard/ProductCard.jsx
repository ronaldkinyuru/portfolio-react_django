import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const ProductCard = ({ product, onAddToCart }) => {
 const handleAddToCart = () => {
    onAddToCart(product);
 };

 return (
    <Card sx={{ width: 150 }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <Button
        onClick={handleAddToCart}
        sx={{
          backgroundColor: '#c00100',
          color: 'white', // Set the text color to white
          '&:hover': {
            backgroundColor: '#c00100', // Ensure the hover state matches the active state
          },
        }}
      >
        Add to Cart
      </Button>
    </Card>
 );
};

export default ProductCard;
