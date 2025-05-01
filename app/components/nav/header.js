import Link from "next/link"
import MenuButton from "../common/menuButton"
import Image from "next/image"

export default function Header(){
  return(
    <div>

      <nav>
        <Link href="/" className="left">
          <Image src="/images/Frame 1145.png" alt="abiodun logo" width={36} height={36} />
        </Link>

        <div className="right">
          <Link href="/">Home</Link>
          <Link href="/project">Projects</Link>
          <Link href="/blog">Blog</Link>
        </div>
        
        <MenuButton/>
      </nav>



    </div>
  )

}