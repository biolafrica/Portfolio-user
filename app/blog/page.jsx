import BlogsList from "../components/common/blogsList"
import { Suspense } from "react"
import Loading from "../loading"
import BlogSection from "../components/sections/BlogSection"


export default function Blog(){
  return(
    <>
      {/* <div className="blog-cont">
        <div className="blog-cont-head">
          <h2><b>The Chronicles of Abiodun</b></h2>
          <h4>Updates about my life along with my thoughts on technology and startups.</h4>
        </div>
        <Suspense fallback={<Loading/>}>
          <BlogsList/>
        </Suspense>
      </div>*/}

      <BlogSection/>

     </>
  )
}