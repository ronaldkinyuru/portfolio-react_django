	import React from "react";
    import './LabServices.css';
    import Card from '@mui/material/Card';
    import CardContent from '@mui/material/CardContent';
    import Typography  from '@mui/material/Typography';
    import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
    import CardMedia from '@mui/material/CardMedia';





    function LabServices() {

              return(
                <div className="movec">
                     <div><h1>Laboratory Services</h1></div>
          <div className="cards">

          <Card style={{ maxWidth:300, maxHeight:300}}>
            <CardContent>
            <button className="phrmasss"><a className="phrmas" href="/Radiography">Radiography</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/92988886/photo/chest-x-ray-image-for-physicians-examination.jpg?s=612x612&w=0&k=20&c=BNbsxzfiHWIQHgaDCb-nw8t0nmzFOsgAwGDeMBdMx5I=" 
            alt="Radiography" 
            width="150"
            />
          
           <Typography className="typo">Articulate, precise and informative data</Typography>
           </CardContent>
            </Card>
            

            <Card style={{ maxWidth:300, maxHeight:400, marginLeft:10}}>
            <CardContent>
            <button className="phrmass"><a className="phrmas" href="/X-rays">X-rays</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.gettyimages.com/id/1301122401/photo/doctor-reading-the-scan-lung-on-digital-tablet-screen.jpg?s=612x612&w=0&k=20&c=h9KolZP463IHG7aM5_oSkL7jBCbA2MHTt-z1rk7S6tk=" 
            alt="Radiography" 
            width="150"
            />
           <Typography className="typo">Articulate, precise and informative data</Typography>
           </CardContent>
            </Card>

            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrmass"><a className="phrmas" href="/MRI">MRI</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="https://media.istockphoto.com/id/1502040018/photo/patient-undergoing-mri-examination.jpg?s=612x612&w=0&k=20&c=EgfZHNVuJ-AZotyNlzFHu8gyPnyGYR-tRPu1sbHAZIw=" 
            alt="Radiography" 
            width="150"
            />
           <Typography className="typo">Articulate, precise and informative data</Typography>
           </CardContent>
            </Card>
            
            <Card style={{ maxWidth:300, maxHeight:300, marginLeft:10}}>
            <CardContent>
            <button className="phrmass"><a className="phrmas" href="/Blood tests"> Blood tests</a></button>
            <CardMedia
            component="img" 
            height="200" 
            image="data:image/jpeg;base64,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" 
            alt="Radiography" 
            width="150"
            />
           <Typography className="typo">Articulate, precise and informative data</Typography>
           </CardContent>
            </Card>

            <a className="allcons" href="/All Lab services">See All</a>
            <a className="next" href="/More services"><ArrowForwardIcon className="icon"/></a>



          </div>
                </div>



              );




    };

    export default LabServices;
