import React, { useState } from 'react';
import { Card, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

const generateMockData = () => {
  const services = ['Consultation', 'Injection', 'Surgery', 'Therapy'];
  const data = {};

  for (let i = 0; i < 12; i++) { // for each month
    const month = `Month ${i + 1}`;
    data[month] = {
      totalPatients: 0,
      services: {}
    };

    services.forEach(service => {
      const patients = Math.floor(Math.random() * 100) + 1;
      data[month].services[service] = patients;
      data[month].totalPatients += patients;
    });
  }

  return data;
};

const mockData = generateMockData();

const Report = () => {
  const [timePeriod, setTimePeriod] = useState('thisMonth');

  const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const getCurrentMonth = () => {
    const date = new Date();
    return `Month ${date.getMonth() + 1}`;
  };

  const getCurrentYear = () => {
    return 'Year'; // Placeholder for year logic if needed
  };

  const selectedMonth = timePeriod === 'thisMonth' ? getCurrentMonth() : null;
  const dataToDisplay = selectedMonth ? mockData[selectedMonth] : null;

  return (
    <>
      <Card style={{ width: '45vw', outline: '#930100 solid 1px', borderRadius: '15px', marginTop: '5vh', padding: '2vh' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
          <h4 style={{ marginLeft: '1vw' }}>Report</h4>
          <FormControl style={{ width: '25%', marginTop: '1vh', marginLeft: '60%' }}>
            <Select
              variant="outlined"
              style={{
                height: '6vh',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box',
              }}
            >
              <MenuItem value="this-month">This Month</MenuItem>
              <MenuItem value="this year">This Year</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Box display="flex" flexDirection="row" alignItems="center" marginTop="1vh">
          {dataToDisplay ? (
            <>
              <Card style={{ width: '7vw', height: '15vh', padding: '1vh', backgroundColor: '#3C2877', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <h4>Total Patients: {dataToDisplay.totalPatients}</h4>
              </Card>
              {Object.keys(dataToDisplay.services).map((service, index) => (
                <Card key={index} style={{ width: '7vw', height: '15vh', margin: '1vh', padding: '1vh', backgroundColor: '#3C2877', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                  <h4>{service}: {dataToDisplay.services[service]}</h4>
                </Card>
              ))}
            </>
          ) : (
            <h4>No data available</h4>
          )}
        </Box>
      </Card>
    </>
  );
}

export default Report;


