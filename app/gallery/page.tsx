"use client"

import Navbar from "../components/navbar";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Footer from "../components/footer";

const Gallery = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  
  type Gallery = {
    imageUrl: string,
    type: string,
    title: string
  }

  const galleryTab : Gallery[] = [
        {
          imageUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1695867533/edfcgcgo9kptxfyudb7a.jpg",
          type: "Milad",
          title: "Ardiyan Syahbani",
        },
        {
          imageUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1695867527/wuoxwmxm6pdrq1ni0fyi.jpg",
          type: "Connexsoft",
          title: "Testing Jaket",
        },
        {
          imageUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1695868059/IMG_20230413_201615_wwzsvo.jpg",
          type: "Event",
          title: "Bukber Connexsoft 2023",
        },
        {
          imageUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1695872144/IMG_20230816_075713_352_zal1m4.jpg",
          type: "Event",
          title: "17 Agustusan",
        },
        {
          imageUrl: "https://res.cloudinary.com/dewnyzbmg/image/upload/v1695873204/WhatsApp_Image_2023-07-21_at_7.06.01_AM_tptfm8.jpg",
          type: "Event",
          title: "Pembinaan Wali Kelas",
        },
      ];

      
  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  console.log(image)

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative">
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Photo Gallery</h1>
        <p className="text-gray-400 w-full lg:w-1/2">Welcome to ConnexSoft's photo gallery, where we showcase a collection of captivating images. Explore our visual journey through these photos.</p>
        <div className="w-full">
        <div className="mt-8">
          <div className="flex flex-col md:grid md:grid-cols-2 h-full gap-0 flex-wrap mx-2 md:mx-0">
            {galleryTab.map((x, index) => {
              return (
                <div key={index} className="md:h-[40vw] m-2 h-screen relative">
                  <div className="group h-full">
                    <div
                      className="bg-cover bg-center h-full w-full bg-no-repeat"
                      style={{ backgroundImage: `url("${x.imageUrl}")` }}
                    >
                      <div className="text-white bg-gradient-to-t pl-3 flex flex-col justify-center bg-gradient to-r from-black  to-transparent h-[90px] w-full absolute bottom-0 z-10">
                        <div className="text-base text-slate-300">{x.type}</div>
                        <div className="text-xl">{x.title}</div>
                      </div>
                    </div>
                    <div
                      className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                      onClick={() => {
                        setOpen(true);
                        setImage(x.imageUrl); // Update the image state here
                      }}
                    >
                      <p className="text-white">
                        <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black cursor-pointer rounded-full" />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Lightbox
          className={'p-8'}
          index={galleryTab.findIndex((x) => x.imageUrl === image)}
          open={open}
          close={() => setOpen(false)}
          plugins={[Zoom]}
          slides={slides}

        />
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default Gallery;