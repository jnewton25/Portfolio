import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";

export const Cards = ({ project }) => {
	return (
		<Card sx={{ maxWidth: 345, minWidth: 280 }}>
			<CardMedia
				component="img"
				height="140"
				image={project.image}
				alt="project preview image"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{project.title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{project.body}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					size="small"
					onClick={(e) => {
						e.preventDefault();
						window.open(project.demo, "_blank");
					}}
				>
					Live Demo
				</Button>
				<Button
					size="small"
					onClick={(e) => {
						e.preventDefault();
						window.open(project.link, "_blank");
					}}
				>
					GitHub
				</Button>
			</CardActions>
		</Card>
	);
};
