"use client";

import { Message2, Save2, Heart } from "iconsax-react";
import { Share } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { posts } from "@/constants/data";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const InstagramPost = ({ img }: { img: string }) => {
  const [liked, setLiked] = useState(true);
  return (
    <div className="flex flex-col rounded-md overflow-hidden mb-4">
      <div className="w-full aspect-square relative">
        <Image
          src={img}
          alt="post"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white flex flex-row items-center justify-between py-2 px-3">
        <div className="flex flex-row items-center gap-2">
          {liked ? (
            <button onClick={() => setLiked(false)}>
              <Heart
                variant="Bold"
                color="red"
                size={16}
              />
            </button>
          ) : (
            <button onClick={() => setLiked(true)}>
              <Heart
                color="black"
                size={16}
              />
            </button>
          )}
          <Message2
            color="black"
            size={16}
          />
          <Share
            color="black"
            size={16}
          />
        </div>
        <Save2
          size={16}
          color="black"
        />
      </div>
    </div>
  );
};

const InstagramSec = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".infinite-vertical-scroll", {
      transform: "translateY(-50%)",
      ease: "none",
      duration: 200,
      repeat: -1,
      scrollTrigger: {
        trigger: ".post-sec",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });
    gsap.to(".infinite-vertical-scroll-2", {
      transform: "translateY(-50%)",
      ease: "none",
      duration: 200,
      repeat: -1,
      scrollTrigger: {
        trigger: ".post-sec",
        start: "top bottom",
        toggleActions: "play pause play pause",
      },
    });
    gsap.to(".post-sec", {
      opacity: 1,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".post-sec",
        start: "top bottom",
      },
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".instagram-sec",
        start: "top bottom",
      },
    });
    tl.from(
      ".big-sec",
      {
        opacity: 0,
        translateX: -200,
        duration: 2,
        ease: "power4.out",
      },
      0
    );
    tl.from(
      ".phone",
      {
        opacity: 0,
        marginTop: "100%",
        duration: 3,
        ease: "power4.out",
      },
      0
    );
    tl.from(
      ".small-sec",
      {
        opacity: 0,
        translateX: 200,
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
      },
      0.5
    );
    tl.from(
      ".scroll-sec",
      {
        opacity: 0,
        duration: 2,
        ease: "power4.out",
        stagger: 0.3,
      },
      1
    );
  });

  return (
    <div className="instagram-sec flex flex-col gap-6 relative pt-52">
      <div className="hidden lg:flex gradient-right h-[200px] w-[400px] rounded-full blur-[120px] opacity-20 bg-blue-400 lg:bg-orange-400 absolute top-0 right-0" />
      <div className="hidden lg:flex gradient-right h-[400px] w-[200px] rounded-full blur-[100px] opacity-20 bg-blue-400 absolute top-24 left-0 z-10" />
      <div className="flex flex-col gap-1 items-center z-30">
        <span className="leading-none">Follow me</span>
        <h2 className="leading-none tracking-tighter">
          Check out my Instagram
        </h2>
      </div>
      <div className="post-sec opacity-0 grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 z-10 drop-shadow-sm shadow-gray-100 relative">
        <div className="w-[40%] h-[60%] rounded-full bg-blue-300 blur-lg opacity-10 absolute top-0 left-0" />
        <div className="w-[40%] h-[60%] rounded-full bg-blue-300 blur-2xl opacity-10 absolute bottom-0 right-0" />
        <div className="big-sec md:main-img col-span-3 max-md:aspect-square md:col-span-2 md:row-span-2 relative rounded-lg bg-white bg-opacity-20 backdrop-blur-2xl overflow-hidden border-[1px] border-gray-200">
          <Image
            src={"/mockups/instagram.png"}
            alt="iphone"
            fill
            className="phone object-contain mt-[15%]"
          />
        </div>

        <div className="small-sec md:small-img relative aspect-square rounded-lg !overflow-hidden">
          <Image
            src="/instagram/images/applewatch.png"
            alt="iphone"
            fill
            className="object-cover"
          />
        </div>
        <div className="small-sec md:small-img relative aspect-square rounded-lg !overflow-hidden">
          <Image
            src="/instagram/images/iphone.png"
            alt="iphone"
            fill
            className="object-cover"
          />
        </div>
        <div className="small-sec md:small-img relative aspect-square rounded-lg !overflow-hidden">
          <Image
            src="/instagram/images/ipad.png"
            alt="iphone"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:slider col-span-3 aspect-square md:aspect-video flex flex-row gap-4 md:gap-6 relative !overflow-hidden">
          <div className="scroll-sec flex-1 rounded-lg !overflow-hidden">
            <div className="flex flex-col infinite-vertical-scroll">
              {posts.map((item, index) => {
                return (
                  <InstagramPost
                    key={index}
                    img={item.img}
                  />
                );
              })}
              {posts.map((item, index) => {
                return (
                  <InstagramPost
                    key={index}
                    img={item.img}
                  />
                );
              })}
            </div>
          </div>
          <div className="scroll-sec flex-1 rounded-lg !overflow-hidden">
            <div className="flex flex-col infinite-vertical-scroll-2">
              {posts.map((item, index) => {
                return (
                  <InstagramPost
                    key={index}
                    img={item.img}
                  />
                );
              })}
              {posts.map((item, index) => {
                return (
                  <InstagramPost
                    key={index}
                    img={item.img}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Link
        target="_blank"
        href={"https://instagram.com/devhatchery"}
        className="border-[1px] border-gray-300 rounded-full px-6 hover:px-10 duration-300 py-3 pt-3.5 self-center text-gray-700 leading-none"
      >
        @devhatchery
      </Link>
    </div>
  );
};

export default InstagramSec;
