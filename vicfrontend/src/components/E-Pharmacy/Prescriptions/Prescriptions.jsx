import React, { useState, useEffect } from 'react';
import { Paper, Card, Typography, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, AppBar, Toolbar, Badge, Snackbar } from '@mui/material';
import { Done, ChevronLeft, ChevronRight, Notifications, PhotoLibrary } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./Prescription.css";

const Prescriptions = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [waitingApproval, setWaitingApproval] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notificationDialogOpen, setNotificationDialogOpen] = useState(false);
  const [notifications, setNotifications] = useState([]); // State for notifications
  const [newNotification, setNewNotification] = useState(false); // State to track new notifications
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for snackbar

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % uploadedFiles.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + uploadedFiles.length) % uploadedFiles.length);
  };

  const proceedToReview = () => {
    setOpenDialog(true);
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      uploadedFiles.forEach((file) => {
        formData.append('prescription-image', file);
      });

      const response = await fetch('http://192.168.90.165:5500/api/prescription/uploadprescriptionimage/321456', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setOpenDialog(false);
        setSubmitted(true);
        setWaitingApproval(true);
        setTimeout(() => {
          setWaitingApproval(false);
          fetchNotifications(); // Fetch notifications after submitting
          setSnackbarOpen(true); // Display snackbar after successful submission
          navigate('/e-pharmacy'); // Navigate to homepage
        }, 1000);
      } else {
        console.error('Failed to submit files to the backend');
      }
    } catch (error) {
      console.error('Error submitting files:', error);
    }
  };

  const handleNotificationIconClick = () => {
    setNotificationDialogOpen(true);
    setNewNotification(false); // Mark notifications as read when opening the dialog
  };

  const handleNotificationDialogClose = () => {
    setNotificationDialogOpen(false);
  };

  const fetchNotifications = async () => {
    try {
      const response = await fetch('http://192.168.90.165:5500/api/notifications/getallnotifications/321456'); // Replace with your actual endpoint
      if (response.ok) {
        const data = await response.json();
        setNotifications(data.notifications); // Assuming the response contains a 'notifications' array
        if (data.notifications.length > 0) {
          setNewNotification(true); // Highlight the notification icon if there are new notifications
        }
      } else {
        console.error('Failed to fetch notifications');
      }
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <Paper
      elevation={3}
      style={{
        height: '100vh',
        width: '1000px',
        backgroundColor: 'f0f0f0',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <AppBar position="static" style={{ backgroundColor: 'maroon' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Prescription Upload
          </Typography>
          <IconButton color="inherit" onClick={() => setOpenDialog(true)}>
            <Badge badgeContent={uploadedFiles.length} color="secondary">
              <PhotoLibrary />
            </Badge>
          </IconButton>
          <IconButton color="inherit" onClick={handleNotificationIconClick}>
            <Badge color="secondary" variant={newNotification ? "dot" : "standard"}>
              <Notifications />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Card style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h3" style={{ fontSize: '16px', color: 'maroon', fontWeight: 'bolder', marginBottom: '20px', marginTop: '1px' }}>
            Do you have your medical prescriptions? Please upload the images.
          </Typography>
          <input type="file" style={{ display: 'none' }} id="file-input" onChange={handleFileInputChange} multiple />
          <label htmlFor="file-input">
            <Button variant="contained" component="span" style={{ marginTop: '10px', backgroundColor: 'maroon' }}>
              Upload Prescriptions
            </Button>
          </label>
          {uploadedFiles.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              {uploadedFiles.map((file, index) => (
                <Typography key={index} variant="body1">Uploaded File {index + 1}: {file.name}</Typography>
              ))}
            </div>
          )}
          {uploadedFiles.length > 0 && (
            <Button variant="contained" style={{ marginTop: '20px', backgroundColor: 'maroon' }} onClick={proceedToReview}>
              View
            </Button>
          )}
          <Dialog open={openDialog} onClose={handleDialogClose} maxWidth="sm" fullWidth>
            <DialogTitle style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="h3" style={{ color: 'maroon' }}>Review Your Uploads</Typography>
              <IconButton onClick={handleDialogClose}>
                <Done style={{ color: 'maroon' }} />
              </IconButton>
            </DialogTitle>
            <DialogContent style={{ textAlign: 'center', margin: '0 auto' }}>
              {uploadedFiles.length > 0 && (
                <>
                  <Typography variant="body1">File {currentIndex + 1}: {uploadedFiles[currentIndex].name}</Typography>
                  <div style={{ maxHeight: '50vh', overflowY: 'auto', margin: '20px auto' }}>
                    <img
                      src={URL.createObjectURL(uploadedFiles[currentIndex])}
                      alt={`Preview ${currentIndex + 1}`}
                      style={{ maxWidth: '100%', maxHeight: '50vh', objectFit: 'contain', marginBottom: '10px' }}
                    />
                  </div>
                </>
              )}
              {waitingApproval && <Typography variant="body1" style={{ color: 'maroon', marginTop: '20px' }}>Waiting for pharmacist's approval...</Typography>}
            </DialogContent>
            <DialogActions style={{ justifyContent: 'space-between', margin: '0 auto' }}>
              <IconButton onClick={handlePreviousImage} disabled={uploadedFiles.length <= 1}>
                <ChevronLeft style={{ color: 'maroon' }} />
              </IconButton>
              <IconButton onClick={handleNextImage} disabled={uploadedFiles.length <= 1}>
                <ChevronRight style={{ color: 'maroon' }} />
              </IconButton>
              {currentIndex === uploadedFiles.length - 1 && (
                <Button onClick={handleSubmit} style={{ backgroundColor: 'maroon', color: 'white' }}>
                  Submit
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>

      <Dialog open={notificationDialogOpen} onClose={handleNotificationDialogClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h3" style={{ color: 'maroon' }}>Notifications</Typography>
          <IconButton onClick={handleNotificationDialogClose}>
            <Done style={{ color: 'maroon' }} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {notifications.length > 0 ? (
            notifications.map((notif, index) => (
              <Typography key={index} variant="body1">{notif.message}</Typography>
            ))
          ) : (
            <Typography variant="body1">No new notifications.</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNotificationDialogClose} style={{ backgroundColor: 'maroon', color: 'white' }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        message="Your prescription has been submitted successfully. Please wait for pharmacist's approval before proceeding."
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={() => setSnackbarOpen(false)}>
              CLOSE
            </Button>
          </React.Fragment>
        }
      />
    </Paper>
  );
};

export default Prescriptions;
