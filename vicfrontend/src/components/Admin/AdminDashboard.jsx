import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();

  const handleNavigateToBookings = () => {
    navigate('/admin-bookings'); // Replace '/bookings' with the actual path to your bookings page
  };
  const handleNavigateToRegistration = () => {
    navigate('/register-user'); // Replace '/bookings' with the actual path to your bookings page
  };
  const handleNavigateToServiceManagement = () => {
    navigate('/admin-servicemanagement'); // Replace '/bookings' with the actual path to your bookings page
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin!</p>
      <ul>
        <li>Manage users</li>
        <li>View appointments</li>
        <li>Generate reports</li>
        {/* Add more items as needed */}
      </ul>
      <button onClick={handleNavigateToBookings}>Go to Bookings</button><br/><br/>
      <button onClick={handleNavigateToRegistration }>Register a User</button>
      <button onClick={handleNavigateToServiceManagement }>Service management</button>
    </div>
  );
}

export default AdminDashboard;
