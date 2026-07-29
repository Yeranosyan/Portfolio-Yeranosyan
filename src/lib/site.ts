export const site = {
  name: "Gagik Yeranosyan",
  role: "Senior Software Engineer",
  yearsOfExperience: "6+",
  location: "Vancouver, BC, Canada",
  coordinates: "49.2827° N, 123.1207° W",
  email: "gagik.yeranosyan14@gmail.com",
  availability: "Open to work",
  summary:
    "Senior Software Engineer with 6+ years of experience building full-stack web applications with React, Next.js, TypeScript, Node.js, and ASP.NET Core.",
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/#contact" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gagik-yeranosyan/",
  },
  { label: "GitHub", href: "https://github.com/Yeranosyan" },
  {
    label: "Microsoft Learn",
    href: "https://learn.microsoft.com/en-us/users/gagikyeranosyan/transcript",
  },
  { label: "Credly", href: "https://www.credly.com/users/gagik-yeranosyan" },
  { label: "X", href: "https://twitter.com/gago_yerevan" },
  { label: "YouTube", href: "https://www.youtube.com/@gagikyeranosyan" },
] as const;
