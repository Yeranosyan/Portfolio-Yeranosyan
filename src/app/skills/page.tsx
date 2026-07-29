import type { Metadata } from "next";
import PageIntro from "@/components/layout/page-intro";
import Section from "@/components/layout/section";
import MeasureChart from "@/components/ui/measure-chart";
import Pipeline from "@/components/ui/pipeline";
import Stat from "@/components/ui/stat";
import Tag from "@/components/ui/tag";
import { skillGroups } from "@/lib/data";
import { toSpans } from "@/lib/utils/chart";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The stack grouped by where it sits: interface, services, data, delivery, quality, and practice.",
};

const TOTAL = skillGroups.reduce((sum, group) => sum + group.items.length, 0);

export const DISTRIBUTION = toSpans(
  skillGroups.map((group) => group.items.length),
);

const TONES = ["brand", "accent"] as const;

const BUILD_LAYERS = ["Frontend", "Backend", "AI-assisted development", "Data"];

const BUILD = skillGroups.filter((group) => BUILD_LAYERS.includes(group.name));
const SUPPORT = skillGroups.filter(
  (group) => !BUILD_LAYERS.includes(group.name),
);

const BUILD_TOTAL = BUILD.reduce((sum, group) => sum + group.items.length, 0);
const SUPPORT_TOTAL = SUPPORT.reduce(
  (sum, group) => sum + group.items.length,
  0,
);

const LARGEST = BUILD.reduce((top, group) =>
  group.items.length > top.items.length ? group : top,
);

const BAR_SEGMENTS = BUILD.map((group, index) => ({
  span: (group.items.length / BUILD_TOTAL) * 100,
  tone: TONES[index % TONES.length],
}));

const MEASURE_MARKERS = [
  {
    at: 0,
    value: String(LARGEST.items.length),
    label: LARGEST.name,
    variant: "dashed" as const,
  },
  {
    at: 100,
    value: String(TOTAL),
    label: "Technologies",
    variant: "solid" as const,
  },
];

export default function SkillsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Skills"
        title={
          <>
            The stack,
            <br />
            <span className="text-ink-faint">by where it sits.</span>
          </>
        }
        intro="Grouped by the layer it belongs to rather than listed alphabetically, so it reads the way a system is actually assembled."
        figures={[
          { value: TOTAL, label: "Technologies" },
          { value: skillGroups.length, label: "Layers" },
          { value: "6+", label: "Years applying them" },
          { value: 4, label: "Certifying bodies" },
        ]}
      />

      <Section
        eyebrow="Distribution"
        title="Weighted toward the interface."
        intro="The bar carries the build layers, sized by how many technologies sit in each. Every tick after it is one technology from the layers that support them."
      >
        <div>
          <MeasureChart
            motionKey="skill-distribution"
            barShare={(BUILD_TOTAL / TOTAL) * 100}
            segments={BAR_SEGMENTS}
            ticks={SUPPORT_TOTAL}
            markers={MEASURE_MARKERS}
          />

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, index) => (
              <li key={group.name} className="flex items-baseline gap-2">
                <span
                  aria-hidden
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                    BUILD_LAYERS.includes(group.name)
                      ? `dot--${TONES[BUILD.indexOf(group) % TONES.length]}`
                      : "dot--muted"
                  }`}
                />
                <span className="min-w-0">
                  <span className="block text-sm">{group.name}</span>
                  <span className="block text-xs text-ink-muted">
                    <CountUp
                      value={group.items.length}
                      motionKey={`skill-count-${group.name}`}
                    />{" "}
                    technologies
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="By layer"
        title="Everything I work with."
        className="pt-0"
      >
        <div>
          {skillGroups.map((group) => (
            <Reveal key={group.name} motionKey={`skill-group-${group.name}`}>
              <section className="skill-group">
                <div className="skill-group__aside">
                  <h2 className="skill-group__name">{group.name}</h2>
                  <p className="skill-group__summary">{group.summary}</p>
                  <div className="skill-group__count">
                    <Stat
                      value={group.items.length}
                      label="Technologies"
                      motionKey={`stat-skill-${group.name}`}
                      size="sm"
                    />
                    <Pipeline
                      motionKey={`skill-group-${group.name}`}
                      className="mt-4"
                      thickness="thin"
                      segments={[
                        {
                          span: (group.items.length / TOTAL) * 100,
                          tone: "brand",
                        },
                        {
                          span: 100 - (group.items.length / TOTAL) * 100,
                          tone: "hatch",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="skill-group__main">
                  <ul className="tag-list">
                    {group.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </ul>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
