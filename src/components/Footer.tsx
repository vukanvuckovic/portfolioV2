import { links, projects, socialLinks } from "@/constants/data";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Ballpit from "./BallPit/BallPit";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="black-section flex flex-col bg-dark-200 bg-[linear-gradient(#111111,#161616)] rounded-t-[36px] py-24 px-4 relative">
      <div className="max-md:hidden w-full h-full absolute top-0 left-0 z-10 opacity-50">
        <Ballpit
          count={60}
          gravity={1}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
          colors={["#fff", "#000", "#a8fc54"]}
          ambientIntensity={0.2}
          lightIntensity={10}
        />
      </div>
      <div className="flex flex-col max-md:items-center gap-20 w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-fit self-center">
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-white text-opacity-40 font-light">
              Quick Links
            </h2>
            <ul className="flex flex-col gap-1 font-light">
              {links.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <span className="text-white text-sm md:text-lg lg:text-xl">
                      {index + 1 <= 9 && "0"}
                      {index + 1} {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-white text-opacity-40 font-light">
              Social Links
            </h2>
            <ul className="flex flex-col gap-1 font-light">
              {socialLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="flex flex-row items-center gap-4"
                  >
                    {item.icon}
                    <span className="text-white text-sm md:text-lg lg:text-xl">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 text-white">
            <h2 className="text-lg md:text-2xl lg:text-3xl text-white text-opacity-40 font-light">
              Projects
            </h2>
            <ul className="flex flex-col gap-3 font-light">
              {projects.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="flex flex-row items-center gap-4"
                  >
                    <div className="h-8 md:h-10 w-8 md:w-10 flex-shrink-0 rounded-lg relative overflow-hidden">
                      <Image
                        src={item.logo}
                        alt="logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white text-sm md:text-lg lg:text-xl text-left">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-start md:justify-end">
            <Link
              href={"/contact"}
              className="neon-button w-fit h-fit flex flex-row items-center gap-2 group"
            >
              <span className="text-dark-200 text-xs md:text-sm lg:text-base">
                Contact <span className="max-sm:hidden">Me</span>
              </span>
              <ArrowRight
                size={18}
                color="black"
                className="-rotate-45 group-hover:-rotate-90 duration-200"
              />
            </Link>
          </div>
        </div>
        <div className="flex max-md:flex-col max-md:items-start max-md:self-start flex-row items-center gap-4 md:gap-10">
          <h2 className="text-white max-md:text-xl font-medium leading-none">
            Vukan Vuckovic
          </h2>
          <span className="text-gray-200 leading-none">
            {date.getFullYear()} © All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
