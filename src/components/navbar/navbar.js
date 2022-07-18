import React from "react";

export const Navbar = () => {
	return (
		<div>
			<ul style={{ listStyleType: "none" }}>
				<a
					href="https://github.com/jnewton25"
					target="_blank"
					rel="noopener noreferrer"
					style={{ textDecoration: "none" }}
				>
					Justin Newton
				</a>
				<li>About</li>
				<li>Work</li>
				<li>Contact</li>
				<button>Resume</button>
			</ul>
		</div>
	);
};
