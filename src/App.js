import { useEffect } from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import ProjectDetail from "./pages/projectDetail";
import Notfound from "./pages/404";

import INFO from "./data/user";
import { TRACKING_ID } from "./data/tracking";
import "./app.css";

/* Old /article/:n links pointed at projects by position — keep them working. */
const LegacyArticle = () => {
	const { slug } = useParams();
	const project = INFO.projects[Number(slug) - 1];
	return <Navigate to={project ? `/projects/${project.slug}` : "/#projects"} replace />;
};

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/projects/:slug" element={<ProjectDetail />} />

				{/* Legacy routes from the previous version of the site */}
				<Route path="/about" element={<Navigate to="/#experience" replace />} />
				<Route path="/projects" element={<Navigate to="/#projects" replace />} />
				<Route path="/contact" element={<Navigate to="/#contact" replace />} />
				<Route path="/articles" element={<Navigate to="/#projects" replace />} />
				<Route path="/article/:slug" element={<LegacyArticle />} />

				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
