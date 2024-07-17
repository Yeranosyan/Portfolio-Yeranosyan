"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="bg-gray-100 max-w-[45rem] rounded-lg overflow-hidden sm:pr-8 relative h-auto sm:group-even:pl-8 dark:text-white dark:bg-gray-600/10">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <div className="flex gap-2">
            <Link
              href={projectUrl}
              target="_blank"
              className="mt-2 bg-gray-300 w-[2.4rem] px-3 py-1 tracking-wider text-black rounded-full cursor-pointer hover:text-blue-400 transition-all dark:bg-white/10 dark:text-white dark:hover:text-blue-400"
            >
              <AiOutlineLink />
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              className="mt-2 bg-gray-300 w-[2.4rem] px-3 py-1 tracking-wider text-black rounded-full cursor-pointer hover:text-blue-400 transition-all dark:bg-white/10 dark:text-white dark:hover:text-blue-400"
            >
              <FaGithub />
            </Link>
          </div>

          <p className="mt-2 mb-4 leading-relaxed text-gray-500 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-black rounded-full dark:bg-white/10 dark:text-white/80"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
