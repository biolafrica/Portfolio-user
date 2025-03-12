import Link from "next/link"

export default function Header(){
  return(
    <headers>
      <nav>

        <div className="left">
          <img src="/icons/Token.svg" alt="" />
        </div>

        <div className="right">
          <h5>Home</h5>
          <h5>Project</h5>
          <h5>Blog</h5>
        </div>

      </nav>



    </headers>
  )

}