import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

export const Fullpage = () => {
	<ReactFullpage
		//fullpage options
		licenseKey={"YOUR_KEY_HERE"}
		scrollingSpeed={1000} /* Options here */
		render={({ state, fullpageApi }) => {
			return (
				<ReactFullpage.Wrapper>
					<div className="section">
						<p>Section 1 (welcome to fullpage.js)</p>
						<button onClick={() => fullpageApi.moveSectionDown()}>
							Click me to move down
						</button>
					</div>
					<div className="section">
						<p>Section 2</p>
					</div>
				</ReactFullpage.Wrapper>
			);
		}}
	/>;
};
