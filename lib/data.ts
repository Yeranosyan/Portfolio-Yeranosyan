import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiCoursera } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiMeta } from "react-icons/si";
import carsImg from "@/public/cars.png";
import weatherImg from "@/public/weather.png";
import miniImg from "@/public/mini.png";
import dashboardImg from "@/public/dashboard.png";

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
    title: "Central Ukrainian National Technical University",
    location: "Ukraine",
    description:
      "Diploma | Business Economics (WES). In college, I studied behavioral economics, the work and specifics of the work of Central banks, the study of economic cycles, building and running a business. Communication and leadership skills, commodity science, entrepreneurship fundamentals, civil and commercial law, logistics, sales management.",
    icon: React.createElement(LuGraduationCap),
    date: "2013-2016",
  },
  {
    title: "Johns Hopkins University Course",
    location: "Vancouver, BC",
    description:
      "Before enrolling in formal courses, I completed courses on CodeCademy: HTML, CSS, JavaScript. Following that, I independently worked on my own small projects. Afterward, I enrolled in a course offered by Johns Hopkins University on the Coursera platform, where I gained a solid understanding of frontend development, including semantic structure and the Document Object Model (DOM). I extensively worked with HTML, CSS, JavaScript, and Bootstrap CSS framework. I also acquired proficiency in responsive design.",
    icon: React.createElement(SiCoursera),
    date: "Aug 6, 2023",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "In the Front-End Meta course, I learned React and its main hooks: UseState, UseEffect, and Context API. I learned how to create a project, develop individual components, use npm, and successfully completed the final project on my GitHub. Additionally, a portion of the course was devoted to version control. I also acquired knowledge of the basics of UX/UI design and was introduced to Figma.",
    icon: React.createElement(SiMeta),
    date: "Jul 31, 2023",
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "In the Back-End Meta course, I learned Python for writing the back-end. I also worked with MySQL, connecting to the database, creating tables, and becoming familiar with types of relationships and how to use Primary Keys (PK) and Foreign Keys (FK) between tables. I worked with Django, a web framework for building robust and user-friendly web applications. Additionally, I gained knowledge in RESTful API, API endpoints, and testing APIs using Postman and Insomnia. I also learned about serializers and deserializers, building a data model, and utilizing version control.",
    icon: React.createElement(SiMeta),
    date: "Sep 12, 2023",
  },
  {
    title: "IBM Full-Stack Software Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "Program course:  learn how to build, deploy, test, run, and manage full stack cloud native applications. Technologies covered includes Cloud foundations, GitHub, Node.js, React, CI/CD, Containers, Docker, Kubernetes, OpenShift, Databases, NoSQL, Django ORM, Bootstrap, Application Security, Microservices, Serverless computing.",
    icon: React.createElement(SiIbm),
    date: "2023-present",
  },
] as const;

export const projectsData = [
  {
    title: "User Dashboard",
    projectUrl: "https://yeranosyan-dashboard.vercel.app/",
    description:
      "User Dashboard with side bar, implement useEffect Hook, to tell component what needs to do after render. useState Hook, to add state to my component.",
    tags: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
    imageUrl: dashboardImg,
  },
  {
    title: "Weather App",
    projectUrl: "https://github.com/Yeranosyan/Frontend-Weather-App",
    description:
      " Using OpenWeather, I create API key and get current data. Then I use Postman API platform for building and using API's.",
    tags: ["HTML", "CSS", "JS", "Postman", "OpenWeather", "API"],
    imageUrl: weatherImg,
  },
  {
    title: "Car Trade",
    projectUrl: "https://yeranosyan-car-trade.vercel.app/",
    description:
      "Modern design, using category filters, adding animation, working with libraries, responsive design included for the mobile version.",
    tags: ["HTML", "CSS", "JS", "Swiper", "ScrollReveal", "MixItUp"],
    imageUrl: carsImg,
  },
  {
    title: "Portfolio Mini",
    projectUrl: "https://yeranosyan-portfolio-mini.vercel.app/",
    description:
      "Light-Dark Mode semantic HTML, implementation of animation libraries.",
    tags: ["HTML", "CSS", "JavaScript", "ScrollReveal", "RemixIcon"],
    imageUrl: miniImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "npm",
  "JS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "MySQL",
  "Python",
  "Django",
  "Postman",
  "Insomnia",
  "Tailwind",
  "Bootstrap",
  "Framer Motion",
] as const;
