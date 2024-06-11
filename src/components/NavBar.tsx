"use client";

import { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";

import Logo from "./Logo";

import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
    const [showNav, setShowNav] = useState(false);
    const [isActive, setIsActive] = useState(0);
    const { isDarkMode, setIsDarkMode } = useDarkMode();

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <header className="flex w-full items-center justify-between bg-white/95 h-14 md:px-10 px-5 border-b border-b-stone-50 fixed shadow-sm dark:bg-black/90 dark:border-b-stone-900">
            <Logo />
            <nav className="flex items-center space-x-10">
                <ul className="sm:block hidden space-x-8 font-medium text-stone-600 dark:text-stone-500">
                    {navLinks.map((link, i) => {
                        return (
                            <Link
                                onClick={() => setIsActive(i)}
                                className={`hover:text-black dark:hover:text-stone-300 ${
                                    isActive === i && "text-black dark:text-stone-300"
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

            <div className="flex items-center space-x-5 sm:hidden">
                {/* Dark mode toggle */}
                {!showNav && (
                    <span
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className={`cursor-pointer sm:hidden p-1.5 rounded-md hover:bg-slate-50 ${
                            !isDarkMode && "hover:bg-slate-50"
                        } dark:hover:bg-stone-800`}
                    >
                        {isDarkMode ? <MdOutlineLightMode size={25} /> : <MdDarkMode size={25} />}
                    </span>
                )}

                {/* Toggle menu */}
                {!showNav && (
                    <span
                        onClick={() => setShowNav(true)}
                        className="sm:hidden block hover:bg-slate-50 dark:hover:bg-stone-800 p-1.5 rounded-md cursor-pointer"
                    >
                        <CgMenuRight size={25} />
                    </span>
                )}
            </div>

            {/* Mobile screen */}
            <nav
                className={`bg-white dark:bg-black border-r dark:border-r-stone-800 top-0 ${
                    showNav ? "left-0" : "-left-[30rem]"
                } absolute h-screen font-medium w-[65%] z-50 transition-all ease-in-out duration-500 sm:hidden`}
            >
                <ul className="p-2 flex flex-col items-center gap-y-10 pt-20 text-stone-600">
                    {navLinks.map((link, i) => {
                        return (
                            <Link
                                onClick={() => {
                                    setIsActive(i);
                                    setShowNav(false);
                                }}
                                className={`hover:bg-slate-50 dark:hover:text-black dark:hover:bg-stone-300 w-28 rounded-sm py-1 text-center ${
                                    isActive === i &&
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
                    className="bg-white dark:bg-stone-300 dark:text-black p-1.5 absolute top-3 -right-12 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
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
        </header>
    );
};

export default NavBar;
