import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const TimelineElement = ({ text, now }: { text: string; now?: boolean }) => {
  return (
    <div
      className={`timeline-element p-2 pt-2.5 px-3.5 rounded-xl w-fit border-[1.5px] bg-[#f9f9f9] ${
        now ? "border-blue-300 shadow-md shadow-blue-100" : "border-gray-200"
      }`}
    >
      <span className={`${now ? "text-gray-500" : "text-gray-400"}`}>
        {text}
      </span>
    </div>
  );
};

const MyJourney = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-content",
        scrub: true,
        start: "top center",
        end: "bottom center",
      },
    });
    tl.to(
      ".timeline-thumb",
      {
        top: "100%",
        ease: "power1.inOut",
        duration: 1,
      },
      0
    );

    gsap.from(".timeline-element", {
      scrollTrigger: ".timeline-trigger",
      marginLeft: 20,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.to(".timeline-thumb-glow", {
      repeat: -1,
      width: 0,
      height: 0,
      duration: 0.7,
      yoyo: true,
    });
  });

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-1">
        <span className="text-dark-200 text-lg leading-none">
          How everything started?
        </span>
        <h1 className="leading-none tracking-tighter">My Journey</h1>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex-shrink-0 px-5 flex flex-col gap-8 items-center">
          <div className="timeline flex flex-col items-center h-full w-[1px] rounded-full bg-[linear-gradient(#d1d5db,#f3f4f6)] relative">
            <div className="timeline-thumb flex justify-center items-center w-4 h-4 bg-blue-400 rounded-full absolute top-0">
              <div className="timeline-thumb-glow h-4 w-4 blur-sm rounded-full bg-blue-400" />
            </div>
          </div>
          <h2 className="font-light">now</h2>
        </div>
        <div className="timeline-content flex-1 flex flex-col gap-3 md:gap-4">
          <TimelineElement text="Learning basics of C and programming, the way of thinking and finding solutions, getting familiar with coding simple CLI projects." />
          <TimelineElement text="Finding out about WordPress, falling in love with building websites. Learning as much as possible without writing as much code, mostly using Elementor." />
          <TimelineElement text="Getting started with HTML and CSS to get my skills to the next level and build more complex projects." />
          <TimelineElement text="Learning JavaScript, getting familiar with interactive design and handling user actions." />
          <TimelineElement text="Getting in touch with PHP because of WordPress, learning the basics, mostly towards building a bit more complex and custom mailing forms." />
          <TimelineElement text="Hearing all those good things about React, so learning it seemed like a great next step." />
          <TimelineElement text="Implementing Tailwind CSS in my projects for faster and more efficient workflow, as well as it's great utility and responsiveness related features." />
          <TimelineElement text="Time to choose a framework, wrapped all of those skills in Next.js" />
          <TimelineElement text="Getting familiar with other great design gimmicks such as Three.js and GSAP for more modern and interactive websites." />
          <TimelineElement text="Improving efficiency by implementing Redux, it was difficult to set up, but it truly is a lifesaver in complex workspaces." />
          <TimelineElement
            now
            text="Perfecting Back End skills so I can complete whole projects on my own, with confidence."
          />
        </div>
      </div>
    </div>
  );
};

export default MyJourney;
