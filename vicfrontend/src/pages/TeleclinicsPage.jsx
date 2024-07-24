import Sidebar from "../components/SideBar/SideBar";
import Teleclinics from "../components/Teleclinics/Teleclinics";
import SearchBar from "../components/SearchBar/SearchBar";
const TeleclinicPage = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Teleclinics />
      </div>
    </div>
  );
};

export default TeleclinicPage;
