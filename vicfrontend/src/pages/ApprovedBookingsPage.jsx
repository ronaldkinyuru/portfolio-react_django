import ApprovedBookings from "../components/ApprovedBookings/ApprovedBookings";
import BookingsExtension from "../components/BookingsExtension/BookingsExtension";
import LogoComponent from "../components/LogoComponent/LogoComponent";



function ApprovedBookingsPage () {
           return(
              <div>
             <div>
              <LogoComponent/>
             </div>
            <div style={{display:'flex', flexDirection:'row'}}>
            <ApprovedBookings/>
            <BookingsExtension/>
            </div>
            </div>
            



           );


};

export default ApprovedBookingsPage;