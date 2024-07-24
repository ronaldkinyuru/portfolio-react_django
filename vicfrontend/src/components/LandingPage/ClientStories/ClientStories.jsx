import React from "react";
import './ClientStories.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography  from '@mui/material/Typography';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';






function ClientStories() {
         return(
                <div className="clientstories">
                    <div>
                        <h1 className="st">Our Client Stories</h1>
                    </div>
                     <div>
                    <Card style={{maxHeight:700, maxWidth:700}}>
                    <CardContent>
                  <div><button className="play"><PlayCircleOutlineIcon style={{ fontSize: 60 }}/></button>  
                  <Typography className="typography">How Teleafya helped me overcome depression. 5mins<br></br>
                  “I want to express my heartfelt appreciation for the care and support you have provided. Your commitment to your patients is truly admirable.”
                    
                    </Typography></div>
                     

                    </CardContent>





                      </Card>


                     </div>



                </div>




         );




};

export default ClientStories;

