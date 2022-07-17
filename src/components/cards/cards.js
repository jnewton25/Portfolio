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
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="/logo512.png" //project.image
				alt="green iguana"
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
				<Button size="small">Live Demo</Button>
				<Button size="small">GitHub</Button>
			</CardActions>
		</Card>
	);
};
