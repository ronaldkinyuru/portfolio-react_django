import React from "react";
import './SpecialistServices.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography  from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CardMedia from '@mui/material/CardMedia';




function SpecialistServices() {
         return(
          <div className="movec">
          <div><h1>Specialist Services</h1></div>
          <div className="cards">
            <Card style={{ maxWidth:300, maxHeight:300}}>
            <CardContent>
            <button className="phrmass"><a className="phrmas" href="/Dental">Dental</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/185331512/photo/beautiful-smile-with-dental-mirror.jpg?s=612x612&w=0&k=20&c=2hby1X_32yF1gZmYh-T0RqdBSLhh55wXTHacHbhJGlk=" 
            alt="Pharmaceutical services" 
            width="150"
             />
           <Typography className="typo">Ensuring a confident smile</Typography>
           </CardContent>
            </Card>
      
            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrmass"><a className="phrmas" href="/Surgical">Surgical</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/1375287155/photo/young-surgeon-performing-surgical-operation.jpg?s=612x612&w=0&k=20&c=neCZFEmACuZP18Jf9IZgCpUkBEAqJM7WlV4XGMuKqQk=" 
            alt="Pharmaceutical services" 
            width="150"
             />
          
           <Typography className="typo">Together in this</Typography>
           </CardContent>
            </Card>

            <Card style={{ maxWidth:300, maxHeight:400, marginLeft:10}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/ Obstetrics and Gynaecological services"> Obstetrics and Gynaecology</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/1367308805/photo/doctor-is-holding-sectional-model-female-reproductive-organs.jpg?s=612x612&w=0&k=20&c=0Bc7JW4aRVQv1f9OfBrkZOyncIWWC2E6gP0XSJTuh94=" 
            alt="Pharmaceutical services" 
            width="150"
             />
        
           <Typography className="typo"> Find solutions from our gynaecologists</Typography>
           </CardContent>
            </Card>

            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrma"><a className="phrmas" href="/ Ophthalmic services"> Ophthalmic services</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/889766038/photo/optician-repairing-eye-glasses.jpg?s=612x612&w=0&k=20&c=Mogbp6eDYTEyQaQUXOvajDzFcm0Rt9O3R1TuqXvKvnw=" 
            alt="ophthalmic services" 
            width="150"
             />
        
           <Typography className="typo"> The best vision for an improved life</Typography>
           </CardContent>
            </Card>
            
            <a className="allcons" href="/All Specialist Services">See All</a>
            <a className="next" href="/All Specialist Services"><ArrowForwardIcon className="icon"/></a>


          </div>
          </div>


  );
};

export default SpecialistServices;