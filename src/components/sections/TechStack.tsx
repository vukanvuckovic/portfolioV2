import { projectTraits, technologies } from "@/constants/data";
import Link from "next/link";
import React from "react";
import { Chart } from "../Chart";

const SkillItem = ({ icon, title }: { icon?: any; title?: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <div className="flex-shrink-0">{icon}</div>
      <div className="flex flex-col gap-1">
        <span className="text-white text-xs md:text-base leading-tight">
          {title}
        </span>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <div
      id="techStack"
      className="black-section flex flex-col w-full bg-[#0b0b0d] bg-[linear-gradient(#0b0b0d,#151515)] rounded-t-[36px]"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4 py-24 gap-10">
        <div className="flex-1 flex-shrink-0 flex flex-col gap-10 justify-between text-white">
          <div className="flex flex-col items-start gap-6 px-2 md:px-4">
            <h1>My Expertise</h1>
            <div className="flex max-sm:flex-col max-sm:items-start flex-row items-center justify-between max-md:w-full gap-8">
              <span className="max-md:text-sm text-white text-wrap">
                Everything starts with communication. <br />
                Let's do Business together!
              </span>
              <Link
                href={"/contact"}
                className="neon-button"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="max-md:hidden">
            <Chart />
          </div>
        </div>
        <div className="flex-1 flex-shrink-0 flex flex-col max-md:px-0 p-4 md:p-8 gap-12  custom-border rounded-[30px] text-white">
          <div className="flex flex-col max-md:items-center">
            <h2>Skills I've Mastered</h2>
            <span className="text-white max-md:text-xs text-lg leading-snug font-light max-md:text-center">
              Here are some of the traits each of my projects have.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {projectTraits.map((item, index) => {
              return (
                <SkillItem
                  key={index}
                  title={item.title}
                  icon={item.icon}
                />
              );
            })}
          </div>
          <div className="flex flex-col">
            <h2>Tech Stack</h2>
            <span className="text-white max-md:text-xs text-lg leading-snug font-light">
              These are the technologies I chose to master.
            </span>
          </div>
          <div className="grid grid-cols-3">
            {technologies.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-3"
                >
                  <div
                    className={`h-2 w-2 rounded-full ${
                      item.level === 3
                        ? "bg-green-400"
                        : item.level === 2
                          ? "bg-orange-400"
                          : "bg-yellow-400"
                    }`}
                  />
                  <span className="text-white text-xs md:text-base font-light">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="md:hidden">
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
