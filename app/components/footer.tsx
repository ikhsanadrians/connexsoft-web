import React from "react";
import CnxIcon from "../../public/images/connexsoft.png";
import Image from "next/image";
import Link from "next/link";
import NextJsIcon from "../../public/images/next-js.svg";

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
      <div className="build-with flex justify-start lg:justify-center pb-8 lg:px-0 px-8">
        <div className="wrappers flex-col flex items-center">
        <p className="text-slate-400 text-center mb-2 text-sm">This Website is Build Using</p> 
        <div className="flex self-start lg:self-center">
        <Image src={"https://www.tfkhdyt.my.id/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Ftfkhdyt%2Ftech%2Fnext-js-php_zqnqAIrdH.png&w=384&q=75"} alt="next-js-icon" height={60} width={60} className="fill-white"/>
        <svg viewBox="0 0 128 128">
            <defs><linearGradient id="tailwindcss-original-wordmark-a" gradientUnits="userSpaceOnUse" x1="2.21" y1="511.596" x2="3.211" y2="511.596" gradientTransform="matrix(27.16757 5.6391 -9.3985 16.30055 4747.487 -8290.643)"><stop offset="0" stop-color="#2298bd"></stop><stop offset="1" stop-color="#0ed7b5"></stop></linearGradient></defs><path d="M13.227 56.074c-3.528 0-5.727 1.778-6.602 5.301 1.324-1.773 2.875-2.426 4.625-1.977 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.977-1-.25-1.722-.977-2.523-1.801-1.301-1.324-2.801-2.852-6.074-2.852zM6.602 64C3.074 64 .875 65.773 0 69.3c1.324-1.777 2.875-2.425 4.625-1.976 1 .25 1.727.977 2.523 1.801 1.301 1.324 2.801 2.852 6.079 2.852 3.523 0 5.722-1.778 6.597-5.301-1.324 1.773-2.875 2.426-4.625 1.972-1-.25-1.722-.972-2.523-1.796C11.398 65.523 9.898 64 6.602 64zm0 0" fill="url(#tailwindcss-original-wordmark-a)"></path><path d="M39.676 62.75h-2.301v4.477c0 1.199.773 1.171 2.3 1.097v1.801c-3.1.375-4.323-.477-4.323-2.898V62.75h-1.704v-1.926h1.704v-2.5l2-.597v3.097h2.296v1.926zm8.8-1.926h2v9.301h-2v-1.352c-.703.977-1.8 1.579-3.25 1.579-2.527 0-4.624-2.153-4.624-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.546.597 3.25 1.574zm-2.953 7.625c1.676 0 2.954-1.25 2.954-2.972 0-1.727-1.278-2.977-2.954-2.977-1.671 0-2.949 1.25-2.949 2.977.028 1.722 1.278 2.972 2.95 2.972zm8.301-9.023c-.699 0-1.273-.602-1.273-1.278 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.579 1.278-1.278 1.278zm-1 10.699v-9.3h2v9.3zm4.324 0V56.551h2v13.574zm15.079-9.3h2.125l-2.926 9.3h-1.977l-1.926-6.273-1.949 6.273h-1.972l-2.926-9.3H62.8l1.8 6.425 1.95-6.426h1.926l1.921 6.426zm4.597-1.4c-.699 0-1.273-.6-1.273-1.277 0-.699.574-1.273 1.273-1.273.7 0 1.278.574 1.278 1.273.023.676-.551 1.278-1.278 1.278zm-1 10.7v-9.3h2v9.3zm9.227-9.55c2.074 0 3.574 1.425 3.574 3.823v5.727h-2v-5.5c0-1.426-.824-2.148-2.074-2.148-1.324 0-2.375.773-2.375 2.671v5h-2v-9.296h2v1.199c.625-1 1.625-1.477 2.875-1.477zm13.125-3.473h2v13.023h-2v-1.352c-.7.977-1.801 1.579-3.25 1.579-2.528 0-4.625-2.153-4.625-4.903 0-2.773 2.097-4.898 4.625-4.898 1.449 0 2.55.597 3.25 1.574zm-2.95 11.347c1.672 0 2.95-1.25 2.95-2.972 0-1.727-1.278-2.977-2.95-2.977-1.675 0-2.953 1.25-2.953 2.977 0 1.722 1.278 2.972 2.954 2.972zm11.672 1.926c-2.796 0-4.921-2.148-4.921-4.898 0-2.778 2.097-4.903 4.921-4.903 1.829 0 3.403.95 4.153 2.403l-1.727 1c-.398-.875-1.324-1.426-2.449-1.426-1.648 0-2.875 1.25-2.875 2.926 0 1.671 1.25 2.921 2.875 2.921 1.125 0 2.023-.574 2.477-1.421l1.722.972c-.75 1.477-2.347 2.426-4.176 2.426zm7.528-7c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.801-2.176l1.727-1c.296.852 1.046 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.398-2.848 1.528 0 2.801.699 3.454 1.921l-1.704.954c-.324-.727-.972-1.051-1.75-1.051-.722-.028-1.347.3-1.347.949zm8.574 0c0 1.7 5 .676 5 4.125 0 1.852-1.625 2.875-3.625 2.875-1.852 0-3.2-.852-3.8-2.176l1.726-1c.3.852 1.05 1.352 2.074 1.352.898 0 1.574-.301 1.574-1.051 0-1.648-5-.727-5-4.05 0-1.75 1.5-2.848 3.403-2.848 1.523 0 2.796.699 3.449 1.921l-1.7.954c-.328-.727-.976-1.051-1.75-1.051-.726-.028-1.351.3-1.351.949zm0 0" fill="#2d3748"></path>
            </svg>
        </div>
          
        </div>
      </div>
    </footer>
  );
}
