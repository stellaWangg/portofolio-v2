"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
const navItems = [
  { text: "Home", path: "/" },
  { text: "Projects", path: "#projects" },
  { text: "Skills", path: "#skills" },
  { text: "Contact", path: "#contact" },
];
type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-stone-300 sticky top-0 z-50">
      <nav className="align-element flex flex-col md:flex-row  items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto py-4">
          <h2 className="text-3xl font-bold">✦tella</h2>
          <div
            onClick={() => setOpen(!open)}
            className="md:hidden cursor-pointer "
          >
            <FaBars className="w-11 h-11" />
          </div>
        </div>

        <div
          className={
            `flex gap-x-10 flex-col md:flex-row gap-12 items-center w-full md:w-auto absolute md:static top-[70px] h-[calc(100vh-70px)] left-0 right-0 md:h-auto transition-all ease-in-out duration-500 ` +
            (open
              ? "translate-x-0 bg-stone-300"
              : "translate-x-[100vh] md:translate-x-0")
          }
        >
          {navItems.map((item, index) => {
            const { text, path } = item;
            return (
              <li key={index}>
                <Link
                  className="capitalize font-semibold text-lg tracking-wide hover:text-stone-700 duration-300 hover:underline decoration-stone-500 hover:underline-offset-8"
                  href={path}
                  scroll={true}
                  onClick={() => setOpen(false)}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
