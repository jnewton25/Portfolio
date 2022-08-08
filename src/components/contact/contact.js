import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_3ajfcje",
				"template_1dbafza",
				form.current,
				"i5Xcf7hFHshN_eyH-"
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Message Sent");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="container-fluid bg">
			<div className="row about-home">
				<div className="col">
					<span className="section-span"></span>
					<h2 className="section-header">Contact</h2>
					<form ref={form} onSubmit={sendEmail}>
						<label>Name</label>
						<input
							type="text"
							name="user_name"
							className="form-contact-input"
						/>
						<label>Email</label>
						<input
							type="email"
							name="user_email"
							className="form-contact-input"
						/>
						<label>Message</label>
						<textarea
							name="message"
							className="form-contact-textarea"
						/>
						<input
							type="submit"
							value="Send"
							className="form-contact-btn"
						/>
					</form>
				</div>
				<div className="form-map col">
					<img src="/assets/map-iowa.jpg" alt="map" />
				</div>
			</div>
		</div>
	);
};
