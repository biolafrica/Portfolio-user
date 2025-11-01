import BlogSection from "../components/sections/BlogSection"
import { getBlogs } from "../utils/database/getTasks";

export const metadata = {
  title: 'Blog',
  description: 'Full-stack web developer in Manchester & London, UK. Building scalable web applications with React, Next.js, and Node.js.',
}

export default async function Blog(){
  const blogs = await getBlogs();

  return(
    <>
      <BlogSection blogPosts={blogs}/>
    </>
  )
}