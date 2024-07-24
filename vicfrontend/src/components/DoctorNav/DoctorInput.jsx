import React from "react";
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";


function DoctorInput () {

              return(
                  <div style={{marginLeft:150}}>
                  <Typography style={{color:'#C00100', marginTop:30}}>Board Certification</Typography>
                  <TextField 
                  id="Board Certification"
                  variant="standard"
             
                  rows={1}
               />
               <Typography style={{color:'#C00100', marginTop:50}}>Medical School</Typography>
               <TextField 
                  id="Medical School"
                  variant="standard"
             
                  rows={1}
               />
               <Typography style={{color:'#C00100', marginTop:50}} >Residency</Typography>
               <TextField 
                  id="Residency"
                  variant="standard"
             
                  rows={1}
               />
                  </div>





              );


       


      





};

export default DoctorInput;