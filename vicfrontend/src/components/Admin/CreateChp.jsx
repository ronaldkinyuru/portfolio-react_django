import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00f',
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const CreateChp = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    idNumber: '',
    email: '',
    countryCode: '254',
    phoneNumber: '',
    location: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    idNumber: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (name === 'email') {
      validateEmail(value);
    } else if (name === 'name') {
      validateName(value);
    } else if (name === 'phoneNumber') {
      validatePhoneNumber(value);
    } else if (name === 'idNumber') {
      validateIdNumber(value);
    } else if (name === 'password') {
      validatePassword(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@gmail\.com$/;
    if (!emailRegex.test(email) || email.length > 32) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Input a valid email',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: '',
      }));
    }
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    if (!nameRegex.test(name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: 'Enter full names',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: '',
      }));
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[17][0-9]{8}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: 'input a valid mobile phone number',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: '',
      }));
    }
  };

  const validateIdNumber = (idNumber) => {
    const idNumberRegex = /^[0-9]{5,10}$/;
    if (!idNumberRegex.test(idNumber)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        idNumber: 'Input ID valid number (digits only)',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        idNumber: '',
      }));
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'At least 8 characters long, at least one uppercase a lowercase letter, a number, and one special character',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: '',
      }));
    }
  };

  const isFormValid = () => {
    return (
      Object.values(formValues).every((value) => value.trim() !== '') &&
      Object.values(errors).every((error) => error === '')
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      alert('Please fill out the form correctly');
      return;
    }

    try {
      const response = await fetch('https://1d4b-102-210-244-74.ngrok-free.app/api/auth/chp/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate('/manage-chp');
        }, 2000); // Adjust the delay as needed
      } else {
        alert(`Failed to create user: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the user');
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <header style={{ paddingLeft: '7vw', backgroundColor: '#930100', color: '#fff', height: '6vh', marginBottom: '2vh', borderRadius: '10px' }}>
          <h2 style={{ textDecoration: 'underline' }}>CHP REGISTER</h2>
        </header>

        <form style={{ width: '30vw' }} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Full Names"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                error={!!errors.name}
                helperText={errors.name}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="ID Number"
                name="idNumber"
                value={formValues.idNumber}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                error={!!errors.idNumber}
                helperText={errors.idNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth required>
                <InputLabel>Country Code</InputLabel>
                <Select
                  name="countryCode"
                  value={formValues.countryCode}
                  onChange={handleChange}
                  variant="outlined"
                  label="Country Code"
                >
                  <MenuItem value="256">Uganda</MenuItem>
                  <MenuItem value="254">Kenya</MenuItem>
                  <MenuItem value="243">DRC</MenuItem>
                  <MenuItem value="250">Rwanda</MenuItem>
                  <MenuItem value="257">Burundi</MenuItem>
                  <MenuItem value="211">South Sudan</MenuItem>
                  <MenuItem value="255">Tanzania</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={8}>
              <TextField
                fullWidth
                required
                label="Phone Number"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Location"
                name="location"
                value={formValues.location}
                onChange={handleChange}
                variant="outlined"
                color="primary"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                type={showPassword ? 'text' : 'password'}
                label="Password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                variant="outlined"
                color="primary"
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                disabled={!isFormValid()}
              >
                Create User
              </Button>
            </Grid>
          </Grid>
        </form>

        <Snackbar open={openSnackbar} autoHideDuration={2000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success">
            CHP created successfully!
          </Alert>
        </Snackbar>
      </Container>
    </ThemeProvider>
  );
};

export default CreateChp;
