import React from "react";
import './CardComponent.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography  from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardMedia from '@mui/material/CardMedia';





function CardComponent () {
         return(
          <div className="movec">
          <div><h1>General Consultation</h1></div>
          <div className="cards">
          
          <Card style={{ maxWidth:300, maxHeight:300}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/Pharmaceutical services">Pharmaceutical services</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/930026606/photo/scouting-the-shelves-for-the-perfect-product.jpg?s=612x612&w=0&k=20&c=GTeJk_dOJBUZb3rVOBkmoNAM-ez0yPO2Av1zuc2VSXU=" 
            alt="Pharmaceutical services" 
            width="150"
            />
           <Typography className="typo">Empowering Wellness</Typography>
           </CardContent>
            </Card>
           
           
            
            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/Family planning">Family planning</a></button>
            <br></br>
            <CardMedia
            component="img" 
            height="200" 
            image="https://images.unsplash.com/photo-1470843810958-2da815d0e041?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhbWlseSUyMHBsYW5uaW5nfGVufDB8fDB8fHww" 
            alt="Pharmaceutical services" 
            width="150"
            />
          
           <Typography className="typo">Family planning options for healthy families</Typography>
           </CardContent>
            </Card>

            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/Maternal Child Health">Maternal Child Health</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/638924066/photo/close-up-of-mother-cuddling-sleeping-baby-daughter-at-home.jpg?s=612x612&w=0&k=20&c=tjJhxCZDZuUN1ZXoT9vuaY5Jy5ljHkOZ0UNPuTTWSFg=" 
            alt="Pharmaceutical services" 
            width="150"
            />
           <Typography className="typo">Raising a healthy generation</Typography>
           </CardContent>
            </Card>

            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/Psychiatric services">Psychiatric services</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/1349348394/photo/female-patient-speaking-with-her-paediatrician-in-a-doctors-office.jpg?s=612x612&w=0&k=20&c=Z5ym-PS_03HGCjSmxsWJ2rxuJchArCZfV8TFyMWQyTg=" 
            alt="Pharmaceutical services" 
            width="150"
            />
           <Typography className="typo">Mental health matters!</Typography>
           </CardContent>
            </Card>

            <a className="allcons" href="/All consultation services">See All</a>
            <a className="next" href="/More services"><ArrowForwardIcon className="icon"/></a>



          </div>
          </div>


  );
};

export default CardComponent;