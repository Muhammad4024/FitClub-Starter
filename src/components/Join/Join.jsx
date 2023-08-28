import React, { useRef, useState } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
	const form = useRef();
	const [emailSent, setEmailSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_a39rhba",
				"template_su2f2de",
				form.current,
				"vwUlq74tf9DTQeeE8"
			)
			.then(
				(result) => {
					console.log(result.text);
					setEmailSent(true);

					// Set a timer to reset the emailSent state after 3000ms (3 seconds)
					setTimeout(() => {
						setEmailSent(false);
					}, 3000);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			{" "}
			<div className="Join" id="join-us">
				<div className="left-j">
					<hr />
					<div>
						<span className="stroke-text">READY TO</span>
						<span>LEVEL UP</span>
					</div>
					<div>
						<span>YOUR BODY</span>
						<span className="stroke-text">WITH US?</span>
					</div>
				</div>
				<div className="right-j">
					<form ref={form} className="email-container" onSubmit={sendEmail}>
						<input
							type="email"
							name="user_email"
							placeholder="Enter Your Email Address"
						/>	
						<button className="btn btn-j">Join Now</button>
					</form>
				</div>
			</div>
			<div>
				{emailSent ? (
					<div className="popup-message">
						Your Email has been sent to the FitClub support Team
					</div>
				) : null}
			</div>
		</>
	);
};

export default Join;
