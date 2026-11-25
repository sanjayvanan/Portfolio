import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/nav.css";

const LINKS = [
	{ label: "Experience", id: "experience" },
	{ label: "Toolkit", id: "skills" },
	{ label: "Work", id: "projects" },
	{ label: "Contact", id: "contact" },
];

/* Measure a link relative to the links rail so a pill can be placed on it. */
const measure = (rail, el) => {
	if (!rail || !el) return null;
	const r = rail.getBoundingClientRect();
	const b = el.getBoundingClientRect();
	return { x: b.left - r.left, w: b.width };
};

const Nav = () => {
	const location = useLocation();
	const isHome = location.pathname === "/";

	const [scrolled, setScrolled] = useState(false);
	const [avatarFailed, setAvatarFailed] = useState(false);
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(null);
	const [hovered, setHovered] = useState(null);
	const [activePill, setActivePill] = useState(null);
	const [hoverPill, setHoverPill] = useState(null);

	const railRef = useRef(null);
	const linkRefs = useRef({});
	const progressRef = useRef(null);

	/* Scroll state + reading progress (written straight to the DOM: no re-render per frame). */
	useEffect(() => {
		let frame = 0;
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(() => {
				const y = window.scrollY;
				setScrolled(y > 24);
				const max = document.documentElement.scrollHeight - window.innerHeight;
				if (progressRef.current) {
					progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
				}
			});
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	/* Scroll-spy: which section owns the band just under the nav. */
	useEffect(() => {
		if (!isHome) {
			setActive(null);
			return undefined;
		}
		const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
		if (!sections.length) return undefined;

		const io = new IntersectionObserver(
			(entries) => {
				entries.forEach((e) => {
					if (e.isIntersecting) setActive(e.target.id);
				});
			},
			{ rootMargin: "-30% 0px -60% 0px" }
		);
		sections.forEach((s) => io.observe(s));

		const onTop = () => {
			if (window.scrollY < window.innerHeight * 0.5) setActive(null);
		};
		window.addEventListener("scroll", onTop, { passive: true });
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", onTop);
		};
	}, [isHome]);

	/* Place the pills. Transitions retarget from the live value, so rapid changes stay continuous. */
	useLayoutEffect(() => {
		const place = () => {
			setActivePill(active ? measure(railRef.current, linkRefs.current[active]) : null);
			setHoverPill(hovered ? measure(railRef.current, linkRefs.current[hovered]) : null);
		};
		place();
		window.addEventListener("resize", place);
		return () => window.removeEventListener("resize", place);
	}, [active, hovered]);

	/* Close the mobile sheet on Escape or route change. */
	useEffect(() => {
		if (!open) return undefined;
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	useEffect(() => setOpen(false), [location.pathname, location.hash]);

	const close = () => setOpen(false);

	return (
		<header
			className={`nav ${scrolled ? "nav-scrolled" : ""} ${open ? "nav-open" : ""}`}
		>
			<div className="nav-capsule">
				<Link to="/" className="nav-brand" onClick={close} aria-label={`${INFO.main.name} — home`}>
					<span className="nav-mark" aria-hidden="true">
						{avatarFailed ? (
							<span>SG</span>
						) : (
							<img src={INFO.main.avatar} alt="" onError={() => setAvatarFailed(true)} />
						)}
					</span>
					<span className="nav-id">
						<span className="nav-name">{INFO.main.firstName}</span>
						<span className="nav-role">
							<span className="nav-role-dot" />
							{INFO.main.role}
							<span className="nav-role-domain"> · {INFO.main.domain}</span>
						</span>
					</span>
				</Link>

				<nav
					className="nav-links"
					aria-label="Primary"
					ref={railRef}
					onPointerLeave={() => setHovered(null)}
				>
					<span
						className={`nav-pill nav-pill-hover ${hoverPill ? "is-on" : ""}`}
						style={hoverPill ? { "--x": `${hoverPill.x}px`, "--w": `${hoverPill.w}px` } : undefined}
						aria-hidden="true"
					/>
					<span
						className={`nav-pill nav-pill-active ${activePill ? "is-on" : ""}`}
						style={activePill ? { "--x": `${activePill.x}px`, "--w": `${activePill.w}px` } : undefined}
						aria-hidden="true"
					/>
					{LINKS.map((l) => (
						<Link
							key={l.id}
							ref={(el) => (linkRefs.current[l.id] = el)}
							to={`/#${l.id}`}
							className={`nav-link ${active === l.id ? "is-active" : ""}`}
							aria-current={active === l.id ? "location" : undefined}
							onPointerEnter={() => setHovered(l.id)}
							onFocus={() => setHovered(l.id)}
							onBlur={() => setHovered(null)}
							onClick={close}
						>
							{l.label}
						</Link>
					))}
				</nav>

				<div className="nav-actions">
					<a
						className="nav-btn nav-btn-ghost"
						href={INFO.main.resume}
						target="_blank"
						rel="noreferrer"
						onClick={close}
					>
						Résumé
					</a>
					<a className="nav-btn nav-btn-hire" href={`mailto:${INFO.main.email}`} onClick={close}>
						<span className="nav-hire-dot" aria-hidden="true" />
						Hire me
					</a>
					<button
						className="nav-toggle"
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						aria-controls="nav-sheet"
						onClick={() => setOpen((v) => !v)}
					>
						<span />
						<span />
					</button>
				</div>

				<span className="nav-progress" ref={progressRef} aria-hidden="true" />
			</div>

			{/* Mobile sheet — grows out of the capsule it belongs to. */}
			<div className="nav-sheet" id="nav-sheet" aria-hidden={!open}>
				{LINKS.map((l, i) => (
					<Link
						key={l.id}
						to={`/#${l.id}`}
						className={`nav-sheet-link ${active === l.id ? "is-active" : ""}`}
						style={{ "--i": i }}
						tabIndex={open ? 0 : -1}
						onClick={close}
					>
						<span className="nav-sheet-index">0{i + 1}</span>
						{l.label}
						<span className="nav-sheet-arrow">→</span>
					</Link>
				))}
				<div className="nav-sheet-actions" style={{ "--i": LINKS.length }}>
					<a
						className="nav-btn nav-btn-ghost"
						href={INFO.main.resume}
						target="_blank"
						rel="noreferrer"
						tabIndex={open ? 0 : -1}
						onClick={close}
					>
						Résumé ↗
					</a>
					<a
						className="nav-btn nav-btn-hire"
						href={`mailto:${INFO.main.email}`}
						tabIndex={open ? 0 : -1}
						onClick={close}
					>
						<span className="nav-hire-dot" aria-hidden="true" />
						Hire me
					</a>
				</div>
			</div>
		</header>
	);
};

export default Nav;
