"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Image from "next/image";
import introImg from "@/public/intro.png";
import inImg from "@/public/links-icons/in.png";
import youtubeImg from "@/public/links-icons/youtube.png";
import githubImg from "@/public/links-icons/github.png";
import microsoftImg from "@/public/links-icons/microsoft.png";
import credlyImg from "@/public/links-icons/credly.png";
import twitterImg from "@/public/links-icons/twitter.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [open, setOpen] = useState(false);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="relative">
              <Image
                src={introImg}
                alt="Gagik portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl dark:border-white/20"
              />
              <div className="absolute bottom-3 right-2">
                <div
                  onClick={() => setOpen(!open)}
                  className="bg-blue-400 dark:bg-green-300 w-3 h-3 cursor-pointer rounded-full animate-pulse"
                />
                {open && (
                  <div className="border border-blue-300 dark:border-green-300/70 items-center justify-center flex top-[-.1rem] right-[-5.4rem] rounded-2xl w-fit px-2 absolute whitespace-nowrap">
                    <p className="text-[10px] text-blue-300 dark:text-green-300/70">
                      open to work
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-10 px-4 text-base font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>
          Hello, I&apos;m <span className="font-bold"> Gagik Yeranosyan, </span>
        </span>
        I build <span className="italic">websites</span>
        <span> &</span> <span className="italic">apps</span>.<br />
        <span>
          I prioritizes
          <span className="font-bold"> customer satisfaction </span> by creating
          <br />
          top-notch solutions for millions of users.
        </span>
        <br />
        <span className="text-sm  text-gray-500 dark:text-white/50">
          customer-centric, cost efficient and result oriented with strong
          leadership principles
        </span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-white px-5 py-2 flex items-center gap-2 rounded-full outline-none border border-black/10 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-5 py-2 flex items-center gap-2 rounded-full outline-none border border-black/10 hover:scale-110 active:scale-105 transition cursor-pointer dark:bg-white/10"
          href="Yeranosyan Gagik_Software Developer.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition group-hover:text-blue-500 dark:group-hover:text-green-500 dark:group-opacity-30" />
        </a>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center items-center gap-2 px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex items-center">
          {[
            {
              href: "https://learn.microsoft.com/en-us/users/gagikyeranosyan/transcript",
              img: microsoftImg,
              size: "30",
            },
            {
              href: "https://www.credly.com/users/gagik-yeranosyan",
              img: credlyImg,
              size: "30",
            },
            {
              href: "https://www.linkedin.com/in/gagik-yeranosyan/",
              img: inImg,
              size: "30",
            },

            {
              href: "https://github.com/Yeranosyan",
              img: githubImg,
              size: "30",
            },
            {
              href: "https://twitter.com/gago_yerevan",
              img: twitterImg,
              size: "30",
            },
            {
              href: "https://www.youtube.com/@gagikyeranosyan",
              img: youtubeImg,
              size: "30",
            },
          ].map((item, index) => (
            <a
              key={index}
              className={`p-4 text-gray-700 flex items-center focus:scale-[1.15] hover:text-gray-900 hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:text-white/80`}
              href={item.href}
              target="_blank"
            >
              <Image
                className="opacity-90 hover:opacity-100"
                src={item.img}
                alt={`Link ${index + 1}`}
                width={30}
                height={30}
              />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
