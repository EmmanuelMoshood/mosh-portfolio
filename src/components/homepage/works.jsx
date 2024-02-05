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
							<div className="work-title">
								Clay - Home Builder Software
							</div>
							<div className="work-subtitle">DevOps Engineer</div>
							<div className="work-duration">2021 - Present</div>
						</div>

						<div className="work">
							<img
								src="./menaget.png"
								alt="menaget logo"
								className="work-image"
							/>
							<div className="work-title">Menaget Inc.</div>
							<div className="work-subtitle">
								Cloud Administrator
							</div>
							<div className="work-duration">2019 - 2021</div>
						</div>

						<div className="work">
							<img
								src="./hotels_ng_logo.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Hotels.ng</div>
							<div className="work-subtitle">
								Backend Developer (Intern)
							</div>
							<div className="work-duration">2018 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
