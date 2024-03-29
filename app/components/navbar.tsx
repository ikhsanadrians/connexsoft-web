"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoConnexsoft from "../../public/images/connexsoft.png";
import { Roboto } from "next/font/google";
import "../../public/css/app.css";
import  Bookmark  from './bookmark';
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";


function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [navMobileBtn,setMobileNavBtn] = useState<boolean>(false);
 
  const navMobileHandler = () => {
    setMobileNavBtn(!navMobileBtn);
  }

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
    <>
    <Bookmark />
    <header className={`sticky top-0 z-99 ${scrolled && 'header drop-shadow-lg'}`}>
      <div className="header-wrapper container lg:px-11 md:px-0 px-6 mx-auto  w-full h-12 py-10 flex items-center justify-between">
        <div className="title flex items-center z-30">
          <Image src={LogoConnexsoft} alt="" height={35} />
          <h1 className="cnnx lg:block md:block hidden text-white pl-2 font-bold text-[20px]">
            ConnexSoft
          </h1>
        </div>
        <div className="nav-menu lg:block md:block hidden">
          <ul className="nav-links flex flex-row gap-8 font-medium text-gray-200">
            <li className="duration-200 hover:-translate-y-1"><Link href={"/"}>Home</Link></li>
            <li className="duration-200 hover:-translate-y-1"><Link href={"/members"}>Members</Link></li>
            <li className="duration-200 hover:-translate-y-1"><Link href={"/gallery"}>Gallery</Link></li>
            <li className="duration-200 hover:-translate-y-1"><Link href={"/articles"}>Articles</Link></li>
            <li className="duration-200 hover:-translate-y-1"><Link href={"/projects"}>Projects</Link></li>
            <li className="duration-200 hover:-translate-y-1"><Link href={"https://connexsoft-team.github.io/wiki"} target="_blank">Docs</Link></li>
          </ul>
        </div>
        <TiThMenu onClick={navMobileHandler} color="white" size={25} className="block lg:hidden md:hidden"/>
      </div>
    </header>
    <div className={`nav-btm ${navMobileBtn ? 'block' : 'hidden'} duration-100 bg-black w-full h-[20rem] sticky top-20 z-40 flex items-center`}>
    <ul className="nav-links flex flex-col gap-6 font-medium text-gray-200 p-8">
            <Link href={"/"}>Home</Link>
            <Link href={"/members"}>Daftar Member</Link>
            <Link href={"/gallery"}>Galleri</Link>
            <Link href={"/articles"}>Artikel</Link>
            <Link href={"/projects"}>Project</Link>
            <Link href={"https://connexsoft-team.github.io/wiki"} target="_blank">Docs</Link>
          </ul>
    </div>
    </>
  );
}

export default Navbar;
