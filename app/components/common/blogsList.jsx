import { getBlogs } from "@/app/utils/database/getTasks"
import formatDate from "@/app/utils/common/fomatDate";
import Link from "next/link";
import { EmptyBlog } from "../static/empty";
import Image from "next/image";

export default async function BlogsList(){
  const blogs = await getBlogs();
  const filteredBlogs = blogs.filter((i)=> {return i !== 0 })

  return(
    <div className="blogs-list-cont">
       
      {blogs.length !== 0 ? 
        (
          <Link href={`/blog/${blogs[0].id}`} className="blogs-list-head" key={blogs[0].id}>

            <div className="list-head-image-cont">
              <img src={`${blogs[0].image}`} alt={`${blogs[0].title} image`} />
              
            </div>

            <h6 style={{color: "#3ecf8e"}}>{blogs[0].type}</h6>
            <h3><b>{blogs[0].title}</b></h3>
            <h5>{blogs[0].excerpt}</h5> 

            <div className="date">
              <h6>{formatDate(blogs[0].created_at)}</h6>
              <h6>&bull; {blogs[0].read} minutes read</h6>
            </div>
        
          </Link>

        ):(<EmptyBlog/> )
      }


      <div className="blogs-list-body">

        {blogs.length !== 1 && 
          (
            filteredBlogs.map((blogs)=>(

              <Link href={`/blog/${blogs.id}`} className="blogs-list-body-column" key={blogs.id}>

                <div className="list-head-image-cont">
                  <img src={`${blogs.image}`} alt={`${blogs.title} image`} />
                </div>

                <h6 style={{color: "#3ecf8e"}}>{blogs.type}</h6>
                <h3><b>{blogs.title}</b></h3>
                <h5>{blogs.excerpt}</h5>

                <div className="date">
                  <h6>{formatDate(blogs.created_at)}</h6>
                  <h6>&bull; {blogs.read} minutes read</h6>
                </div>

              </Link>

            ))
          ) 
        }

      </div>

    </div>
  )
}