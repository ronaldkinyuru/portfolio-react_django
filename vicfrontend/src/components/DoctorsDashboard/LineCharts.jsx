import React, { useState, useEffect } from 'react';
import { Card, FormControl, MenuItem, Select } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Mock data function
function getMockData() {
  const data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      month: `Month ${i + 1}`,
      male: Math.floor(Math.random() * 50) + 10,
      female: Math.floor(Math.random() * 50) + 10,
    });
  }
  return data;
}

const LineCharts = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");

  useEffect(() => {
    // Generate mock data based on selected period
    let newData = [];
    switch (selectedPeriod) {
      case "this-month":
        newData = getMockData();
        break;
      case "this-year":
        // Example: Generate data for this year
        break;
      default:
        newData = getMockData(); // Default to this month
    }
    setChartData(newData);
  }, [selectedPeriod]);

  return (
    <Card style={{ width: '25vw', height: '45vh', outline: '#930100 solid 1px', borderRadius: '15px', marginTop: '5vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '1rem'}}>
        <div>
          <h5 style={{ paddingLeft: '1vw', marginTop: '2vh'}}>Patients Trends</h5>
        </div>
        <div>
          <FormControl style={{ width: '45%', marginTop: '1vh', marginLeft: '11vw'}}>
            <Select
              variant="outlined"
              style={{ 
                height: '6vh',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                boxSizing: 'border-box'
              }}
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <MenuItem value="this-month">This Month</MenuItem>
              <MenuItem value="this year">This Year</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div style={{ width: '90%', height: '80%' }}>
        <LineChart width={350} height={250} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="male" stroke="#0f0" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="female" stroke="#82ca" />
        </LineChart>
      </div>
    </Card>
  );
};

export default LineCharts;
