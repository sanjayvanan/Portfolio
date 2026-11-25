const INFO = {
	main: {
		title: "Sanjayvanan S G — Software Engineer · Fintech",
		name: "Sanjayvanan S G",
		firstName: "Sanjayvanan",
		role: "Software Engineer",
		domain: "Fintech",
		email: "sanjayvanan03@gmail.com",
		location: "Bengaluru, India",
		resume: "/resume.pdf",
		avatar: "/avatar.jpg",
		headshot: "/headshot.jpg",
		logo: "/logo.png",
	},

	socials: {
		github: "https://github.com/sanjayvanan",
		linkedin: "https://www.linkedin.com/in/sanjayvanan-s-g-27305b23a/",
		stackoverflow:
			"https://stackoverflow.com/users/20279566/sanjayvanan-s-g-20isr042?tab=topactivity",
	},

	hero: {
		status: "Fintech Software Engineer @ Agilavetri PrimeTech",
		companyLogo: "/AVGLOGO.jpeg",
		summary:
			"Software engineer building trading, payments and financial systems — the trading engine and settlement flows of a crypto exchange, a financial operations platform running across 78 branches, and payout engines trusted by 6,000+ users. Node.js, PostgreSQL and AWS underneath; correctness, latency and reliability are the job.",
	},

	stats: [
		{ value: "8,000+", label: "internal API requests / day on services I designed" },
		{ value: "−28%", label: "average API latency after query & index tuning" },
		{ value: "78", label: "branches running a financial ops platform I own" },
		{ value: "6,000+", label: "active users on a calculation engine I re-engineered" },
	],

	marquee: [
		"Node.js",
		"PostgreSQL",
		"Redis",
		"Express",
		"React",
		"AWS",
		"pgvector",
		"MongoDB",
		"WebSockets",
		"BullMQ",
		"JWT / RBAC",
		"Microservices",
		"RAG",
		"Redux Toolkit",
	],

	experience: [
		{
			company: "Agilavetri PrimeTech",
			role: "Software Engineer",
			period: "Mar 2026 — Present",
			location: "Bengaluru",
			logo: "/AVGLOGO.jpeg",
			current: true,
			domains: ["Crypto exchange", "Financial operations", "Payouts & schemes"],
			points: [
				"Own end-to-end delivery across multiple production platforms — architecture, product logic and user-facing systems.",
				"Cut processing time by 30% on an internal financial operations platform deployed across 78 branches by redesigning core workflows and optimising queries for thousands of concurrent users.",
				"Core architect of a centralised crypto exchange for spot trading — built the trading engine and settlement flows, reducing transaction latency by 25% while working toward compliance readiness for public listing.",
				"Re-engineered the calculation engine of a multi-tenant financial scheme platform used by 6,000+ users, cutting processing time by 18% and improving payout accuracy.",
			],
		},
		{
			company: "Zosh Aerospace",
			role: "Software Engineer (Backend)",
			period: "Aug 2024 — Mar 2026",
			location: "Bengaluru",
			logo: "/zoshLogo.png",
			note: "Promoted from Software Engineer Intern for ownership of backend systems and production reliability.",
			points: [
				"Designed and deployed Node.js services handling 8,000+ internal API requests a day, reducing average latency by 28% through query optimisation and indexing.",
				"Architected RESTful APIs and modular service layers on clean-architecture principles, speeding up feature delivery by 20%.",
				"Designed normalised PostgreSQL schemas for high-volume operational data, improving query performance by 35%.",
				"Introduced Redis caching, cutting database load by 22%; implemented JWT auth and role-based access control.",
			],
		},
		{
			company: "Nutz Technovation",
			role: "Cloud Intern (AWS)",
			period: "Jun 2023 — Aug 2023",
			location: "Erode",
			logo: "/Nutz_logo.png",
			points: [
				"Built backend services and MERN web applications with RESTful API integration.",
				"Supported cloud deployment, testing and debugging across AWS environments.",
			],
		},
	],

	skills: [
		{ group: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "Microservices", "JWT Auth", "RBAC"] },
		{ group: "Data", items: ["PostgreSQL", "pgvector", "MongoDB", "Redis", "Schema design", "Indexing"] },
		{ group: "Frontend", items: ["React.js", "Redux Toolkit", "HTML5", "CSS3"] },
		{ group: "Languages", items: ["JavaScript", "Java", "Python", "SQL"] },
		{ group: "Cloud", items: ["AWS", "S3"] },
		{ group: "AI & LLMs", items: ["RAG", "Vector search", "Prompt engineering", "LLM API integration"] },
	],

	projects: [
		{
			slug: "intellibid",
			title: "IntelliBid",
			kind: "auction",
			tagline: "AI-powered asset valuation & real-time auction platform",
			stack: ["Node.js", "Express", "PostgreSQL + pgvector", "MongoDB", "Redis", "React", "AWS S3", "Gemini"],
			summary:
				"A real-time auction platform where live bids sync across every client without a refresh, auctions close on the exact second, and AI handles search, recommendations and item attributes.",
			highlights: [
				"Live bid sync across clients using WebSockets backed by Redis look-aside caching.",
				"Hybrid data layer — PostgreSQL for transactional integrity, MongoDB for flexible item data.",
				"Event-driven auction lifecycle on BullMQ delayed jobs: no polling, precise closures.",
				"Proxy bidding and automatic winner reallocation when a payment fails, so auctions keep moving.",
				"Semantic search, vector recommendations and generated item attributes with pgvector + Gemini.",
				"Image pipeline with Sharp and S3, plus Redux Toolkit state tuning for faster loads.",
			],
			link: "https://github.com/sanjayvanan/IntelliBid",
		},
		{
			slug: "coastal-surveillance",
			title: "Coastal Surveillance System",
			kind: "radar",
			tagline: "Real-time maritime monitoring & alerting platform",
			stack: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB", "AIS"],
			summary:
				"An end-to-end vessel monitoring system that tracks ships against geofenced maritime zones and fires rule-based alerts the moment a vessel enters or leaves.",
			highlights: [
				"Geofencing algorithms detecting vessel entry and exit across monitored zones.",
				"Indexed PostgreSQL schemas for large geospatial and time-series datasets.",
				"Backend services for high-volume ship-movement logging and data validation.",
				"Rule-based alert workflows triggered from live AIS movement data.",
				"SQL query optimisation that brought response latency down.",
			],
			link: "https://github.com/sanjayvanan/Coastal-Surveillance-System",
		},
	],

	earlierProjects: [
		{
			title: "Real Estate",
			description: "MERN platform to list, browse and compare properties for sale or rent.",
			link: "https://github.com/sanjayvanan/Mern_RealEstate",
		},
		{
			title: "Developers Search",
			description: "Connects senior and junior students — project showcases, messaging and appointments.",
			link: "https://github.com/sanjayvanan/Developers-Search",
		},
		{
			title: "Transportation Management",
			description: "Online reservation system for booking transportation services.",
			link: "https://github.com/sanjayvanan/Transportation-Management",
		},
	],

	expo: {
		event: "Forex Expo Dubai 2026",
		role: "Exhibitor · Agilavetri PrimeTech",
		venue: "Dubai World Trade Centre",
		dates: "22–23 Sept 2026",
		summary:
			"Exhibited with Agilavetri PrimeTech at one of the region's major trading-industry events — two days with brokers, trading firms and fintech teams, talking through the exchange and financial platforms we build and hearing first-hand what the industry needs from its infrastructure.",
		photos: [
			{ src: "/expo/forex-expo-dubai-2026-wall.jpg", alt: "Sanjayvanan wearing an exhibitor badge in front of the Forex Expo Dubai 2026 backdrop" },
			{ src: "/expo/forex-expo-dubai-2026-badge.jpg", alt: "Forex Expo Dubai 2026 exhibitor badge for Sanjayvanan S G, AVG" },
		],
	},

	education: {
		degree: "M.Sc Software Systems",
		school: "Kongu Engineering College, Erode",
		period: "2020 — 2025",
		detail: "CGPA 7.83",
	},

	awards: [
		{ title: "Hackathon Winner — Inter Department", date: "Apr 2024" },
		{ title: "Web Development Competition Winner", date: "Jan 2023" },
	],
};

export default INFO;
