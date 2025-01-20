"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

type props = {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	towards?: "left" | "right";
};

export const Slide = ({ children, className, delay, towards }: props) => {
	const ref = useRef(null);
	const isInview = useInView(ref, { once: true });
	const controls = useAnimation();

	useEffect(() => {
		if (isInview) {
			controls.start("stop");
		}
	}, [controls, isInview]);

	return (
		<motion.div
			ref={ref}
			variants={{
				start: towards ? { opacity: 0, translateX: towards === "left" ? -30 : 30 } : { opacity: 0, translateY: 30 },
				stop: { opacity: 1, translateX: 0, translateY: 0 },
			}}
			transition={{
				ease: "easeInOut",
				duration: 0.5,
				delay: delay,
				stiffness: 0.5,
			}}
			animate={controls}
			initial="start"
			className={className}
		>
			{children}
		</motion.div>
	);
};
