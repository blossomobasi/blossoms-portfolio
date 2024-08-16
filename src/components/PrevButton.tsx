"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";

const PrevButton = () => {
    const pathname = usePathname();
    const [prevPathname, setPrevPathname] = useState("");

    useEffect(() => {
        pathname === "/"
            ? setPrevPathname("")
            : pathname === "/about"
            ? setPrevPathname("Home")
            : pathname === "/projects"
            ? setPrevPathname("About")
            : pathname === "/contact"
            ? setPrevPathname("Projects")
            : "";
    }, [pathname]);

    return (
        <Link
            href={prevPathname === "Home" ? "/" : prevPathname.toLocaleLowerCase()}
            className={`fixed top-[calc(100%-8rem)] left-10 group ${pathname === "/" && "hidden"}`}
        >
            <span className="text-sm opacity-50 pl-4 group-hover:opacity-100 transition-all duration-300">
                Previous
            </span>
            <p className="text-lg font-medium flex items-center">
                <span className="group-hover:-translate-x-2 transition-all duration-300">
                    <FaAngleLeft />
                </span>
                {prevPathname}
            </p>
        </Link>
    );
};

export default PrevButton;
