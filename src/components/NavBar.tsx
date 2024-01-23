"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between h-14 md:px-10 px-5 border-b border-b-stone-50 sticky shadow-sm">
      <Logo />
      <nav className="sm:block hidden">
        <ul className="space-x-8 font-medium text-stone-600">
          {navLinks.map((link, i) => {
            return (
              <Link
                onClick={() => setIsActive(i)}
                className={`hover:text-black ${isActive === i && "text-black"}`}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </nav>
      {!showNav && (
        <span
          onClick={() => setShowNav(true)}
          className="sm:hidden block hover:bg-slate-50 p-1.5 rounded-md cursor-pointer"
        >
          <CgMenuRight size={25} />
        </span>
      )}

      {/* Mobile screen */}
      {showNav && (
        <nav className="bg-white top-0 left-0 absolute h-screen font-medium w-[65%] z-50 transition ease-in-out duration-300 sm:hidden">
          <ul className="p-2  flex flex-col items-center gap-y-10 pt-20  text-stone-600">
            {navLinks.map((link, i) => {
              return (
                <Link
                  onClick={() => {
                    setIsActive(i);
                    setShowNav(false);
                  }}
                  className={`hover:bg-slate-50 w-28 rounded-sm py-1 text-center ${
                    isActive === i && "bg-slate-50 text-black"
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
            className="bg-white p-1.5 absolute top-3 -right-12 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
          >
            <LiaTimesSolid size={27} />
          </span>
        </nav>
      )}

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
