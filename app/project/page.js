import ProjectList from "../components/common/projectList"

export default function Project(){
  return(
    <div className="project-cont">
      
      <div className="project-cont-heading">
        <h3>Projects</h3>
        <h5>A showcase of innovative solutions and real world applications</h5>
        <input type="text" placeholder="search projects" />
      </div>
    
      <ProjectList/>
    </div>
  )
}