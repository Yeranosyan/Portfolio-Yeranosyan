"use client";

import Image from "next/image";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";
import "react-vertical-timeline-component/style.min.css";
import { educationsData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

export default function Education() {
  const { ref } = useSectionInView("Education", 0.2);
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education & Certifications</SectionHeading>
      <VerticalTimeline lineColor="">
        {educationsData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "1rem",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, .5)",
              }}
              date={item.date}
              icon={<Image src={item.icon} alt="Icon" width={90} height={90} />}
              iconStyle={{
                background: theme === "light" ? "white" : "white",
                fontSize: "1.5rem",
              }}
            >
              <div className="top-0 left-2 flex gap-1 mb-5">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0 text-gray-700  dark:text-white/60">
                {item.location}
              </p>
              <hr className="my-2 border-white-400 dark:border-gray-300/10" />

              <p className="!mt-1 !font-normal text-gray-500 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
