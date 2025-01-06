import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }: { project: any }) => (
  <div className="project-card flex flex-col gap-6">
    <div className="w-full aspect-square rounded-2xl flex justify-center items-center relative overflow-hidden shadow-md shadow-gray-200">
      <Image
        src={project.img}
        alt="image"
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
        <Link
          href={project.link}
          target="_blank"
          className="flex flex-row items-center gap-2 group"
        >
          <span className="leading-none text-sm md:text-lg text-gray-600">
            Live Website
          </span>
          <ArrowRight
            size={16}
            color="#4b5563"
            className="-rotate-45 group-hover:-rotate-90 duration-200"
          />
        </Link>
        <Link
          href={`/projects/${project.slug}`}
          className="flex flex-row items-center gap-2 group"
        >
          <span className="leading-none text-sm md:text-lg text-gray-600">
            Case Study
          </span>
          <ArrowRight
            size={16}
            color="#4b5563"
            className="-rotate-45 group-hover:-rotate-90 duration-200"
          />
        </Link>
      </div>
      <div className="flex flex-row flex-wrap items-center gap-1">
        {project.technologies.map((item: string, index: number) => (
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
