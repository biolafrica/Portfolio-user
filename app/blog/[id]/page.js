import Utterances from "@/app/components/common/utterances"
import { getBlogs } from "@/app/utils/database/getTasks"
import formatDate from "@/app/utils/common/fomatDate";
import SharePost from "@/app/components/common/share";

export default async function SelectedBlog({params}){
  const {id} = await params;
  const postID = parseInt(id, 10);
  const blogs = await getBlogs();

  const blog = blogs.filter(p=>p.id === postID);
  const blogIndex = blogs.findIndex(p => p.id === postID)
  const nextIndex = blogIndex + 1;
  const previousIndex= blogIndex -1;



  return(
    < div className="selected-blog-cont">
      {blog && (

        <div className="blog-content-cont" key={blog[0].id}>

          <div className="blog-content-image">
            <img src={`${blog[0].image}`} alt={`${blog[0].title} image`} />
          </div>

          <div className="blog-content-sub-content">

            <h4>
              <b>{blog[0].title}</b>
            </h4>

            <h5>{blog[0].excerpt}</h5>

            < div className="date-socials">
              <div className="date">
                <h6>{formatDate(blog[0].created_at)}</h6>
                <h6>&bull; {blog.read} minutes read</h6>
              </div>

              <SharePost blog={blog}/>

            </div>
          

          </div>

          <div className="blog-content-content">
            <h5 style={{fontWeight: "300"}}>{blog[0].content}</h5>
          </div>

          <div className="blog-content-footer">

            {previousIndex !== -1 && 
              (
                <div className="last-post-cont">
                  <h6>Previous Blog</h6>
                  <div className="last-post-sub">
                    <h5>{blogs[previousIndex].title}</h5>
                    <h6>{formatDate(blogs[previousIndex].created_at)}</h6>
                  </div>

                </div>

              )
            }


            {nextIndex <= (blogs.length-1) && 
              (

                <div className="next-post-cont">
                  <h6>Next Post</h6>
                  <div className="last-post-sub">
                    <h5>{blogs[nextIndex].title}</h5>
                    <h6>{formatDate(blogs[nextIndex].created_at)}</h6>
                  </div>
                </div>

              )
            }


          </div>

        </div>

      )}

    

      <div className="blog-comment-cont">
        <Utterances/>
        
      </div>
    </div>
  )
}