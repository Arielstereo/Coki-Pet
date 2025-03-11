"use client";

import { useState } from "react";
import { ABeeZee } from "next/font/google";

const link = ABeeZee({
  weight: "400"
})

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-rose-500 text-slate-50 font-semibold text-center py-2">
        Entregas sin cargo en Monte Castro a partir de{" "}
        <span className="text-yellow-300 animate-pulse">$10.000</span>
      </div>
      <nav className="hidden md:flex justify-between items-center text-slate-800 text-lg py-4 px-32 bg-orange-200">
        <a
          href="/"
          className="icon-[fa-solid--paw] w-12 h-12"
          role="img"
          aria-hidden="true"
        ></a>
        <ul className="flex justify-center items-center gap-4">
          <li className={`${link.className} hover:text-white`}>
            <a href="#food">Alimentos</a>
          </li>
          <li className={`${link.className} hover:text-white`}>
            <a href="#accesories">Accesorios</a>
          </li>
          <li className={`${link.className} hover:text-white`}>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <nav className="flex md:hidden p-4 bg-orange-200">
        {isOpen ? (
          <div className="flex flex-col">
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="icon-[gg--close] h-8 w-8"
            role="img"
            aria-hidden="true"
          ></button>
          <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a href="#food">Alimentos</a>
          </li>
          <li>
            <a href="#accesories">Accesorios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
          </ul>
          </div>
        ) : (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="icon-[hugeicons--menu-05] h-8 w-8"
            role="img"
            aria-hidden="true"
          ></button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
