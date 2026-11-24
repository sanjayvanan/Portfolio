import React from "react";

import "./styles/cover.css";

/* Decorative, code-drawn cover art for each project. */

const BARS = [32, 44, 38, 56, 50, 68, 62, 80, 74, 92];

const AuctionCover = () => (
	<div className="cover cover-auction" aria-hidden="true">
		<div className="cover-bars">
			{BARS.map((h, i) => (
				<span key={i} style={{ height: `${h}%`, animationDelay: `${i * 90}ms` }} />
			))}
		</div>
		<div className="cover-ticket">
			<span className="cover-ticket-label">LIVE BID</span>
			<span className="cover-ticket-value">₹ 4,82,500</span>
			<span className="cover-ticket-delta">▲ +12,000 · 0.2s ago</span>
		</div>
	</div>
);

const RadarCover = () => (
	<div className="cover cover-radar" aria-hidden="true">
		<div className="radar">
			<div className="radar-sweep" />
			<span className="radar-blip" style={{ top: "30%", left: "62%" }} />
			<span className="radar-blip radar-blip-alert" style={{ top: "58%", left: "34%" }} />
			<span className="radar-blip" style={{ top: "70%", left: "66%" }} />
			<div className="radar-zone" />
		</div>
		<div className="cover-ticket cover-ticket-mint">
			<span className="cover-ticket-label">ZONE ALERT</span>
			<span className="cover-ticket-value">MMSI 419··872</span>
			<span className="cover-ticket-delta">entered geofence · Z-04</span>
		</div>
	</div>
);

const Cover = ({ kind }) => (kind === "radar" ? <RadarCover /> : <AuctionCover />);

export default Cover;
