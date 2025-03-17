export default function SelectedBlog(){
  return(
    < div className="selected-blog-cont">

      <div className="blog-content-cont">

        <div className="blog-content-image">
          <img src="/images/blog.png" alt="blog content image" />
        </div>

        <div className="blog-content-sub-content">

          <h4>
            <b>Breaking Chains, Not Banks: Rethinking Knowledge Sharing.</b>
          </h4>

          <h5>This International Women’s Day 2025, we celebrate 25 phenomenal women from Nigeria, Ghana, Kenya, and South Africa who are not just shaping their industries but paving new paths for the next generation.</h5>
          
          <div className="date">
            <h6>1st January, 2025</h6>
            <h6>&bull; 5 minutes read</h6>
          </div>

        </div>

        <div className="blog-content-content">
          <h5 style={{fontWeight: "300"}}>
            Hi, I'm Abiodun, a software engineer with a diverse background in both UX design and programming. My journey into the world of technology began with a passion for crafting seamless user experiences, which gave me a unique perspective on
            building intuitive, user-centered solutions. After gaining solid UX design experience, I transitioned into software
            development to further enhance my ability to create impactful and innovative solutions.
            <br/><br/>
            Throughout my career, I have had the opportunity to work with organizations like  where I contributed to building and improving digital products that align with user needs and business goals. My blend of UX
            expertise and software engineering skills enables me to not only develop functional systems but also ensure they deliver
            great user experiences.
            <br/><br/>
            When I am not coding, I love playing games, tuning into business and technology podcasts, and hitting the gym. These
            activities keep my creativity flowing and my problem solving skills sharp. I am committed to continually growing as a
            software engineer while staying focused on my mission: to use technology as a force for positive change.
            <br/><br/>
            Let us build something meaningful together.
          </h5>
        </div>

        <div className="blog-content-footer">

          <div className="last-post-cont">
            <h6>Last Post</h6>
            <div className="last-post-sub">
              <h5>2024 Retrospect</h5>
              <h6>1st January 2026</h6>
            </div>
          </div>

          <div className="next-post-cont">
            <h6>Next Post</h6>
            <div className="last-post-sub">
              <h5>2024 Retrospect</h5>
              <h6>1st January 2026</h6>
            </div>
          </div>

        </div>
      </div>

      <div className="blog-comment-cont">
        <h4>Comments</h4>

      </div>
    </div>
  )
}