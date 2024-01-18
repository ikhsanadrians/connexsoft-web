import React from "react";
import { FaInstagram } from "react-icons/fa";


export default function Bookmark() {
    return <div className="h-12 w-full flex justify-center gap-2 items-center bg-red-500">
        <h1 className="text-white font-semibold">Butuh Jasa Pembuatan Website & Aplikasi?</h1>
        <a href="https://www.instagram.com/tenizencode" target="_blank" className="tenizen-instagram flex items-center gap-1 text-white">
            <FaInstagram size={20} color="white" />
            <p className="font-semibold">@tenizencode</p>
        </a>
    </div>;
}
