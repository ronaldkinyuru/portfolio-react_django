import React from "react";
import './CustomerCare.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography  from '@mui/material/Typography';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';



function  CustomerCare()  {
         return(
            
           <div>
            <div style={{ display:'flex', flexDirection:'row'}}>
            <Card style={{ width:300, height:600, marginLeft:50, marginTop:30 }}>
               <CardContent>
            <CardMedia
              component="img"
              alt="customer care"
           
              image="https://media.istockphoto.com/id/1406229512/photo/african-american-young-man-customer-support-call-center-operator-or-receptionist-sitting-at.jpg?s=612x612&w=0&k=20&c=i9z_v_BseehJ2i1mW2OPBlVfU4Y5iOrfLOpT9dM4MkM="
              title="Customer care"/>
             <Typography style={{ fontSize:'large', marginTop:20}}> Phone-based customer service</Typography>
              <div style={{display:"flex", flexDirection:"row"}}><PhoneIcon style={{ marginTop: 30}} />
              <p style={{ color:'#C00100', marginTop:30, marginLeft: 20}}>+254 65000048</p>   </div>
            <div style={{ display:'flex', flexDirection:"row"}}>  <ChatIcon style={{ marginTop:20}}/><Typography style={{marginTop:20, marginLeft:20, color:'#C00100'}}>Chat us</Typography> </div>
            <div style={{ display:"flex", flexDirection:'row'}}>  <WhatsAppIcon style={{ color:'#25d366',marginTop:30}}/>
              <Typography style={{ marginTop:20, marginLeft:20}}>Chat us on Whatsapp</Typography></div><p style={{ color:'#C00100', marginTop:0, marginLeft: 40}}>+254 65000048</p> 
           
              <div style={{ display:"flex", flexDirection:'row'}}>  <WhatsAppIcon style={{ color:'#25d366',marginTop:20}}/>
              <Typography style={{ marginTop:20, marginLeft:20}}>Call us on Whatsapp</Typography></div><p style={{ color:'#C00100', marginTop:0, marginLeft: 40}}>+254 65000048</p> 
               <Typography style={{marginTop:40, marginLeft:10, color:'#F1BB31'}}>Your listening caring health partner</Typography>
              </CardContent>
            </Card>
            <Card style={{ width:300, height: 600, marginLeft:50, marginTop:30}}>
             <CardContent>
              <CardMedia    
              
              component="img"
              alt="customer care"
           
              image="https://t4.ftcdn.net/jpg/05/14/39/17/360_F_514391756_zIGTM7NRYXTirSOGbJviWmjeXTLl7Uco.jpg  "
              title="Customer care"
             />
             <Typography style={{marginTop:20, fontSize:'large'}}>Live chat customer service</Typography>
            <div style={{ display:'flex', flexDirection:'row'}}><a href="/@EquityAfya_OfficialPage"><InstagramIcon style={{color:'#C13584', marginTop:30}} /></a><a style={{color:'#1E99C0', textDecoration:'none'}} href="/@EquityAfia_OfficialPage"><Typography style={{ marginTop:30,marginLeft:20 }}>Chat us @EquityAfya_OfficialPage</Typography></a></div> 
           <div style={{ display:'flex', flexDirection:'row'}}> <XIcon style={{ marginTop:50}} /><Typography style={{ marginTop:50, marginLeft:20, color:'#1E99C0'}}>Tweet us @EquityAfya_OfficialPage</Typography></div>
           <div style={{ display:'flex', flexDirection:'row'}}><a href="/@EquityAfya_OfficialPage"><FacebookIcon style={{marginTop:50, color:'#1E99C0'}}/></a><a style={{color:"#1E99C0", textDecoration:'none'}} href="/EquityAfia_OfficialPage"><Typography style={{marginTop:50, marginLeft:20}}>Chat us @EquityAfya_OfficialPage</Typography></a></div> 
           <Typography style={{marginTop:40, marginLeft:10, color:'#F1BB31'}}>Your listening caring health partner</Typography>
             </CardContent>
           </Card>

           <Card style={{ width:300, height: 600, marginLeft:50, marginTop:30}} >
            <CardContent>
            <CardMedia
            component="img"
            alt="customer care"
         
            image="https://media.istockphoto.com/id/1339045508/photo/people-receiving-consultation-at-government-office.jpg?s=612x612&w=0&k=20&c=Lcl-O4D1-5WbF94SOx2q8kbG7K2FpNQjt5VunzsNa_I="
            title="Customer care"
             />
             <Typography style={{fontSize:'large',marginTop:30}}>In-facility customer service</Typography>
            <Typography style={{ marginTop:30, color:'#C00100'}}>Visit any Equity Afya branch near you and voice out your concerns, we wish you nothing but the best of experience in our medical centres</Typography>
            <CardMedia style={{maxWidth:130, maxHeight:130, marginTop:20, marginLeft:50}} 
            component="img"
            alt="customer care"
         
            image="data:image/jpeg;base64,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"
            title="Customer care"
            
            />
             
            <Typography style={{marginTop:30, marginLeft:10, color:'#F1BB31'}}>Your listening caring health partner</Typography>


            </CardContent>

           </Card>
           </div>
          
       

           </div>





             
            




         );



};


export default CustomerCare;