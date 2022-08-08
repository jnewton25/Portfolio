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
		<div className="container-fluid bg mt-5">
			<div className="row about-home">
				<div className="col">
					<span className="section-span"></span>
					<h2 className="section-header">Contact</h2>
					<div className="form">
						<form ref={form} onSubmit={sendEmail}>
							<label>Name</label>
							<input
								type="text"
								name="user_name"
								className="input"
							/>
							<label>Email</label>
							<input
								type="email"
								name="user_email"
								className="input"
							/>
							<label>Message</label>
							<textarea name="message" className="textarea" />
							<input
								type="submit"
								value="Send"
								className="submit-btn"
							/>
						</form>
					</div>
				</div>
				<div className="form-map col">
					<img src="/assets/iowa-map.png" alt="map" />
				</div>
			</div>
		</div>
	);
};
