"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const NextButton = () => {
    const pathname = usePathname();
    const [nextPathname, setNextPathname] = useState("");

    useEffect(() => {
        pathname === "/"
            ? setNextPathname("About")
            : pathname === "/about"
            ? setNextPathname("Projects")
            : pathname === "/projects"
            ? setNextPathname("Contact")
            : pathname === "/contact"
            ? setNextPathname("")
            : "";
    }, [pathname]);

    return (
        <Link
            href={nextPathname.toLocaleLowerCase()}
            className={`fixed top-[calc(100%-8rem)] right-10 group border dark:border-stone-800 border-stone-400 hover:border-stone-500 py-1 px-2 rounded-md ${
                pathname === "/contact" && "hidden"
            }`}
        >
            <span className="text-sm opacity-50 dark:group-hover:opacity-100 transition-all duration-300">
                Next
            </span>
            <p className="text-lg font-medium flex items-center dark:text-white text-stone-600">
                {nextPathname}
                <span className="group-hover:translate-x-2 transition-all duration-300">
                    <FaAngleRight />
                </span>
            </p>
        </Link>
    );
};

export default NextButton;
