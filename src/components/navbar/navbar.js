import React from "react";
import "./navbar.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navi = () => {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			fixed="top"
			variant="dark"
			className="nav-bg"
		>
			<Container>
				<Navbar.Brand href="#home">Justin Newton</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link></Nav.Link>
						<Nav.Link></Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link href="#about">About</Nav.Link>
						<Nav.Link eventKey={2} href="#work">
							Work
						</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
						<Button variant="outline-light">Resume</Button>{" "}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
