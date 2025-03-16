import Link from "next/link"

export default function ProjectList(){
  return(
    <div className="project-body-cont">

      <div className="columns">

        <div className="column">

          <div className="column_image">
            <img src="/images/project.jpg" alt="project image" />
          </div>

          <div className="column_content">

            <div className="column_content_head">
              <h4>Eatup Blog</h4>

              <div className="content_head_lang_cont">

                <div className="lang_image_cont">
                  <img src="icon/javascript.svg" alt="stack icon" />
                  javascript
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/nodejs.svg" alt="stack icon" />
                  node
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/mongodb.svg" alt="stack icon" />
                  express
                </div>

              </div>

            </div>

            <div className="column_content_body">
              <h5>A fully responsive blog designed to enhance the online presence of a food delivery brand. Built with a robust stack of JavaScript.</h5>
            </div>

            <Link href="" className="column_content_foot">
              <h6>Explore</h6>
              <img src="/icons/Arrow outward.svg" alt="arrow icon" />
            </Link>

          </div>

        </div>

        <div className="column">

          <div className="column_image">
            <img src="/images/project.jpg" alt="project image" />
          </div>

          <div className="column_content">

            <div className="column_content_head">
              <h4>Eatup Blog</h4>

              <div className="content_head_lang_cont">

                <div className="lang_image_cont">
                  <img src="icon/javascript.svg" alt="stack icon" />
                  javascript
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/nodejs.svg" alt="stack icon" />
                  node
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/mongodb.svg" alt="stack icon" />
                  express
                </div>

              </div>

            </div>

            <div className="column_content_body">
              <h5>A fully responsive blog designed to enhance the online presence of a food delivery brand. Built with a robust stack of JavaScript.</h5>
            </div>

            <Link href="" className="column_content_foot">
              <h6>Explore</h6>
              <img src="/icons/Arrow outward.svg" alt="arrow icon" />
            </Link>

          </div>

        </div>

        <div className="column">

          <div className="column_image">
            <img src="/images/project.jpg" alt="project image" />
          </div>

          <div className="column_content">

            <div className="column_content_head">
              <h4>Eatup Blog</h4>

              <div className="content_head_lang_cont">

                <div className="lang_image_cont">
                  <img src="icon/javascript.svg" alt="stack icon" />
                  javascript
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/nodejs.svg" alt="stack icon" />
                  node
                </div>

                <div className="lang_image_cont">
                  <img src="/icon/mongodb.svg" alt="stack icon" />
                  express
                </div>

              </div>

            </div>

            <div className="column_content_body">
              <h5>A fully responsive blog designed to enhance the online presence of a food delivery brand. Built with a robust stack of JavaScript.</h5>
            </div>

            <Link href="" className="column_content_foot">
              <h6>Explore</h6>
              <img src="/icons/Arrow outward.svg" alt="arrow icon" />
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}