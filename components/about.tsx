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
        <span className="font-medium">Technical University</span>, I started
        working on programming. I enrolled in a professional courses and learned{" "}
        <span className="font-medium">front-end</span> and{" "}
        <span className="font-medium">back-end</span> web development. I am a
        certified developer by <span className="font-medium">IBM, META</span>{" "}
        and <span className="font-medium">Johns Hopkins University</span>.
        <br></br>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, JavaScript, CSS3, HTML5, Python, Django,
          MySQL
        </span>
        . I am also work with API&apos;s, ORM and tolls like Insomnia, Postman.
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing tennis, develop my communication skill, read books about
        economics, self-development and money. I also enjoy{" "}
        <span className="font-medium">
          to work in a team, share and gain new experience{" "}
        </span>
        I am currently working on a{" "}
        <span className="font-medium">Full-Stack Projects</span>.
      </p>
    </motion.section>
  );
}
