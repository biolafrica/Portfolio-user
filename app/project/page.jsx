import { getProjects } from "../utils/database/getTasks"
import  ProjectHead from "../components/common/projectHead";
import ProjectsHomeSection from "../components/sections/ProjectsHomeSection";

export default async function Project(){
  const projects = await getProjects();

  return(
    <>
     {/*<div className="project-cont">
        <ProjectHead projects={projects}/>
      </div>*/}

      <ProjectsHomeSection align= "left"/>
    </>
  )
}