import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Container,
	Typography,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
	CircularProgress,
} from "@mui/material";
import axios from "axios";

const AppointmentHistory = () => {
	const location = useLocation();
	const appointmentId = location.state ? location.state.appointmentId : "";
	const [appointments, setAppointmentHistory] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null); // State for error handling

	useEffect(() => {
		fetchData(); // Fetch data from the server
	}, [appointmentId]);

	const fetchData = async () => {
		if (appointmentId) {
			setLoading(true); // Turn on loading indicator
			try {
				const response = await axios.get(
					`http://192.168.89.29:5500/api/appointments/appointmentStatus/${appointmentId}`,
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				if (response.status === 200) {
					setAppointmentHistory([response.data]); // Store fetched data in state
					setLoading(false); // Turn off loading indicator
				} else {
					throw new Error("Internal Server error");
				}
			} catch (error) {
				setError("Error fetching data"); // Set error state
				setLoading(false); // Turn off loading indicator
			}
		}
	};

	return (
		<Container maxWidth="md">
			<Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
				My Appointments
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Full Name</TableCell>
							<TableCell>Phone Number</TableCell>
							<TableCell>Service</TableCell>
							<TableCell>Date</TableCell>
							<TableCell>Time</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{loading ? (
							<TableRow>
								<TableCell colSpan={6} align="center">
									<CircularProgress />
								</TableCell>
							</TableRow>
						) : error ? (
							<TableRow>
								<TableCell colSpan={6} align="center">
									{error}
								</TableCell>
							</TableRow>
						) : appointments.length === 0 ? (
							<TableRow>
								<TableCell colSpan={6} align="center">
									No data available
								</TableCell>
							</TableRow>
						) : (
							appointments.map((appointment) => (
								<TableRow key={appointment.appointmentId}>
									<TableCell>{appointment.fullName}</TableCell>
									<TableCell>{appointment.phoneNumber}</TableCell>
									<TableCell>{appointment.service}</TableCell>
									<TableCell>{appointment.date}</TableCell>
									<TableCell>{appointment.time}</TableCell>
									<TableCell>{appointment.status}</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<Button
				variant="contained"
				color="primary"
				component={Link}
				to="/payments"
				sx={{ mt: 2 }}>
				Proceed to Payments
			</Button>
		</Container>
	);
};

export default AppointmentHistory;
