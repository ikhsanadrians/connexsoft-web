"use client"

import Navbar from "@/app/components/navbar"
import { useState, useEffect } from "react"
import Article from "@/app/utils/types/articles"
import axios from 'axios';
import Image from "next/image";
import Giscus from "@giscus/react";
import Footer from "@/app/components/footer"



const ArticleDetail = ({ params }: { params: { articleSlug: string } }) => {
   const [allArticle, setAllArticle] = useState<Article[]>([]);

   useEffect(() => {
      axios.get("https://connexsoft-team.github.io/api/v1/articles.json").
         then((response) => setAllArticle(response.data)).
         catch((err) => console.error(err))
   }, [])



   return (
      <>
         <Navbar />
         <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative">
            {
               allArticle.filter((item) => item.slug == params.articleSlug).map((item: Article, index: number) => (
                  <div>
                     <div className="image-content w-full h-80 overflow-hidden object-cover rounded-md">
                        <img src={item.thumbnail} className="w-full h-full object-cover" />
                     </div>
                     <div className="text-content mt-4">
                        <div className="content-title">
                           <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">{item.title}</h1>
                           <span className="flex items-center gap-2 text-slate-400">Write By : <span className="flex gap-2 items-center"><Image src={item.author_img} height={16} width={16} alt="author-picture"/> {item.author}</span> / 3 min read / Posted In : {item.post_date}</span>
                        </div>
                        <div className="content-description">
                           {
                              item.description.map((desc: any, index: number) => (
                                 <>
                                    <p className="text-red-500">{desc.section}</p>
                                    <p className="text-white">{desc.text}</p>
                                 </>
                              ))
                           }
                           <p></p>
                        </div>
                     </div>
                     <div className="my-8">
                        <Giscus
                           id="comments"
                           repo="ikhsanadrians/connexsoft-web"
                           repoId="R_kgDOJwc6Ew"
                           category="Announcements"
                           categoryId=""
                           mapping="specific"
                           term="Welcome To Connexsoft Discussion"
                           reactionsEnabled="1"
                           emitMetadata="0"
                           inputPosition="top"
                           theme="dark_protanopia"
                           lang="en"
                           loading="lazy"
                        />
                     </div>
                  </div>
               ))
            }
         </div>
         <Footer/>
      </>
   )

}

export default ArticleDetail