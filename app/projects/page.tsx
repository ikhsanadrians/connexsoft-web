import Navbar from "../components/navbar";

const Projects = () => {
  return(
     <>
       <Navbar/>
       <div className="container mx-auto mt-6 lg:py-0 lg:px-11 py-4 px-8 pb-8 relative mb-8">
        <h1 className="text-white font-[MonaReg] text-3xl lg:text-4xl">Projects</h1>
        <p className="text-gray-400 w-full lg:w-1/2">Welcome to ConnexSoft's Projects Page, Discover ConnexSoft Member's innovative projects, showcasing our commitment to excellence and cutting-edge solutions.</p>
        <div className="project-list">
          
        </div>
       </div>
     </>
  )
}

export default Projects;