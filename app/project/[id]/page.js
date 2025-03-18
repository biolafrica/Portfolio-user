import Utterances from "@/app/components/common/utterances"
import StickySection from "@/app/components/static/sticky"

export default function SelectedProject(){
  return(
    <div className="selected-project-cont">

      <div className="project_landing_page">
        <img src="/images/blog.png" alt="project image" />
      </div>

      <div className="project-body-cont">

        <div className="project-body-cont-left">

          <div className="project-body-cont-left-sub">
            <h4><b>Humanforce</b></h4>
            <h5>Streamlining Staff Management for EatUp Nigeria</h5>

            <div className="links">
          
              <button className="text-btn">
                <img src="/icons/Github.svg" alt="github icon" />Github
              </button>

              <button className="text-btn">
                <img src="/icons/website.svg" alt="website icon" />Website
              </button>

            </div>

          </div>

          <StickySection/>

          <div className="project-body-cont-left-footer">

            <div className="last-post-cont">
              <h6>Last Project</h6>
              <div className="last-post-sub">
                <h5>Eatup Blog</h5>
              </div>
            </div>

            <div className="next-post-cont">
              <h6>Next Project</h6>
              <div className="last-post-sub">
                <h5>Humanforce</h5>
              </div>
            </div>

          </div>

          <div className="project-body-comment">
            <Utterances/>
          </div>

        </div>

        

      </div>

    </div>
  )
}