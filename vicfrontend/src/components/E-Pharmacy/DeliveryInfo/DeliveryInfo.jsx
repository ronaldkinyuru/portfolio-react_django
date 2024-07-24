import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, MenuItem, Select, TextField, Button, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/system';

const Container = styled(Box)({
    textAlign: 'center',
    marginTop: '2rem',
});

const FormContainer = styled(Box)({
    width: '40%',
    margin: 'auto',
    padding: '2rem',
    backgroundColor: '#eee',
    borderRadius: '8px',
});

const Title = styled(Typography)({
    marginBottom: '2rem',
    color: '#b22222', // Dark red color for the title
});

const StyledButton = styled(Button)({
    backgroundColor: '#b22222', // Dark red color for the button
    '&:hover': {
        backgroundColor: '#8b0000', // Darker red on hover
    },
});

// Utility function to transform data into the required structure
const transformData = (data) => {
    const result = [];

    data.forEach(({ County, Constituency, Ward }) => {
        let county = result.find(c => c.name === County);
        if (!county) {
            county = { name: County, subCounties: [] };
            result.push(county);
        }

        let subCounty = county.subCounties.find(sc => sc.name === Constituency);
        if (!subCounty) {
            subCounty = { name: Constituency, wards: [] };
            county.subCounties.push(subCounty);
        }

        if (!subCounty.wards.includes(Ward)) {
            subCounty.wards.push(Ward);
        }
    });

    return result;
};

const DeliveryForm = () => {
    const navigate = useNavigate();
    const [counties, setCounties] = useState([]);
    const [county, setCounty] = useState('');
    const [subCounty, setSubCounty] = useState('');
    const [ward, setWard] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseName, setHouseName] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    useEffect(() => {
        // Fetch the data from the provided URL
        fetch('https://script.googleusercontent.com/macros/echo?user_content_key=eGUr17WaqI1SMb8BVxW5O1gh-6BLuswSWk575VHlESPL3GMli4FbTpSpIx0eiTy1bJzddr0_kNAu01b34EMgzcgXos9y0gNim5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPTg7q70c6bXETUWjib5naBS2mWPrs16CCi3a8yX3Gs0_7AldyRqjt8qVwNqGjCBmZ0v496HtayW-FIReJA3WTE0sUUtUBOS7g&lib=MOetB0mm9xG5ZijZygTgpHNdsv6zkqyqw')
            .then(response => response.json())
            .then(data => {
                const transformedData = transformData(data.data);
                setCounties(transformedData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleCountyChange = (event) => {
        setCounty(event.target.value);
        setSubCounty('');
        setWard('');
    };

    const handleSubCountyChange = (event) => {
        setSubCounty(event.target.value);
        setWard('');
    };

    const handleCompleteOrder = () => {
        // Handle form submission if needed
        navigate('/payments'); // Replace '/another-page' with the actual path you want to navigate to
    };

    const selectedCounty = counties.find(c => c.name === county);
    const subCounties = selectedCounty ? selectedCounty.subCounties : [];
    const selectedSubCounty = subCounties.find(sc => sc.name === subCounty);
    const wards = selectedSubCounty ? selectedSubCounty.wards : [];

    return (
        <Container>
            <FormContainer>
                <Title variant="h5">
                    Delivery Information
                </Title>
                <FormControl fullWidth margin="normal">
                    <InputLabel>County</InputLabel>
                    <Select value={county} onChange={handleCountyChange}>
                        {counties.map(c => (
                            <MenuItem key={c.name} value={c.name}>
                                {c.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Sub-County</InputLabel>
                    <Select value={subCounty} onChange={handleSubCountyChange} disabled={!county}>
                        {subCounties.map(sc => (
                            <MenuItem key={sc.name} value={sc.name}>
                                {sc.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="normal">
                    <InputLabel>Ward</InputLabel>
                    <Select value={ward} onChange={(e) => setWard(e.target.value)} disabled={!subCounty}>
                        {wards.map(w => (
                            <MenuItem key={w} value={w}>
                                {w}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <TextField
                    label="Street Name"
                    fullWidth
                    margin="normal"
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                />
                <TextField
                    label="House/Apartment Name"
                    fullWidth
                    margin="normal"
                    value={houseName}
                    onChange={(e) => setHouseName(e.target.value)}
                />
                <TextField
                    label="Contact Number"
                    fullWidth
                    margin="normal"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />
                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={handleCompleteOrder}
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Complete Order
                </StyledButton>
            </FormContainer>
        </Container>
    );
};

export default DeliveryForm;
