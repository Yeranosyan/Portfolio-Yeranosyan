import type { Metadata } from "next";
import PageIntro from "@/components/layout/page-intro";
import Section from "@/components/layout/section";
import TickChart from "@/components/ui/tick-chart";
import Tag from "@/components/ui/tag";
import GhostNumber from "@/components/ui/ghost-number";
import { experiencesData } from "@/lib/data";
import Reveal from "@/components/motion/reveal";
import CountUp from "@/components/motion/count-up";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Five engineering roles across fintech, healthcare, heavy industry, and robotics, with the measured outcome of each.",
};

const AS_OF = { year: 2026, month: 7 };

const TENURE_STARTS = [
  { company: "SoftBank Robotics", year: 2019, month: 12, tone: "brand" },
  { company: "Excellus BCBS", year: 2022, month: 9, tone: "accent" },
  { company: "Finning / Caterpillar", year: 2023, month: 10, tone: "brand" },
  { company: "Marqeta / Uber", year: 2024, month: 12, tone: "accent" },
  { company: "Wasserstrom", year: 2025, month: 12, tone: "brand" },
] as const;

const TENURE = TENURE_STARTS.map((item, index) => {
  const next = TENURE_STARTS[index + 1] ?? AS_OF;
  const months = (next.year - item.year) * 12 + (next.month - item.month);
  return { ...item, months };
});

const TOTAL_MONTHS = TENURE.reduce((sum, item) => sum + item.months, 0);

const AXIS_START = 2019;
const AXIS_END = 2027;
const TICKS_PER_YEAR = 6;

const START_MONTHS = (TENURE[0].year - AXIS_START) * 12 + TENURE[0].month;

const TENURE_TICKS = Array.from(
  { length: (AXIS_END - AXIS_START) * TICKS_PER_YEAR },
  (_, index) => {
    const monthsIn = (index * 12) / TICKS_PER_YEAR - START_MONTHS;
    if (monthsIn < 0) return { fill: 0, tone: "muted" as const };

    let elapsed = 0;
    for (const role of TENURE) {
      elapsed += role.months;
      if (monthsIn < elapsed) {
        return {
          fill: Math.min(monthsIn / TOTAL_MONTHS, 1),
          tone: role.tone,
        };
      }
    }

    return { fill: 1, tone: TENURE[TENURE.length - 1].tone };
  },
);

const LONGEST = TENURE.reduce((top, item) =>
  item.months > top.months ? item : top,
);

const TENURE_MARKERS = [
  {
    at:
      ((START_MONTHS + LONGEST.months) / ((AXIS_END - AXIS_START) * 12)) * 100,
    value: String(LONGEST.months),
    label: LONGEST.company,
    variant: "dashed" as const,
  },
  {
    at: ((START_MONTHS + TOTAL_MONTHS) / ((AXIS_END - AXIS_START) * 12)) * 100,
    value: String(TOTAL_MONTHS),
    label: "Months total",
    variant: "solid" as const,
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageIntro
        eyebrow="Work experience"
        title={
          <>
            Five teams.
            <br />
            <span className="text-ink-faint">One thread.</span>
          </>
        }
        intro="Payments, health insurance, heavy equipment, and commercial robotics. Different domains, the same job: turn an expensive manual process into software people trust."
        figures={[
          { value: 5, label: "Companies" },
          { value: 4, label: "Industries" },
          { value: "2019", label: "Shipping since" },
          { value: 7, label: "Engineers onboarded" },
        ]}
      />

      <Section
        eyebrow="Tenure"
        title="Where the time went."
        intro="Each segment is sized by months served, running from the earliest role on the left to the current one on the right."
      >
        <div>
          <TickChart
            motionKey="tenure"
            ticks={TENURE_TICKS}
            markers={TENURE_MARKERS}
            scale={["2019", "2021", "2023", "2025", "2027"]}
          />

          <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
            {TENURE.map((item) => (
              <li key={item.company} className="flex items-baseline gap-2">
                <span
                  aria-hidden
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full dot--${item.tone}`}
                />
                <span className="min-w-0">
                  <span className="block text-sm">{item.company}</span>
                  <span className="block text-xs text-ink-muted">
                    <CountUp
                      value={item.months}
                      motionKey={`tenure-months-${item.company}`}
                    />{" "}
                    months
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section eyebrow="Roles" title="The detail." className="pt-0">
        <div>
          {experiencesData.map((role, index) => (
            <Reveal
              key={`${role.company}-${role.period}`}
              motionKey={`exp-${role.company}`}
            >
              <article className="timeline__row">
                <div className="timeline__aside">
                  <GhostNumber
                    variant="outline"
                    className="mb-4 text-5xl! sm:text-6xl!"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </GhostNumber>
                  <h2 className="timeline__role">{role.role}</h2>
                  <p className="timeline__company">{role.company}</p>
                  <p className="timeline__location">{role.location}</p>
                  <p className="timeline__period">{role.period}</p>
                </div>

                <div className="timeline__main">
                  <p className="timeline__summary">{role.summary}</p>

                  <ul className="timeline__highlights">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="timeline__highlight">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <ul className="tag-list mt-8">
                    {role.stack.map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
