"use client"

import Navbar from "../components/navbar";
import Card from "../components/cards/cards";
import axios from "axios";
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
import toSlug from '../../app/utils/toSlug';
import Footer from "../components/footer";
import Articles from "../utils/types/articles/articles";



const Articles = () => {
  const [Articles, setArticles] = useState<Articles[]>([])
  const router = useRouter()

  const navigateToDetail = (slug:string) => {
       router.push(`/articles/${slug}`)
  }

  useEffect(() => {
    axios.get("https://connexsoft-team.github.io/api/v1/articles.json").
      then((response) => setArticles(response.data)).
      catch((err) => console.error(`Error While Fetching Data!: ${err}`))
  }, [])

  

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative mb-8">
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Articles</h1>
        <p className="text-gray-400 w-full lg:w-1/2">Welcome to ConnexSoft's article page, your gateway to captivating narratives and insightful content. Join us as we explore a world of engaging insights and thought-provoking perspectives.</p>
        <div className="card-list grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-3 pb-8">
          {
            Articles.map((item: Articles, key: number) => ( 
              <div onClick={()=>navigateToDetail(item.slug)} className="bg-[#161b21] relative border-[1.5px] z-99  border-[#2d3139] mt-6 rounded-md w-full h-full shadow-slate-600/50 shadow-2xl hover:scale-105 duration-200 flex flex-col  overflow-hidden cursor-pointer" key={key}>
                <div className="img w-full h-36 object-cover">
                  <Image src={item.thumbnail} alt="thumbnail" width={900} height={700} className="w-full h-full object-cover" />
                </div>
                <div className="article-text p-2 flex flex-col justify-center h-full">
                  <div className="article-description text-white">
                    {item.title}
                  </div>
                  <div className="article-author text-slate-100 flex items-center gap-2">
                    <Image src={item.author_img} width={20} height={20} alt="author_img"/>
                    {item.author}
                  </div>

                </div>

              </div>
            ))

          }

        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Articles;