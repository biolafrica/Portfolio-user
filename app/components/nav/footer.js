import Link from "next/link"



export default function Footer(){
  const year = new Date().getFullYear();

  return(
    <>
      <div className="footer">

        <h3><b>Keep in Touch</b></h3>
        <h5>I am currently specializing in MERN stack.</h5>
        <h5>Lets Connect and Build Something Great Together.</h5>

        <div className="footer-btn">

          <Link href="mailto:biolafrica@gmail.com" className="pri-btn" target="_blank">
            <img src="icons/Email.svg" alt="" />
            <h6>Email</h6>
          </Link>

          <Link href="https://www.linkedin.com/in/abiobaku/" className="sec-btn" target="_blank">
            <img src="icons/LinkedIn.svg" alt="" />
            <h6>LinkedIn</h6>
          </Link>

        </div>
      </div>

      <div className="copyright">
        <h6 class="dark-color">Copyright &copy; {year} Abiodun Biobaku</h6>
      </div>
    </>
  
  )

}