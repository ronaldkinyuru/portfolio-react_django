import Sidebar from "../components/SideBar/SideBar";
import CustomerCare from "../components/CustomerCare/CustomerCare";






function CustomerCarePage () {

          return(
          <div style={{ display:"flex", flexDirection:"row", height: '100vh'}}>
            <div  sx={{display: 'flex', flexDirection: 'column', flex: 'o o auto', marginRight: '32px'}}><Sidebar/></div>
            <div  sx={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '48px', marginLeft: '32px'}}>
         <CustomerCare/>
         </div>
         </div>
   


          );



};
export default CustomerCarePage;