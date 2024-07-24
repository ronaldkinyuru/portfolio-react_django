//import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import VerifyOTPPage from "../pages/VerifyOTPPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";
import MedicalServicesPage from "../pages/MedicalServicesPage";
import SpecialistsPage from "../pages/SpecialistsPage";
import MyhealthRecordsPage from "../pages/MyhealthRecordsPage";
import PaymentsPage from "../pages/PaymentsPage";
import CustomerCarePage from "../pages/CustomerCarePage";
import TeleclinicsPage from "../pages/TeleclinicsPage";
import OtherServicesPage from "../pages/OtherServicesPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import ModernLabPage from "../pages/ModernLabPage";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import PasswordReset from "../components/PasswordReset/passwordReset";
import AppointmentStatusPage from "../pages/AppointmentStatusPage";
import OtpPasswordPage from "../pages/OtpPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";
import ViewProfilePage from "../pages/ViewProfilePage";
import LanguagePage from "../pages/languagePage";
import BookAppointmentPage from "../pages/BookAppointmentPage";
import AppointmentsHistory from "../pages/AppointmentsHistory";
import LabResultsPage from "../pages/labResultsPage";
//clients Routes
import DentalPage from "../pages/DentalPage";
import EpharmacyDashboardPage from "../pages/EpharmacyDashboardPage";
import EpharmacyLandingPage from "../pages/EpharmacyLandingPage";
import ProductsPage from "../pages/ProductsPage";
import PrescriptionsPage from "../pages/PrescriptionsPage";
import CartPage from "../pages/CartPage";
import MyOrdersPage from "../pages/MyOrdersPage";
import DoctorsCustomerCarePage from "../pages/DoctorsCustomerCarePage";
import ReviewedPatientsPage from "../pages/ReviewedPatientsPage";
import DoctorsDashboardPage from "../pages/DoctorsDashboardPage";
import DeliveryInfoPage from "../pages/DeliveryInfoPage";
//Admin Routes
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";
import AdminServicesPage from "../pages/admin/AdminServicesPage";
import AdminBookingPage from "../pages/admin/AdminBookingPage";
import ActiveUsersPage from "../pages/admin/ActiveUsersPage";
import PendingBookingsPage from "../pages/PendingBookingsPage";
import SettingsPage from "../pages/admin/SettingsPage";
import RolesPage from "../pages/admin/RolesPage";
import ReportsPage from "../pages/admin/AdminReportsPage";
import ClinicsPage from "../pages/admin/AdminClinicsPage";
import DoctorsPage from "../pages/admin/AdminDoctorPage";
import ManageChpsPage from "../pages/admin/ManageChpsPage";
import CreateChpPage from "../pages/admin/CreateChpPage";
import AdminLatestBookingsPage from "../pages/admin/AdminLatestBookingsPage";

//Pharmacist Routes
import PharmacistDashboardPage from "../pages/pharmacist/PharmacistDashboardPage";
import PrescriptionUploadPage from "../pages/pharmacist/PrescriptionUploadPage";
import DrugsInventoryPage from "../pages/pharmacist/DrugsInventoryPage"


function AppRoutes() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/reset-password" element={<ResetPasswordPage />} />
				<Route path="/verify-otp" element={<VerifyOTPPage />} />
				<Route path="/dashboard" element={<DashboardPage />} />
				<Route path="/medical-services" element={<MedicalServicesPage />} />
				<Route path="/specialists" element={<SpecialistsPage />} />
				<Route path="/doctors-dashboard" element={<DoctorsDashboardPage />} />
				<Route path="/health-records" element={<MyhealthRecordsPage />} />
				<Route path="/teleclinics" element={<TeleclinicsPage />} />
				<Route path="/payments" element={<PaymentsPage />} />
				<Route path="/customer-care" element={<CustomerCarePage />} />
				<Route path="/other-services" element={<OtherServicesPage />} />
				<Route path="/forgot-password" element={<ForgotPasswordPage />} />
				<Route path="/modern-lab" element={<ModernLabPage />} />
				<Route path="/appointment-status" element={<AppointmentStatusPage />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/reset-password" element={<PasswordReset />} />
				<Route path="/otp-password" element={<OtpPasswordPage />} />
				<Route path="/book-appointment" element={<BookAppointmentPage />} />
				<Route path="/appointments-history" element={<AppointmentsHistory />} />
				<Route path="/reviewed-patients" element={<ReviewedPatientsPage />} />
				<Route path="/doctors-customer-care" element={<DoctorsCustomerCarePage />}/>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="health-records" element={<MyhealthRecordsPage />} />
				<Route path="/e-pharmacy" element={<EpharmacyDashboardPage />} />
				<Route path="/e-pharmacy" element={<EpharmacyLandingPage />} />
				<Route path="/products" element={<ProductsPage />} />
				<Route path="/prescriptions" element={<PrescriptionsPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/my-orders" element={<MyOrdersPage />} />
				<Route path="/view-profile" element={<ViewProfilePage />} />
				<Route path="/language" element={<LanguagePage />} />
        <Route path="/dental" element={<DentalPage />} />
				<Route path="/lab-results" element={<LabResultsPage />} />
        {/*Admin*/}
				<Route path="/admin-dashboard" element={<AdminDashboardPage />} />
				<Route path="/admin-servicemanagement" element={<AdminServicesPage />}/>
				<Route path="/admin-latest-bookings" element={<AdminLatestBookingsPage />} />
				<Route path="/manage-chps" element={<ManageChpsPage />} />
				<Route path="/create-chp" element={<CreateChpPage />} />
				<Route path="/admin-bookings" element={<AdminBookingPage />} />
				<Route path="/delivery-info" element={<DeliveryInfoPage />} />
				<Route path="/active-users" element={<ActiveUsersPage />} />
        <Route path="/pending-bookings" element={<PendingBookingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/roles" element={<RolesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/clinics" element={<ClinicsPage />} />
        <Route path="/doctors" element={<DoctorsPage />} />





        
        {/*pharmacist*/}
        <Route path="/pharmacist-dashboard" element={<PharmacistDashboardPage />} />
        <Route path="/prescription-uploads" element={<PrescriptionUploadPage />} />
        <Route path="/drug-inventory" element={< DrugsInventoryPage/>} />


        

			</Routes>
		</Router>
	);
}

export default AppRoutes;


/*import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// Lazy loading the components
const LandingPage = lazy(() => import("../pages/LandingPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ResetPasswordPage = lazy(() => import("../pages/ResetPasswordPage"));
const VerifyOTPPage = lazy(() => import("../pages/VerifyOTPPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const MedicalServicesPage = lazy(() => import("../pages/MedicalServicesPage"));
const SpecialistsPage = lazy(() => import("../pages/SpecialistsPage"));
const MyhealthRecordsPage = lazy(() => import("../pages/MyhealthRecordsPage"));
const PaymentsPage = lazy(() => import("../pages/PaymentsPage"));
const CustomerCarePage = lazy(() => import("../pages/CustomerCarePage"));
const TeleclinicsPage = lazy(() => import("../pages/TeleclinicsPage"));
const OtherServicesPage = lazy(() => import("../pages/OtherServicesPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const ModernLabPage = lazy(() => import("../pages/ModernLabPage"));
const ForgotPassword = lazy(() => import("../components/ForgotPassword/ForgotPassword"));
//const PasswordReset = lazy(() => import("../components/PasswordReset/passwordReset"));
const AppointmentStatusPage = lazy(() => import("../pages/AppointmentStatusPage"));
const OtpPasswordPage = lazy(() => import("../pages/OtpPasswordPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const ViewProfilePage = lazy(() => import("../pages/ViewProfilePage"));
const LanguagePage = lazy(() => import ("../pages/languagePage"));   // Check if this file exists and path is correct
const BookAppointmentPage = lazy(() => import("../pages/BookAppointmentPage"));
const AppointmentsHistory = lazy(() => import("../pages/AppointmentsHistory"));
const DentalPage = lazy(() => import("../pages/DentalPage"));
const EpharmacyDashboardPage = lazy(() => import("../pages/EpharmacyDashboardPage"));
const EpharmacyLandingPage = lazy(() => import("../pages/EpharmacyLandingPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const PrescriptionsPage = lazy(() => import("../pages/PrescriptionsPage"));
const CartPage = lazy(() => import("../pages/CartPage"));
const MyOrdersPage = lazy(() => import("../pages/MyOrdersPage"));
const DoctorsCustomerCarePage = lazy(() => import("../pages/DoctorsCustomerCarePage"));
const ReviewedPatientsPage = lazy(() => import("../pages/ReviewedPatientsPage"));
const DoctorsDashboardPage = lazy(() => import("../pages/DoctorsDashboardPage"));
const DeliveryInfoPage = lazy(() => import("../pages/DeliveryInfoPage"));
const AdminDashboardPage = lazy(() => import("../pages/admin/AdminDashboardPage"));
const AdminServicesPage = lazy(() => import("../pages/admin/AdminServicesPage"));
const AdminBookingPage = lazy(() => import("../pages/admin/AdminBookingPage"));
const ActiveUsersPage = lazy(() => import("../pages/admin/ActiveUsersPage"));
const PendingBookingsPage = lazy(() => import("../pages/PendingBookingsPage"));

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/verify-otp" element={<VerifyOTPPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/medical-services" element={<MedicalServicesPage />} />
        <Route path="/specialists" element={<SpecialistsPage />} />
        <Route path="/doctors-dashboard" element={<DoctorsDashboardPage />} />
        <Route path="/health-records" element={<MyhealthRecordsPage />} />
        <Route path="/teleclinics" element={<TeleclinicsPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/customer-care" element={<CustomerCarePage />} />
        <Route path="/other-services" element={<OtherServicesPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/modern-lab" element={<ModernLabPage />} />
        <Route path="/appointment-status" element={<AppointmentStatusPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/otp-password" element={<OtpPasswordPage />} />
        <Route path="/book-appointment" element={<BookAppointmentPage />} />
        <Route path="/appointments-history" element={<AppointmentsHistory />} />
        <Route path="/reviewed-patients" element={<ReviewedPatientsPage />} />
        <Route path="/doctors-customer-care"element={<DoctorsCustomerCarePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="health-records" element={<MyhealthRecordsPage />} />
        <Route path="/forgot-password" element={ForgotPassword} />
        <Route path="/reset-password" element={PasswordReset} />
        <Route path="/e-pharmacy" element={<EpharmacyDashboardPage />} />
        <Route path="/e-pharmacy" element={<EpharmacyLandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/prescriptions" element={<PrescriptionsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my-orders" element={<MyOrdersPage />} />
        <Route path="/view-profile" element={<ViewProfilePage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/dental" element={<DentalPage />} />
        <Route path="/delivery-info" element={<DeliveryInfoPage />} />
        <Route path="/active-users" element={<ActiveUsersPage />} />
        <Route path="/pending-bookings" element={<PendingBookingsPage />} />
        <Route path="/lab-results" element={<LabResultsPage />} />*/
