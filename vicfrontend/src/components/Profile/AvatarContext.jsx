import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { fetchAvatar } from './Avatar';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatarSrcImageUrl, setAvatarSrcImageUrl] = useState(null);
  const [name, setName] = useState("");
  const userToken = localStorage.getItem('userToken');

  const uploadAvatar = async (formData) => {
    try {
      const response = await axios.post('http://192.168.89.43:5500/api/patient/uploadProfileImages/37449211', formData, {
        headers: {
          'Authorization': 'Bearer ' + userToken,
          'Content-Type': 'multipart/form-data'
        },
      });

      if (response.data && response.data.avatarSrcUrl) {
        setAvatarSrcImageUrl(response.data.avatarSrcUrl);
        console.log("Avatar source updated, new value:", response.data.avatarSrcUrl);
        fetchAvatar(userToken);
      } else {
        console.error("avatarSrcImageUrl not found in response:", response.data);
      }
    } catch (error) {
      console.error("Error uploading avatar:", error);
    }
  };

  return (
    <AvatarContext.Provider value={{ avatarSrcImageUrl, setAvatarSrcImageUrl, name, setName, uploadAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => useContext(AvatarContext);
