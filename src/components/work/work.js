import React from "react";
import { project } from "../../projects";
import { Cards } from "../cards/cards";
//import Row from "react-bootstrap/Row";
import { Grid } from "@mui/material";

export const Work = () => {
	return (
		<Grid
			container
			spacing={4}
			direction="row"
			justifyContent="space-evenly"
			alignItems="center"
			style={{ minHeight: "100vh", backgroundColor: "#557a95" }}
		>
			{project.map((project) => (
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					container
					direction="row"
					justifyContent="space-evenly"
					alignItems="center"
				>
					<Cards key={project.id} project={project} />
				</Grid>
			))}
		</Grid>
	);
};
