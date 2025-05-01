import AboutMe from "./components/static/about";
import Link from "next/link";
import ProjectList from "./components/common/projectList";
import BlogList from "./components/common/blogList.jsx";
import { getProjects } from "./utils/database/getTasks";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
  const projects = await getProjects();
  const slicedProjects = projects.slice(0, 3);

  return (
    <div className="home-cont">
      
      <section className="landing">

        <div className="text-cont">
          <h2><b>Frontend Software Engineer Building Fast, Scalable Web Experiences with React & Node.js.</b></h2>
          <h4 className="sub-intro-text">I&lsquo;m Abiodun Biobaku, I design and build seamless web apps for startups and teams, from real-time payroll tools to marketplace connecting business owners. I turn business needs into performant code, one sprint at a time.</h4>
        </div>

        <div className="btn-cont">
          <Link href="mailto:biolafrica@gmail.com" className="pri-btn" target="_blank">
            <img src="/icons/Email.svg" alt="github icon" /> <h5>Hire Me</h5>
          </Link >

          <Link 
            href="https://drive.google.com/file/d/1UYSntwp4HhE9qku9BDKfSocgY7dS1_PB/view?usp=sharing" 
            className="sec-btn" 
            target="_blank"
          >
            <img src="/icons/resume.svg" alt="resume icon" /> <h5>View Resume</h5>
          </Link>
        </div>
     
      </section>

      <section className="about-me">
        <div className="about-me-cont">

          <div className="about-me-cont-text">

            <div className="about-heading">
              <img src="/icons/Person 4.svg" alt="person icon" />
              <h5 style={{color:"#ffffff"}}>ABOUT ME</h5>
            </div>
            <AboutMe/>

          </div>

          <div className="about-me-cont-image">
           <img src="/images/me.jpeg" alt="abiodun headshot" />
          </div>
        </div>
      </section>

      <section className="Projects">
         
        <div className="project-head-cont">

          <h4>MY PROJECTS</h4>
          <h5>A Showcase of Innovative Solutions and Real-World Applications.</h5>

          <Link href="/project" className="pri-btn">
            <h5 style={{color: "white"}}>View all projects</h5>
          </Link>

        </div>

        <Suspense fallback={<Loading/>}>
          <ProjectList projects={slicedProjects}/>
        </Suspense>
      
      </section>

      <section className="Blog">

        <div className="blog_heading">
          <h5 style={{color: "#3ecf8e"}}>BLOG</h5>
          <h3>Tech, Business & Life.</h3>
          <h3>My Journey Unfiltered.</h3>

          <div className="blog_sub_head">
            <h5 className="blog_sub_text">I share some updates about my life along with my thoughts on technology and startups.</h5>

            <Link href="/blog" className="pri-btn">
              <h5 style={{color: "white"}}>View all blog</h5>
            </Link>

          </div>
        </div>

        <Suspense fallback={<Loading/>}>
          <BlogList/>
        </Suspense>
        
      </section>
      
    </div>
   
  );
}
