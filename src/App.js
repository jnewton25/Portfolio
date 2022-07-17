import React from "react";
import "./App.css";
import { About } from "./components/about/about";
import { Navbar } from "./components/navbar/navbar";
import { Work } from "./components/work/work";

function App() {
	return (
		<div>
			<Navbar />
			<About />
			<Work />
		</div>
	);
}

export default App;
