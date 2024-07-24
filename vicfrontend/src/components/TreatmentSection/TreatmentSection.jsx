import React from "react";
import TextField from '@mui/material/TextField';




function TreatnmentSection () {

        return(
            <div>
                 <div style={{ display: 'flex', alignItems: 'center',marginTop:40 }}>
               <label htmlFor="TREATMENT">
                TREATMENT:
               </label>
               <TextField
               id="TREATMENT"
               variant="standard"
               multiline
               rows={3}
               style={{ marginLeft: 20, width:800 }}
               />
                </div><br></br>
                <div style={{ display: 'flex', alignItems: 'center',marginTop:40 }}>
               <label htmlFor="REMARKS">
                REMARKS:
               </label>
               <TextField
               id="REMARKS"
               variant="standard"
               multiline
               rows={3}
               style={{ marginLeft: 20, width:800 }}
               />
                </div>
            </div>

        );


};

export default TreatnmentSection;