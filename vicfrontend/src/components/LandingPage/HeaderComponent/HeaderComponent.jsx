import React from "react";
import "./HeaderComponent.css";

function HeaderComponent() {
	return (
		<div>
			<nav className="nav">
				<a className="home" href="/Home">
					Home
				</a>
				<a className="about" href="/About Us">
					About Us
				</a>
				<a className="services" href="/dashboard">
					Services
				</a>
				<a className="contactus" href="/Contact Us">
					Contact Us
				</a>
				<button className="loginbutton">
					<a className="login" href="/Login">
						Login
					</a>
				</button>
				<button className="sign">
					<a className="signup" href="/register">
						Sign Up
					</a>
				</button>
			</nav>
		</div>
	);
}

export default HeaderComponent;
