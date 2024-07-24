import AppointmentStatus from "../components/AppointmentStatus/AppointmentStatus";
import Sidebar from "../components/SideBar/SideBar";

const AppointmentStatusPage = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh", // Minimum height of the viewport
      }}
    >
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div
        style={{
          width: "70%",
          marginTop: "30px",
          marginLeft: "50px",
        }}
      >
        <AppointmentStatus />
      </div>
    </div>
  );
};

export default AppointmentStatusPage;
