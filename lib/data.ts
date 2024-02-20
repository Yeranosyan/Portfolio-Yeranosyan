import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiCoursera } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiMeta } from "react-icons/si";
import carsImg from "@/public/cars.png";
import weatherImg from "@/public/weather.png";
import taskImg from "@/public/task-manager.png";
import dashboardImg from "@/public/dashboard.png";
import bilsteinImg from "@/public/bilstein.png";

// as const TypeScript features for exactly execute array don't be random strings

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "IBM Full-Stack Software Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "I specialize in developing full-stack applications with a primary emphasis on RESTful API design for secure data exchange, leveraging technologies such as Python Flask and Django. My expertise lies in utilizing Object-Relational Mapping (ORM) to seamlessly interact with data across diverse relational databases, following the Model-View-Template (MVT) architecture pattern. Additionally, I employ Docker to streamline the development, testing, and deployment processes, ensuring efficient delivery of applications on platforms like the IBM Cloud.",
    icon: React.createElement(SiIbm),
    date: "Nov 30, 2023",
  },

  {
    title: "Meta Full-Stack Engineer Certificate",
    location: "Vancouver, BC",
    description:
      "Developed full-stack applications, including React.js in the front-end, and created servers using Python, Django, Node.js, and Express technologies. Maintained and modified existing applications by creating and using multiple components. Utilized new technologies and innovations to improve functionality. Demonstrated a solid understanding of creating performant and scalable data-intensive user experiences, with an obsession for design aesthetics and engineering prowess.",
    icon: React.createElement(SiMeta),
    date: "Oct 10, 2023",
  },

  {
    title: "Meta Back-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "As a Back-End Developer, I specialize in utilizing Python for comprehensive back-end development. I have honed my skills in MySQL for efficient database management, encompassing the management of table relationships, Primary Keys (PK), and Foreign Keys (FK). Leveraging Django, I have crafted web applications, showcasing proficiency in designing and implementing RESTful APIs, and thorough testing methodologies using tools like Postman and Insomnia. I have acquired expertise in serializers, deserializers, data modeling, and implementing effective version control strategies.",
    icon: React.createElement(SiMeta),
    date: "Sep 12, 2023",
  },

  {
    title: "Meta Front-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "Working on the Front-End, I have attained proficiency in React, mastering its key hooks such as useState, useEffect, useContext, and useReducer, along with proficiency in the Context API. I create dynamic components for code efficiency and utilize npm to add additional libraries. Proficient in Tailwind, Framer Emotion, Styled Components, and Tremor to craft professional UIs, I excel at creating clean and efficient UIs quickly.",
    icon: React.createElement(SiMeta),
    date: "Jul 31, 2023",
  },

  {
    title: "Johns Hopkins University Course",
    location: "Vancouver, BC",
    description:
      "I specialize in developing dynamic projects, adeptly utilizing technologies such as HTML, CSS, SASS, and JavaScript. With a strong grasp of the Document Object Model (DOM) as a logical tree, I excel in crafting responsive designs and creating custom styles. My extensive understanding and proficiency in CSS further enhance my ability to deliver high-quality solutions.",
    icon: React.createElement(SiCoursera),
    date: "Aug 6, 2022",
  },

  {
    title: "Central Ukrainian National Technical University",
    location: "Ukraine",
    description:
      "Diploma | Business Economics (WES). My academic background includes a comprehensive study of computer fundamentals, mathematical modeling, data analysis, and security protocols. Moreover, I have delved deeply into economic cycles, enabling me to adeptly navigate business operations, forge strategic partnerships, and demonstrate proficiency in entrepreneurship fundamentals. Additionally, my studies have equipped me with a solid understanding of civil and commercial law, logistics, and sales management.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2016",
  },
] as const;

export const projectsData = [
  {
    title: "Task Manager App",
    projectUrl: "https://app-tasks-manager.vercel.app/",
    description:
      "Full Stack App. Great account (sign-up) then (sing-in) or simply Continue whit Google through (sign-up).",
    tags: ["React", "Styled Components", "Next.js", "Prisma", "MongoDB"],
    imageUrl: taskImg,
  },
  {
    title: "E-Commerce Bilstein",
    projectUrl: "https://github.com/Yeranosyan/E-Commerce-App",
    description: "Full Stack E-Commerce App with an Admin Dashboard & CMS.",
    tags: ["Payload", "STRIPE", "SCSS", "React", "Next.js", "MongoDB"],
    imageUrl: bilsteinImg,
  },
  {
    title: "Weather App",
    projectUrl: "https://github.com/Yeranosyan/Frontend-Weather-App",
    description:
      "Generate an API key with OpenWeather to fetch current data. Employ the Postman API platform for API creation and utilization.",
    tags: ["HTML", "CSS", "JS", "Postman", "OpenWeather", "API"],
    imageUrl: weatherImg,
  },
  {
    title: "User Dashboard",
    projectUrl: "https://yeranosyan-dashboard.vercel.app/",
    description:
      "Build a User Dashboard with a sidebar using useEffect to manage post-render actions and useState to handle component state.",
    tags: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
    imageUrl: dashboardImg,
  },
  {
    title: "Car Trade",
    projectUrl: "https://yeranosyan-car-trade.vercel.app/",
    description:
      "Crafting a contemporary design with intuitive category filters, incorporating seamless animations, leveraging powerful libraries and fully responsive.",
    tags: ["HTML", "CSS", "JS", "Swiper", "ScrollReveal", "MixItUp"],
    imageUrl: carsImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "JavaScript",
  "C#",
  ".NET",
  "Python",
  "Django",
  "HTML5",
  "CSS3/SASS",
  "npm/yarn",
  "Git",
  "GitHub",
  "MySQL",
  "Prisma",
  "MongoDB",
  "API's",
  "Postman",
  "Insomnia",
  "React Email",
  "Resend",
  "CI/CD",
  "Chart.js",
  "Pega",
  "Stripe",
  "Vercel",
  "Netlify",
  "Cloud Computing",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Framer Motion",
  "Styled Components",
  "Visual Studio Code",
  "Visual Studio",
] as const;
