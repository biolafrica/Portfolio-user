"use client"

export default function MenuButton(){

  const handleMenuDisplay =()=>{
    console.log("Hello baby")
  }

  return(
    <div className="hamburger">
      <img src="/icons/Menu.svg" alt="hamburger icon" onClick={handleMenuDisplay}/>
    </div>
   

  )
}