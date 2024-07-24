import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button, Card } from '@mui/material';
import { Box } from '@mui/system';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'; // Create this CSS file for custom styles

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate(); // Initialize useNavigate

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleViewAll = () => {
    navigate('/approved-bookings'); // Navigate to the approved bookings page
  };

  const rows = [
    { id: 1, name: 'John Doe', time: '10:00 AM', color: '#DBF2DA' }, // Dark blue
    { id: 2, name: 'Jane Smith', time: '11:00 AM', color: '#F9EDEE' }, // Purple
    { id: 3, name: 'Alice Johnson', time: '12:00 PM', color: '#F4DCDD' }, // Pink
    { id: 4, name: 'Bob Brown', time: '1:00 PM', color: '#eaf5f5' }  // Light Purple
  ];

  return (
    <Card style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30vw', height: '120vh' }}>
      <Box style={{ width: '28vw', height: '60vh', outline: '#930100 solid 1px', borderRadius: '15px', margin: '2px', marginTop: '2px' }}>
        <div>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline', textDecorationColor: '#930100' }}>Your Appointments</h2>
        </div>
        <div>
          <Calendar
            onChange={onChange}
            value={date}
            className="custom-calendar"
            style={{paddingBottom: '5vh'}}
          />
        </div>
      </Box>
      <Box style={{ width: '28vw', height: '55vh', outline: '#930100 solid 1px', borderRadius: '15px', margin: '2px', marginTop: '7vh' }}>
        <table style={{ width: '100%', marginTop: '10px' }}>
          <tbody>
            {rows.map(row => (
              <tr key={row.id} style={{ backgroundColor: row.color, color: '#000', textAlign: 'center', borderRadius: '15px', marginBottom: '10px' }}>
                <td style={{ padding: '10px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    margin: 'auto'
                  }}></div>
                </td>
                <td>{row.name}</td>
                <td>{row.time}</td>
                <td>
                  <Button style={{ backgroundColor: '#c00100', color: '#fff' }}></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button 
          onClick={handleViewAll} // Add onClick event
          style={{ width: '28vw', height: '7vh', backgroundColor: '#C00100', color: '#fff', borderRadius: '15px', marginTop: '20px' }}
        >
          View all Appointments
        </Button>
      </Box>
    </Card>
  );
};

export default Appointment;
