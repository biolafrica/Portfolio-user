"use client"

import ProjectList from "./projectList"
import { useState } from "react"
import { Suspense } from "react"
import Loading from "@/app/loading"

export default function ProjectHead({projects}){
  const [searchTerm, setSearchTerm] = useState("")
  const filteredProjects = projects.filter((project)=>(project.title).toLowerCase().includes(searchTerm.toLowerCase())) 

  return(
    
    <>

      <div className="project-cont-heading">
        <h2><b>Projects</b></h2>
        <h5>A showcase of innovative solutions and real world applications</h5>

        <input 
          type="text" 
          placeholder="search projects"
          value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)}
        />

      </div>

      <Suspense fallback={<Loading/>}>
        <ProjectList projects={filteredProjects}/>
      </Suspense>

    </>



  )
}