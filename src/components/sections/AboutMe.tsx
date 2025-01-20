import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

const AboutMe = () => {
  const aboutMeText = useRef<HTMLDivElement>(null);
  const [textReady, setTextReady] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (aboutMeText.current) {
      const text = aboutMeText.current.innerText;
      const wordElements = text
        .split(" ")
        .map(
          (item, index) =>
            `<span class="about-me-word tracking-tight !text-3xl text-gray-400" data-word-index="${index}">${item}&nbsp;</span>`
        )
        .join(" ");
      aboutMeText.current.innerHTML = wordElements;
      setTextReady(true);
    }
  }, []);

  useGSAP(() => {
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-me-text",
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
    });

    tl2.to(".about-me-word", {
      color: "#212121",
      ease: "none",
      stagger: 0.3,
    });
  }, [textReady]);

  return (
    <div className="flex flex-col max-md:gap-4 md:flex-row items-start my-24">
      <div className="md:w-1/3">
        <h2>About Me</h2>
      </div>
      <div
        ref={aboutMeText}
        className="about-me-text md:w-2/3 tracking-tight !text-3xl text-gray-400 text-justify flex flex-row flex-wrap"
      >
        I&apos;m a 19 year old Front End Developer based in Serbia, I enjoy learning
        new technologies and web based skills. Currently, I&apos;m working on
        perfecting my Back End skills so I can complete whole projects on my
        own, with confidence.
      </div>
    </div>
  );
};

export default AboutMe;
