import Utterances from "@/app/components/common/utterances"

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

          <div className="project-body-cont-left-context">

            <div className="project-body-cont-left-context-left">

              <section className="intro">
                <h4><b>The Hook: Introduction and Context</b></h4>
                <h5>EatUp Nigeria had been using Medium as their primary platform for sharing brand stories, company updates, and engaging with their audience. However, while Medium is a powerful tool, it lacked the personalization and branding opportunities that EatUp needed to truly connect with their target audience. To take control of their narrative, improve audience engagement, and create a platform designed specifically for their brand and users, we set out to build a custom blog platform that would provide a more immersive and branded experience for EatUp’s customers and stakeholders.</h5>
              </section>

              <section className="journey">
                <h4><b>The Journey: Development Process & Challenges</b></h4>
                <h5>The goal was to create a visually appealing, easy to use, and SEO optimized blog platform that would allow EatUp’s team to seamlessly publish and manage content. The platform needed to support rich media content (images, videos, and embedded elements),feature an intuitive content management system (CMS) for non technical users, ensure fast loading times and mobile responsiveness.</h5>
              </section>

              <section className="build">
                <h4><b>The Build: Technical Implementation & Stack</b></h4>
                <h5>To ensure the platform was scalable, secure, and high performing, we selected the following technologies: Frontend, JavaScript with EJS (for dynamic templating and flexibility); Backend, Node.js with Express (to manage content and user interactions);Database, MongoDB (for flexible and scalable data storage); Authentication, JWT (for secure user login and session management).</h5>
              </section>

              <section className="outcome">
                <h4><b>The Outcome: Results & Impact</b></h4>
                <h5>This will give the company 100% control over content and branding, improved SEO rankings and organic traffic, higher engagement through structured content organization, better content discoverability through structured categories and tags, seamless content management for EatUp’s marketing team, thereby creating a brand centric blogging experience. Some of the lessons learnt in this project are; building a CMS from scratch requires careful planning to balance usability and functionality, and EJS with JavaScript offers a lightweight and effective way to manage dynamic content</h5>
              </section>

              <section className="video">
                <h4><b>Demo Video</b></h4>

                <div className="video_container">
                  <video controls loop>
                    <source src="" type="video/mp4" />
                  </video>
                </div>
               
              </section>

              <section className="future">
                <h4><b>The Future: Next Steps & Reflections</b></h4>
                <h5>The blog updated version will allow users to add comments, and likes, while the front end will be built on Next.js to enhance SEO, performance, and overall user experience, and also enables multiple team members to contribute and manage content seamlessly.By continuously improving the platform, EatUp’s blog will remain a powerful tool for brand storytelling, audience engagement, and business growth.</h5>
              </section>
           
            </div>

            <div className="project-body-cont-left-context-right">
              <h4 className="head">Table Of Contents</h4>
              <h4 className="body">Introduction</h4>
              <h4 className="body">Development Process</h4>
              <h4 className="body">Technical Implementation</h4>
              <h4 className="body">Results & Impacts</h4>
              <h4 className="body">Next Steps & Reflection</h4>
            </div>


          </div>

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