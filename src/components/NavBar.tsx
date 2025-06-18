"use client";

import {  IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-accent text-white  fixed z-[999]">
      <section className="flex items-center justify-between p-4">
        <h1 className="font-bold text-xl">ANNAI PLASTICS</h1>
        <section className="hidden md:flex space-x-2 font-light">
          <a href="#about" className="hover:font-bold ">
            ABOUT
          </a>
          <a href="#gallery" className="hover:font-bold ">
            GALLERY 
          </a>
          <a href="#contact" className="hover:font-bold ">
            CONTACT
          </a>
        </section>
        <IconMenu2 className="cursor-pointer md:hidden block" onClick={() => setOpen(true)}  />
      </section>

      <section
        className={`md:hidden h-screen w-full bg-accent flex flex-col items-center justify-center absolute top-0 text-5xl duration-500 ${open ? "left-0" : "left-[1000px]"}`}
      >
        <div className="absolute top-10 right-10 cursor-pointer">
          <IconX onClick={() => setOpen(false)} size={32} />
        </div>
        <a href="#about" className="hover:font-bold ">
          ABOUT
        </a>
        <a href="#gallery" className="hover:font-bold ">
          GALLERY
        </a>
        <a href="#contact" className="hover:font-bold ">
          CONTACT
        </a>
      </section>
    </nav>
  );
};
