import React, { useState } from 'react';
import { Card, FormControl, MenuItem, Select } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0f0', '#82c'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const DonutCharts = () => {
  const [selectedDuration, setSelectedDuration] = useState('this-month');

  const handleDurationChange = (event) => {
    setSelectedDuration(event.target.value);
  };

  const getDataBasedOnDuration = () => {
    // Example logic to generate data based on selected duration
    if (selectedDuration === 'this-month') {
      return [
        { name: 'Male', value: 30 },
        { name: 'Female', value: 70 },
      ];
    } else if (selectedDuration === 'this-year') {
      return [
        { name: 'Male', value: 40 },
        { name: 'Female', value: 60 },
      ];
    }
  };

  const data = getDataBasedOnDuration();

  return (
    <Card style={{ width: '20vw', height: '45vh', outline: '#930100 solid 1px', marginTop: '5vh', borderRadius: '15px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingLeft: '1vw'}}>
        <h5 style={{  paddingLeft: '1vw', marginTop: '2vh' }}>Gender Trends</h5>
        <FormControl style={{ width: '50%' }}>
          <Select
            variant="outlined"
            value={selectedDuration}
            onChange={handleDurationChange}
            style={{
              height: '6vh',
              padding: '8px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
            }}
          >
            <MenuItem value="this-month">This Month</MenuItem>
            <MenuItem value="this-year">This Year</MenuItem>
          </Select>
        </FormControl>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1 }}>
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            cx={100}
            cy={100}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={75}
            innerRadius={35} // Adjust the inner radius to create a donut chart
            fill="#8884d8"
            dataKey="value"
          >
            {
              data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip />
          <Legend layout="vertical" align="left" verticalAlign="bottom" wrapperStyle={{ left: 50 }} />
        </PieChart>
      </div>
      
    </Card>
  );
};

export default DonutCharts;

