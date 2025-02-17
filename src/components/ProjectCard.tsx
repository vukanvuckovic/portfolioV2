import Image from "next/image";
import React from "react";
import { Project } from "@/types";
import ArrowLink from "./ArrowLink";

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="project-card flex flex-col gap-6">
    <div className="w-full aspect-square rounded-2xl flex justify-center items-center relative overflow-hidden shadow-md shadow-gray-200">
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-row items-start justify-between gap-6">
        <h2 className="leading-none text-2xl md:text-4xl">{project.title}</h2>
        <span className="flex-shrink-0 text-sm md:text-lg leading-none">
          [ {project.type} ]
        </span>
      </div>
      <div className="flex flex-row items-center gap-6">
        {project.link && (
          <ArrowLink href={project.link} label="Live Website" target="_blank" />
        )}
        <ArrowLink href={`/projects/${project.slug}`} label="Case Study" />
      </div>
      <div className="flex flex-row flex-wrap items-center gap-1">
        {project.technologies.map((item, index) => (
          <span
            key={index}
            className="px-3 py-[2px] md:py-1 pt-1 md:pt-1.5 text-[10px] md:text-xs rounded-full bg-dark-200 text-gray-100 select-none hover:mx-1 duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
