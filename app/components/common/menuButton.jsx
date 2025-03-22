"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function MenuButton(){
  const [display, setDisplay]= useState("none")

  const handleMenuDisplay =()=>{
    setDisplay("")
  }

  const handleClose=()=>{
    setDisplay("none")
  }


  useEffect(()=>{

    const onResize = ()=>{
      const screenWidth = window.innerWidth;
      if(screenWidth > 992){
        setDisplay("none")
      }

    }

    window.addEventListener("resize", onResize)

  }, [])


  

  return(
    <>
      <div className="hamburger">
        <img src="/icons/Menu.svg" alt="hamburger icon" onClick={handleMenuDisplay}/>
      </div>

      <div className="nav-bar" style={{display:`${display}`}}>

        <div className="nav_header">
          <Link href="/" className="left" onClick={handleClose}>
            <img src="/icons/Token.svg" alt="abiodun logo" />
          </Link>

          <div className="close">
            <img src="/icons/Close.svg" alt="cancel icon" onClick={handleClose}/>
          </div>

        </div>

        <div className="nav_link">
          <Link href="/" onClick={handleClose}>Home</Link>
          <Link href="/project" onClick={handleClose}>Projects</Link>
          <Link href="/blog" onClick={handleClose}>Blog</Link>
        </div>

      </div>
    </>

  )
}