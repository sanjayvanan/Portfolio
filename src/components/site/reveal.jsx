import React, { useEffect, useRef, useState } from "react";

const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
	const ref = useRef(null);
	const [shown, setShown] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (!("IntersectionObserver" in window)) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setShown(true);
					io.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
		);
		io.observe(node);
		return () => io.disconnect();
	}, []);

	return (
		<Tag
			ref={ref}
			className={`reveal ${shown ? "is-in" : ""} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
			{...rest}
		>
			{children}
		</Tag>
	);
};

export default Reveal;
