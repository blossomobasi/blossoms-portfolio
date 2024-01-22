"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const onClose = () => setShowNav((show) => !show);

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
          {navLinks.map((link) => {
            return (
              <Link
                className="hover:text-black focus-within:text-black"
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
          className="sm:hidden block hover:bg-slate-100 p-1.5 rounded-md cursor-pointer"
        >
          <CgMenuRight size={27} />
        </span>
      )}

      {/* Mobile screen */}
      {showNav && (
        <nav
          className={`bg-slate-100 top-0 left-0 absolute h-screen font-medium w-[65%] z-50 transition ease-in-out duration-300`}
        >
          <ul className="p-2  flex flex-col items-center gap-y-10 pt-20  text-stone-600">
            {navLinks.map((link) => {
              return (
                <Link
                  className="hover:text-black focus-within:text-black hover:bg-slate-200 w-28 rounded-sm py-1 text-center"
                  key={link.href}
                  href={link.href}
                >
                  {link.label}
                </Link>
              );
            })}
          </ul>

          <span
            onClick={onClose}
            className="bg-slate-100 absolute top-3 -right-12 h-8 w-8 flex items-center justify-center rounded-full cursor-pointer"
          >
            <LiaTimesSolid size={27} />
          </span>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
