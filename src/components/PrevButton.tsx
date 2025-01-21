"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const PrevButton = () => {
	const pathname = usePathname();
	const [prevPathname, setPrevPathname] = useState("");

	useEffect(() => {
		pathname === "/" && setPrevPathname("");
		pathname === "/about" && setPrevPathname("Home");
		pathname === "/projects" && setPrevPathname("About");
		pathname === "/contact" && setPrevPathname("Projects");
	}, [pathname]);

	return (
		<Link
			href={prevPathname === "Home" ? "/" : prevPathname.toLocaleLowerCase()}
			className={`fixed top-[calc(100%-8rem)] md:left-10 left-5 dark:bg-[#0a0a0a] bg-white group border dark:border-stone-800 border-stone-400 hover:border-stone-500 py-1 px-4 rounded-md ${
				pathname === "/" && "hidden"
			}`}
		>
			<span className="text-sm opacity-50 dark:group-hover:opacity-100 transition-all duration-300">Previous</span>
			<p className="text-lg font-medium flex items-center -translate-x-2 dark:text-white text-stone-600">
				<motion.span animate={{ x: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
					<FaAngleLeft />
				</motion.span>
				{prevPathname}
			</p>
		</Link>
	);
};

export default PrevButton;
