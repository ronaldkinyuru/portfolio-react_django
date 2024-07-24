import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, MenuItem } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DataAnalyticsGraph = () => {
  const bloodPressureData = [
    { date: 'Monday', systolic: 120, diastolic: 80 },
    { date: 'Tuesday', systolic: 118, diastolic: 78 },
    { date: 'Wednesday', systolic: 122, diastolic: 82 },
    { date: 'Thursday', systolic: 115, diastolic: 75 },
    { date: 'Friday', systolic: 125, diastolic: 85 },
    { date: 'Saturday', systolic: 122, diastolic: 83 },
    { date: 'Sunday', systolic: 123, diastolic: 81 },
  ];

  const [timeInterval, setTimeInterval] = useState('Daily');

  const handleTimeIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  const weeklyAverage = bloodPressureData.reduce((sum, entry) => sum + entry.systolic + entry.diastolic, 0) / bloodPressureData.length;

  return (
    <Card style={{ marginTop: '80px', width: '50%', padding: '20px', borderRadius: '20px', background: 'lightgrey' }}>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom style={{ color: 'black' }}>
            Pressure Map
          </Typography>
          <TextField
            select
            value={timeInterval}
            onChange={handleTimeIntervalChange}
            variant="outlined"
            size="small"
            label="Time Interval"
            style={{ color: 'black' }}
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
          </TextField>
        </div>
        <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
          Weekly Average: {weeklyAverage.toFixed(2)}
        </Typography>
        <LineChart width={500} height={200} data={bloodPressureData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
          <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default DataAnalyticsGraph;
