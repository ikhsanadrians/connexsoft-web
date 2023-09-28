"use client"

import Navbar from "@/app/components/navbar"
import { useState, useEffect } from "react"
import Article from "@/app/utils/types/articles"
import axios from 'axios';
import Image from "next/image";


const ArticleDetail = ({params} : {params: {articleSlug:string}}) => {
   const [allArticle,setAllArticle] = useState<Article[]>([]);
   
   useEffect(()=>{
      axios.get("https://connexsoft-team.github.io/api/v1/articles.json").
      then((response)=>setAllArticle(response.data)).
      catch((err)=>console.error(err))
   },[])



   return (
      <>
      <Navbar />
      <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative">
        {
            allArticle.filter((item)=>item.slug == params.articleSlug).map((item:Article,index:number)=>(
               <>
               <Image src={item.thumbnail} alt="thumbnail" width={100} height={100} />
               <h1 className="text-white">{ item.title }</h1>
               </>
            ))
        }
      </div>
      </>
   )

}

export default ArticleDetail