import React, { useState, useEffect } from 'react';
import { TextField, IconButton, Badge, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '&.Mui-focused fieldset': {
          borderColor: '#c00100',
        },
      },
    },
    MuiInputLabel: {
      root: {
        '&.Mui-focused': {
          color: '#c00100',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
  },
  title: {
    marginRight: '30vw',
  },
  search: {
    width: '25vw',
  },
  notification: {
    marginLeft: '5vw',
  },
  profile: {
    marginLeft: '3vw',
    cursor: 'pointer',
  },
  results: {
    marginTop: theme.spacing(2),
  },
  noMatch: {
    color: 'red',
    marginTop: theme.spacing(1),
    textAlign: 'center', // Center the "No match" message
  },
}));

// Existing imports and component definition...

const DashboardHeader = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]); // State to hold the data to be filtered
  const [filteredData, setFilteredData] = useState([]); // State to hold the filtered data
  const [notifications, setNotifications] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('YOUR_DATA_API_ENDPOINT'); // Replace with your data API endpoint
        const data = await response.json();
        setData(data); // Assume data is an array of items
        setFilteredData(data); // Initially set filtered data to all data
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    const fetchNotifications = async () => {
      try {
        const response = await fetch('YOUR_NOTIFICATIONS_API_ENDPOINT');
        const data = await response.json();
        setNotifications(data.notifications);
        setNotificationCount(data.count);
      } catch (error) {
        console.error('Failed to fetch notifications:', error);
      }
    };

    fetchData();
    fetchNotifications();

    // Start fetching notifications every minute
    const intervalId = setInterval(fetchNotifications, 60000);

    // Clear interval on cleanup
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Filter data based on search term
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to redirect to the doctor's profile
  const redirectToDoctorProfile = () => {
    navigate('/doctor-profile'); // Replace '/doctor-profile' with the actual path to the doctor's profile
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.header}>
        <h2 className={classes.title}>Dashboard</h2>
        <TextField
          label="Search..."
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          className={classes.search}
        />
        <IconButton color="inherit" className={classes.notification}>
          <Badge badgeContent={notificationCount} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <AccountCircleIcon onClick={redirectToDoctorProfile} className={classes.profile} />
      </div>
      <div className={classes.results}>
        {searchTerm && filteredData.length === 0 ? (
          <Typography className={classes.noMatch}>No match</Typography>
        ) : (
          <List>
            {filteredData.map((item) => (
              <ListItem key={item.id}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </ThemeProvider>
  );
};

export default DashboardHeader;
