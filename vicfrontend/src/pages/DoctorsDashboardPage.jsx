import DashboardHeader from "../components/DoctorsDashboard/DashboardHeader";
import DoctorsSideBar from "../components/DoctorsSideBar/DoctorsSidebar";
import Appointment from "../components/DoctorsDashboard/Appointment";
import WelcomeBack from "../components/DoctorsDashboard/WelcomeBack";
import Report from "../components/DoctorsDashboard/Report";
import LineCharts from "../components/DoctorsDashboard/LineCharts";
import DonutCharts from "../components/DoctorsDashboard/DonutCharts";

const DoctorsDashboardPage = () => {
  return (
    <>
      <div>
        <DoctorsSideBar />
      </div>
      <div style={{ paddingLeft: "18%" }}>
        <div>
          <DashboardHeader />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          <div>
            <div>
              <WelcomeBack />
              <Report />
            </div>
            <div style={{ width: '47vw', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div  style={{ paddingRight: '2vw' }}>
                <LineCharts />
              </div>
              <div>
              <DonutCharts />
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: '4%'}}>
            <Appointment />
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsDashboardPage;
