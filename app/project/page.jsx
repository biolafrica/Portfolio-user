import ProjectsHomeSection from "../components/sections/ProjectsHomeSection";
export const metadata = {
  title: 'Projects',
  description: 'Full-stack web developer in Manchester & London, UK. Building scalable web applications with React, Next.js, and Node.js.',
}

export default async function Project(){
  return(
    <div>
      <ProjectsHomeSection align= "left" page="main"/>
    </div>
  )
}