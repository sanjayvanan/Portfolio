import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./Nutz_logo.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Nutz Technovation Private Limited</div>
							<div className="work-subtitle">
								Web Developer-Intern
							</div>
							<div className="work-duration">3 months</div>
						</div>

						
					</div>
				}
			/>
<br />
<Card
				icon={faBriefcase}
				title="Achievements"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./project-example.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">College Level Project Developement</div>
							<div className="work-subtitle">
								Won
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./paper-presentation1.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Paper Presentation</div>
							<div className="work-subtitle">
								Won
							</div>
							<div className="work-duration">2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
