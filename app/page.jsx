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
          <h5 className="head-intro-text">Hi, I am</h5>
          <h1>Abiodun Biobaku</h1>
          <h5 className="sub-intro-text">A Software engineer dedicated to innovation, and committed to enriching lives by leveraging the power of technology to create impactful solutions.</h5>
        </div>

        <div className="btn-cont">
          <Link href="https://github.com/biolafrica" className="pri-btn" target="_blank">
            <img src="/icons/Icon.svg" alt="github icon" /> <h5>Github</h5>
          </Link >

          <Link 
            href="https://drive.google.com/file/d/1UYSntwp4HhE9qku9BDKfSocgY7dS1_PB/view?usp=sharing" 
            className="sec-btn" 
            target="_blank"
          >
            <img src="/icons/resume.svg" alt="resume icon" /> <h5>Resume</h5>
          </Link>
        </div>

        <div className="stack-cont">
          <div className="stack_cont">
            <div className="scrolling_wrapper">
              <img src="/images/javascript.svg" alt="javascript icon" />
              <img src="/images/react.svg" alt="reactjs icon" />
              <img src="/images/next 1.svg" alt="nextjs icon" />
              <img src="/images/nodejs_logo.svg" alt="nodejs icon" />
              <img src="/images/mongodb_logo.svg" alt="mongodb icon" />
              <img src="/images/Express.svg" alt="expressjs icon" />
              <img src="/images/typescript.svg" alt="typescript icon" />
              
              <img src="/images/javascript.svg" alt="javascript icon" />
              <img src="/images/react.svg" alt="reactjs icon" />
              <img src="/images/next 1.svg" alt="nextjs icon" />
              <img src="/images/nodejs_logo.svg" alt="nodejs icon" />
              <img src="/images/mongodb_logo.svg" alt="mongodb icon" />
              <img src="/images/Express.svg" alt="expressjs icon" />
              <img src="/images/typescript.svg" alt="typescript icon" />
            </div>
          </div>

          <h6>Currently specializing in MERN stack</h6>
        
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
            <h5>View all projects</h5>
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
              <h5>View all blog</h5>
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
