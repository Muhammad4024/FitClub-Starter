import React, { useEffect } from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Programs = () => {
	useEffect(() => {
		Aos.init({ duration: 2000, once: "True" });
	}, []);
	return (
		<>
			<div data-aos="fade-up" className="Programs" id="programs">
		
				<div className="programs-header">
					<span className="stroke-text">Explore our</span>
					<span>Programs</span>
					<span className="stroke-text">to shape you</span>
				</div>
				<div className="program-categories">
					{programsData.map((program) => (
						<div className="category">
							{program.image}
							<span>{program.heading}</span>
							<span>{program.details}</span>
							<div className="join-now">
								<span>Join Now</span>
								<img src={RightArrow} alt="" />
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Programs;
