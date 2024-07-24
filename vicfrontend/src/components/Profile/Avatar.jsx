import React, { useEffect } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { useAvatar } from './AvatarContext';
import axios from 'axios';

const fetchAvatar = async (userToken, setAvatarSrcImageUrl) => {
    try {
        const response = await axios.get('http://192.168.89.43:5500/api/patient/getProfileImage/37449211', {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        });

        const avatarSrcImageUrl = response.data.avatarSrcImageUrl; // Access avatarSrcImageUrl directly

        console.log("Response from API:", avatarSrcImageUrl);
        if (avatarSrcImageUrl) {
            setAvatarSrcImageUrl(avatarSrcImageUrl);
            console.log("Avatar source fetched successfully:", avatarSrcImageUrl);
        } else {
            console.error("avatarSrcImageUrl not found in response:", response.data);
        }
    } catch (error) {
        console.error("Error fetching avatar:", error);
    }
};

const AvatarSection = () => {
    const { avatarSrcImageUrl, setAvatarSrcImageUrl, name, uploadAvatar } = useAvatar();

    const handleAvatarChange = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('avatarSrc', file);
        await uploadAvatar(formData);
    };

    useEffect(() => {
        fetchAvatar(localStorage.getItem('userToken'), setAvatarSrcImageUrl);
    }, []);

    return (
        <Box>
            <Box
                position="absolute"
                bottom={-50}
                left={10}
                width={100}
                height={100}
                borderRadius="40%"
                overflow="hidden"
                zIndex={1}
            >
                <input
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleAvatarChange}
                    id="avatar-input"
                />
                <label htmlFor="avatar-input">
                    <Avatar
                        alt="Profile Picture"
                        src={avatarSrcImageUrl}
                        sx={{ width: '90%', height: '90%', cursor: 'pointer' }}
                    >
                        {avatarSrcImageUrl && <img src={avatarSrcImageUrl} alt="Unable to display" />}
                    </Avatar>
                </label>
            </Box>
            <Typography variant="subtitle1" color="textSecondary" sx={{ position: 'absolute', bottom: -70, left: 10, color: '#000000', fontWeight: 'bold' }}>
                {name}
            </Typography>
            {console.log("Avatar URL:", avatarSrcImageUrl)}
        </Box>
    );
};

export default AvatarSection;
export { fetchAvatar }; // Export the fetchAvatar function
