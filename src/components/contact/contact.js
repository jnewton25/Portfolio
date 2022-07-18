import React, { useRef } from "react";
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
		<div>
			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
};
