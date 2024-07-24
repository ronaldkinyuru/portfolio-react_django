import React from "react";
import './NavigationComponent.css';


function NavigationComponent () {
    return(
       <div>
        <div className="line"></div>
        <button className="medical"><a className="med" href="/medical-services">Medical Services</a></button>
        <button className="specialist"><a className="medi" href="/specialists">Specialist Services</a></button>
        <button className="specialist"><a className="medi" href="/Pharmaceutical services">Pharmaceutical services</a></button>
        <button className="specialist"><a className="medi" href="/Optometry">Optometry</a></button>
        <button className="specialist"><a className="medi" href="/Lab">Lab</a></button>
        <a className="see" href="/See All">See All</a>
        <div className="line2"></div>
     


       </div>



);


};

export default NavigationComponent;