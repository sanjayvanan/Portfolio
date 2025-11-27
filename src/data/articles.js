import React from "react";

/* --- 1. Coastal Surveillance System (FIRST) --- */

export function article_1() {
	return {
		date: "2024",
		title: "Coastal Surveillance System",
		description:
			"A fully integrated coastal monitoring solution featuring real-time vessel tracking, radar streams, AIS fusion, and automated alerts.",

		keywords: [
			"Coastal Surveillance",
			"AIS",
			"Radar",
			"Marine Security",
			"Real-time Tracking"
		],

		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				gap: 20px;
				padding: 10px 0;
			}

			.highlight-box {
				padding: 14px;
				border-left: 4px solid #4ac0ff;
				background: #f4fbff;
				border-radius: 6px;
			}
		`,

		body: (
			<>
				<div className="article-content">
					<div className="paragraph">
						We engineered a robust coastal surveillance system capable of handling
						high-density AIS feeds, radar overlays, and multi-sensor fusion. The
						system provides authorities with real-time situational awareness of
						the full coastline.
					</div>

					<div className="highlight-box">
						<h3>Main Capabilities</h3>
						<ul>
							<li>Real-time AIS stream processing</li>
							<li>Radar feed integration with WebGL visualization</li>
							<li>Automatic detection of suspicious vessel behaviour</li>
							<li>Secure multi-operator dashboard</li>
							<li>High-speed geospatial rendering engine</li>
						</ul>
					</div>

					<div className="paragraph">
						The platform was engineered for reliability, even under extreme
						sensor load, enabling fast response and enhanced coastal security.
					</div>
				</div>
			</>
		),
	};
}

/* --- 2. IntelliBid Project --- */

export function article_2() {
	return {
		date: "2025",
		title: "IntelliBid",
		description:
			"A smart bidding and procurement automation system designed to streamline vendor interactions, reduce manual workload, and ensure transparent decision-making.",

		keywords: [
			"IntelliBid",
			"Procurement Automation",
			"Tender System",
			"Bidding Platform"
		],

		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				gap: 20px;
				padding: 10px 0;
			}

			.feature-list {
				padding: 14px 18px;
				background: #f6f6f6;
				border-radius: 8px;
			}
		`,

		body: (
			<>
				<div className="article-content">
					<div className="paragraph">
						IntelliBid is a modern procurement platform built to eliminate
						repetitive tasks, reduce administrative overhead, and automate
						evaluation workflows. It ensures objective scoring and transparent
						vendor engagement.
					</div>

					<div className="feature-list">
						<h3>Core Features</h3>
						<ul>
							<li>Automated bid scoring engine</li>
							<li>Vendor submission portal</li>
							<li>Document validation and compliance checks</li>
							<li>Role-based access control</li>
							<li>Integrated communication and notifications</li>
						</ul>
					</div>

					<div className="paragraph">
						The system is optimized for accuracy, traceability, and ease of use,
						helping organizations run large-scale procurement efficiently.
					</div>
				</div>
			</>
		),
	};
}

/* --- EXPORT LIST --- */
const myArticles = [article_1, article_2];
export default myArticles;
