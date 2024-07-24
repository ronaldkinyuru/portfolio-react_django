import React from "react";
import './HealthAwareness.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography  from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
    

function HealthAwareness() {
                return(
            <div>
                <div><h1>Health and Wellness Articles </h1></div>
                <div className="aware">
             <Card style={{ maxWidth:500, maxHeight:200}}>
            <CardContent>
                <div className="media">
             <CardMedia
              component="img" 
              height="200" 
              image="https://t4.ftcdn.net/jpg/06/66/89/41/240_F_666894104_fJkE8Lu69vjrAbRUPy0eGvBIWm9edUNw.jpg" 
              alt="Health Awareness" 
              width="150"
              
            />
           <div className="article"><a className="how" href="/How to manage diabetes">How to manage diabetes</a>
            <Typography>Lifestyle changes that help prevent and manage diabetes </Typography>
            <Typography className="dd" >1 day ago by Teleafya</Typography>
            </div>
              </div>  





            </CardContent>




            </Card> 


            <Card style={{ maxWidth:500, maxHeight:200, marginLeft:80}}>
            <CardContent>
                <div className="media">
             <CardMedia
              component="img" 
              height="200" 
              image="https://media.istockphoto.com/id/1960222769/photo/a-pregnant-girl-measures-blood-pressure-with-a-device-the-concept-of-high-and-low-blood.jpg?s=612x612&w=0&k=20&c=3-OZROIr2sujKQWEdY6R9PNlnaGXUjPpEqeQ-XtVPlo=" 
              alt="Health Awareness" 
              width="250"
              
            />
           <div className="article"><a className="how" href="/How to manage hypertension">How to manage hypertension</a>
            <Typography>Lifestyle changes that help prevent and manage hypertension </Typography>
            <Typography className="dd" >1 day ago by Teleafya</Typography>
            </div>
              </div>  





            </CardContent>




            </Card> 

            <Card style={{ maxWidth:500, maxHeight:200, marginLeft:60}}>
            <CardContent>
                <div className="media">
             <CardMedia
              component="img" 
              height="200" 
              image="https://media.istockphoto.com/id/1071076078/photo/senior-woman-exercising-with-trainer-at-rehab.jpg?s=612x612&w=0&k=20&c=tB7v1nZg19xPaGhfY9qlt2n-mX6W5FDwQWnCAKwsVTg=" 
              alt="Health Awareness" 
              width="250"
              
            />
           <div className="article"><a className="how" href="/Importance of physiotherapy in the management of arthritis">Importance of physiotherapy in the management of arthritis</a>
            <Typography>Exercises that help manage arthritis</Typography>
            <Typography className="dd" >1 day ago by Teleafya</Typography>
            </div>
              </div>  





            </CardContent>




            </Card> 



            
            </div>


            </div>






);


};

export default HealthAwareness;