import Link from "next/link"
import MenuButton from "../common/menuButton"

export default function Header(){
  return(
    <div>

      <nav>
        <Link href="/" className="left">
          <img src="/icons/Token.svg" alt="abiodun logo" />
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