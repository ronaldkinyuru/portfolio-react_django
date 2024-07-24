import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';





function DoctorExtension() {
                 return(
                <div>
                   
                <h3 style={{marginLeft:60, marginTop:30, color:'#C00100'}}>PROFILE</h3>
                <Typography style={{marginLeft:50, fontSize:'large'}}>Dr. Faith Lunzalu</Typography>
                <Typography style={{marginLeft:50, fontSize:'medium', color:'#856206',marginTop:10}}>General Medical Officer</Typography>
                <Typography style={{marginLeft:50, fontSize:'medium', color:'#856206',marginTop:10}}>Equity Afya Medical</Typography>
                <div style={{display:'flex', flexDirection:'column'}}>
               
             </div>
             <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="SPECIALTY" style={{ marginLeft: 50, marginTop:30, color:'#1E99C0' }}>
                SPECIALTY:
               </label>
               <TextField 
               id="SPECIALTY"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
                
                <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="EXPERIENCE" style={{ marginLeft: 50, marginTop:30, color:'#1E99C0'}}>
                EXPERIENCE:
               </label>
               <TextField 
               id="EXPERIENCE"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
             
               <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="LANGUAGES" style={{ marginLeft: 50, marginTop:30, color:'#1E99C0'}}>
                LANGUAGES:
               </label>
               <TextField 
               id="LANGUAGES"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
                 <Typography style={{marginTop:50, color:'#C00100', marginLeft:50}}>Contacts</Typography>
                <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Phone number:" style={{ marginLeft: 50, marginTop:30}}>
               Phone number:
               </label>
               <TextField 
               id="Phone number"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
                
                
                <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Email address(s)" style={{ marginLeft: 50, marginTop:30}}>
               Email address(s):
               </label>
               <TextField 
               id="Email address(s)"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
                <div style={{display:'flex', flexDirection:'row'}}>
               <label htmlFor="Office cell phone:" style={{ marginLeft: 50, marginTop:30}}>
                  Office cell phone:
               </label>
               <TextField 
               id="Office cell phone:"
               variant="standard"
             
               rows={1}
               style={{ marginLeft: 20, marginTop:20 }}
               /></div>
               



                </div>



                 );




};

export default DoctorExtension;