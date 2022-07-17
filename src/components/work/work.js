import React from "react";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@mui/material";

export const Work = () => {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image="/logo512.png"
				alt="green iguana"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					PROJECT.TITLE
				</Typography>
				<Typography variant="body2" color="text.secondary">
					PROJECT.BODY
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Live Demo</Button>
				<Button size="small">GitHub</Button>
			</CardActions>
		</Card>
	);
};
