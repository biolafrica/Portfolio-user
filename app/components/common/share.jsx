"use client"

import { useEffect, useState } from "react";

export default function SharePost({ blog }) {
  const [postUrl, setPostUrl] = useState("");
  const id = blog?.[0]?.id;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPostUrl(window.location.href || `${process.env.NEXT_PUBLIC_URL}/${id}`);
    }
  }, []);

  const title = blog?.[0]?.title || "Check this out!";
  

  const postLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(title)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const postTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(postUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (

    <div className="share-socials date">
      <img src="/icons/x.svg" alt="twitter icon" onClick={postTwitter}/>
      <img src="/icons/linked.svg" alt="linkedIn icon" onClick={postLinkedIn}/>
    </div>
   
  );
}
