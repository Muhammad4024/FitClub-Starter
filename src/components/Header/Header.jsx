import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
	const mobile = window.innerWidth <= 768 ? true : false;
	const [menuOpened, setMenuOpened] = useState(false);

	return (
		<div className="header">
			<img className="logo" src={Logo} alt="" />
			{menuOpened === false && mobile === true ? (
				<div
					style={{
						backgroundColor: "var(--appColor)",
						padding: "0.7rem",
						borderRadius: "5px",
					}}
					onClick={() => setMenuOpened(true)}>
					<img src={Bars} alt="" style={{ width: "2rem", height: "1rem" }} />
				</div>
			) : (
				<ul className="header-menu">
					<li>
						<Link
							to="home"
							activeClass="active"
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}>
							Home
						</Link>
					</li>
					<li>
						{" "}
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to="programs">
							Programs{" "}
						</Link>
					</li>
					<li>
						{" "}
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to="reasons">
							Why Us
						</Link>
					</li>
					<li>
						<Link
							onClick={() => setMenuOpened(false)}
							spy={true}
							smooth={true}
							to="plans">
							Plans
						</Link>
					</li>
					<li>
						<Link
							to="Testimonials"
							spy={true}
							smooth={true}
							onClick={() => setMenuOpened(false)}>
							Testimonials
						</Link>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Header;
