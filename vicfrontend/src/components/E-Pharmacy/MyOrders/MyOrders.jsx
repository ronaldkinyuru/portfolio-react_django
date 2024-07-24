import React, { useState } from 'react';
import { Container, Typography, Box, Card, CardContent, CardMedia, Paper, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const MyOrders = () => {
  const [activeTab, setActiveTab] = useState('ongoingDelivered');
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSeeDetails = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBuyAgain = () => {
    navigate('/products'); // Navigating to '/products' page
  };

  const orders = [
    {
      id: 1,
      orderNumber: '12345',
      status: 'Delivered',
      date: '2024-03-31',
      products: [
        { 
          id: 1,
          image: 'path/to/image1.jpg',
          description: 'Order Description 1',
          items: [
            { name: 'Product 1', quantity: 2, price: 100 },
            { name: 'Product 2', quantity: 1, price: 50 }
          ],
          totalPrice: 250
        },
        { 
          id: 2,
          image: 'path/to/image2.jpg',
          description: 'Order Description 2',
          items: [
            { name: 'Product 3', quantity: 3, price: 150 },
            { name: 'Product 4', quantity: 1, price: 70 }
          ],
          totalPrice: 320
        }
      ]
    },
    // Add more orders as needed
  ];

  const RedButton = styled(Button)({
    backgroundColor: '#800000',
    color: 'white',
    '&:hover': {
      backgroundColor: '#8e0000',
    },
  });

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Typography
          variant="subtitle1"
          sx={{
            textDecoration: activeTab === 'ongoingDelivered' ? 'underline' : 'none',
            fontWeight: activeTab === 'ongoingDelivered' ? 'bold' : 'normal',
            color: activeTab === 'ongoingDelivered' ? 'brown' : 'inherit',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick('ongoingDelivered')}
        >
          Ongoing/Delivered
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            textDecoration: activeTab === 'cancelledReturned' ? 'underline' : 'none',
            fontWeight: activeTab === 'cancelledReturned' ? 'bold' : 'normal',
            color: activeTab === 'cancelledReturned' ? 'brown' : 'inherit',
            cursor: 'pointer',
          }}
          onClick={() => handleTabClick('cancelledReturned')}
        >
          Cancelled/Returned
        </Typography>
      </Box>
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          {activeTab === 'ongoingDelivered' &&
            orders.map((order) => (
              order.products.map(product => (
                <Paper key={product.id} sx={{ marginBottom: 2, padding: 2 }}>
                  <Box display="flex" alignItems="center">
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.image}
                      alt={product.description}
                    />
                    <CardContent sx={{ marginLeft: 2 }}>
                      <Typography variant="h6" component="div">
                        {product.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Order Number: {order.orderNumber}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Status: {order.status}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Date: {order.date}
                      </Typography>
                    </CardContent>
                  </Box>
                  <RedButton variant="contained" onClick={() => handleSeeDetails(product)}>
                    See Details
                  </RedButton>
                </Paper>
              ))
            ))}
          {activeTab === 'cancelledReturned' && (
            <Typography>Content for Cancelled/Returned</Typography>
          )}
        </CardContent>
      </Card>

      {/* Order Details Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <div>
              <Typography variant="h6">Order Number: {selectedOrder.orderNumber}</Typography>
              <Typography variant="body1">Date: {selectedOrder.date}</Typography>
              <Typography variant="body1">Number of Items: {selectedOrder.items.length}</Typography>
              <Typography variant="body1">Total Price: Ksh {selectedOrder.totalPrice}</Typography>
              <Typography variant="h6" style={{ marginTop: 20 }}>Items in Your Order</Typography>
              {selectedOrder.items.map((item, index) => (
                <Card key={index} sx={{ marginTop: 2 }}>
                  <CardContent>
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2">Quantity: {item.quantity}</Typography>
                    <Typography variant="body2">Price: Ksh {item.price}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <RedButton onClick={handleBuyAgain} variant="contained">
            Buy Again
          </RedButton>
          <Button onClick={handleClose} variant="outlined" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default MyOrders;
