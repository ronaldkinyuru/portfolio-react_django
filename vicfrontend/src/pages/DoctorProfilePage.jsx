import DoctorProfile from "../components/DoctorProfile/DoctorProfile";
import DoctorExtension from "../components/DoctorExtension/DoctorExtension";
import DoctorNav from "../components/DoctorNav/DoctorNav";
import DoctorInput from "../components/DoctorNav/DoctorInput";
import DoctorReview from "../components/DoctorReview/DoctorReview";


function DoctorProfilePage()   {
                      return(
                        <div>
                     <div>
                    <DoctorNav/>
                        
                    </div> 
                     <div style={{ display:'flex', flexDirection:'row'}}>
                    <DoctorProfile/>
                    <DoctorExtension/>
                    <DoctorInput/>
                    <DoctorReview/>
                    </div>

                     </div>


                      );





};

export default DoctorProfilePage;