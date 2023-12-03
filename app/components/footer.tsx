import React from "react";
import CnxIcon from "../../public/images/connexsoft.png";
import Image from "next/image";
import Link from "next/link";


export default function footer() {
  return (
    <footer className="bg-black mt-12 min-h-64 max-h-full z-99">
      <div className="container mx-auto py-8 lg:px-11 px-8 flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="connexsoft-header flex flex-col">
          <div className="connexicon flex flex-row gap-1 items-center">
            <Image src={CnxIcon} alt="logo-connexsoft" height={20}></Image>
            <h1 className="font-semibold text-white">
              Connex Software Engineering
            </h1>
          </div>
          <div className="connex-gen text-slate-400">
            <p>12th Generation RPL</p>
          </div>
        </div>
        <div className="connexsoft-links flex flex-col mt-4">
          <div className="menus flex md:flex-row flex-col lg:flex-row md:gap-20 gap-8 lg:gap-20">
            <ul className="text-slate-300 flex flex-col gap-5">
              <li><Link href={"/"}>Home</Link></li>
              <li><Link href={"/members"}>Daftar Member</Link></li>
              <li><Link href={"/gallery"}>Galeri</Link></li>
              <li><Link href={"/articles"}>Artikel</Link></li>
              <li><Link href={"https://connexsoft-team.github.io/wiki"} target="_blank">Dokumentasi</Link></li>
            </ul>
            <ul className="text-slate-300 flex flex-col gap-5">
              <li className="cursor-pointer hover:underline">Twitter</li>
              <li className="cursor-pointer hover:underline"><a href="https://www.instagram.com/connexsoft55" target="_blank">Instagram</a></li>
              <li className="cursor-pointer hover:underline">CodePen</li>
              <li className="cursor-pointer hover:underline"><a href="https://github.com/Connexsoft-Team" target="_blank">Github</a></li>
            </ul>
            <iframe
              className="lg:block md:block hidden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0599995676644!2d106.86723267423363!3d-6.255826361247746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f301ea1c2901%3A0xfc9931c7b0225846!2sSMK%20Negeri%2010%20Jakarta!5e0!3m2!1sid!2sid!4v1687111205866!5m2!1sid!2sid"
              width="300"
              height="180"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="address flex justify-start lg:justify-center py-8 lg:px-11 px-8">
        <p className="text-slate-300 font-bold flex lg:flex-row flex-col gap-2">
              Connexsoft Headquarter  <span className="font-normal"> Ruang Teori 1 SMKN 10 Jakarta</span>
        </p>
      </div>
    </footer>
  );
}
