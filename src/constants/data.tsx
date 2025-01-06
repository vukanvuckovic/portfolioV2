import {
  Brush2,
  Code1,
  Google,
  Grid1,
  LanguageCircle,
  Lock,
  SearchStatus,
  Speedometer,
  Star,
  Sun,
  TickCircle,
} from "iconsax-react";
import { Folder, Github, Mail, Instagram } from "lucide-react";

export const projectTraits = [
  {
    title: "Clean and Modular Code",
    desc: "My code is structured for maintainability, reusability, and scalability, ensuring a seamless development process.",
    icon: (
      <Code1
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Styling Specification",
    desc: "Well-documented and consistent styling using modern CSS practices, including Tailwind CSS and modular CSS.",
    icon: (
      <Brush2
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Pixel-Perfect Design",
    desc: "Every detail is crafted with precision to ensure a flawless and visually stunning interface.",
    icon: (
      <TickCircle
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Smooth Animations",
    desc: "Custom animations and micro-interactions that enhance the user experience and bring interfaces to life.",
    icon: (
      <Star
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Responsive Layouts",
    desc: "Designs that adapt seamlessly to any device, from mobile phones to large desktops.",
    icon: (
      <Grid1
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Optimized Performance",
    desc: "Fast-loading and efficient code that ensures smooth user experiences even on slower connections.",
    icon: (
      <Speedometer
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Accessibility First",
    desc: "Inclusive designs that adhere to WCAG standards, ensuring usability for everyone.",
    icon: (
      <TickCircle
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "SEO-Friendly Structure",
    desc: "Semantic, clean HTML and well-optimized content to help projects rank higher on search engines.",
    icon: (
      <SearchStatus
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Custom Integrations",
    desc: "Tailored integrations, including APIs and third-party tools, to meet unique project requirements.",
    icon: (
      <Sun
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Localization Ready",
    desc: "Multi-language support that ensures accessibility and usability for global audiences.",
    icon: (
      <LanguageCircle
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Cross-Browser Compatibility",
    desc: "Ensures a consistent and flawless experience across all modern web browsers.",
    icon: (
      <Google
        size={18}
        color="white"
      />
    ),
  },
  {
    title: "Security Best Practices",
    desc: "Front-end implementations designed with security in mind, protecting user data and minimizing vulnerabilities.",
    icon: (
      <Lock
        size={18}
        color="white"
      />
    ),
  },
];

export const technologies = [
  {
    name: "Figma",
    icon: "/icons/figma.svg",
    level: 2,
  },
  {
    name: "WordPress",
    icon: "/icons/wp3.svg",
    level: 3,
  },
  {
    name: "Elementor",
    icon: "/icons/elementor2.webp",
    level: 3,
  },
  {
    name: "HTML",
    icon: "/icons/html.svg",
    level: 3,
  },
  {
    name: "CSS",
    icon: "/icons/css.svg",
    level: 3,
  },
  {
    name: "Node.js",
    icon: "/icons/node.svg",
    level: 1,
  },
  {
    name: "JavaScript",
    icon: "/icons/js.svg",
    level: 3,
  },
  {
    name: "TypeScript",
    icon: "/icons/ts.svg",
    level: 3,
  },
  {
    name: "PHP",
    icon: "/icons/php.svg",
    level: 1,
  },
  {
    name: "NPM",
    icon: "/icons/npm.svg",
    level: 2,
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    level: 3,
  },
  {
    name: "React Native",
    icon: "/icons/react.svg",
    level: 3,
  },
  {
    name: "Expo",
    icon: "/icons/expo.svg",
    level: 3,
  },
  {
    name: "Next.js",
    icon: "/icons/nextjs.png",
    level: 3,
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.svg",
    level: 3,
  },
  {
    name: "GSAP",
    icon: "/icons/gsap.png",
    level: 2,
  },
  {
    name: "Three.js",
    icon: "/icons/threee.png",
    level: 1,
  },
  {
    name: "Appwrite",
    icon: "/icons/appwrite.png",
    level: 3,
  },
  {
    name: "Redux",
    icon: "/icons/appwrite.png",
    level: 2,
  },
];

export const posts = [
  {
    img: "/instagram/posts/1.png",
  },
  {
    img: "/instagram/posts/2.png",
  },
  {
    img: "/instagram/posts/3.png",
  },
  {
    img: "/instagram/posts/4.png",
  },
  {
    img: "/instagram/posts/5.png",
  },
  {
    img: "/instagram/posts/6.png",
  },
  {
    img: "/instagram/posts/7.png",
  },
  {
    img: "/instagram/posts/8.png",
  },
  {
    img: "/instagram/posts/9.png",
  },
  {
    img: "/instagram/posts/10.png",
  },
  {
    img: "/instagram/posts/11.png",
  },
];

export const projects = [
  {
    title: "Interior Design Business.",
    slug: "interior-design-business",
    img: "/projectImages/thumbnails/idb.png",
    logo: "/logos/idb.png",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Next.js",
    ],
    link: "https://interior-design-business.vercel.app",
    type: "Front End",
    preview: [
      "/projectImages/preview/idbMockup.png",
      "/projectImages/preview/idb2.png",
      "/projectImages/preview/idb3.png",
    ],
    desc: `Interior Design Business is imaginery business that provides interior design services, as well as labor for their designs to be made.
    
Main goal of this project was to create an outstanding website that provides great user interface without taking from user experience. Everything's simple, clean and intuitive. Their goal is to show their work and history, as well as enhancing their users' overall experience and communication by implementing News section, and Contact page for better support.
    
Even though this is a front end project for now, some pages fetch data from local files, mimicking real loading, which provided space for skeleton loading implementation. It's now ready for future upgrades if needed.`,
    keyFeatures: [
      "Great UI and UX",
      "Responsive Layout",
      "Subtle Animations",
      "Skeleton Loading",
    ],
  },
  {
    title: "FitQuest",
    slug: "fitquest",
    img: "/projectImages/thumbnails/fitquest.png",
    logo: "/logos/fitquest.png",
    technologies: [
      "Figma",
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
    link: "https://fit-quest-ten.vercel.app",
    type: "Front End",
    preview: [
      "/projectImages/preview/fitquestMockup.png",
      "/projectImages/preview/fitquest2.png",
      "/projectImages/preview/fitquest3.png",
    ],
    desc: `FitQuest is an app that lets you compete and connect with your friends in all kinds of different fitness challenges an app gives you.
    
It allows you to connect using Apple's Game Center, check out what others are doing at the moment, their scores and more.
    
The goal of this project was to showcase and present this app's purpose using subtle animations and clean design.
    
It is purely front end, but there's room for improvement in the future in a way where you could log in on their website and track your metrics even on a website.`,
    keyFeatures: ["Clean Design", "Responsive Design", "Subtle Animations"],
  },
  {
    title: "StoreIt",
    slug: "storeit",
    img: "/projectImages/thumbnails/storeit.png",
    logo: "/logos/storeit.png",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Appwrite",
    ],
    link: "https://store-it-beta-lemon.vercel.app",
    type: "Full Stack",
    preview: [
      "/projectImages/preview/storeitMockup.png",
      "/projectImages/preview/storeit2.png",
      "/projectImages/preview/storeit3.png",
      "/projectImages/preview/storeit4.png",
    ],
    desc: `StoreIt is a storage management solution that resembles Google Drive. It allows users to store, edit, delete and share their files, as well as filtering them easily, providing a great UX.
    
UI is also great, but main focus of this project was to showcase my ability to work on full stack projects and integrate with back end systems.
    
This project provides OTP (One Time Password) registration and sign in, which makes it secure and provides a great UX.`,
    keyFeatures: [
      "Clean Design",
      "Responsive Layout",
      "OTP Auth",
      "Back End Integration",
    ],
  },
  {
    title: "ReState",
    slug: "restate",
    img: "/projectImages/thumbnails/restate.png",
    logo: "/logos/restate.png",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "React Native",
      "Expo",
      "Tailwind CSS",
      "Appwrite",
    ],
    link: "",
    type: "Full Stack",
    preview: [
      "/projectImages/preview/restateMockup.png",
      "/projectImages/preview/restateHome.png",
      "/projectImages/preview/restateSearch.png",
    ],
    desc: `ReState is real estate property listing app that allows users to see, search, filter and rent properties easily.
    
Goal of this project was to showcase my ability to integrate with back end systems and work on full stack apps and websites, as well as showing my React Native experience as well.
    
App also provides Google Auth, which makes authentication secure and easy to use.`,
    keyFeatures: ["Google Auth", "Responsive Design", "Back End Integration"],
  },
];

export const links = [
  {
    title: "Projects",
    url: "/#projects",
  },
  {
    title: "Tech Stack",
    url: "/#techStack",
  },
  {
    title: "My Journey",
    url: "/#myJourney",
  },
  // {
  //   title: "Leet Code",
  //   url: "/leetcode",
  // },
];

export const socialLinks = [
  {
    title: "Instagram",
    icon: (
      <Instagram
        size={16}
        color="white"
      />
    ),
    url: "https://instagram.com/devhatchery",
  },
  {
    title: "Gmail",
    icon: (
      <Mail
        size={16}
        color="white"
      />
    ),
    url: "https://gmail.com",
  },
  {
    title: "GitHub",
    icon: (
      <Github
        size={16}
        color="white"
      />
    ),
    url: "https://github.com/vukanvuckovic",
  },
  {
    title: "Portfolio",
    icon: (
      <Folder
        size={16}
        color="white"
      />
    ),
    url: "/",
  },
];
