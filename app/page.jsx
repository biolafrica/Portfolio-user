import HeroSection from "./components/sections/heroSection.jsx";
import ServicesSection from "./components/sections/serviceSection.jsx";
import Testimonial from "./components/sections/testimonial.jsx";
import Blog from "./components/sections/blog.jsx";
import ProjectsHomeSection from "./components/sections/ProjectsHomeSection.jsx";
import { Suspense } from "react";
import BlogGridLoading from "./loading.jsx";

export const metadata = {
  title: 'Home',
  description: 'Full-stack web developer in Manchester & London, UK. Building scalable web applications with React, Next.js, and Node.js.',
}


export default async function Home() {
  return (
    <div>
      <HeroSection 
        heading="Full-Stack Developer Building Scalable Web App."
        subheading="I'm Abiodun Biobaku, a software engineer based in the UK, helping startups and businesses build fast, reliable web applications."
      />
      
      <ProjectsHomeSection align = "center"/>
      <ServicesSection/>
      <Testimonial/>
      <Suspense fallback={<BlogGridLoading/>}>
        <Blog/>
      </Suspense>
    </div>
   
  );
}

