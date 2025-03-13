import AboutMe from "./components/static/about";
import Link from "next/link";
import ProjectList from "./components/common/projectList";

export default function Home() {
  return (
    <>
      <section className="landing">

        <div className="text-cont">
          <h5 className="head-intro-text">Hi, I am</h5>
          <h1>Abiodun Biobaku</h1>
          <h5 className="sub-intro-text">Software engineer dedicated to innovation,<br/> committed to enriching lives by leveraging the power of <br/> technology to create impactful solutions.</h5>
        </div>

        <div className="btn-cont">
          <button className="pri-btn">
            <img src="/icons/icon.svg" alt="github icon" />Github
          </button>

          <button className="sec-btn">
            <img src="/icons/resume.svg" alt="resume icon" />Resume
          </button>
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

          <h5>MY PROJECTS</h5>
          <h6>A Showcase of Innovative Solutions and Real-World Applications.</h6>

          <Link href="/project" className="pri-btn">
            <h6>Explore more</h6>
            <img src="/icons/Arrow forward.svg" alt="next arrow icon" />
          </Link>

        </div>

        <ProjectList/>

      </section>
    </>
   

    
   
  );
}
