import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VideoCallIcon from '@mui/icons-material/VideoCall';



function BookingsExtension () {
               return(
                 <div>
                
              
                <div style={{display:'flex', flexDirection:'row'}}>
                <Card style={{ height:400, width:200, marginTop:70, marginLeft:40}}>
                <CardContent >
                <CardMedia style={{height:400, width:200}}
                component="img"
                alt="Logo"
             
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT682YGeWmYOtBLANe6u3oyjw4uAPZ5FU1JBA&s"
                title="image"
                />
                </CardContent>
               </Card>
               
               <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Name" style={{ marginLeft: 50, marginTop:100 }}>
                Name:
               </label>
               <TextField 
               id="Name"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:90 }}
               /></div>
                
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="ID No" style={{ marginLeft: 50, marginTop:20 }}>
                ID No:
               </label>
               <TextField 
               id="ID No"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
              
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Type of Appointment" style={{ marginLeft: 50, marginTop:20 }}>
                Type of Appointment:
               </label>
               <TextField 
               id="Type of Appointment"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Date of Appointment" style={{ marginLeft: 50, marginTop:20 }}>
                Date of Appointment:
               </label>
               <TextField 
               id="Date of Appointment"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Time of Appointment" style={{ marginLeft: 50, marginTop:20 }}>
                Time of Appointment:
               </label>
               <TextField 
               id="Time of Appointment"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Meeting via" style={{ marginLeft: 50, marginTop:20 }}>
                Meeting via:
               </label>
               <TextField 
               id="Meeting via"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
              
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Meeting link" style={{ marginLeft: 50, marginTop:20 }}>
                Meeting link:
               </label>
               <TextField 
               id="Meeting link"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Passcode" style={{ marginLeft: 50, marginTop:20 }}>
                Passcode:
               </label>
               <TextField 
               id="Passcode"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Phone number" style={{ marginLeft: 50, marginTop:20 }}>
                Phone number:
               </label>
               <TextField 
               id="Phone number"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               </div>
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Email address" style={{ marginLeft: 50, marginTop:20 }}>
                Email address:
               </label>
               
               <TextField 
               id="Email address"
               variant="standard"
               rows={1}
               style={{ marginLeft: 20, marginTop:10 }}
               />
               
               </div>
               <a style={{marginLeft:50,marginTop:30, color:'#1E99C0'}} href="/patient-file">Review patient</a>
               <div>
                
               </div>
               <div style={{display:'flex', flexDirection:'row'}} >
               <div style={{display:'flex', flexDirection:'row'}} >
               <CallIcon style={{color:'green', marginTop:30}}/>
               <Typography style={{color:'#C00100', marginTop:30,marginLeft:20}}>+254 674273972</Typography>
               </div>
               <div style={{display:'flex', flexDirection:'row', marginLeft:30}} >
               <WhatsAppIcon style={{color:'green', marginTop:30}}/>
               <Typography style={{color:'#C00100', marginTop:30,marginLeft:20}}>+254 674273972</Typography>
               </div>
               <div style={{display:'flex', flexDirection:'row', marginLeft:30}} >
               <VideoCallIcon style={{color:'green', marginTop:30}}/>
               <Typography style={{color:'#C00100', marginTop:30,marginLeft:20}}>+254 674273972</Typography>
               </div>
    
              </div>
               </div>
            
              </div>


                 </div>


               );




};



export default BookingsExtension;