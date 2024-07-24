import React, { useEffect } from 'react';
import AvatarSection from './Avatar';
import axios from 'axios';
import { Box, Container, IconButton, Typography, Card, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditIcon from '@mui/icons-material/Edit';
import { useAvatar } from './AvatarContext';

const ViewProfile = () => {
    const { avatarSrcImageUrl, setAvatarSrcImageUrl, name, setName } = useAvatar();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [idNumber, setIdNumber] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [backgroundImage, setBackgroundImage] = React.useState('');

    const fetchProfileDetails = async () => {
        try {
            const response = await axios.get('http://192.168.89.43:5500/api/patient/viewPatientProfile/37449211');
            const { email, phoneNumber, idNumber, password, avatarSrc, backgroundImage, name } = response.data;
            setEmail(email);
            setPhoneNumber(phoneNumber);
            setIdNumber(idNumber);
            //setPassword(password);
            setAvatarSrcImageUrl(avatarSrc);
            setBackgroundImage(backgroundImage);
            setName(name);
            console.log("Fetched profile details successfully:", response.data);
        } catch (error) {
            console.error('Error fetching profile details:', error);
        }
    };

    useEffect(() => {
        console.log("Fetching updated profile details:");
        fetchProfileDetails();
    }, []);

    const handleBackgroundChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setBackgroundImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleEditProfileClick = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSaveChanges = () => {
        // Save changes here
        setOpenDialog(false);
    };

    return (
        <Container maxWidth='lg' sx={{ backgroundColor: '#d0d0d0', padding: '50px', borderRadius: '10px', marginTop: '-45px', display: "flex", justifyContent: "center", Maxwidth: "100px" }}>
            <Box display="flex" flexDirection="column" height="100vh" width="50%">
                <Box
                    flex="1"
                    bgcolor="#b0b0b0"
                    position="relative"
                    sx={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleBackgroundChange}
                        id="background-input"
                    />
                    <label htmlFor="background-input">
                        <IconButton
                            sx={{ position: 'absolute', top: 10, right: 10, color: '#ffffff' }}
                            aria-label="edit-background-photo"
                            component="span"
                        >
                            <CameraAltIcon />
                        </IconButton>
                    </label>
                    <AvatarSection />
                </Box>

                <Box flex="2" flexShrink="10" bgcolor="#f0f0f0" display="flex" justifyContent="flex-end" alignItems="flex-start" sx={{ marginBottom: '10px' }}>
                    <IconButton aria-label="edit-profile" onClick={handleEditProfileClick}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Card
                    flex="3"
                    position="relative"
                    padding="20px"
                    borderRadius="40px"
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, backgroundColor: 'f0f0f0' }}
                >
                    {/* Profile information */}
                    <Typography variant="body1" mb={2} sx={{ fontWeight: 'bold' }}>
                        Email: {email}
                    </Typography>
                    <Typography variant="body1" mb={2} sx={{ fontWeight: 'bold' }}>
                        Phone Number: {phoneNumber}
                    </Typography>
                    <Typography variant="body1" mb={2} sx={{ fontWeight: 'bold' }}>
                        ID Number: {idNumber}
                    </Typography>
                    {/*<Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                        Password: {password}
                    </Typography>*/}
                </Card>
                {/* Edit profile dialog */}
                <Dialog open={openDialog} onClose={handleCloseDialog}>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <br />
                    <DialogContent>
                        {/* Full name input */}
                        <TextField
                            label=" Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                        />
                        {/* Email input */}
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                        />
                        {/* Phone number input */}
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            fullWidth
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                        />
                        {/* ID number input */}
                        <TextField
                            label="ID Number"
                            variant="outlined"
                            fullWidth
                            value={idNumber}
                            onChange={(e) => setIdNumber(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                        />
                        {/* Password input */}
                        <TextField
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            sx={{ mb: 2 }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancel</Button>
                        <Button onClick={handleSaveChanges}>Save</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default ViewProfile;
