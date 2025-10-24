import Link from "next/link"
import Image from "next/image";
import FooterSection from "../common/footerSection";
import FooterHeroSection from "../common/footerHeroSection";

export default function Footer(){
  const year = new Date().getFullYear();

  return(
    <>
      <FooterHeroSection/>
      <FooterSection/>
    </>
  
  )

}

{/*  <div className="footer">

  <h3><b>Keep in Touch</b></h3>
  <h5>I am currently specializing in MERN stack.</h5>
  <h5>Lets Connect and Build Something Great Together.</h5>

  <div className="footer-btn">

    <Link href="mailto:biolafrica@gmail.com" className="pri-btn" target="_blank">
      <Image src="/icons/Email.svg" alt="email icon" width={24} height={24} />
      <h6>Email</h6>
    </Link>

    <Link href="https://www.linkedin.com/in/abiobaku/" className="sec-btn" target="_blank">
      <Image src="/icons/LinkedIn.svg" alt="linkedin icon" width={24} height={24} />
      <h6>LinkedIn</h6>
    </Link>

  </div>
</div>

<div className="copyright">
  <h6>Copyright &copy; {year} Abiodun Biobaku</h6>
</div>   */}