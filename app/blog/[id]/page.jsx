import { getBlog } from "@/app/utils/database/getTask";
import BlogDetailPage from "@/app/components/common/blogDetails";
import { Suspense } from "react";
import Loading from "./loading";

export async function generateMetadata({params}){
  const {id} = await params;
  const blog = await getBlog(id)

  return{
    title: `Blog Details | ${blog.title}`
  }

}

export default async function SelectedBlog({params}){
  const {id} = await params;
  const blog = await getBlog(id)
  
  return(
    <div >
      <Suspense fallback={<Loading />}>
        <BlogDetailPage blog={blog}/>
      </Suspense>
      
    </div>
  )
}