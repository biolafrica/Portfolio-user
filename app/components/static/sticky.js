"use client"

import { useState, useEffect } from "react"

export default function StickySection(){

  const A = "EatUp Nigeria had been using Medium as their primary platform for sharing brand stories, company updates, and engaging with their audience. However, while Medium is a powerful tool, it lacked the personalization and branding opportunities that EatUp needed to truly connect with their target audience. To take control of their narrative, improve audience engagement, and create a platform designed specifically for their brand and users, we set out to build a custom blog platform that would provide a more immersive and branded experience for EatUp’s customers and stakeholders."

  const B = "The goal was to create a visually appealing, easy to use, and SEO optimized blog platform that would allow EatUp’s team to seamlessly publish and manage content. The platform needed to support rich media content (images, videos, and embedded elements),feature an intuitive content management system (CMS) for non technical users, ensure fast loading times and mobile responsiveness."

  const C = "To ensure the platform was scalable, secure, and high performing, we selected the following technologies: Frontend, JavaScript with EJS (for dynamic templating and flexibility); Backend, Node.js with Express (to manage content and user interactions);Database, MongoDB (for flexible and scalable data storage); Authentication, JWT (for secure user login and session management)."

  const D = "This will give the company 100% control over content and branding, improved SEO rankings and organic traffic, higher engagement through structured content organization, better content discoverability through structured categories and tags, seamless content management for EatUp’s marketing team, thereby creating a brand centric blogging experience. Some of the lessons learnt in this project are; building a CMS from scratch requires careful planning to balance usability and functionality, and EJS with JavaScript offers a lightweight and effective way to manage dynamic content"

  const E = "The blog updated version will allow users to add comments, and likes, while the front end will be built on Next.js to enhance SEO, performance, and overall user experience, and also enables multiple team members to contribute and manage content seamlessly.By continuously improving the platform, EatUp’s blog will remain a powerful tool for brand storytelling, audience engagement, and business growth."

  const sections = [
    { id: "intro", title: "Introduction" , body:A},
    { id: "journey", title: "Development Process", body:B },
    { id: "build", title: "Technical Implementation", body: C },
    { id: "outcome", title: "Results & Impact", body:D },
    { id: "video", title: "Demo Video", body: "" },
    { id: "future", title: "Next Steps & Reflection", body: E },
  ];

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };




  return(
    <div className="project-body-cont-left-context">

      <div className="project-body-cont-left-context-left">

        <section className="intro" id={sections[0].id}>
          <h4><b>The Hook: Introduction and Context</b></h4>
          <h5>{sections[0].body}</h5>
        </section>

        <section className="journey" id={sections[1].id}>
          <h4><b>The Journey: Development Process & Challenges</b></h4>
          <h5>{sections[1].body}</h5>
        </section>

        <section className="build" id={sections[2].id}>
          <h4><b>The Build: Technical Implementation & Stack</b></h4>
          <h5>{sections[2].body}</h5>
        </section>

        <section className="outcome" id={sections[3].id}>
          <h4><b>The Outcome: Results & Impact</b></h4>
          <h5>{sections[3].body}</h5>
        </section>

        <section className="video" id={sections[4].id}>
          <h4><b>Demo Video</b></h4>

          <div className="video_container">
            <video controls loop>
              <source src="" type="video/mp4" />
            </video>
          </div>
          
        </section>

        <section className="future" id={sections[5].id}>
          <h4><b>The Future: Next Steps & Reflections</b></h4>
          <h5>{sections[5].body}</h5>
        </section>
      
      </div>

      <div className="project-body-cont-left-context-right">
        <h4 className="head">Table Of Contents</h4>
        {sections.map((section)=>(
          <h4 className={`body ${activeSection === section.id ? "active": ""} `}key={section.id} onClick={()=>scrollToSection(section.id)}>{section.title}</h4>
        ))}
      </div>

    </div>
  )
}