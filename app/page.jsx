//import AboutMe from "./components/static/about";
import Link from "next/link";
//import ProjectList from "./components/common/projectList";
import BlogList from "./components/common/blogList.jsx";
import { getProjects } from "./utils/database/getTasks";
import { Suspense } from "react";
import Loading from "./loading";
import HeroSection from "./components/sections/heroSection.jsx";
import ServicesSection from "./components/sections/serviceSection.jsx";
import Testimonial from "./components/sections/testimonial.jsx";
import Blog from "./components/sections/blog.jsx";
import FooterSection from "./components/sections/footerSection.jsx";
import ProjectsHomeSection from "./components/sections/ProjectsHomeSection.jsx";


export default async function Home() {
  const projects = await getProjects();
  const slicedProjects = projects.slice(0, 3);

  return (
    <div className="home-cont">
      <HeroSection/>
      <ProjectsHomeSection/>
      <ServicesSection/>
      <Testimonial/>
      <Blog/>
    </div>
   
  );
}


{/* 

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

*/}
