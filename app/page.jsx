import HeroSection from "./components/sections/heroSection.jsx";
import ServicesSection from "./components/sections/serviceSection.jsx";
import Testimonial from "./components/sections/testimonial.jsx";
import Blog from "./components/sections/blog.jsx";
import ProjectsHomeSection from "./components/sections/ProjectsHomeSection.jsx";

export const metadata = {
  title: 'Home',
  description: 'Full-stack web developer in Manchester & London, UK. Building scalable web applications with React, Next.js, and Node.js.',
}


export default async function Home() {
  return (
    <div className="home-cont">
      <HeroSection/>
      <ProjectsHomeSection align = "center"/>
      <ServicesSection/>
      <Testimonial/>
      <Blog/>
    </div>
   
  );
}

