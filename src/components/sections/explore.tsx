import Link from "next/link";
import Section from "@/components/layout/section";
import Panel from "@/components/ui/panel";
import Stat from "@/components/ui/stat";
import Reveal from "@/components/motion/reveal";
import { educationsData, experiencesData, skillGroups } from "@/lib/data";

const CARDS = [
  {
    href: "/experience",
    title: "Experience",
    description:
      "Five roles across fintech, healthcare, heavy industry, and robotics, with the outcome of each.",
    value: experiencesData.length,
    label: "Roles",
  },
  {
    href: "/skills",
    title: "Skills",
    description:
      "The stack grouped by where it sits — interface, services, data, delivery, and quality.",
    value: skillGroups.reduce((total, group) => total + group.items.length, 0),
    label: "Technologies",
  },
  {
    href: "/education",
    title: "Education",
    description:
      "Professional certifications from Microsoft, IBM, Meta, and Johns Hopkins, plus my degree.",
    value: educationsData.length,
    label: "Credentials",
  },
] as const;

export default function Explore() {
  return (
    <Section
      eyebrow="Go deeper"
      title="The full record."
      intro="Experience, skills, and credentials each get their own page rather than a scroll-by summary."
    >
      <div className="explore">
        {CARDS.map((card, index) => (
          <Reveal
            key={card.href}
            motionKey={`explore-card-${card.href}`}
            delay={index * 90}
          >
            <Panel tone="plain" className="explore__card group h-full">
              <div>
                <h3 className="explore__title">{card.title}</h3>
                <p className="explore__desc">{card.description}</p>
              </div>

              <div className="flex items-end justify-between gap-6">
                <Stat value={card.value} label={card.label} size="md" />
                <Link href={card.href} className="explore__cta">
                  View
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
