import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";

type navPaths = [
  { path: string; value: string },
  { path: string; value: string },
  { path: string; value: string }
];

const navItems: navPaths = [
  { path: "/about", value: "About" },
  { path: "/pricing", value: "pricing" },
  { path: "/contact", value: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={"/"} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex-1"></div>

      {navItems.map((item) => (
        <Link key={item.path} className="mr-2" href={item.path}>
          {item.value}
        </Link>
      ))}
    </nav>
  );
};
