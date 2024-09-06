"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useDarkMode } from "@/context/DarkModeContext";

import Logo from "./Logo";

import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
    const pathname = usePathname();
    const [isActive, setIsActive] = useState("/");
    const [showNav, setShowNav] = useState(false);
    const { isDarkMode, setIsDarkMode } = useDarkMode();

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <header className="border-b border-b-stone-50 fixed shadow-sm  dark:border-b-stone-900 w-full flex justify-center dark:bg-black/25 bg-white/25">
            <div className="flex w-full items-center justify-between h-20 md:px-10 px-5 max-w-[110rem]">
                <Logo />
                <nav className="flex items-center space-x-10">
                    <ul className="sm:block hidden space-x-8 font-medium text-stone-600 dark:text-stone-500">
                        {navLinks.map((link) => {
                            return (
                                <Link
                                    onClick={() => {
                                        setIsActive(link.href);
                                    }}
                                    className={`hover:text-black dark:hover:text-stone-300 ${
                                        pathname === link.href && "dark:text-stone-300 text-black"
                                    }`}
                                    key={link.href}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </ul>

                    {/* Dark mode toggle */}
                    <span
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="cursor-pointer hidden sm:block"
                    >
                        {isDarkMode ? <MdOutlineLightMode size={25} /> : <MdDarkMode size={25} />}
                    </span>
                </nav>

                <div className="flex items-center space-x-3 sm:hidden">
                    {/* Dark mode toggle */}
                    {!showNav && (
                        <span
                            onClick={() => setIsDarkMode(!isDarkMode)}
                            className="cursor-pointer sm:hidden p-1.5 rounded-full border border-stone-300 dark:border-stone-800"
                        >
                            {isDarkMode ? (
                                <MdOutlineLightMode size={25} />
                            ) : (
                                <MdDarkMode size={25} />
                            )}
                        </span>
                    )}

                    {/* Toggle menu */}
                    {!showNav && (
                        <span
                            onClick={() => setShowNav(true)}
                            className="sm:hidden block border border-stone-300 dark:border-stone-800 p-1.5 rounded-md cursor-pointer"
                        >
                            <CgMenuRight size={25} />
                        </span>
                    )}
                </div>

                {/* Mobile screen */}
                <nav
                    className={`bg-white z-[100] dark:bg-black border-r dark:border-r-stone-800 top-0 ${
                        showNav ? "left-0" : "-left-[30rem]"
                    } absolute h-screen font-medium w-[65%] transition-all ease-in-out duration-500 sm:hidden`}
                >
                    <ul className="p-2 flex flex-col items-center gap-y-10 pt-20 text-stone-600">
                        {navLinks.map((link) => {
                            return (
                                <Link
                                    onClick={() => {
                                        setIsActive(link.href);
                                        setShowNav(false);
                                    }}
                                    className={`hover:bg-slate-50 dark:hover:text-black dark:hover:bg-stone-300 w-28 rounded-sm py-1 text-center ${
                                        isActive === link.href &&
                                        "bg-slate-50 dark:bg-stone-300 dark:text-black text-black"
                                    }`}
                                    key={link.href}
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </ul>

                    <span
                        onClick={() => setShowNav(false)}
                        className={`border border-stone-300 dark:border-stone-800 p-1.5 absolute top-3 -right-12 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer transition-all duration-100 ${
                            showNav && "rotate-180"
                        }`}
                    >
                        <LiaTimesSolid size={27} />
                    </span>
                </nav>

                {/* Overlay */}
                {showNav && (
                    <div
                        onClick={() => setShowNav(false)}
                        className="h-screen w-full absolute top-0 left-0 z-40 bg-black/20"
                    />
                )}
            </div>
        </header>
    );
};

export default NavBar;
