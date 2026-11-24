import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Nav from "../components/site/nav";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.name}`;
	}, []);

	return (
		<div className="site">
			<div className="site-grid" />
			<div className="site-glow" />
			<div className="site-grain" />
			<Nav />
			<main className="container nf">
				<div className="mono nf-code">HTTP 404 · route not found</div>
				<h1 className="nf-title">
					This endpoint <em className="serif-accent">doesn't exist</em>.
				</h1>
				<pre className="nf-log">
					GET {window.location.pathname} → 404 (0.3ms)
				</pre>
				<Link to="/" className="btn btn-primary">
					Back to home <span className="btn-arrow">→</span>
				</Link>
			</main>
		</div>
	);
};

export default Notfound;
