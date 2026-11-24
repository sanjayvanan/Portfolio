import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, Navigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Nav from "../components/site/nav";
import Footer from "../components/site/footer";
import Reveal from "../components/site/reveal";
import Cover from "../components/site/cover";

import INFO from "../data/user";

import "./styles/projectDetail.css";

const ProjectDetail = () => {
	const { slug } = useParams();
	const index = INFO.projects.findIndex((p) => p.slug === slug);
	const project = INFO.projects[index];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	if (!project) return <Navigate to="/#projects" replace />;

	const next = INFO.projects[(index + 1) % INFO.projects.length];

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${project.title} | ${INFO.main.name}`}</title>
				<meta name="description" content={project.summary} />
				<meta name="keywords" content={project.stack.join(", ")} />
			</Helmet>

			<div className="site" id="top">
				<div className="site-grid" />
				<div className="site-glow" />
				<div className="site-grain" />
				<Nav />

				<main className="container pd">
					<Link to="/#projects" className="pd-back mono">
						← All work
					</Link>

					<Reveal className="pd-head">
						<span className="mono pd-kicker">Case study · 0{index + 1}</span>
						<h1 className="pd-title">{project.title}</h1>
						<p className="pd-tagline">{project.tagline}</p>
					</Reveal>

					<Reveal className="pd-cover" delay={100}>
						<Cover kind={project.kind} />
					</Reveal>

					<div className="pd-grid">
						<Reveal as="aside" className="pd-aside">
							<div className="pd-aside-block">
								<span className="mono">Stack</span>
								<div className="pd-stack">
									{project.stack.map((s) => (
										<span className="chip" key={s}>
											{s}
										</span>
									))}
								</div>
							</div>
							<div className="pd-aside-block">
								<span className="mono">Code</span>
								<a className="btn" href={project.link} target="_blank" rel="noreferrer">
									<FontAwesomeIcon icon={faGithub} /> View on GitHub
								</a>
							</div>
						</Reveal>

						<div className="pd-main">
							<Reveal as="p" className="pd-summary">
								{project.summary}
							</Reveal>

							<Reveal className="pd-highlights">
								<h2>What I built</h2>
								<ol>
									{project.highlights.map((h, i) => (
										<li key={h}>
											<span className="pd-num mono">{String(i + 1).padStart(2, "0")}</span>
											<span>{h}</span>
										</li>
									))}
								</ol>
							</Reveal>
						</div>
					</div>

					{next && next.slug !== project.slug && (
						<Reveal>
							<Link to={`/projects/${next.slug}`} className="pd-next">
								<span className="mono">Next project</span>
								<span className="pd-next-title">
									{next.title} <span className="pd-next-arrow">→</span>
								</span>
							</Link>
						</Reveal>
					)}
				</main>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default ProjectDetail;
