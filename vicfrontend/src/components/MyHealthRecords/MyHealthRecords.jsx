import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Paper, Card, CardContent, Button, CircularProgress } from '@mui/material';
import { FavoriteBorderOutlined, Height, Description } from '@mui/icons-material';
import axios from 'axios';
import RecordForm from '../../components/MyHealthRecords/recordForm'; // Assuming RecordForm is in the same directory
import DataAnalyticsGraph from '../../components/MyHealthRecords/dataAnalyticsGraphs'; // Adjust import path as needed

const MyHealthRecords = () => {
  const navigate = useNavigate();

  const fetchLabResults = async () => {
    try {
      const response = await axios.get('http://192.168.88.198:5500/api/viewlabresults');
      const labResults = response.data;
      navigate('/lab-results', { state: { labResults } });
    } catch (error) {
      console.error('Failed to fetch lab results:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h1" gutterBottom>
        My Health Records
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Health Records
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <RecordCard title="Blood Pressure" buttonText="Record" icon={<FavoriteBorderOutlined />} formFields={['Date', 'Systolic', 'Diastolic']} />
          <RecordCard title="BMI" buttonText="Record" icon={<Height />} formFields={['Date', 'Weight', 'Height', 'HeightUnit']} calculateBMI />
          <RecordCard title="Lab Results" buttonText="View" icon={<Description />} onViewClick={fetchLabResults} />
        </div>
      </Paper>
      <DataAnalyticsGraph />
    </Container>
  );
};

const RecordCard = ({ title, buttonText, icon, formFields = [], onViewClick, calculateBMI }) => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    if (title === "Lab Results") {
      setLoading(true);
      onViewClick().then(() => setLoading(false));
    } else {
      setShowForm(true);
    }
  };

  return (
    <Card style={{ width: '30%', margin: '10px', background: 'lightgrey', borderRadius: '20px' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ background: 'darkgrey', padding: '10px', borderRadius: '50%' }}>
          {icon}
        </div>
        <Typography variant="h6" gutterBottom style={{ marginTop: '10px', color: 'black', fontWeight: 'bold', textDecoration: 'underline' }}>
          {title}
        </Typography>
        {title === 'Blood Pressure' && <Typography variant="h6" gutterBottom style={{ color: 'black' }}>Weekly Average:</Typography>}
        <Button variant="contained" color="primary" style={{ backgroundColor: '#C00100', marginBottom: '10px' }} onClick={handleButtonClick}>
          {loading ? <CircularProgress color="inherit" size={24} /> : buttonText}
        </Button>
        {showForm && <RecordForm formFields={formFields} />}
      </CardContent>
    </Card>
  );
};

export default MyHealthRecords;
