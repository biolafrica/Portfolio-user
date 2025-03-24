"use client"

import Link from "next/link"

export default function AboutMe(){
  return(
    <h5 style={{fontWeight: "300"}}>
      Hi, I&apos;m Abiodun, a software engineer with a diverse background in both UX design and programming. My journey into the world of technology began with a passion for crafting seamless user experiences, which gave me a unique perspective on
      building intuitive, user-centered solutions. After gaining solid UX design experience, I transitioned into software
      development to further enhance my ability to create impactful and innovative solutions.
      <br/><br/>
      Throughout my career, I have had the opportunity to work with organizations like <Link href="https://www.eatup.ng/" style={{color:"#3ecf8e"}}>EatUp Food Services</Link>, and <Link style={{color:"#3ecf8e"}} href="https://www.16bags.com/">16bags</Link> where I contributed to building and improving digital products that align with user needs and business goals. My blend of UX
      expertise and software engineering skills enables me to not only develop functional systems but also ensure they deliver
      great user experiences.
      <br/><br/>
      When I am not coding, I love playing games, tuning into business and technology podcasts, and hitting the gym. These
      activities keep my creativity flowing and my problem solving skills sharp. I am committed to continually growing as a
      software engineer while staying focused on my mission: to use technology as a force for positive change.
      <br/><br/>
      Let us build something meaningful together.
    </h5>
  )
}