"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const NavBar = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between h-14 px-10 border-b border-b-primary-50 sticky">
      <Logo />

      <nav>
        <ul className="space-x-8 font-medium">
          {navLinks.map((link) => {
            return (
              <Link
                className="hover:text-primary-800 "
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
