import React from "react";
import ReviewedPatients from "../components/ReviewedPatients/ReviewedPatients.jsx";
import DoctorsSideBar from "../components/DoctorsSideBar/DoctorsSidebar.jsx";

const ReviewedPatientsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
      }}
    >
      <div>
        <DoctorsSideBar />
      </div>
      <div style={{ marginLeft: "20%", width: "80%" }}>
        <ReviewedPatients />
      </div>
    </div>
  );
};

export default ReviewedPatientsPage;
