"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { projects } from "@/constants/data";
import { ArrowLeft2, ArrowRight, ArrowRight2 } from "iconsax-react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Loader2Icon } from "lucide-react";

const page = () => {
  const params = useParams(); // Access route parameters.
  const [project, setProject] = useState<(typeof projects)[0] | undefined>(
    undefined
  );
  const [previewIndex, setPreviewIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo(
      ".previewImage",
      {
        scale: 1.05,
        filter: "blur(10px)",
        ease: "power3.out",
        duration: 1,
        opacity: 0,
      },
      {
        scale: 1,
        filter: "blur(0px)",
        ease: "power3.out",
        duration: 1,
        opacity: 1,
      }
    );
    gsap.to(".loader", {
      rotate: 360,
      duration: 2,
      ease: "none",
      repeat: -1,
    });
  }, [previewIndex, project]);

  useEffect(() => {
    if (params?.name && typeof params.name === "string") {
      const projectName = params.name;
      setProject(
        projects.find((item) => item.slug.toLowerCase() === projectName)
      );
    }
  }, [params]);

  return (
    <>
      <div className="flex flex-col w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4">
        <Header />
        {project ? (
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-2/5 flex-shrink-0 md:pt-28 lg:p-6 lg:pt-28 pb-10 flex flex-col gap-12 order-2 md:order-1">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-center gap-3 drop-shadow-sm shadow-gray-200">
                  <Image
                    src={project.logo}
                    alt="project logo"
                    height={40}
                    width={40}
                    className="object-cover rounded-lg"
                  />
                  <h2 className="mt-1 leading-none font-medium">{project.title}</h2>
                </div>
                <span className="text-xs md:text-sm lg:text-base whitespace-pre-wrap my-4">
                  {project.desc}
                </span>
                <div className="flex flex-row items-center justify-between">
                  <button className="flex flex-row items-center gap-2 group">
                    <span className="leading-none text-sm sm:text-base md:text-lg text-gray-600">
                      Live Website
                    </span>
                    <ArrowRight
                      size={16}
                      color="#4b5563"
                      className="-rotate-45 group-hover:-rotate-90 duration-200"
                    />
                  </button>
                  <span className="flex-shrink-0 text-sm md:text-lg leading-none">
                    [ {project.type} ]
                  </span>
                </div>
                <div className="flex flex-row flex-wrap items-center gap-1">
                  {project.technologies.map((item, index) => (
                    <span
                      key={index}
                      className="px-3 hover:mx-1 duration-150 py-[2px] md:py-1 pt-1 md:pt-1.5 text-[10px] md:text-xs rounded-full bg-dark-200 text-gray-100 select-none"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="tracking-tighter">Key Features</h2>
                <ul className="ml-2 flex flex-col gap-2">
                  {project.keyFeatures.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-row items-center gap-2 hover:gap-3 duration-200"
                    >
                      <ArrowRight
                        size={18}
                        color="green"
                      />
                      <span className="select-none max-md:text-sm text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 flex-shrink-0 w-full md:h-[100vh] pt-24 md:pt-20 flex flex-col gap-4 justify-center md:sticky top-0 order-1 md:order-2">
              <div
                key={previewIndex}
                className="h-[60vh] w-full md:h-[80%] relative drop-shadow-md shadow-gray-200"
              >
                <Image
                  src={project.preview[previewIndex]}
                  alt="image"
                  fill
                  className="object-contain previewImage opacity-0"
                />
              </div>
              <div className="flex flex-row items-center gap-2 self-center">
                <button
                  onClick={() =>
                    setPreviewIndex((prev) =>
                      prev > 0 ? prev - 1 : project.preview.length - 1
                    )
                  }
                  className="flex justify-center items-center h-8 w-8 border-[1px] border-gray-300 rounded-full hover:scale-[105%] duration-150 bg-[linear-gradient(#f3f4f6,white)]"
                >
                  <ArrowLeft2
                    color="#9ca3af"
                    size={18}
                  />
                </button>
                <div className="h-8 px-3 flex flex-row items-center gap-2 border-[1px] border-gray-300 rounded-full bg-[linear-gradient(#f3f4f6,white)]">
                  {project.preview.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setPreviewIndex(index)}
                      className={`h-2 w-2 rounded-full ${
                        previewIndex === index
                          ? "bg-gray-400 w-6"
                          : "bg-gray-300"
                      } duration-500`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setPreviewIndex((prev) =>
                      prev < project.preview.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="flex justify-center items-center h-8 w-8 border-[1px] border-gray-300 rounded-full hover:scale-[105%] duration-150 bg-[linear-gradient(#f3f4f6,white)]"
                >
                  <ArrowRight2
                    color="#9ca3af"
                    size={18}
                  />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[100dvh] w-full flex justify-center items-center">
            <Loader2Icon
              size={50}
              color="green"
              className="loader"
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default page;
