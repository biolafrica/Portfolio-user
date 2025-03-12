
export default function Home() {
  return (
    <section className="landing">

      <div className="text-cont">
        <h4 style={{color : "#3ecf8e"}}>Hi, I am</h4>
        <h1>Abiodun Biobaku</h1>
        <h5>Software engineer dedicated to innovation, committed to enriching lives by leveraging the power of technology to create impactful solutions.</h5>
      </div>

      <div className="btn-cont">
        <button className="pri-btn">
          <img src="/icons/icon.svg" alt="github icon" />Github
        </button>

        <button className="sec-btn">
          <img src="/icons/resume.svg" alt="resume icon" />Resume
        </button>
      </div>

      <div className="stack-cont">
        <div className="stack_cont">
          <img src="/images/javascript.svg" alt="javascript icon" />
          <img src="/images/react.svg" alt="reactjs icon" />
          <img src="/images/next 1.svg" alt="nextjs icon" />
          <img src="/images/nodejs_logo.svg" alt="nodejs icon" />
          <img src="/images/mongodb_logo.svg" alt="mongodb icon" />
          <img src="/images/Express.svg" alt="expressjs icon" />
          <img src="/images/typescript.svg" alt="typescript icon" />
        </div>

        <h6>Currently specializing in MERN stack</h6>
       
      </div>

    </section>
   
  );
}
