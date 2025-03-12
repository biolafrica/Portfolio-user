export default function Home() {
  return (
    <section className="landing">

      <div className="text-cont">
        <h4 style={{color : "#3ecf8e"}}>Hi, I am</h4>
        <h1>Abiodun Biobaku</h1>
        <h5>Software engineer dedicated to innovation, committed to enriching lives by leveraging the power of technology to create impactful solutions.</h5>
      </div>

      <div className="btn-cont">
        <button className="pri-btn"><img src="/icon.svg" alt="" />Github</button>
        <button className="sec-btn"><img src="/resume.svg" alt="" />Resume</button>
      </div>

      <div className="stack-cont">
        <div className="stack_cont">
          <img src="/javascript.svg" alt="" />
          <img src="/react.svg" alt="" />
          <img src="/next 1.svg" alt="" />
          <img src="/nodejs_logo.svg" alt="" />
          <img src="/mongodb_logo.svg" alt="" />
          <img src="/Express.svg" alt="" />
          <img src="/typescript.svg" alt="" />
        </div>

        <h6>Currently specializing in MERN stack</h6>
       
      </div>

    </section>
   
  );
}
