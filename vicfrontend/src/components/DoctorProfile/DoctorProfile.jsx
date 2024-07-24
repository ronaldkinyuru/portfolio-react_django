import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';






function DoctorProfile ()  {
                 return(
                
                  <div>
                 
                 <Card style={{ width: 300, height:350, marginTop:20}}>
                 <CardContent>
                 <CardMedia style={{height:300, width:300,borderRadius:5}}
                component="img"
                alt="Logo"
             
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeZW_UiS7g3xOHu_qqGA7BwjtuYAB19Fs5w&s"
                title="Logo"
                />
                
                <EditIcon/>
    
               
        
              </CardContent>
              </Card>
              
              <Card style={{ width: 300, height:100, marginTop:20, backgroundColor:'#1E99C0'}}>
              <CardContent>
              <Typography style={{ color:'white', marginLeft:50}}>Dr. Faith Lunzalu</Typography>
              <Typography style={{ color:'#0C2E39', marginLeft:40, marginTop:10}}>General Medical Officer</Typography>
              </CardContent>
              </Card>
              <Typography  style={{ color:'#1E99C0', marginLeft:80, marginTop:20}}>BIOGRAPHY</Typography>
              <div style={{ fontFamily:'Times New Roman', fontSize:'medium'}}>
              <Typography  style={{  marginLeft:0}}>Faith Lunzalu is a medical officer certified </Typography>
              <Typography> by the Kenya Medical Practitioners, Pharmacists </Typography>
              <Typography>and Dentists Union.</Typography>
              <Typography>She holds a Bachelor’s degree in Medicine and </Typography>
              <Typography>Surgery from the University of Nairobi.</Typography>
              </div>
             
              </div>
            


                 );
                     




};

export default DoctorProfile;