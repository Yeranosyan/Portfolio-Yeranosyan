<h1 align="center">Portfolio Website - Gagik Yeranosyan</h1>

<p align="center">
  Creating a personal portfolio involved crafting something that was both easy to use and concrete. Naturally, I opted for React as the chosen technology. Moreover, I wanted to incorporate email connectivity into the portfolio. Therefore, I selected Next.js 13 with TypeScript and utilized the TSX syntax extension to TypeScript. This allowed me to write code that was type-checked and enabled me to become more proficient.
</p>

<p align="center">
  For animations, I made use of the Framer Motion library in React, which offers comprehensive documentation for implementing a wide range of animations. To achieve this, I simply needed to create a <motion /> component, and everything was set up for implementing the desired animation. For styling, I turned to Tailwind CSS, and through using it, I gained a deeper understanding of how to write custom values, resulting in an easily attainable, modern design for my portfolio.
</p>

<p align="center">
  Email functionality is a crucial feature for effective communication in both professional and personal settings. To implement this, I chose the React Email library developed by the Resend team. By using Resend, I acquired the RESEND_API_KEY, which I placed in the root directory of my project within a .env file. I integrated the React Toast library to provide notifications, conveying the sending status. Additionally, I ensured the capability to track navigation and implement a light-dark mode using the Context API.
</p>

<p align="center">
  In terms of data storage, I opted for an ArrayList. I utilized "as const" to make an object or array immutable, enhancing the robustness of my application.
</p>

<h2 align="center">Tech Stack</h2>

<p align="center">
  <ul>
    <li><strong>React Portfolio Website</strong></li>
    <li><strong>Next.js App</strong></li>
    <li><strong>Framer Motion</strong></li>
    <li><strong>TypeScript</strong></li>
    <li><strong>Tailwind CSS</strong></li>
    <li><strong>React Context API</strong></li>
  </ul>
</p>

<h2 align="center">Start My Portfolio</h2>

<p align="center">
  <ol>
    <li>
      Create Next.js app:
      <pre>
        <code>npx create-next-app@latest</code>
      </pre>
    </li>
    <li>
      Run development server:
      <pre>
        <code>npm run dev</code>
      </pre>
    </li>
    <li>
      Install necessary packages:
      <ul>
        <li>
          React Icons:
          <pre>
            <code>npm i react-icons</code>
          </pre>
        </li>
        <li>
          Framer Motion:
          <pre>
            <code>npm i framer-motion</code>
          </pre>
        </li>
        <li>
          clsx for setting the value of the className attribute:
          <pre>
            <code>npm i clsx</code>
          </pre>
        </li>
        <li>
          React Intersection Observer:
          <pre>
            <code>npm i react-intersection-observer</code>
          </pre>
        </li>
        <li>
          React Vertical Timeline Component:
          <pre>
            <code>npm i react-vertical-timeline-component</code>
          </pre>
          <pre>
            <code>npm i --save-dev @types/react-vertical-timeline-component</code>
          </pre>
        </li>
      </ul>
    </li>
    <li>
      Create API key using <a href="https://resend.com/">Resend</a>:
      <pre>
        <code>npm i resend@0.16.0</code>
      </pre>
    </li>
    <li>
      Styling email using <a href="https://react.email/">React Email</a>:
      <pre>
        <code>npm i @react-email/components @react-email/tailwind</code>
      </pre>
    </li>
    <li>
      Styling alert message for form submission using <a href="https://react-hot-toast.com/">React Hot Toast</a>:
      <pre>
        <code>npm i react-hot-toast</code>
      </pre>
    </li>
  </ol>
</p>
