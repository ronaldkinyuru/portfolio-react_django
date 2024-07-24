import React, { useState } from 'react';
import { Typography, Button, CircularProgress, TextField, MenuItem } from '@mui/material';
import axios from 'axios';

const RecordForm = ({ formFields, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [bmiData, setBmiData] = useState(null);
  const [ageGroup, setAgeGroup] = useState('adult');

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: field === 'Date' ? formatDate(value) : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    // Post formData and bmiData to backend
    const dataToSend = { ...formData, ...bmiData };
    axios.post('http://192.168.91.164:5500/api/createrecord', dataToSend)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        setLoading(false);
        onSubmit(formData);
      })
      .catch(error => {
        console.error('Failed to submit data:', error);
        setLoading(false);
      });
  };

  const calculateAndSetBMI = () => {
    const { Weight, Height, HeightUnit } = formData;
    let heightInM = Height;

    if (HeightUnit === 'centimeters') {
      heightInM = Height / 100;
    }

    const calculatedBmi = (Weight / (heightInM * heightInM)).toFixed(2);
    let bmiStatus = '';
    if (ageGroup === 'adult') {
      if (calculatedBmi < 16) {
        bmiStatus = 'Severely Underweight';
      } else if (calculatedBmi >= 16 && calculatedBmi < 18.5) {
        bmiStatus = 'Underweight';
      } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
        bmiStatus = 'Normal';
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        bmiStatus = 'Overweight';
      } else if (calculatedBmi >= 30 && calculatedBmi < 35) {
        bmiStatus = 'Moderately Obese';
      } else if (calculatedBmi >= 35 && calculatedBmi < 40) {
        bmiStatus = 'Severely Obese';
      } else {
        bmiStatus = 'Morbidly Obese';
      }
    } else {
      // Implement BMI status calculation for children
      // You can use different BMI ranges for children
      bmiStatus = 'BMI status for children';
    }
    console.log('BMI calculated:', calculatedBmi);
    console.log('BMI Status:', bmiStatus);
    setBmiData({ BMI: calculatedBmi, BMIStatus: bmiStatus });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px', width: '100%', textAlign: 'center' }}>
      <TextField
        select
        label="Age Group"
        value={ageGroup}
        onChange={(e) => setAgeGroup(e.target.value)}
        style={{ marginBottom: '10px', borderRadius: '20px', color: 'black', width: '80%' }}
        InputProps={{
          style: { color: 'black' }
        }}
        InputLabelProps={{
          shrink: true,
        }}
      >
        <MenuItem value="adult">Adult (20+)</MenuItem>
        <MenuItem value="children">Children (2-19)</MenuItem>
      </TextField>
      {formFields.map((field, index) => (
        field === 'HeightUnit' ? (
          <TextField
            key={index}
            select
            label={field}
            value={formData[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            style={{ marginBottom: '10px', borderRadius: '20px', color: 'black', width: '80%' }}
            InputProps={{
              style: { color: 'black' }
            }}
            InputLabelProps={{
              shrink: true,
            }}
          >
            <MenuItem value="centimeters">centimeters</MenuItem>
            <MenuItem value="meters">meters</MenuItem>
          </TextField>
        ) : (
          <TextField
            key={index}
            label={field}
            type={field === 'Date' ? 'date' : 'text'}
            value={formData[field] || ''}
            onChange={(e) => handleChange(field, e.target.value)}
            style={{ marginBottom: '10px', borderRadius: '20px', color: 'black', width: '80%' }}
            InputProps={{
              style: { color: 'black' }
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        )
      ))}
      <Button
        type="button"
        variant="contained"
        color="primary"
        style={{ backgroundColor: '#C00100', marginBottom: '10px', width: '80%' }}
        onClick={calculateAndSetBMI}
      >
        Calculate BMI
      </Button>
      {bmiData && (
        <>
          <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
            BMI: {bmiData.BMI}
          </Typography>
          <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
            BMI Status: {bmiData.BMIStatus}
          </Typography>
          <div style={{ marginTop: '20px' }}>
            <table style={{ width: '80%', margin: 'auto', borderCollapse: 'collapse', color: 'black' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>BMI</th>
                  <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Category</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#ffcccc' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{'< 16.0'}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Severely Underweight</td>
                </tr>
                <tr style={{ backgroundColor: '#ffcccc' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>16.0 - 18.4</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Underweight</td>
                </tr>
                <tr style={{ backgroundColor: '#ccffcc' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>18.5 - 24.9</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Normal</td>
                </tr>
                <tr style={{ backgroundColor: '#ffffcc' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>25.0 - 29.9</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Overweight</td>
                </tr>
                <tr style={{ backgroundColor: '#ff9999' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>30.0 - 34.9</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Moderately Obese</td>
                </tr>
                <tr style={{ backgroundColor: '#ff6666' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>35.0 - 39.9</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Severely Obese</td>
                </tr>
                <tr style={{ backgroundColor: '#ff3333' }}>
                  <td style={{ border: '1px solid black', padding: '8px' }}>{'> 40.0'}</td>
                  <td style={{ border: '1px solid black', padding: '8px' }}>Morbidly Obese</td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
      <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#C00100', width: '80%' }}>
        {loading ? <CircularProgress color="inherit" size={24} /> : "Submit"}
      </Button>
    </form>
  );
};

export default RecordForm;
