import BlogSection from "../components/sections/BlogSection"
import { getBlogs } from "../utils/database/getTasks";

export default async function Blog(){
  const blogs = await getBlogs();

  return(
    <>
      <BlogSection blogPosts={blogs}/>
    </>
  )
}