// src/Settings.jsx
import React from 'react';
import { Container, Typography, Paper, TextField, Button, Checkbox, FormControlLabel, Grid, Box } from '@mui/material';

const Settings = () => {
  return (
    <Box sx={{ padding: '20px', width: '100%', height: '100vh', overflowY: 'auto', backgroundColor: "#D9D9D9" }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Notifications</Typography>
            <FormControlLabel control={<Checkbox />} label="Email" />
            <FormControlLabel control={<Checkbox />} label="Push Notifications" />
            <FormControlLabel control={<Checkbox />} label="Text Messages" />
            <FormControlLabel control={<Checkbox />} label="Phone calls" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Messages</Typography>
            <FormControlLabel control={<Checkbox />} label="Email" />
            <FormControlLabel control={<Checkbox />} label="Push Notifications" />
            <FormControlLabel control={<Checkbox />} label="Phone calls" />
          </Grid>
        </Grid>
        <Button variant="contained" color="secondary" sx={{ marginTop: '20px' }}>
          Save
        </Button>
      </Paper>
      <Paper elevation={3} sx={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Password
        </Typography>
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
          Update
        </Button>
      </Paper>
    </Box>
  );
};

export default Settings;
