"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Card from "../components/cards/cards";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Drone from "../../public/images/hero-drone.webp";
import Stars from "../../public/images/bg-stars-1.webp";
import SingleStars from "../../public/images/stars.png";

type MemberType = {
  member_picture: string;
  member_name: string;
  role: string;
  quotes: string;
};

const Member = () => {
  const [data, setData] = useState<MemberType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get('https://connexsoft-team.github.io/api/v1/data.json')
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);


  let skeletonCard = Array(34).fill(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative">
     <Image alt="stars" src={Stars} className="absolute lg:block hidden top-0 left-0 h-[100%] select-none pointer-events-none"/>
     <Image alt="drone" src={Drone} className="absolute lg:block hidden right-0 mr-8 drop-shadow-lg select-none pointer-events-none" height={280} width={280}/>
     <Image alt="single-stars" src={SingleStars} className="brightness-0 invert-[1] absolute -top-14 -left-36 opacity-20 select-none pointer-events-none"/>
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Members</h1>
        <p className="text-gray-400 w-full lg:w-1/2">ConnexSoft is home to a diverse team of talented developers, spanning across Backend, Frontend, UI/UX design, Mobile Apps and Product Engineering</p>
        <div className="member-list grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-8">
          {isLoading ? (
            skeletonCard.map((index:number)=> <div className="w-full z-30 h-[12rem] rounded-xl  mt-4 bg-gradient-to-r from-slate-600 to-slate-700 shadow-slate-600/50 shadow-2xl"></div>)
          ) : (
            data?.map((item: MemberType, key: number) => (
              <Card key={key}>
                <div className="wrappers flex text-gray-200 gap-6 items-center">
                  <Image
                    className="flex self-start"
                    src={
                      item.member_picture === ""
                        ? "https://res.cloudinary.com/dewnyzbmg/image/upload/v1694892325/wallpapers-fotor-202309172252_uf9ggg.png"
                        : item.member_picture
                    }
                    alt="member-img"
                    height={80}
                    width={80}
                  />
                  <div className="member-description flex flex-col">
                    <h3>{item.member_name}</h3>
                    <p className="font-semibold text-slate-500">{item.role}</p>
                    <p>"{item.quotes}"</p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
        <Image alt="single-stars" width={200} height={200} src={SingleStars} className="brightness-0 opacity-25 invert-[1] absolute -bottom-3 right-8 select-none pointer-events-none -z-99 lg:block hidden"/>
      </div>
      <Footer />
    </>
  );
};

export default Member;
