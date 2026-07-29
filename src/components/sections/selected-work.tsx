import Link from "next/link";
import clsx from "clsx";
import { AiOutlineLink } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import Section from "@/components/layout/section";
import GhostNumber from "@/components/ui/ghost-number";
import StepPager from "@/components/ui/step-pager";
import HighlightText from "@/components/ui/highlight-text";
import { projectsData } from "@/lib/data";
import type { DotTone } from "@/components/ui/pipeline";
import Reveal from "@/components/motion/reveal";

const TONES: DotTone[] = ["accent", "brand"];

export default function SelectedWork() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Projects."
      intro="Personal builds where I owned the data model, the services, and the interface."
    >
      <div className="work">
        {projectsData.map((project, index) => {
          const tone = TONES[index % TONES.length];

          return (
            <Reveal key={project.title} motionKey={`work-${project.title}`}>
              <article
                className={clsx(
                  "work__row",
                  index % 2 === 1 && "work__row--mirror",
                )}
              >
                <div className="work__marker">
                  <GhostNumber>
                    {String(index + 1).padStart(2, "0")}
                  </GhostNumber>
                  <p className="work__category">{project.category}</p>
                </div>

                <div className="work__rail" aria-hidden>
                  <span className={`work__bar work__bar--${tone}`} />
                </div>

                <div className="work__body">
                  <StepPager
                    total={projectsData.length}
                    current={index + 1}
                    tone={tone}
                  />

                  <p className="work__quote">
                    <span className="work__mark" aria-hidden>
                      &ldquo;
                    </span>
                    <HighlightText
                      text={project.description}
                      terms={project.keywords}
                    />
                  </p>

                  <div className="work__foot">
                    <div>
                      <p className="work__title">{project.title}</p>
                      <p className="work__stack">{project.stack.join(" · ")}</p>
                    </div>

                    <div className="work__links">
                      <Link
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — visit project`}
                        className="work__link"
                      >
                        <AiOutlineLink />
                      </Link>
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} — view source on GitHub`}
                        className="work__link"
                      >
                        <FaGithub />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
