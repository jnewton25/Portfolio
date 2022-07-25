import React from "react";
import "./about.css";
//import "../images.js";
import justin from "../images/justin.jpeg";

export const About = () => {
	return (
		<div className="bg">
			<div>
				<span className="section-span"></span>
				<h2 className="section-header">About Me</h2>
				<p>
					Hi, my name's Justin, a Front End Web Developer from Dallas,
					TX.
				</p>
				<br />
				<p>
					I work primarily with React, JavaScript, HTML, and CSS. My
					previous career was as a Supply Chain Technician, and a Real
					Estate Agent.
				</p>
			</div>
			<div className="home-about-image">
				<img src={justin} alt="justin" />
			</div>
		</div>
	);
};
