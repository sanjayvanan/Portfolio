import React from "react";

import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
	return (
		<footer className="footer container">
			<div className="footer-left">
				<span className="mono">© {new Date().getFullYear()} {INFO.main.name}</span>
			</div>
			<div className="footer-mid mono">Built with React · Bengaluru, IN</div>
			<div className="footer-right">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					GitHub
				</a>
				<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
					LinkedIn
				</a>
				<a href="#top" className="footer-top">
					Back to top ↑
				</a>
			</div>
		</footer>
	);
};

export default Footer;
