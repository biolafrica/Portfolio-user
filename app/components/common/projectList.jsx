import Link from "next/link"
import { EmptyProject } from "../static/empty"

export default function ProjectList({projects}){

  return(

    <div className="project-body-cont">

      <div className={projects.length === 0 ? "" :"columns"}>

        {projects.length !== 0 ? (

          projects.map((project)=>(

            <div className="column" key={project.id} >

              <div className="column_image">
                <img src={`${project.image}`} alt={`${project.title} name`} />
              </div>

              <div className="column_content">

                <div className="column_content_head">
                  <h4>{project.title}</h4>

                  <div className="content_head_lang_cont">

                    <div className="lang_image_cont">
                      <img src={`/icon/${project.stackI}.svg`} alt={`${project.stackI} icon`} />
                      {project.stackI}
                    </div>

                    {project.stackII && 
                      (
                        <div className="lang_image_cont">
                          <img src={`/icon/${project.stackII}.svg`} alt={`${project.stackII} icon`} />
                          {project.stackII}
                        </div>
                      )
                    }
                  
                    {project.stackIII && 
                      (
                        <div className="lang_image_cont">
                          <img src={`/icon/${project.stackIII}.svg`} alt={`${project.stackIII} icon`} />
                          {project.stackIII}
                        </div>

                      )
                    }

                  </div>

                </div>

                <div className="column_content_body">
                  <h5>{project.sub_title}</h5>
                </div>

                <Link href={`project/${project.id}`} className="column_content_foot">
                  <h6>View project</h6>
                  <img src="/icons/Arrow outward.svg" alt="arrow icon" />
                </Link>

              </div>

            </div>
          ))

        ):(
          <EmptyProject/>
        )}

      </div>

    </div>
  )
}