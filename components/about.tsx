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
        <span className="font-medium">Johns Hopkins University</span>. I have
        strong leadership principles and customer obsession, and I love to take
        responsibility for any issues that arise.
        <br></br> <span className="italic">My core part of programming</span> is
        the problem-solving aspect, write clean and efficient code. I{" "}
        <span className="underline">love</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, JavaScript, C#, ASP.NET Core Web API,
          Python, Node.js, MySQL, CSS3, HTML5.{" "}
        </span>
        Work with testing tools like Insomnia, Postman. I am always here as a
        management solution to help you set business goals, currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing tennis, developing my communication and leadership skills,
        reading books about economics, self-development, history and money. I
        thrive in collaborative environments,{" "}
        <span className="font-medium">
          relishing the opportunity to both contribute to and learn from my
          teams collective experiences.
        </span>
      </p>
    </motion.section>
  );
}
