import carsImg from "@/public/cars.png";
import weatherImg from "@/public/weather.png";
import taskImg from "@/public/task-manager.png";
import dashboardImg from "@/public/dashboard.png";
import bilsteinImg from "@/public/bilstein.png";
import meetingImg from "@/public/meeting.png";
import healthproImg from "@/public/healthpro.png";
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
    title: "Microsoft C#, ASP.NET Web APIs Professional Certificate",
    location: "Vancouver, BC",
    description:
      "I specialize in C# programming and .NET technology, proficient in creating and managing Console Apps using Visual Studio. Working on developing console mini-games. Skilled in ASP.NET Web APIs. Proficient in data type manipulation, string formatting, and array manipulation. Exceptionally skilled in debugging C# console apps in Visual Studio Code and implementing exception handling. Check out my GitHub for more details.",
    icon: "/microsoft.png",
    date: "Mar 12, 2024",
  },
  {
    title: "IBM Full-Stack Software Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "I specialize in developing full-stack applications with a primary emphasis on RESTful API design for secure data exchange, leveraging technologies such as Python Flask and Django. My expertise lies in utilizing Object-Relational Mapping (ORM) to seamlessly interact with data across diverse relational databases, following the Model-View-Template (MVT) architecture pattern. Additionally, I employ Docker to streamline the development, testing, and deployment processes, ensuring efficient delivery of applications on platforms like the IBM Cloud.",
    icon: "/ibm.png",
    date: "Nov 30, 2023",
  },

  {
    title: "Meta Full-Stack Engineer Certificate",
    location: "Vancouver, BC",
    description:
      "Developed full-stack applications, including React.js in the front-end, and created servers using Python, Django, Node.js, and Express technologies. Maintained and modified existing applications by creating and using multiple components. Utilized new technologies and innovations to improve functionality. Demonstrated a solid understanding of creating performant and scalable data-intensive user experiences, with an obsession for design aesthetics and engineering prowess.",
    icon: "/meta.png",
    date: "Oct 10, 2023",
  },

  {
    title: "Meta Back-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "As a Back-End Developer, I specialize in utilizing Python for comprehensive back-end development. I have honed my skills in MySQL for efficient database management, encompassing the management of table relationships, Primary Keys (PK), and Foreign Keys (FK). Leveraging Django, I have crafted web applications, showcasing proficiency in designing and implementing RESTful APIs, and thorough testing methodologies using tools like Postman and Insomnia. I have acquired expertise in serializers, deserializers, data modeling, and implementing effective version control strategies.",
    icon: "/meta.png",
    date: "Sep 12, 2023",
  },

  {
    title: "Meta Front-End Developer Professional Certificate",
    location: "Vancouver, BC",
    description:
      "Working on the Front-End, I have attained proficiency in React, mastering its key hooks such as useState, useEffect, useContext, and useReducer, along with proficiency in the Context API. I create dynamic components for code efficiency and utilize npm to add additional libraries. Proficient in Tailwind, Framer Emotion, Styled Components, and Tremor to craft professional UIs, I excel at creating clean and efficient UIs quickly.",
    icon: "/meta.png",
    date: "Jul 31, 2023",
  },

  {
    title: "Johns Hopkins University Course",
    location: "Vancouver, BC",
    description:
      "I specialize in developing dynamic projects, adeptly utilizing technologies such as HTML, CSS, SASS, and JavaScript. With a strong grasp of the Document Object Model (DOM) as a logical tree, I excel in crafting responsive designs and creating custom styles. My extensive understanding and proficiency in CSS further enhance my ability to deliver high-quality solutions.",
    icon: "/jhu.png",
    date: "Aug 6, 2022",
  },

  {
    title: "Central Ukrainian National Technical University",
    location: "Ukraine",
    description:
      "Diploma | Business Economics (WES). My academic background includes a comprehensive study of computer fundamentals, mathematical modeling, data analysis, and security protocols. Moreover, I have delved deeply into economic cycles, enabling me to adeptly navigate business operations, forge strategic partnerships, and demonstrate proficiency in entrepreneurship fundamentals. Additionally, my studies have equipped me with a solid understanding of civil and commercial law, logistics, and sales management.",
    icon: "/wes.png",
    date: "2013-2016",
  },
] as const;

export const projectsData = [
  {
    title: "Weather App",
    projectUrl: "https://healthpro-management.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/health-pro",
    description:
      "A healthcare HealthPro - patient management application that allows patients to easily register, book, and manage their appointments with doctors, featuring administrative tools for scheduling, confirming, and canceling appointments, along with SMS notifications, all built using Next.js.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Twillo",
      "Appwrite",
      "Sentry",
      "Tailwind",
      "Shadcn/ui",
    ],
    imageUrl: healthproImg,
  },

  {
    title: "Meeting - Video Call",
    projectUrl: "https://personal-meeting.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Meeting-Room-Video-Call",
    description:
      "Meeting is a video conferencing application that allows users to create video rooms schedule meetings share invitation links and save recordings It offers features like creating video rooms for meetings and conferences scheduling meetings and generating invitation links to share with participants saving recordings of meetings for future reference integrating React SDK for real-time video and audio communication and implementing Clerk for authentication and user management allowing users to sign up with GitHub or Google",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Clerk",
      "Shadcn/ui",
      "Tailwind",
      "SDK for Video & Audio",
    ],
    imageUrl: meetingImg,
  },

  {
    title: "Task Manager App",
    projectUrl: "https://app-tasks-manager.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Task-Manager",
    description:
      "The Fullstack Task Manager Application utilizes CRUD operations and supports sign-up with Google. For data management, it employs Prisma along with MongoDB, ensuring efficient and reliable data handling. The application is fully responsive, allowing users to create accounts and easily manage their daily tasks.",
    tags: [
      "React",
      "Styled Components",
      "Tailwind CSS",
      "Next.js",
      "Prisma",
      "MongoDB",
      "Clerk",
    ],
    imageUrl: taskImg,
  },

  {
    title: "E-Commerce Bilstein",
    projectUrl: "https://github.com/Yeranosyan/E-Commerce-App",
    githubUrl: "https://github.com/Yeranosyan/E-Commerce-App",
    description:
      "Payload E-Commerce Bilstein allows users to sort items and supports CRUD operations for admin management The application handles CMS and access control with basic role-based access control to determine user permissions based on their roles Admins can access the Payload admin panel to manage the store view all data and perform all operations Customers cannot access the Payload admin panel and can perform limited operations based on their user permissions The application features pre-configured Payload config authentication access control shopping cart checkout paywall layout builder SEO and a website.",
    tags: [
      "Payload CMS",
      "Stripe",
      "SCSS",
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
    ],
    imageUrl: bilsteinImg,
  },

  {
    title: "Weather App",
    projectUrl: "https://openweathermap.org/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Weather-App",
    description:
      "The Weather App provides current weather data using the OpenWeatherMap API. With the Free Plan, I accessed current weather, a 3-hour forecast for 5 days, air pollution info, and geocoding. For validation and testing, I used Postman to implement and verify GET requests. The app fetches data with JavaScript's fetch() method and styles it with CSS and Material Symbols icons.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Postman",
      "OpenWeather",
      "API",
      "Insomnia",
    ],
    imageUrl: weatherImg,
  },

  {
    title: "User Dashboard",
    projectUrl: "https://yeranosyan-dashboard.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Dashboard",
    description:
      "The User Dashboard includes charts, such as a Bar Chart, Recent Orders, and Customers pages. To accomplish this, I used Next.js and npm to install packages and their dependencies. Additionally, I utilized Tailwind CSS for styling, always striving to follow modern design principles. All my data is saved as an ArrayList, which is an object capable of storing a group of other objects.",
    tags: ["Next.js", "React", "Chart.js", "Tailwind", "Styled Components"],
    imageUrl: dashboardImg,
  },

  {
    title: "Car Trade",
    projectUrl: "https://yeranosyan-car-trade.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Car-Trade",
    description:
      "The Car Sales site features a dark theme and focuses on HTML semantics for readability and SEO optimization. I integrated ScrollReveal for viewport animations, Swiper for a sleek catalog slideshow, and MixItUp to filter car categories by brand.",
    tags: ["HTML", "CSS", "JavaScript", "Swiper", "ScrollReveal", "MixItUp"],
    imageUrl: carsImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Redux",
  "Next.js",
  "JavaScript",
  "C#",
  "ASP.NET Core Web API",
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
  "Google Analytics",
  "Tailwind CSS",
  "shadcn/ui",
  "Material UI",
  "Bootstrap",
  "Framer Motion",
  "Styled Components",
  "Visual Studio Code",
  "Visual Studio",
  "Azure DevOps",
  "Agile",
  "Scrum",
  "Kanban",
] as const;
