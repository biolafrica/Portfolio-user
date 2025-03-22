import { getBlogs } from "@/app/utils/database/getTasks"
import Link from "next/link";
import formatDate from "@/app/utils/common/fomatDate";


export default async function BlogList(){

  const blogs = await getBlogs();
  const slicedBlog = blogs.slice(0, 4);

  return(
    <div className="blog_body">

      {slicedBlog.length !== 0 ?(slicedBlog.map((blog)=>(

        <Link href={`/blog/${blog.id}`} className="blog_body_colum" key={blog.id}>

          <div className="body_column_top">
            <img src={`${blog.image}`} alt={`${blog.title} image`} />
          </div>

          <div className="body_column_buttom">
            <h5>{blog.type}</h5>
            <h4>{blog.title}</h4>
            <h6>{formatDate(blog.created_at)}</h6>
          </div>
        
        </Link>
        
      ))):(<h4>No blog available</h4>)}

  
    </div>
 
  )

}