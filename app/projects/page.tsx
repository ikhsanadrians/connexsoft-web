"use client"
import Navbar from "../components/navbar"
import axios from "axios"
import React, { useEffect , useState } from 'react'  
import { projectType } from "../utils/types/projects/project"
import { projectLink } from "../utils/types/projects/project"
import { TfiNewWindow } from "react-icons/tfi";
import { AiOutlineGithub } from "react-icons/ai";
import Image from 'next/image';
import Footer from "../components/footer"

const Projects = () => {
  const [projects,setProjects] = useState<projectType[]>([])
  
  useEffect(()=>{
    axios.get("https://connexsoft-team.github.io/api/v1/project.json").
    then((response)=>setProjects(response.data)).
    catch((err)=>console.error(`Error While Fetching Data! : ${err}`))
  },[])
  
  return(
     <>
       <Navbar/>
       <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative mb-8">
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Projects</h1>
        <p className="text-gray-400 w-full lg:w-1/2">Welcome to ConnexSoft's Projects Page, Discover ConnexSoft Member's innovative projects, showcasing our commitment to excellence and cutting-edge solutions.</p>
        <div className="project-list grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-2 pb-8"> 
          {
            projects.map((item:projectType,index:number)=>(
              <div className="bg-[#161b21] relative p-4 border-[1.5px] z-99 text-white border-[#2d3139] mt-6 rounded-md w-full h-full shadow-slate-600/50 shadow-2xl hover:scale-105 duration-200 flex flex-col  overflow-hidden cursor-pointer">
               
                <div className="profiles flex items-center gap-2">
                   <Image alt="profile-picture" src={item.member_picture} width={20} height={20} />
                   <span className="flex gap-2 text-slate-300">{item.member_name}  / <p className="font-semibold text-white">{item.project_name}</p></span>
                </div>
                <div className="description text-slate-200">
                  <p>{item.project_description}</p>
                </div>
                <div className="tech-stack flex items-center gap-2">
                  {
                    item.project_techstack.map((item:string,index:number)=>(
                      <div className="per-stack text-sm py-1 px-2 shadow-blue-300/50 shadow-3xl bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg mt-2">
                          { item }
                      </div>
                    ))
                  }  

                
                </div>
               <div className="link-wrapper absolute bottom-4 right-4">
                <div className="links flex items-center gap-2 my-2">
                  {
                    item.project_link.map((item:projectLink,index:number)=>(
                      <>
                         <a href={item.url}><TfiNewWindow size={20}/></a>
                         <a href={item.github}><AiOutlineGithub size={20}/></a>
                      </>
                    ))
                  }
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

export default Projects;