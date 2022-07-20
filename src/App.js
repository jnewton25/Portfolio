import React from "react";
import "./App.css";
import { About } from "./components/about/about";
import { Contact } from "./components/contact/contact";
import { Navi } from "./components/navbar/navbar";
import { Work } from "./components/work/work";

function App() {
	return (
		<div>
			<Navi />
			<About />
			<Work />
			<Contact />
		</div>
	);
}

export default App;
