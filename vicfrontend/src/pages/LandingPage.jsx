import HeaderComponent from "../components/LandingPage/HeaderComponent/HeaderComponent";
import BannerComponent from "../components/LandingPage/BannerComponent/BannerComponent";
import SearchbarComponent from "../components/LandingPage/SearchbarComponent/SearchbarComponent";
import NavigationComponent from "../components/LandingPage/NavigationComponent/NavigationComponent";
import CardComponent from "../components/LandingPage/CardComponent/CardComponent";
import SpecialistServices from "../components/LandingPage/SpecialistServices/SpecialistServices"
import LabServices from "../components/LandingPage/LabServices/LabServices";
import ClientStories from "../components/LandingPage/ClientStories/ClientStories";
import HealthAwareness from "../components/LandingPage/HealthAwareness/HealthAwareness";
import FooterComponent from "../components/LandingPage/FooterComponent/FooterComponent";








function LandingPage() {
  return(

<div style={{display: 'flex', flexDirection: 'column', flex: '1', overflowY: 'auto', marginTop: '48px', marginLeft: '32px'}}>
    <HeaderComponent/>
    <BannerComponent/>
    <SearchbarComponent/>
    <NavigationComponent/>
    <CardComponent/>
    <SpecialistServices/>
    <LabServices/>
    <ClientStories/>
    <HealthAwareness/>
    <FooterComponent/>
    
    </div>
   
  );
   
};

export default LandingPage;
