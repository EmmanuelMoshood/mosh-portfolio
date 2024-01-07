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
								src="./clay.png"
								alt="clay"
								className="work-image"
							/>
							<div className="work-title">Clay - Home Builder Software</div>
							<div className="work-subtitle">
							DevOps Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./xfusion.png"
								alt="xfusion"
								className="work-image"
							/>
							<div className="work-title">xFusionCorp</div>
							<div className="work-subtitle">
							DevOps Engineer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./crashive_logo.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">CrasHive Experience</div>
							<div className="work-subtitle">
							Cloud Engineer
							</div>
							<div className="work-duration">2017 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
