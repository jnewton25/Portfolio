import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Work } from "./components/work/work";

function App() {
	return (
		<div>
			<Navbar />
			<Work />
		</div>
	);
}

export default App;
