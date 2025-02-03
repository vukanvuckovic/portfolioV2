import React from "react";

const Hero = () => {
  return (
    <div className='flex flex-col gap-6 justify-end h-[calc(100vh-7rem)] max-md:p-4 p-8 bg-[url("/background/green-bg3.png")] bg-cover bg-center rounded-2xl overflow-hidden mt-24 relative'>
      <h1>
        Get to know my passion and skills for <b>web development.</b> <br />
        Crafting digital art with precision.
      </h1>
      <div className="flex flex-row items-center gap-4">
        <button className="black-button max-md:text-sm">Projects</button>
        <span className="text-lg text-gray-800">or</span>
        <div className="flex flex-col gap-0.5 w-fit group">
          <button className="text-dark-200 max-md:text-sm text-lg leading-none">
            Tech Stack
          </button>
          <div className="w-full h-[1px] bg-dark-200 group-hover:w-0 duration-200 ease-out" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
