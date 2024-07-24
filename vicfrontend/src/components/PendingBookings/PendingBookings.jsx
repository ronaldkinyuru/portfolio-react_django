import React, { useState, useEffect } from 'react';

const PendingBookings = () => {
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [bookings, setBookings] = useState([]);
  const [visibleBookings, setVisibleBookings] = useState([]);
  const [selectedDates, setSelectedDates] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [approvedBookings, setApprovedBookings] = useState([]);

  useEffect(() => {
    // Simulated data for demonstration purposes
    const mockBookings = [
      {
        id: 1,
        patient: {
          name: 'John Doe',
          age: 35,
          gender: 'Male',
          address: '123 Main St, City, Country',
          residence: 'Apartment 4B',
          contact: '123-456-7890',
        },
        service: 'General Checkup',
        consultationType: 'In-person',
        paymentStatus: 'Pending',
        bookingStatus: 'Pending',
      },
      {
        id: 2,
        patient: {
          name: 'Jane Smith',
          age: 28,
          gender: 'Female',
          address: '456 Elm St, City, Country',
          residence: 'House 5',
          contact: '987-654-3210',
        },
        service: 'Dental Cleaning',
        consultationType: 'Virtual',
        paymentStatus: 'Paid',
        bookingStatus: 'Confirmed',
      },
      {
        id: 3,
        patient: {
          name: 'Alice Johnson',
          age: 42,
          gender: 'Female',
          address: '789 Maple Ave, City, Country',
          residence: 'Condo 12C',
          contact: '555-123-4567',
        },
        service: 'Eye Exam',
        consultationType: 'In-person',
        paymentStatus: 'Paid',
        bookingStatus: 'Pending',
      },
      // Add more bookings as needed
    ];

    const initialDates = {};
    mockBookings.forEach(booking => {
      initialDates[booking.id] = null;
    });

    setBookings(mockBookings);
    setVisibleBookings(mockBookings.slice(0, 3)); // Display only the first three patients
    setSelectedDates(initialDates);

    const intervalId = setInterval(updateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const date = new Date();
    setCurrentDateTime(date.toLocaleString());
  };

  const handleApproveBooking = (id) => {
    // Handle booking approval logic here
    setApprovedBookings(prevState => [...prevState, id]);
    console.log(`Booking with id ${id} approved.`);
  };

  const handleDateChange = (id, date) => {
    setSelectedDates(prevState => ({
      ...prevState,
      [id]: date,
    }));
  };

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleBookings(bookings);
  };

  return (
    <div style={{ fontSize: '16px' }}> {/* Set the font size here */}
      <div style={{ display: 'flex', flexDirection: 'row', color: '#c55177' }}>
        <h2>Pending Bookings</h2>
        <h2 style={{ marginLeft: '50vw' }}>{currentDateTime}</h2>
      </div>
      <table style={{ width: '85%', marginLeft: '5vw' }}>
        <thead style={{ backgroundColor: '#2d0000', color: 'white' }}>
          <tr>
            <th style={{ width: '30%' }}>Patient Details</th>
            <th style={{ width: '15%' }}>Service</th>
            <th style={{ width: '15%' }}>Consultation Type</th>
            <th style={{ width: '15%' }}>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleBookings.map(booking => (
            <tr key={booking.id}>
              <td style={{ width: '30%' }}>
                <div>
                  <strong>{booking.patient.name}</strong>
                  <ul>
                    <li>Age: {booking.patient.age}</li>
                    <li>Gender: {booking.patient.gender}</li>
                    <li>Address: {booking.patient.address}</li>
                    <li>Residence: {booking.patient.residence}</li>
                    <li>Contact: {booking.patient.contact}</li>
                  </ul>
                </div>
              </td>
              <td style={{ width: '15%' }}>{booking.service}</td>
              <td style={{ width: '15%' }}>{booking.consultationType}</td>
              <td style={{ width: '25%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h5>{booking.paymentStatus}</h5>
                  <div style={{ position: 'relative', width: '150px' }}>
                    <input
                      type="datetime-local"
                      value={selectedDates[booking.id] ? selectedDates[booking.id].toISOString().substr(0, 16) : ''}
                      onChange={(e) => handleDateChange(booking.id, new Date(e.target.value))}
                      style={{ width: '100%' }}
                    />
                  </div>
                  <button
                    style={{
                      backgroundColor: approvedBookings.includes(booking.id) ? 'yellow' : '#c00100',
                      color: approvedBookings.includes(booking.id) ? 'black' : 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      marginTop: '8px'
                    }}
                    onClick={() => handleApproveBooking(booking.id)}
                    disabled={booking.paymentStatus !== 'Paid' || approvedBookings.includes(booking.id) || !selectedDates[booking.id]}
                  >
                    {approvedBookings.includes(booking.id) ? 'Approved' : 'Approve Booking'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!showAll && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button
            style={{ backgroundColor: '#c00100', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px' }}
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default PendingBookings;
