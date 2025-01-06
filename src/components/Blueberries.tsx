import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

const Blueberries = () => {
  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".parallax-section",
        scrub: true,
        start: "top bottom",
        end: "bottom start",
        markers: true,
      },
    });
    tl.to(
      ".bb1",
      {
        marginTop: -200,
        duration: 1,
        ease: "none",
      },
      0
    );
    tl.to(
      ".bb2",
      {
        marginTop: -100,
        duration: 1,
        ease: "none",
      },
      0
    );
  }, []);
  return (
    <div className="parallax-section w-full max-w-[1400px] 2xl:max-w-[1560px] self-center overflow-hidden h-[50dvh] md:h-[80dvh] flex justify-center items-center bg-white relative">
      <div className="w-full h-[20dvh] bg-[linear-gradient(#fff,transparent)] absolute top-0 left-0 z-10" />
      <div className="w-full h-[20dvh] bg-[linear-gradient(to_top,#fff,transparent)] absolute bottom-0 left-0 z-10" />
      <div className="w-full aspect-square absolute top-0 left-0">
        <div className="w-full aspect-square relative">
          <Image
            src={"/blueberry/bb1.png"}
            alt="bb1"
            fill
            className="bb1 object-contain opacity-60 md:opacity-80"
          />
        </div>
      </div>
      <div className="w-full aspect-square absolute top-0 left-0">
        <div className="w-full aspect-square relative">
          <Image
            src={"/blueberry/bb2.png"}
            alt="bb2"
            fill
            className="bb2 object-contain blur-sm md:blur-md opacity-40 md:opacity-60"
          />
        </div>
      </div>
      <h1 className="z-10 text-black">Unneccessary section.</h1>
    </div>
  );
};

export default Blueberries;
