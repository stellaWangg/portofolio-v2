"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
import Image from "next/image";
const navItems = [
  { text: "Projects", path: "#projects" },
  { text: "Skills", path: "#skills" },
  //   { text: "About", path: "#about" },
  { text: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <nav className="align-element flex flex-col md:flex-row  items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto py-4">
        <a href="/">
          <Image src={logo} alt={"logo"} />
        </a>

        <div onClick={handleOpen} className="md:hidden cursor-pointer ">
          {open ? (
            <FaBars className="rotate-90" size={45} />
          ) : (
            <FaBars size={45} />
          )}
        </div>
      </div>

      <ul
        className={
          `flex gap-x-10 flex-col pt-20 md:flex-row sm:pt-0 gap-12 items-center w-full md:w-auto absolute md:static top-[70px] h-[calc(100vh-70px)] left-0 right-0 md:h-auto transition-all ease-in-out duration-500 ` +
          (open
            ? "translate-x-0 bg-stone-300"
            : "left-[-100%] md:translate-x-0")
        }
      >
        {navItems.map((item, index) => {
          const { text, path } = item;
          return (
            <li key={index}>
              <a
                className="capitalize font-semibold text-lg tracking-wide hover:text-stone-700 duration-300"
                href={path}
                onClick={() => setOpen(false)}
              >
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
