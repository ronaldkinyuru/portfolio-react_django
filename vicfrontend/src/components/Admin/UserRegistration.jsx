import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function CreateUsers() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !phone || !id || !role|| !password || !confirm) {
      setError("All fields are required");
      return;
    }

    // Check if password matches confirmation
    if (password !== confirm) {
      setError("Password and Confirm Password do not match");
      return;
    }

    setLoading(true);

    try {
      // Reset error state
      setError('');

      const response = await axios.post("http://localhost:3000/", {
        name,
        email,
        phone,
        id,
        role,
        password,
        confirm
      });

      if (response.data === "exist") {
        setError("User already exists");
      } else if (response.data.message === "User registered. Check your email for OTP.") {
        navigate("/verify-otp", { state: { email } });
      } else {
        setError(response.data);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("An error occurred during registration. Please try again later.");
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  }

  const handlePasswordChange = (value) => {
    // Check password requirements
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?!.*\s).{5,15}$/;
    if (!regex.test(value)) {
      setPasswordError("Password must be between 5 to 15 characters, contain at least one number, one symbol, and no spaces");
    } else {
      setPasswordError("");
    }

    setPassword(value);
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f0f0f0', padding: '20px' }}>
      <Box sx={{ width: '100%', maxWidth: 400, backgroundColor: 'white', paddingLeft: '30px', paddingRight: '30px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h4" align="center" gutterBottom style={{ color: '#C00100', fontWeight: 'bold' }}>
          TeleAfia
        </Typography>
        <Typography variant="h6" align="center" gutterBottom style={{ fontWeight: 'bold' }}>
          _________User Registration________
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          <TextField
            fullWidth
            label="Phone Number"
            variant="outlined"
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          <TextField
            fullWidth
            label="ID Number"
            variant="outlined"
            margin="normal"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          <TextField
            fullWidth
            label="Role"
            variant="outlined"
            margin="normal"
            type="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          {passwordError && (
            <Typography variant="caption" color="error" align="left" gutterBottom>
              {passwordError}
            </Typography>
          )}
          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            margin="normal"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
            InputProps={{ style: { height: '35px' } }} // Adjusted height
          />
          {error && (
            <Typography variant="body1" align="center" sx={{ mt: 2, color: 'red' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            fullWidth
            sx={{ mt: 2, height: '40px', width: '300px', marginLeft: '40px', backgroundColor: '#C00100' }}
          >
            {loading ? 'Loading...' : 'Register'}
          </Button>
        </form>
        <Typography variant="body1" align="center" sx={{ mt: 2 }}>
          Already Registered? <Link to='/login'>Login</Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default CreateUsers;
