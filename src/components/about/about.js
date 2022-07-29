import React from "react";
import "./about.css";

export const About = () => {
	return (
		<div className="container-fluid bg">
			<div className="row about-home">
				<div className="col-2"></div>
				<div className="col">
					<span className="section-span"></span>
					<h2 className="section-header">About Me</h2>
					<p>
						Hi, my name's Justin, a Front End Web Developer from
						Dallas, TX.
					</p>
					<br />
					<p>
						I work primarily with React, JavaScript, HTML, and CSS.
						My previous career was as a Supply Chain Technician, and
						a Real Estate Agent.
					</p>
				</div>
				<div className="home-about-img col">
					<img src="/assets/justin.jpg" alt="justin" />
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	);
};
