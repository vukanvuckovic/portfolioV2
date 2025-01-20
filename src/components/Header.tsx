"use client";
import { links } from "@/constants/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft2 } from "iconsax-react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".header", {
      translateY: "0%",
      opacity: 1,
      ease: "power3.out",
      duration: 1.5,
    });
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".black-section",
        start: "top 10%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
      },
    });
    tl4.to(
      ".header-text",
      {
        color: "white",
      },
      0
    );
    tl4.to(
      ".header",
      {
        borderColor: "rgba(255,255,255,.1)",
      },
      0
    );
    tl4.to(
      ".header .black-button",
      {
        color: "black",
        backgroundColor: "#a8fc54",
      },
      0
    );
    tl4.to(
      ".header",
      {
        backgroundColor: "rgba(0,0,0,.1)",
      },
      0
    );
    tl4.to(
      ".menu-button line",
      {
        color: "white",
        fill: "white",
        stroke: "white",
        duration: 0.5,
      },
      0
    );
  });

  return (
    <>
      <div className="px-2 h-24 py-4 w-full max-w-[1400px] 2xl:max-w-[1560px] self-center fixed top-0 z-40">
        <header className="header h-full w-full flex flex-row items-center justify-between rounded-full opacity-0 -translate-y-[100%] p-1.5 pr-3 drop-shadow-md shadow-gray-200 bg-white bg-opacity-50 backdrop-blur-3xl">
          <Link
            href={"/"}
            className="h-full flex flex-row items-center gap-4"
          >
            <div className="h-full aspect-square flex justify-center items-center rounded-full bg-[linear-gradient(lightgreen,green)] relative">
              <Image
                src="/memoji/me.jpg"
                alt="memoji"
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="header-text text-lg text-dark-100 font-medium leading-none">
                Vukan Vuckovic
              </span>
              <span className="header-text text-xs text-gray-500 leading-none">
                Front End Developer
              </span>
            </div>
          </Link>
          <ul className="hidden lg:flex flex-row items-center gap-5">
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>
                  <span className="header-text text-dark-200 text-base">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
            <button className="black-button ml-10">Contact Me</button>
          </ul>
          <button
            className="lg:hidden mr-2"
            onClick={() => setMobileMenu(true)}
          >
            <Menu
              size={24}
              color="black"
              className="menu-button"
            />
          </button>
        </header>
      </div>
      <div
        style={{
          transform: mobileMenu ? "translateX(0%)" : "translateX(-100%)",
        }}
        className="h-[100dvh] w-[350px] duration-500 ease-out lg:hidden flex flex-col gap-4 p-6 fixed top-0 left-0 bg-black bg-opacity-20 backdrop-blur-xl z-50"
      >
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-white tracking-tighter">Vukan Vuckovic</h2>
          <button onClick={() => setMobileMenu(false)}>
            <ArrowLeft2
              size={24}
              color="white"
            />
          </button>
        </div>
        <ul className="flex-1 flex flex-col gap-3 ml-2">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                href={item.url}
                className="hover:ml-2 duration-200"
              >
                <span className="text-white text-xl tracking-tight leading-none">
                  {index + 1 <= 9 && "0"}
                  {index + 1} {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="self-center text-white">Feelin&apos; good</span>
      </div>
    </>
  );
};

export default Header;
