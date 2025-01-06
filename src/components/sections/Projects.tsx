import { projects } from "@/constants/data";
import React from "react";
import ProjectCard from "../ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".projects-trigger",
        scrub: true,
        start: "top bottom",
        end: "bottom center",
      },
    });
    tl3.to(
      ".project-container-1",
      {
        marginTop: 200,
        ease: "power1.inOut",
      },
      0
    );
    tl3.to(
      ".project-container-2",
      {
        marginTop: 0,
        ease: "power1.inOut",
      },
      0
    );
  });

  return (
    <div
      id="projects"
      className="flex flex-col gap-12 pt-52"
    >
      <div className="flex flex-col gap-2">
        <span className="text-dark-200 text-lg leading-none">
          Take a look at my work
        </span>
        <h1 className="leading-none tracking-tighter">My Projects</h1>
      </div>
      <div className="projects-trigger max-md:hidden flex flex-row gap-8">
        <div className="project-container-1 flex-1 flex-shrink-0 flex flex-col gap-24">
          {projects.slice(0, 2).map((item, index) => (
            <ProjectCard
              key={index}
              project={item}
            />
          ))}
        </div>
        <div className="project-container-2 flex-1 flex-shrink-0 flex flex-col gap-24 mt-52">
          {projects.slice(2).map((item, index) => (
            <ProjectCard
              key={index}
              project={item}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:hidden gap-16">
        {projects.map((item, index) => (
          <ProjectCard
            key={index}
            project={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
