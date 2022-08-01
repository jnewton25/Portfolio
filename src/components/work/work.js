import React from "react";
import { project } from "../../projects";
import { Cards } from "../cards/cards";
//import Row from "react-bootstrap/Row";
import { Grid } from "@mui/material";

export const Work = () => {
	return (
		<div className="container-fluid bg card-layout">
			<Grid container>
				{project.map((project) => (
					<Grid item xs={12} sm={6} md={4}>
						<Cards key={project.id} project={project} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};
