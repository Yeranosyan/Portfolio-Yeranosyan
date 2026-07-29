import Shell from "@/components/layout/shell";
import Eyebrow from "@/components/ui/eyebrow";
import Stat from "@/components/ui/stat";
import ActionLink from "@/components/ui/action-link";
import TickRule from "@/components/ui/tick-rule";
import { site } from "@/lib/site";
import Reveal from "@/components/motion/reveal";

const FIGURES = [
  { value: "6+", label: "Years shipping production software" },
  { value: "5", label: "Companies across four industries" },
  { value: "$380B", label: "Annual volume on a platform I built for" },
  { value: "4", label: "Professional certifications" },
] as const;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Shell>
        <Reveal motionKey="hero-eyebrow">
          <Eyebrow>Who I am</Eyebrow>
        </Reveal>

        <Reveal motionKey="hero-title" delay={60}>
          <h1 className="hero__title">
            I build software
            <br />
            that removes
            <br />
            <span className="text-ink-faint">manual work.</span>
          </h1>
        </Reveal>

        <Reveal motionKey="hero-intro" delay={120}>
          <p className="hero__intro">
            I&apos;m {site.name}, a {site.role} with {site.yearsOfExperience}{" "}
            years of experience. I design and ship full-stack web applications
            for fintech, healthcare, industrial, and robotics teams — from the
            interface people use every day down to the services behind it.
          </p>
        </Reveal>

        <Reveal motionKey="hero-meta" delay={180}>
          <ul className="hero__meta">
            <li>{site.location}</li>
            <li aria-hidden className="text-ink-faint">
              /
            </li>
            <li>Full-stack web development</li>
            <li aria-hidden className="text-ink-faint">
              /
            </li>
            <li className="text-brand">{site.availability}</li>
          </ul>
        </Reveal>

        <Reveal motionKey="hero-actions" delay={240}>
          <div className="hero__actions">
            <ActionLink href="/#contact">Start a conversation</ActionLink>
            <ActionLink href="/experience" variant="outline">
              View experience
            </ActionLink>
          </div>
        </Reveal>

        <div className="hero__figures">
          {FIGURES.map((figure, index) => (
            <Reveal
              key={figure.label}
              motionKey={`hero-figure-${figure.label}`}
              delay={index * 80}
            >
              <Stat
                key={figure.label}
                value={figure.value}
                label={figure.label}
                size="lg"
              />
            </Reveal>
          ))}
        </div>

        <TickRule className="mt-16">Scroll for the detail</TickRule>
      </Shell>
    </section>
  );
}
