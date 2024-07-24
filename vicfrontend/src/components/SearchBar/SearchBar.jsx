import  { useState } from 'react';
import { TextField, InputAdornment, IconButton, Avatar, Box, Button } from '@mui/material';
import { Search, Notifications } from '@mui/icons-material';

function SearchBar() {
  const [avatarSrc, setAvatarSrc] = useState('/avatar.jpg'); // Initial avatar image source

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ position: 'fixed', top: 0, right: 0, display: 'flex', alignItems: 'center', gap: 0 }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search for your TeleAfia Services..."
        style={{ width: '500px' }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton size='small'>
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Search button */}
      <Button variant="outlined" size="small"sx={{ height:42}} >Search</Button>

      
      {/* Notification bell */}
      <IconButton size="small" sx={{ marginLeft: '335px', color: '#C00100' }}>
        <Notifications />
      </IconButton>

      {/* Avatar */}
      <label htmlFor="avatar-input">
        <Avatar alt="User Avatar" src={avatarSrc} sx={{ cursor: 'pointer' }} />
        <input
          id="avatar-input"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleAvatarChange}
        />
      </label>
    </Box>
  );
}

export default SearchBar;
