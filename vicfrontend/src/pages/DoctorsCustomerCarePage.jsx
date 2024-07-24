import React from "react";
import DoctorsSideBar from "../components/DoctorsSideBar/DoctorsSidebar";
import CustomerCare from "../components/CustomerCare/CustomerCare";

const DoctorsCustomerCarePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1", width: "20%" }}>
        <DoctorsSideBar />
      </div>
      <div style={{ flex: "4", width: "80%" }}>
        <CustomerCare />
      </div>
    </div>
  );
};

export default DoctorsCustomerCarePage;
