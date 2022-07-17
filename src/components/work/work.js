import React from "react";
import { project } from "../../projects";
import { Cards } from "../cards/cards";
import Row from "react-bootstrap/Row";

export const Work = () => {
	return (
		<div>
			<Row>
				{project.map((project) => (
					<Cards key={project.id} project={project} />
				))}
			</Row>
		</div>
	);
};
