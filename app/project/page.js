import ProjectList from "../components/common/projectList"
import { getProjects } from "../utils/database/getTasks"
import  ProjectHead from "../components/common/projectHead";

export default async function Project(){
  const projects = await getProjects();

  return(
    <div className="project-cont">

      <ProjectHead projects={projects}/>
      
    </div>
  )
}