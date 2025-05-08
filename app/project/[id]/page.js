import Utterances from "@/app/components/common/utterances"
import StickySection from "@/app/components/static/sticky";
import { getProjects } from "@/app/utils/database/getTasks"
import getIndex from "@/app/utils/common/getIndex";
import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/app/utils/database/getTask";

export async function generateMetadata({params}){
  const {id} = await params;
  const project = await getProject(id)

  return{
    title: `Abiodun Project | ${project.title}`
  }

}

export default async function SelectedProject({params}){
  const {id} = await params;
  const projectID = parseInt(id, 10);
  const projects = await getProjects();

  const{data, nextIndex, previousIndex} = getIndex(projects, projectID);

  return(
    <div className="selected-project-cont">

      <div className="project_landing_page">
        <Image 
          src={`${data[0].image}`} 
          alt={`${data[0].title} image`}
          width={1000}
          height={600} 
          style={{objectFit: "contain"}}
        />
      
      </div>

      <div className="project-body-cont">

        <div className="project-body-cont-left">

          <div className="project-body-cont-left-sub">
            <h4><b>{data[0].title}</b></h4>
            <h5>{data[0].sub_title}</h5>

            <div className="links">
          
              <Link href={`${data[0].github_link}`} className="text-btn">
                <Image src="/icons/GitHub.svg" alt="github icon" width={18} height={18} /> <h5>Github</h5>
              </Link>

              <Link href={`${data[0].website_link}`} className="text-btn">
                <Image src="/icons/website.svg" alt="website icon" width={18} height={18}/> <h5>Website</h5>
              </Link>

            </div>

          </div>

          <StickySection data={data}/>

          <div className="project-body-cont-left-footer">

            {previousIndex !== -1 && 
              (
                <Link href={`/project/${projects[previousIndex].id}`} className="last-post-cont">
                  <h6>Previous Project</h6>
                  <div className="last-post-sub">
                    <h5>{projects[previousIndex].title}</h5>
                  </div>

                </Link>

              )
            }

            {nextIndex <= (projects.length-1) && 
              (

                <Link href={`/project/${projects[nextIndex].id}`} className="next-post-cont">
                  <h6>Next Project</h6>
                  <div className="last-post-sub">
                    <h5>{projects[nextIndex].title}</h5>
                  </div>
                </Link>

              )
            }
            
          </div>

          <div className="project-body-comment">
            <Utterances/>
          </div>

        </div>

        

      </div>

    </div>
  )
}