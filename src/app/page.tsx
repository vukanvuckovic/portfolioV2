"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InstagramSec from "@/components/Instagram";
import AboutMe from "@/components/sections/AboutMe";
import Hero from "@/components/sections/Hero";
import MyJourney from "@/components/sections/MyJourney";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import React from "react";

const Root = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="flex flex-col w-full max-w-[1400px] 2xl:max-w-[1560px] mx-auto px-4">
        <Header />
        <Hero />
        <AboutMe />
      </div>
      <TechStack />
      <div
        id="myJourney"
        className="flex flex-col bg-white rounded-t-[36px] mt-[-36px] py-24 z-10"
      >
        <div className="flex flex-col w-full max-w-[1400px] 2xl:max-w-[1560px] px-4 mx-auto">
          <MyJourney />
          <Projects />
          <InstagramSec />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
