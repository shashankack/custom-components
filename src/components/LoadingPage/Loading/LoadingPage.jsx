import React, { useEffect, useStatet } from "react";
import { gsap } from "gsap";
import Home from "../Home/Home";
import "./LoadingPage.css";

const LoadingPage = () => {
  const [showHome, setShowHome] = React.useState(false);

  useEffect(() => {
    // Manually split text into individual characters
    const text = document.querySelector(".loading-text h1");
    const chars = text.textContent
      .split("")
      .map((char) => `<span class='char'>${char}</span>`)
      .join("");
    text.innerHTML = chars;

    // Animate characters with GSAP
    gsap.fromTo(
      ".char",
      { opacity: 0.1, y: 50, scale: 0 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.1,
        ease: "elastic",
      }
    );

    // Page transition after loading animation
    const timeline = gsap.timeline({ delay: 2 });
    timeline.to(".loading-text", {
      opacity: 0,
      duration: .5,
      y: -200,
      onComplete: () => {
        setShowHome(true);
      },
    });
  }, []);

  return (
    <>
        <div className="loading-text">
          <h1>LOADING...</h1>
        </div>
    </>
  );
};

export default LoadingPage;
