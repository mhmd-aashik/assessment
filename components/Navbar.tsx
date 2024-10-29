"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="bg-gray-800 ">
      <div className="container mx-auto">
        <nav className="p-4 text-white flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">Cocktail Bar</Link>

          <div className="flex gap-4 items-center pr-10">
            <Link
              href="/"
              className={`${
                pathname === "/" ? "text-blue-500 font-bold" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/favourite"
              className={`${
                pathname === "/favourite" ? "text-blue-500 font-bold" : "text-white"
              }`}
            >
              Favourite
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
