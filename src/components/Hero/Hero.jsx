import React, { useEffect } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
	useEffect(() => {
		Aos.init({ duration: 2000, once: "True" });
	}, []);
	const transition = { type: "spring", duration: 3 };

	const mobile = window.innerWidth <= 768 ? true : false;

	return (
		<>
			<div className="hero" id="home">
				<div className="blur hero-blur"></div>
				<div data-aos="fade-in" className="left-h">
					<Header />
					<div className="the-best-ad">
						<motion.div
							initial={{ left: mobile ? "178px" : "238px" }}
							whileInView={{ left: "8px" }}
							transition={{ ...transition, type: "tween" }}></motion.div>
						<span>the best fitness club in the town</span>
					</div>
					<div className="hero-text">
						<div>
							<span className="stroke-text">Shape </span> <span>Your</span>
						</div>
						<div>
							<span>Ideal body</span>
						</div>
						<div>
							<span>
								In here we will help you to shape and build your ideal body and
								live up your life to fullest
							</span>
						</div>
					</div>
					<div className="figures">
						<div>
							<span>
								<NumberCounter end={140} start={100} delay="4" preFix="+" />
							</span>
							<span>expert coaches</span>
						</div>
						<div>
							<span>
								<NumberCounter end={978} start={800} delay="4" preFix="+" />
							</span>
							<span>members joined</span>
						</div>
						<div>
							<span>
								<NumberCounter end={50} start={20} delay="4" preFix="+" />
							</span>
							<span>fitness programs</span>
						</div>
					</div>
					<div className="hero-buttons">
						<Link to="join-us" spy={true} smooth={true}>
							<buttons className="btn">Get Started</buttons>
						</Link>
						<buttons className="btn">Learn More</buttons>
					</div>
				</div>
				<div data-aos="fade-in" className="right-h">
					{/*<button className="btn">Join Now</button>*/}
					<motion.div
						initial={{ right: "2rem" }}
						transition={transition}
						whileInView={{ right: "8rem" }}
						className="heart-rate">
						<img src={Heart} alt="" />
						<span>Heart Rate</span>
						<span>116 BPM</span>
					</motion.div>
					<img src={hero_image} alt="" className="hero-image" />
					<motion.img
						initial={{ right: "11rem" }}
						whileInView={{ right: "20rem" }}
						transition={transition}
						src={hero_image_back}
						alt=""
						className="hero-image-back"
					/>

					<motion.div
						initial={{ right: "37rem" }}
						transition={transition}
						whileInView={{ right: "28rem" }}
						className="calories">
						<img src={Calories} alt="" />
						<div>
							<span>Calories Burned</span>
							<span>220kcal</span>
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default Hero;
