import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Contact = () => {
	const form = useRef();
	const nameRef = useRef(null);
	const emailRef = useRef(null);
	const textRef = useRef(null);

	const handleSubmit = (event) => {
		console.log("handleSubmit ran");
		event.preventDefault();

		// 👇️ clear all input values in the form
		event.target.reset();
	};

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
				<div className="col-2"></div>
				<div className="col">
					<span className="section-span"></span>
					<h2 className="section-header">Contact</h2>
					<div className="form">
						<form ref={form} onSubmit={sendEmail}>
							<div class="input-container ic2">
								<label className="label-text">Name</label>
								<input
									ref={nameRef}
									type="text"
									name="user_name"
									className="input"
									placeholder="Name"
								/>
							</div>
							<div class="input-container ic1">
								<label className="label-text">Email</label>
								<input
									ref={emailRef}
									type="email"
									name="user_email"
									className="input"
									placeholder="Email"
								/>
							</div>
							<div class="input-container ic1">
								<label className="label-text">Message</label>
								<textarea
									ref={textRef}
									name="message"
									className="textarea"
									placeholder="Message"
								/>
							</div>
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
