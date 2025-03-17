"use client"

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Utterances() {
  const pathname = usePathname(); 

  useEffect(() => {
    const container = document.getElementById("utterances-container");

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "biolafrica/abiodun-portfolio");
    script.setAttribute("issue-term", "url");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    container.appendChild(script);
  }, [pathname]);

  return <div id="utterances-container" />;
}




