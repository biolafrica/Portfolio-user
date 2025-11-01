"use client"
import React from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function Loading(){
  return(
    <div className="loading">
      <DotLottieReact
        src="/Animation - 1742893479110.json"
        loop
        autoplay
      />
    </div>
 

  )
}