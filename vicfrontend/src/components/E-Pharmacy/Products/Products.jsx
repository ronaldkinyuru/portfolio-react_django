import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, IconButton, Menu, MenuItem, InputBase, Badge, Box, Card, CardMedia, CardContent, Typography, Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField
} from '@mui/material';
import {
  Menu as MenuIcon, Search as SearchIcon, AccountCircle, ShoppingCart, CategoryOutlined, FavoriteBorderOutlined, LocalOfferOutlined, DescriptionOutlined, ArrowRight, ChevronLeft, ChevronRight
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Cart/CartContext';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productQuantity, setProductQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [categoryDropdownAnchorEl, setCategoryDropdownAnchorEl] = useState(null);
  const [conditionsDropdownAnchorEl, setConditionsDropdownAnchorEl] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://192.168.90.165:5500/api/product/viewallproducts'); // Replace with your actual endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data.slice(0, 4)); // Fetching only the first four products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setProductQuantity(0); // Reset quantity
  };

  const handleProceedWithOrder = () => {
    if (selectedProduct && productQuantity > 0) {
      addToCart({ ...selectedProduct, quantity: productQuantity });
      navigate('/cart');
      handleCloseDialog();
    }
  };

  const handleQuantityChange = (event) => {
    setProductQuantity(parseInt(event.target.value));
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setCategoryDropdownAnchorEl(null);
    setConditionsDropdownAnchorEl(null);
  };

  const handleSubmitPrescription = () => {
    navigate('/prescriptions');
    handleMenuClose();
  };

  const handleMyHealthRecords = () => {
    navigate('/health-records');
    handleMenuClose();
  };

  const handleCategoryDropdownOpen = (event) => {
    setCategoryDropdownAnchorEl(event.currentTarget);
  };

  const handleCategoryDropdownClose = () => {
    setCategoryDropdownAnchorEl(null);
  };

  const handleNavigateToMedicalServices = () => {
    navigate('/medical-services');
    handleMenuClose();
    handleCategoryDropdownClose();
  };

  const handleConditionsDropdownOpen = (event) => {
    setConditionsDropdownAnchorEl(event.currentTarget);
  };

  const handleConditionsDropdownClose = () => {
    setConditionsDropdownAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#d9d9d9' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleCategoryDropdownOpen}>
              <CategoryOutlined sx={{ marginRight: 1 }} /> Shop by Category <ArrowRight />
            </MenuItem>
            <Menu
              anchorEl={categoryDropdownAnchorEl}
              open={Boolean(categoryDropdownAnchorEl)}
              onClose={handleCategoryDropdownClose}
            >
              <MenuItem onClick={handleCategoryDropdownClose}>Medical Conditions</MenuItem>
              <MenuItem onClick={handleCategoryDropdownClose}>Vitamins and Supplements</MenuItem>
              <MenuItem onClick={handleCategoryDropdownClose}>Personal Care</MenuItem>
              <MenuItem onClick={handleNavigateToMedicalServices}>Medical Services</MenuItem>
            </Menu>
            <MenuItem onClick={handleConditionsDropdownOpen}>
              <FavoriteBorderOutlined sx={{ marginRight: 1 }} /> Shop by Conditions <ArrowRight />
            </MenuItem>
            <Menu
              anchorEl={conditionsDropdownAnchorEl}
              open={Boolean(conditionsDropdownAnchorEl)}
              onClose={handleConditionsDropdownClose}
            >
              <MenuItem onClick={handleConditionsDropdownClose}>Eye care</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Ear care</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Cough / Cold and Flu</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Oral care</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Diabetes</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Reproductive health</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Hypertension</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Stomach care / Digestive health</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Bone / joint and muscle aches</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Allergy relief</MenuItem>
              <MenuItem onClick={handleConditionsDropdownClose}>Wellness checkup</MenuItem>
            </Menu>
            <MenuItem onClick={handleMenuClose}>
              <LocalOfferOutlined sx={{ marginRight: 1 }} /> Offers
            </MenuItem>
            <MenuItem onClick={handleSubmitPrescription}>
              <DescriptionOutlined sx={{ marginRight: 1 }} /> Submit a Prescription
            </MenuItem>
            <MenuItem onClick={handleMyHealthRecords}>
              <FavoriteBorderOutlined sx={{ marginRight: 1 }} /> My Health Records
            </MenuItem>
          </Menu>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a product..."
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={<SearchIcon position="start" />}
          />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="cart"
            color="inherit"
            onClick={() => navigate('/cart')}
            >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <h1>Products</h1>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
                onClick={() => handleAddToCart(product)}
                size="small"
                sx={{ backgroundColor: '#800000', '&:hover': { backgroundColor: '#800000' } }}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Select Quantity</DialogTitle>
        <DialogContent>
          <TextField
            label="Quantity"
            type="number"
            value={productQuantity}
            onChange={handleQuantityChange}
            InputProps={{ inputProps: { min: 1 } }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProceedWithOrder} color="primary">
            Proceed with order
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog> 
    </div>
  );
};

export default ProductsPage;
