import React, { useState } from "react";
import api from "../../services/api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useNavigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const FormTitle = styled("div")({
	backgroundColor: "#c00100",
	color: "white",
	width: 400,
	textAlign: "center",
	fontFamily: "Nunito, sans-serif",
	fontSize: 15,
	fontWeight: 50,
	padding: "0.5px",
	borderRadius: "0.5rem",
	marginLeft: "auto",
	marginRight: "auto",
	marginTop: "0",
	marginBottom: "5px",
});

function RegisterForm() {
	const navigate = useNavigate();
	const location = useLocation();

	const showLoginLink = location.pathname !== "/login";

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [idNumber, setIdNumber] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [gender, setGender] = useState(""); // New gender state
	const [dateOfBirth, setDateOfBirth] = useState(""); // New date of birth state
	const [formErrors, setFormErrors] = useState({});
	const [serverError, setServerError] = useState("");
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [countryCode, setCountryCode] = useState("+254");

	// Function to check if all fields are filled
	const areFieldsFilled = () => {
		return (
			name &&
			email &&
			phoneNumber &&
			idNumber &&
			password &&
			confirmPassword &&
			gender &&
			dateOfBirth
		);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormErrors({ ...formErrors, [name]: "" });
		setServerError("");
		switch (name) {
			case "name":
				setName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "phoneNumber":
				setPhoneNumber(value);
				break;
			case "idNumber":
				setIdNumber(value);
				break;
			case "password":
				setPassword(value);
				break;
			case "confirmPassword":
				setConfirmPassword(value);
				break;
			case "gender":
				setGender(value);
				break;
			case "dateOfBirth":
				setDateOfBirth(value);
				break;
			default:
				break;
		}
	};

	const handlePasswordChange = (event) => {
		const newPassword = event.target.value;
		setPassword(newPassword);

		// Custom password regex allowing user to choose special characters
		const regex =
			/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{5,15}$/;
		if (!regex.test(newPassword)) {
			setFormErrors({
				...formErrors,
				password:
					"Password should be between 5 and 15 characters and contain at least one letter, one number, and one special character",
			});
		} else {
			setFormErrors({ ...formErrors, password: "" });
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			if (password !== confirmPassword) {
				setFormErrors({
					...formErrors,
					confirmPassword: "Passwords do not match",
				});
				return;
			}

			const userData = {
				name,
				email,
				phoneNumber,
				idNumber,
				password,
				gender,
				dateOfBirth,
			};

			const response = await api.post("/register", userData);

			if (response.status === 200) {
				console.log("Registration successful:", response.data);
				// Show success message
				toast.success("Registration successful!", {
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
				// Navigate to the OTP verification page
				setTimeout(() => {
					navigate("/verify-otp", { state: { email } });
				}, 3000); // Delay navigation to verification
				// Reset form data on successful registration
				setName("");
				setEmail("");
				setPhoneNumber("");
				setIdNumber("");
				setPassword("");
				setConfirmPassword("");
				setGender("");
				setDateOfBirth("");
				setFormErrors({});
			} else {
				console.error("Registration failed. Status:", response.status);
			}
		} catch (error) {
			if (!error.response) {
				setServerError("No server response");
			} else if (error.response.status === 400) {
				setFormErrors({
					...formErrors,
					email: "User already exists, Log in instead",
				});
			} else {
				setServerError("Internal Server Error");
				console.error("Error submitting form data:", error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleCountryCodeChange = (event) => {
		setCountryCode(event.target.value);
		setPhoneNumber(""); // Clear phone number when country code changes
	};

	const theme = createTheme({
		palette: {
			primary: {
				main: "#c00100",
			},
			action: {
				active: "#d9d9d9",
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "100vh",
					padding: { xs: "10px", md: "20px" },
				}}>
				<ToastContainer />

				<Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "400px" } }}>
					<FormTitle>
						<h1>TeleAfia</h1>
						<h3 style={{ textAlign: "center", position: "relative" }}>
							<span
								style={{
									borderBottom: "1px solid white",
									display: "inline-block",
									width: "calc(200px)",
									padding: "0 10px",
								}}>
								Register
							</span>
						</h3>
					</FormTitle>

					<form onSubmit={handleSubmit}>
						<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
							{[
								{ label: "Name", name: "name", value: name },
								{ label: "Email", name: "email", value: email },
								{ label: "ID Number", name: "idNumber", value: idNumber },
								{
									label: "Password",
									name: "password",
									value: password,
									type: showPassword ? "text" : "password", // Toggle between text and password type
									InputProps: {
										// Show/Hide password visibility toggle
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													style={{ background: "grey" }}>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									},
								},
								{
									label: "Confirm Password",
									name: "confirmPassword",
									value: confirmPassword,
									type: showPassword ? "text" : "password", // Toggle between text and password type
									InputProps: {
										// Show/Hide password visibility toggle
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													style={{ background: "grey" }}>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
											</InputAdornment>
										),
									},
								},
							].map((field) => (
								<TextField
									key={field.name}
									label={field.label}
									variant="outlined"
									type={field.type || "text"}
									name={field.name}
									value={field.value}
									onChange={
										field.name === "password"
											? handlePasswordChange
											: handleChange
									}
									error={Boolean(formErrors[field.name])}
									helperText={formErrors[field.name]}
									style={{ width: "100%" }}
									autoComplete="off" // Turn off autocomplete
									InputProps={field.InputProps}
								/>
							))}
							<Box
								sx={{
									display: "flex",
									flexDirection: "row",
									alignItems: "center",
									gap: 1,
								}}>
								<Select
									value={countryCode}
									onChange={handleCountryCodeChange}
									displayEmpty
									inputProps={{ "aria-label": "Without label" }}
									style={{ marginBottom: "1px" }}>
									<MenuItem value="+254">+254 (Kenya)</MenuItem>
									<MenuItem value="+243">+243 (DRC)</MenuItem>
									<MenuItem value="+250">+250 (Rwanda)</MenuItem>
									<MenuItem value="+257">+257 (Burundi)</MenuItem>
									<MenuItem value="+255">+255 (Tanzania)</MenuItem>
									<MenuItem value="+256">+256 (Uganda)</MenuItem>
									<MenuItem value="+27">+27 (S. Sudan)</MenuItem>
									{/* Add more country codes as needed */}
								</Select>
								<TextField
									label="Phone Number"
									variant="outlined"
									type="text"
									name="phoneNumber"
									value={phoneNumber}
									onChange={handleChange}
									error={Boolean(formErrors.phoneNumber)}
									helperText={formErrors.phoneNumber}
									style={{ width: "100%" }}
									autoComplete="off" // Turn off autocomplete
									inputProps={{
										maxLength: 9,
										pattern: "[7-9][0-9]{8}",
									}}
								/>
							</Box>
							<Select
								label="Gender"
								variant="outlined"
								name="gender"
								value={gender}
								onChange={handleChange}
								error={Boolean(formErrors.gender)}
								helperText={formErrors.gender}
								style={{ width: "100%" }}>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value="Male">Male</MenuItem>
								<MenuItem value="Female">Female</MenuItem>
								<MenuItem value="Other">Other</MenuItem>
							</Select>
							<TextField
								label="Date of Birth"
								variant="outlined"
								type="date"
								name="dateOfBirth"
								value={dateOfBirth}
								onChange={handleChange}
								error={Boolean(formErrors.dateOfBirth)}
								helperText={formErrors.dateOfBirth}
								style={{ width: "100%" }}
								InputLabelProps={{
									shrink: true,
								}}
								placeholder="YYYY-MM-DD" // Date format placeholder
							/>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								sx={{ width: "100%" }}
								disabled={loading || !areFieldsFilled()} // Disable button if fields are not filled
							>
								{loading ? "Loading..." : "Register"}
							</Button>
							{serverError && <p style={{ color: "red" }}>{serverError}</p>}
						</Box>
					</form>
					{showLoginLink && (
						<Box mt={2}>
							<Link to="/login">Already registered? Proceed to Login</Link>
						</Box>
					)}
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default RegisterForm;
