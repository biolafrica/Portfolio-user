import { getBlog } from "@/app/utils/database/getTask";
import BlogDetailPage from "@/app/components/common/blogDetails";

export async function generateMetadata({params}){
  const {id} = await params;
  const blog = await getBlog(id)

  return{
    title: `Abiodun Chronicles | ${blog.title}`
  }

}

export default async function SelectedBlog({params}){
  const {id} = await params;
  const blog = await getBlog(id)
  return(
    <>
      <BlogDetailPage blog={blog}/>
    </>
  )
}