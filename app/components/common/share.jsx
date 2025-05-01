"use client"

import { useEffect, useState } from "react";

export default function SharePost({ blog }) {
  const [postUrl, setPostUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPostUrl(window.location.href );
    }
  }, []);

  const title = blog?.[0]?.title || "Check this out!";
  const id = blog?.[0]?.id || 12;
  const urlToShare = postUrl || `${process.env.NEXT_PUBLIC_URL}/${id}`
  

  const postLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(urlToShare)}&title=${encodeURIComponent(title)}`;
    window.open(linkedInUrl, "_blank", "noopener,noreferrer");
  };

  const postTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(urlToShare)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (

    <div className="share-socials date">
      <img 
        src="/icons/x.svg" 
        alt="share on twitter"
        role="button"
        onClick={postTwitter}
        tabIndex={0}
      />

      <img 
        src="/icons/linked.svg" 
        alt="Share on linkedIn" 
        onClick={postLinkedIn}
        tabIndex={0}
        role="button"
      />

    </div>
   
  );
}
