import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
	faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import Nav from "../components/site/nav";
import Footer from "../components/site/footer";
import Reveal from "../components/site/reveal";
import Cover from "../components/site/cover";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const SectionHead = ({ index, children }) => (
	<Reveal className="section-head">
		<div className="section-index">{index}</div>
		<h2 className="section-title">{children}</h2>
	</Reveal>
);

const Homepage = () => {
	const location = useLocation();
	const [photoFailed, setPhotoFailed] = useState(false);
	const seo = SEO.find((s) => s.page === "home");

	useEffect(() => {
		if (location.hash) {
			const el = document.querySelector(location.hash);
			if (el) {
				const t = setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 60);
				return () => clearTimeout(t);
			}
		}
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={seo.description} />
				<meta name="keywords" content={seo.keywords.join(", ")} />
			</Helmet>

			<div className="site" id="top">
				<div className="site-grid" />
				<div className="site-glow" />
				<div className="site-grain" />
				<Nav />

				{/* ---------------- HERO ---------------- */}
				<section className="hero container">
					<div className="hero-left">
						<div className="hero-status load" style={{ "--d": "0ms" }}>
							<span className="pulse" />
							<span className="mono">{INFO.hero.status}</span>
							{INFO.hero.companyLogo && (
								<img className="hero-status-logo" src={INFO.hero.companyLogo} alt="" />
							)}
						</div>

						<h1 className="hero-title">
							<span className="load" style={{ "--d": "80ms" }}>
								I build backends
							</span>
							<span className="load" style={{ "--d": "180ms" }}>
								that move <em className="serif-accent">real money</em>
							</span>
							<span className="load" style={{ "--d": "280ms" }}>
								— and keep them <em className="serif-accent">fast.</em>
							</span>
						</h1>

						<p className="hero-summary load" style={{ "--d": "400ms" }}>
							{INFO.hero.summary}
						</p>

						<div className="hero-actions load" style={{ "--d": "500ms" }}>
							<a className="btn btn-primary" href="#projects">
								See my work <span className="btn-arrow">→</span>
							</a>
							<a className="btn" href={INFO.main.resume} download="Sanjayvanan_S_G_Resume.pdf">
								Download résumé
							</a>
						</div>

						<div className="hero-socials load" style={{ "--d": "600ms" }}>
							<a href={INFO.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
								<FontAwesomeIcon icon={faGithub} />
							</a>
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer" aria-label="Stack Overflow">
								<FontAwesomeIcon icon={faStackOverflow} />
							</a>
							<a href={`mailto:${INFO.main.email}`} aria-label="Email">
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
							<span className="mono hero-loc">◎ {INFO.main.location}</span>
						</div>
					</div>

					<div className="hero-right load" style={{ "--d": "300ms" }}>
						<div className="hero-photo">
							{photoFailed ? (
								<div className="hero-photo-fallback">SG</div>
							) : (
								<img
									src={INFO.main.headshot}
									alt={INFO.main.name}
									onError={() => setPhotoFailed(true)}
								/>
							)}
						</div>

						<div className="terminal">
							<div className="terminal-bar">
								<span />
								<span />
								<span />
								<em>~/sanjayvanan — zsh</em>
							</div>
							<pre className="terminal-body">
								<span className="t-prompt">$</span> whoami --json{"\n"}
								{"{"}
								{"\n"}  <span className="t-key">"name"</span>: <span className="t-str">"Sanjayvanan S G"</span>,
								{"\n"}  <span className="t-key">"role"</span>: <span className="t-str">"Software Engineer"</span>,
								{"\n"}  <span className="t-key">"domain"</span>: <span className="t-str">"fintech"</span>,
								{"\n"}  <span className="t-key">"stack"</span>: [<span className="t-str">"node"</span>, <span className="t-str">"postgres"</span>, <span className="t-str">"redis"</span>, <span className="t-str">"aws"</span>],
								{"\n"}  <span className="t-key">"latency"</span>: <span className="t-num">"-28%"</span>,
								{"\n"}  <span className="t-key">"focus"</span>: <span className="t-str">"trading · settlement · payouts"</span>
								{"\n"}
								{"}"}
								{"\n"}<span className="t-prompt">$</span> <span className="caret" />
							</pre>
						</div>
					</div>
				</section>

				{/* ---------------- MARQUEE ---------------- */}
				<div className="marquee" aria-hidden="true">
					<div className="marquee-track">
						{[...INFO.marquee, ...INFO.marquee].map((m, i) => (
							<span key={i}>
								{m}
								<i>✦</i>
							</span>
						))}
					</div>
				</div>

				{/* ---------------- STATS ---------------- */}
				<section className="container stats">
					{INFO.stats.map((s, i) => (
						<Reveal className="stat" key={s.label} delay={i * 90}>
							<div className="stat-value">{s.value}</div>
							<div className="stat-label">{s.label}</div>
						</Reveal>
					))}
				</section>

				{/* ---------------- EXPERIENCE ---------------- */}
				<section className="section container" id="experience">
					<SectionHead index="01 — Experience">
						Where I've <em>shipped</em>
					</SectionHead>

					<div className="timeline">
						{INFO.experience.map((job, i) => (
							<Reveal className="job" key={job.company} delay={i * 60}>
								<div className="job-meta">
									<div className="job-period mono">{job.period}</div>
									<div className="job-loc mono">{job.location}</div>
									{job.current && <div className="job-now">Current</div>}
								</div>

								<div className="job-rail">
									<span className={`job-node ${job.current ? "is-current" : ""}`} />
								</div>

								<div className="job-card">
									<div className="job-head">
										<div className="job-logo">
											{job.logo ? (
												<img src={job.logo} alt="" />
											) : (
												<span>{job.company.charAt(0)}</span>
											)}
										</div>
										<div>
											<h3 className="job-company">{job.company}</h3>
											<div className="job-role">{job.role}</div>
										</div>
									</div>
									{job.domains && (
										<div className="job-domains">
											<span className="job-domains-label mono">Fintech</span>
											{job.domains.map((d) => (
												<span className="job-domain" key={d}>
													{d}
												</span>
											))}
										</div>
									)}
									{job.note && <p className="job-note">{job.note}</p>}
									<ul className="job-points">
										{job.points.map((p) => (
											<li key={p}>{p}</li>
										))}
									</ul>
								</div>
							</Reveal>
						))}
					</div>
				</section>

				{/* ---------------- SKILLS ---------------- */}
				<section className="section container" id="skills">
					<SectionHead index="02 — Toolkit">
						What I <em>reach for</em>
					</SectionHead>

					<div className="skills">
						{INFO.skills.map((g, i) => (
							<Reveal className="skill-group" key={g.group} delay={i * 70}>
								<div className="skill-group-head">
									<span className="mono">0{i + 1}</span>
									<h3>{g.group}</h3>
								</div>
								<div className="skill-items">
									{g.items.map((it) => (
										<span className="chip" key={it}>
											{it}
										</span>
									))}
								</div>
							</Reveal>
						))}
					</div>
				</section>

				{/* ---------------- PROJECTS ---------------- */}
				<section className="section container" id="projects">
					<SectionHead index="03 — Selected work">
						Things I've <em>built</em>
					</SectionHead>

					<div className="projects">
						{INFO.projects.map((p, i) => (
							<Reveal key={p.slug} className={`project ${i % 2 ? "project-flip" : ""}`}>
								<Link to={`/projects/${p.slug}`} className="project-cover">
									<Cover kind={p.kind} />
								</Link>
								<div className="project-body">
									<span className="mono">Project · 0{i + 1}</span>
									<h3 className="project-title">{p.title}</h3>
									<p className="project-tagline">{p.tagline}</p>
									<p className="project-summary">{p.summary}</p>
									<div className="project-stack">
										{p.stack.slice(0, 6).map((s) => (
											<span className="chip" key={s}>
												{s}
											</span>
										))}
									</div>
									<div className="project-actions">
										<Link className="btn btn-primary" to={`/projects/${p.slug}`}>
											Case study <span className="btn-arrow">→</span>
										</Link>
										<a className="btn" href={p.link} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon={faGithub} /> Source
										</a>
									</div>
								</div>
							</Reveal>
						))}
					</div>

					<Reveal className="earlier">
						<div className="mono earlier-head">Earlier builds</div>
						{INFO.earlierProjects.map((p) => (
							<a className="earlier-row" key={p.title} href={p.link} target="_blank" rel="noreferrer">
								<span className="earlier-title">{p.title}</span>
								<span className="earlier-desc">{p.description}</span>
								<span className="earlier-arrow">↗</span>
							</a>
						))}
					</Reveal>
				</section>

				{/* ---------------- EXPO ---------------- */}
				<section className="section container" id="expo">
					<SectionHead index="04 — On the ground">
						In the room with <em>the industry</em>
					</SectionHead>

					<div className="expo-list">
						{INFO.expos.map((ex, i) => (
							<div className={`expo ${i % 2 ? "expo-flip" : ""}`} key={ex.titleLead + ex.titleAccent}>
								<Reveal className="expo-photos">
									<figure className="expo-photo expo-photo-main">
										<img
											src={ex.photos[0].src}
											alt={ex.photos[0].alt}
											style={{ objectPosition: ex.photos[0].position }}
											loading="lazy"
										/>
									</figure>
									<figure className="expo-photo expo-photo-badge">
										<img
											src={ex.photos[1].src}
											alt={ex.photos[1].alt}
											style={{ objectPosition: ex.photos[1].position }}
											loading="lazy"
										/>
										<figcaption className="expo-stamp mono">{ex.stamp}</figcaption>
									</figure>
								</Reveal>

								<Reveal className="expo-body" delay={120}>
									<span className="expo-badge">
										<span className="pulse" />
										{ex.role}
									</span>
									<h3 className="expo-title">
										{ex.titleLead}
										<em className="serif-accent">{ex.titleAccent}</em>
										{ex.titleTail}
									</h3>
									<p className="expo-summary">{ex.summary}</p>
									<dl className="expo-facts">
										<div>
											<dt className="mono">Venue</dt>
											<dd>{ex.venue}</dd>
										</div>
										<div>
											<dt className="mono">Dates</dt>
											<dd>{ex.dates}</dd>
										</div>
										<div>
											<dt className="mono">Role</dt>
											<dd>Exhibitor</dd>
										</div>
									</dl>
									{ex.project && (
										<Link to={`/projects/${ex.project}`} className="btn expo-project">
											See the system I built <span className="btn-arrow">→</span>
										</Link>
									)}
								</Reveal>
							</div>
						))}
					</div>
				</section>

				{/* ---------------- RECOGNITION ---------------- */}
				<section className="section container" id="recognition">
					<SectionHead index="05 — Background">
						Education & <em>wins</em>
					</SectionHead>

					<div className="bg-grid">
						<Reveal className="bg-card">
							<span className="mono">Education</span>
							<h3>{INFO.education.degree}</h3>
							<p>{INFO.education.school}</p>
							<div className="bg-foot">
								<span className="chip">{INFO.education.period}</span>
								<span className="chip">{INFO.education.detail}</span>
							</div>
						</Reveal>

						<Reveal className="bg-card" delay={100}>
							<span className="mono">Honors & awards</span>
							<ul className="awards">
								{INFO.awards.map((a) => (
									<li key={a.title}>
										<span className="award-trophy">✦</span>
										<span className="award-title">{a.title}</span>
										<span className="mono">{a.date}</span>
									</li>
								))}
							</ul>
						</Reveal>
					</div>
				</section>

				{/* ---------------- CONTACT ---------------- */}
				<section className="section container" id="contact">
					<Reveal className="contact">
						<span className="mono">06 — Contact</span>
						<h2 className="contact-title">
							Got a system that needs to be <em className="serif-accent">faster</em>,{" "}
							<em className="serif-accent">safer</em>, or simply <em className="serif-accent">built</em>?
						</h2>
						<a className="contact-mail" href={`mailto:${INFO.main.email}`}>
							{INFO.main.email}
							<span>→</span>
						</a>
						<div className="contact-links">
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} /> LinkedIn
							</a>
							<a href={INFO.socials.github} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} /> GitHub
							</a>
							<a href={INFO.main.resume} target="_blank" rel="noreferrer">
								Résumé (PDF) ↗
							</a>
						</div>
					</Reveal>
				</section>

				<Footer />
			</div>
		</React.Fragment>
	);
};

export default Homepage;
