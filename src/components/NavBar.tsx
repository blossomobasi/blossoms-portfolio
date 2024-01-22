"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="flex items-center justify-between h-14 px-10 border-b border-b-primary-50 sticky">
      <Logo />

      <nav>
        <ul className="space-x-8 font-medium">
          {navLinks.map((link) => {
            const activePage = pathName === link.href;
            return (
              <Link
                className={`${
                  activePage && "text-primary-800"
                } hover:text-primary-800`}
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
