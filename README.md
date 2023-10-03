## Portfolio Web Site, Gagik Yeranosyan

Creating a personal portfolio involved crafting something that was both easy to use and concrete. Naturally, I opted for React as the chosen technology. Moreover, I wanted to incorporate email connectivity into the portfolio. Therefore, I selected Next.js 13 with TypeScript and utilized the TSX syntax extension to TypeScript. This allowed me to write code that was type-checked and enabled me to become more proficient.

For animations, I made use of the Framer Motion library in React, which offers comprehensive documentation for implementing a wide range of animations. To achieve this, I simply needed to create a <motion /> component, and everything was set up for implementing the desired animation. For styling, I turned to Tailwind CSS, and through using it, I gained a deeper understanding of how to write custom values, resulting in an easily attainable, modern design for my portfolio.

Email functionality is a crucial feature for effective communication in both professional and personal settings. To implement this, I chose the React Email library developed by the Resend team. By using Resend, I acquired the RESEND_API_KEY, which I placed in the root directory of my project within a .env file. I integrated the React Toast library to provide notifications, conveying the sending status. Additionally, I ensured the capability to track navigation and implement a light-dark mode using the Context API.
In terms of data storage, I opted for an ArrayList. I utilized "as const" to make an object or array immutable, enhancing the robustness of my application.

## Tech stack:

- React Portfolio Website:
- Next.js App
- Framer Motion
- TypeScript
- Tailwind CSS
- React Context API

## Start my portfolio:

- npx create-next-app@latest
- npm run dev
- npm i react-icons
- npm i framer-motion
- npm i clsx(set up conditions for setting the value of the className attribute in my case)
- npm i react-intersection-observer (tell you when an element enters or leaves the viewport)
- npm i react-vertical-timeline-component
- npm i --save-dev @types/react-vertical-timeline-component
- create API key use: https://resend.com/
  - npm i resend@0.16.0
- styling email use https://react.email/
  - npm i @react-email/components @react-email/tailwind
- styling alert message for (submit form)
  - https://react-hot-toast.com/
  - npm i react-hot-toast

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
