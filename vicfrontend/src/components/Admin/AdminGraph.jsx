import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function AdminBarGraph() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; // Array of months

  const dataset = months.map(month => ({ month, value: Math.floor(Math.random() * 10) + 1 })); // Generate random values for each month
  
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: months }]} // Use months array instead of ['group A', 'group B', 'group C']
      series={[{ data: dataset.map(item => item.value) }]} // Use the values generated for each month
      width={500}
      height={300}
    />
  );
}
