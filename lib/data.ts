import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { SiCoursera } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiMeta } from "react-icons/si";
import carsImg from "@/public/cars.png";
import weatherImg from "@/public/weather.png";
import taskImg from "@/public/task-manager.png";
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
      "Prior to formal coursework, I proactively completed Codecademy courses in HTML5, CSS3, JavaScript, and React.js, establishing a strong foundation in web development. Following this, I independently undertook small-scale projects to apply and reinforce my skills. Subsequently, I furthered my education by enrolling in a Johns Hopkins University course, where I acquired a robust understanding of front-end development, with a focus on semantic structure and the Document Object Model (DOM). My hands-on experience included extensive work with HTML, CSS, JavaScript, and the Bootstrap CSS framework, enabling proficiency in responsive design techniques. This period of self-directed learning and structured education significantly contributed to my skill set and prepared me for more advanced coursework and real-world application.",
    icon: React.createElement(SiCoursera),
    date: "Aug 6, 2023",
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "In the Front-End Meta course, I achieved proficiency in React, encompassing its key hooks, including UseState, UseEffect, useContext, and useReducer, as well as mastery of the Context API. This entailed practical experience in project development, component creation, and npm for effective package management. The successful delivery of the final project is available for review on my GitHub repository. The course also emphasized version control best practices. Furthermore, I acquired expertise in UX/UI design principles and now utilize Figma, enriching my skill set in front-end development.",
    icon: React.createElement(SiMeta),
    date: "Jul 31, 2023",
  },
  {
    title: "Meta Back-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "In the Back-End Meta course, I honed my skills in Python for back-end development. I mastered MySQL for database management, covering table relationships, Primary Keys (PK), and Foreign Keys (FK). With Django, I built robust web applications, and I gained expertise in RESTful APIs, API endpoints, and their testing using Postman and Insomnia. Additionally, I learned about serializers, deserializers, data modeling, and effective version control.",
    icon: React.createElement(SiMeta),
    date: "Sep 12, 2023",
  },
  {
    title: "Meta Full-Stack Engineer Certificate",
    location: "Vancouver, BC",
    description:
      "I am a skilled React engineer with a strong background in front-end development. My expertise includes crafting dynamic front-end interfaces with React and JSX. In addition, I am proficient in Python and Django, enabling seamless integration between the front-end and back-end. My experience extends to testing API endpoints, implementing Redux for effective state management, and working with both functional and stateful components. My commitment to continuous learning ensures that I stay at the forefront of web development technologies.",
    icon: React.createElement(SiMeta),
    date: "Oct 10, 2023",
  },
  {
    title: "IBM Full-Stack Software Developer Professional Certificate",
    location: "Nov 30, 2023",
    description:
      "Through this course, I'm advancing as a mid-level full-stack developer. I'm hands-on with Cloud, GitHub, Node.js, React, CI/CD, Docker, Kubernetes, Databases, NoSQL, Django ORM, Bootstrap, Security, Microservices, and Serverless Computing.",
    icon: React.createElement(SiIbm),
    date: "2023-present",
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
    title: "User Dashboard",
    projectUrl: "https://yeranosyan-dashboard.vercel.app/",
    description:
      "Build a User Dashboard with a sidebar using useEffect to manage post-render actions and useState to handle component state.",
    tags: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
    imageUrl: dashboardImg,
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
    title: "Car Trade",
    projectUrl: "https://yeranosyan-car-trade.vercel.app/",
    description:
      "Modern design, using category filters, adding animation, working with libraries, responsive design included for the mobile version.",
    tags: ["HTML", "CSS", "JS", "Swiper", "ScrollReveal", "MixItUp"],
    imageUrl: carsImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "JavaScript",
  "HTML5",
  "CSS3/SASS",
  "npm/yarn",
  "Git",
  "GitHub",
  "MySQL",
  "Prisma",
  "MongoDB",
  "Python",
  "Django",
  "API's",
  "Postman",
  "Insomnia",
  "Clerk",
  "React Email",
  "Resend",
  "CI/CD",
  "Chart.js",
  "Vercel",
  "Netlify",
  "Cloud Computing",
  "Tailwind CSS",
  "Bootstrap",
  "Framer Motion",
  "Styled Components",
] as const;
