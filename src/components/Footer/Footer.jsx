import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
	return (
		<>
			<div className="Footer-container">
				<hr />
				<div className="footer">
					<div className="sub-footer">
						<div className="left-footer">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.630558129686!2d74.18498737624445!3d31.36917255459541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff1e0a54ea95%3A0x4116546e4c502737!2sBanera%20country%20club!5e0!3m2!1sen!2s!4v1693501983739!5m2!1sen!2s"
								width="500"
								height="270"
								allowfullscreen=""
								loading="lazy"
								referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
						<div className="right-footer">
							<div className="social-links">
								<img className="footerimg" src={Github} alt="" />
								<img className="footerimg" src={Instagram} alt="" />
								<img className="footerimg" src={LinkedIn} alt="" />
							</div>

							<div className="logo-f">
								<img src={Logo} alt="" />
							</div>
						</div>
					</div>
					<div className="blur blur-f-1"></div>
					<div className="blur blur-f-2"></div>
				</div>
			</div>
		</>
	);
};

export default Footer;
