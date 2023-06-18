"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoConnexsoft from "../../public/images/connexsoft.png";
import { Roboto } from "next/font/google";
import "../../public/css/app.css";

function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-99 ${scrolled && 'header drop-shadow-lg'}`}>
      <div className="header-wrapper container lg:px-0 md:px-0 px-6 mx-auto  w-full h-12 py-10 flex items-center justify-between">
        <div className="title flex items-center z-30">
          <Image src={LogoConnexsoft} alt="" height={35} />
          <h1 className="cnnx lg:block md:block hidden text-white pl-2 font-bold text-[20px]">
            ConnexSoft
          </h1>
        </div>
        <div className="nav-menu lg:block md:block hidden">
          <ul className="nav-links flex flex-row gap-8 font-medium text-white">
            <li className="duration-200 hover:-translate-y-1">Home</li>
            <li className="duration-200 hover:-translate-y-1">Daftar Member</li>
            <li className="duration-200 hover:-translate-y-1">Galleri</li>
            <li className="duration-200 hover:-translate-y-1">Artikel</li>
            <li className="duration-200 hover:-translate-y-1">Tentang Kami</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
