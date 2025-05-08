"use client"

import { useState, useEffect } from "react"
import { marked } from "marked";

export default function StickySection({data}){

  const sections = [
    { id: "intro", title: "Introduction" , body: data[0].introduction},
    { id: "journey", title: "Development Process", body: data[0].development_process},
    { id: "build", title: "Technical Implementation", body: data[0].technical_implementation},
    { id: "outcome", title: "Results & Impact", body: data[0].result_impact},
    { id: "video", title: "Demo Video", body: data[0].demo_video},
    { id: "future", title: "Next Steps & Reflection", body: data[0].next_step_reflection},
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
          <h5 dangerouslySetInnerHTML={{ __html: marked.parse(sections[0].body) }} />

        </section>

        <section className="journey" id={sections[1].id}>

          <h4><b>The Journey: Development Process & Challenges</b></h4>
          <h5 dangerouslySetInnerHTML={{ __html: marked.parse(sections[1].body) }}/>

        </section>

        <section className="build" id={sections[2].id}>

          <h4><b>The Build: Technical Implementation & Stack</b></h4>
          <h5 dangerouslySetInnerHTML={{ __html: marked.parse(sections[2].body) }} />

        </section>

        <section className="outcome" id={sections[3].id}>

          <h4><b>The Outcome: Results & Impact</b></h4>
          <h5 dangerouslySetInnerHTML={{ __html: marked.parse(sections[3].body) }} />

        </section>

        <section className="video" id={sections[4].id}>
          <h4><b>Demo Video</b></h4>

          <div className="video_container">
            <video controls loop>
              <source src={`${sections[4].body}`} type="video/mp4" />
            </video>
          </div>
          
        </section>

        <section className="future" id={sections[5].id}>
          <h4><b>The Future: Next Steps & Reflections</b></h4>
          <h5 dangerouslySetInnerHTML={{ __html: marked.parse(sections[5].body) }} />
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