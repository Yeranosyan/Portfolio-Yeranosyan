export const projectsData = [
  {
    title: "HealthPro",
    category: "Healthcare",
    projectUrl: "https://healthpro-management.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/health-pro",
    description:
      "Patients register, book, and manage appointments while administrators schedule, confirm, and cancel them. Appointment updates are delivered by SMS, with runtime errors tracked in Sentry.",
    keywords: ["manage appointments", "delivered by SMS"],
    stack: ["Next.js", "TypeScript", "Twilio", "Appwrite", "Sentry"],
  },
  {
    title: "Meeting",
    category: "Real-time video",
    projectUrl: "https://personal-meeting.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Meeting-Room-Video-Call",
    description:
      "A conferencing application for creating rooms, scheduling meetings, sharing invitation links, and saving recordings. Clerk handles authentication and user management, including GitHub and Google sign-in.",
    keywords: ["saving recordings", "authentication and user management"],
    stack: ["Next.js", "TypeScript", "Clerk", "Video SDK", "shadcn/ui"],
  },
  {
    title: "Task Manager",
    category: "Productivity",
    projectUrl: "https://app-tasks-manager.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Task-Manager",
    description:
      "A full-stack task manager with complete CRUD support and Google sign-up. Data is persisted through Prisma and MongoDB, and the responsive interface works at any screen size.",
    keywords: ["complete CRUD support", "Prisma and MongoDB"],
    stack: ["Next.js", "Prisma", "MongoDB", "Clerk", "Tailwind CSS"],
  },
  {
    title: "Bilstein",
    category: "E-commerce",
    projectUrl: "https://github.com/Yeranosyan/E-Commerce-App",
    githubUrl: "https://github.com/Yeranosyan/E-Commerce-App",
    description:
      "A Payload CMS storefront with role-based access control. Ships with authentication, a shopping cart, Stripe checkout, a paywall, a layout builder, and SEO configuration.",
    keywords: ["role-based access control", "Stripe checkout"],
    stack: ["Payload CMS", "Stripe", "Next.js", "MongoDB", "SCSS"],
  },
  {
    title: "User Dashboard",
    category: "Analytics",
    projectUrl: "https://yeranosyan-dashboard.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Dashboard",
    description:
      "An analytics dashboard with a bar chart, a recent orders view, and a customers page, styled with Tailwind CSS and driven by an in-memory data collection.",
    keywords: ["a bar chart", "in-memory data collection"],
    stack: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
  },
  {
    title: "Weather App",
    category: "API integration",
    projectUrl: "https://openweathermap.org/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Weather-App",
    description:
      "Current conditions, a five-day forecast in three-hour intervals, air quality, and geocoding from the OpenWeatherMap API. Requests were designed in Postman, then implemented with the Fetch API.",
    keywords: ["five-day forecast", "OpenWeatherMap API"],
    stack: ["JavaScript", "OpenWeather API", "Postman", "CSS"],
  },
  {
    title: "Car Trade",
    category: "Marketing site",
    projectUrl: "https://yeranosyan-car-trade.vercel.app/",
    githubUrl: "https://github.com/Yeranosyan/Frontend-Car-Trade",
    description:
      "A car sales site built on semantic HTML for readability and SEO. ScrollReveal drives animations as elements enter the viewport, Swiper powers the catalog slideshow, and MixItUp filters listings by brand.",
    keywords: ["semantic HTML", "filters listings by brand"],
    stack: ["HTML", "CSS", "JavaScript", "Swiper", "ScrollReveal"],
  },
] as const;
