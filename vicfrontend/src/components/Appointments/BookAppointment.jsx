import React, { useState, useEffect } from "react";
import {
	Button,
	TextField,
	Typography,
	Container,
	Grid,
	MenuItem,
	Snackbar,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const styles = {
	container: {
		minHeight: "100vh",
		paddingTop: "64px",
	},
	formContainer: {
		backgroundColor: "#fff",
		padding: "32px",
		borderRadius: "8px",
		boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
	},
	button: {
		marginTop: "20px",
		backgroundColor: "#c00100",
	},
	header: {
		backgroundColor: "#c00100",
		color: "#fff",
		padding: "16px 0",
		textAlign: "center",
		borderRadius: "8px 8px 0 0",
	},
	successMessage: {
		marginTop: "20px",
		color: "green",
	},
};

const BookAppointment = () => {
	const [formData, setFormData] = useState({
		idNumber: "",
		fullName: "",
		phoneNumber: "",
		service: "",
		time: "",
		appointmentType: "",
		age: "",
		gender: "",
		bookFor: "myself",
		areaOfResidence: "",
	});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [openSnackbar, setOpenSnackbar] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		// Mock function to get user data (replace with actual API call)
		const getUserData = () => {
			return {
				idNumber: "12345678",
				fullName: "John Doe",
				phoneNumber: "0700000000",
				age: "30",
				gender: "male",
			};
		};

		if (formData.bookFor === "myself") {
			const userData = getUserData();
			setFormData((prevFormData) => ({
				...prevFormData,
				...userData,
			}));
		}
	}, [formData.bookFor]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"http://192.168.89.29:5500/api/appointments/bookappointment",
				formData
			);
			if (response.status === 201) {
				const { appointmentId } = response.data;
				setSuccessMessage("Appointment booked successfully");
				setErrorMessage("");
				setOpenSnackbar(true);
				setFormData({
					idNumber: "",
					fullName: "",
					phoneNumber: "",
					service: "",
					time: "",
					appointmentType: "",
					age: "",
					gender: "",
					bookFor: "myself",
					areaOfResidence: "",
				});
				setTimeout(() => {
					navigate("/appointments-history", { state: { appointmentId } });
				}, 2000);
			} else {
				setSuccessMessage("");
				setErrorMessage("Error booking appointment");
			}
			console.log(response);
		} catch (error) {
			console.error("Error booking appointment:", error);
			setSuccessMessage("");
			setErrorMessage("Error booking appointment");
		}
	};

	return (
		<Container style={styles.container} maxWidth="lg">
			<Grid container justifyContent="center">
				<Grid item xs={12} sm={8} md={6}>
					<div style={styles.formContainer}>
						<div style={styles.header}>
							<Typography variant="h4">Book Appointment</Typography>
						</div>
						{successMessage && (
							<Typography
								variant="body1"
								align="center"
								style={styles.successMessage}
							>
								{successMessage}
							</Typography>
						)}
						{errorMessage && (
							<Typography
								variant="body1"
								align="center"
								style={{ color: "red" }}
							>
								{errorMessage}
							</Typography>
						)}
						<form onSubmit={handleSubmit}>
						<TextField
								label="Book For"
								variant="outlined"
								fullWidth
								margin="normal"
								select
								name="bookFor"
								value={formData.bookFor}
								onChange={handleChange}
								required
							>
								<MenuItem value="myself">Myself</MenuItem>
								<MenuItem value="others">Others</MenuItem>
							</TextField>
							{formData.bookFor === "others" && (
								<>
									<TextField
										label="Full Name"
										variant="outlined"
										fullWidth
										margin="normal"
										name="fullName"
										value={formData.fullName}
										onChange={handleChange}
										required
									/>
									<TextField
										label="Phone Number"
										variant="outlined"
										fullWidth
										margin="normal"
										name="phoneNumber"
										value={formData.phoneNumber}
										onChange={handleChange}
										required
									/>
								</>
							)}
							<TextField
								label="ID Number"
								variant="outlined"
								fullWidth
								margin="normal"
								name="idNumber"
								value={formData.idNumber}
								onChange={handleChange}
								required
							/>
							<TextField
								label="Service"
								variant="outlined"
								fullWidth
								margin="normal"
								name="service"
								value={formData.service}
								onChange={handleChange}
								required
							/>
							<TextField
								label="Appointment Type"
								variant="outlined"
								fullWidth
								margin="normal"
								select
								name="appointmentType"
								value={formData.appointmentType}
								onChange={handleChange}
								required
							>
								<MenuItem value="physical">Physical</MenuItem>
								<MenuItem value="virtual">Virtual</MenuItem>
							</TextField>
							<TextField
								label="Age"
								variant="outlined"
								fullWidth
								margin="normal"
								name="age"
								value={formData.age}
								onChange={handleChange}
								required
							/>
							<TextField
								label="Gender"
								variant="outlined"
								fullWidth
								margin="normal"
								select
								name="gender"
								value={formData.gender}
								onChange={handleChange}
								required
							>
								<MenuItem value="male">Male</MenuItem>
								<MenuItem value="female">Female</MenuItem>
							</TextField>
							<TextField
								label="Area of Residence"
								variant="outlined"
								fullWidth
								margin="normal"
								name="areaOfResidence"
								value={formData.areaOfResidence}
								onChange={handleChange}
								required
							/>
							<Button
								variant="contained"
								color="primary"
								fullWidth
								type="submit"
								style={styles.button}
							>
								Book Appointment
							</Button>
							<Snackbar
								open={openSnackbar}
								autoHideDuration={2000}
								onClose={() => setOpenSnackbar(false)}
								message="Booking successful"
							/>
						</form>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BookAppointment;
