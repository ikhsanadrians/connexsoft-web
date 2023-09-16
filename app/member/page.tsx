"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Card from "../components/cards/cards";
import React, { useEffect, useState } from "react";
import axios from "axios";

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

  console.log(data);

  let skeletonCard = Array(34).fill(0);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6 lg:py-0 lg:px-0 py-4 px-8 pb-8">
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Members</h1>
        <div className="member-list grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 pb-8">
          {isLoading ? (
            skeletonCard.map((index:number)=> <div className="w-full h-[12rem] rounded-xl  mt-4 bg-slate-600"></div>)
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
      </div>
      <Footer />
    </>
  );
};

export default Member;
