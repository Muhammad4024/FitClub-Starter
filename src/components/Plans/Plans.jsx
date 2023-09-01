import React, { useEffect } from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Plans = () => {
	useEffect(() => {
		Aos.init({ duration: 2000, once: "True" });
	}, []);
	return (
		<div className="plans-container">
			<div className="blur plans-blur-1"></div>
			<div className="blur plans-blur-2"></div>

			<div className="programs-header">
				<span className="stroke-text">READY TO START</span>
				<span>YOUR JOURNEY</span>
				<span className="stroke-text">NOW WITHUS</span>
			</div>
			<div data-aos="zoom-in" data-aos-duration="1000" className="plans">
				{plansData.map((plan, i) => (
					<div className="plan" key={i}>
						{plan.icon}
						<span>{plan.name}</span>
						<span>$ {plan.price}</span>
						<div className="features">
							{plan.features.map((feature, i) => (
								<div className="feature">
									<img src={whiteTick} alt="" />
									<span key={i}>{feature}</span>
								</div>
							))}
						</div>
						<div>
							<span>See more benefits -></span>
						</div>

						<button className="btn j-btn">Join Now</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Plans;
