"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading> About me</SectionHeading>
      <p className="mb-3">
        Graduating with a degree in{" "}
        <span className="font-medium">Technical University</span>. I working in
        both sides <span className="font-medium">front-end</span> and{" "}
        <span className="font-medium">back-end</span> web development. I am a
        certified developer by{" "}
        <span className="font-medium">Microsoft, IBM, META</span> and{" "}
        <span className="font-medium">Johns Hopkins University</span>.<br></br>{" "}
        I always contribute by helping customers make the best possible
        decisions. I focus on understanding what problem I&apos;m solving, what
        matters most to our users, and how I can deliver the best possible
        experience. My core stack is{" "}
        <span className="font-medium">
          HTML, CSS, JavaScript, SQL, React, Angular, Redux, Next.js,
          TypeScript, C#, ASP.NET Core, Node.js.{" "}
        </span>
      </p>
      <p>
        When I&apos;m not coding, I enjoy playing tennis, developing my
        communication and leadership skills, reading books about economics,
        self-development, history and money. I thrive in collaborative
        environments,{" "}
        <span className="font-medium">
          relishing the opportunity to both contribute to and learn from my
          teams collective experiences.
        </span>
      </p>
    </motion.section>
  );
}
