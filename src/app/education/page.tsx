import type { Metadata } from "next";
import clsx from "clsx";
import PageIntro from "@/components/layout/page-intro";
import Section from "@/components/layout/section";
import Panel from "@/components/ui/panel";
import Pipeline, { type DotTone } from "@/components/ui/pipeline";
import Stat from "@/components/ui/stat";
import HighlightText from "@/components/ui/highlight-text";
import { educationsData } from "@/lib/data";
import Reveal from "@/components/motion/reveal";
import { axisPosition } from "@/lib/utils/chart";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Technical writing at BCIT Vancouver, professional certificates from Microsoft, IBM, Meta, and Johns Hopkins University, and a Bachelor of Economics.",
};

const AXIS_START = 2016;
const AXIS_END = 2026;
const AXIS_TICKS = ["2016", "2018", "2020", "2022", "2024", "2026"];

const TONES: DotTone[] = ["brand", "accent"];
const ISSUERS = new Set(educationsData.map((item) => item.issuer)).size;

export default function EducationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Education & credentials"
        title={
          <>
            Certified by the
            <br />
            <span className="text-ink-faint">people who build it.</span>
          </>
        }
        intro="Technical writing at BCIT in Vancouver, professional certificates from Microsoft, IBM, Meta, and Johns Hopkins University, and a Bachelor of Economics."
        figures={[
          { value: educationsData.length, label: "Credentials" },
          { value: ISSUERS, label: "Issuing institutions" },
          { value: 2026, label: "Most recent" },
          { value: 10, label: "Year span" },
        ]}
      />

      <Section
        eyebrow="Timeline"
        title="A decade on one axis."
        intro="Every credential placed by the year it was awarded, from the degree on the left to the most recent program on the right."
      >
        <Panel tone="slab" className="p-6 sm:p-10">
          <Pipeline
            motionKey="edu-axis"
            thickness="thick"
            segments={[
              { span: 6, tone: "hatch" },
              { span: 94, tone: "brand" },
            ]}
            markers={[
              {
                at: axisPosition(2016, AXIS_START, AXIS_END),
                value: "2016",
                label: "Degree",
                tone: "accent",
              },
              {
                at: axisPosition(2023, AXIS_START, AXIS_END),
                value: "2023",
                label: "Certificates",
                tone: "brand",
              },
              {
                at: axisPosition(2026, AXIS_START, AXIS_END),
                value: "2026",
                label: "BCIT",
                tone: "accent",
              },
            ]}
            scale={AXIS_TICKS}
          />
        </Panel>
      </Section>

      <Section
        eyebrow="Credentials"
        title="What each one covered."
        intro="Listed most recent first."
        className="pt-0"
      >
        <div className="creds">
          {educationsData.map((item, index) => {
            const tone = TONES[index % TONES.length];
            const position = axisPosition(item.year, AXIS_START, AXIS_END);

            return (
              <Reveal key={item.title} motionKey={`cred-${item.title}`}>
                <article
                  className={clsx(
                    "folder",
                    index % 2 === 1 && "folder--mirror",
                  )}
                >
                  <div className="folder__tab">
                    <span className="folder__grip" aria-hidden />
                  </div>

                  <div className="folder__sheet">
                    <div className="folder__text">
                      <div>
                        <p className="folder__group">
                          Credential {String(index + 1).padStart(2, "0")}
                        </p>
                        <h2 className="folder__title">
                          <HighlightText text={item.title} terms={item.focus} />
                        </h2>
                        <p className="folder__note">{item.description}</p>
                      </div>

                      <div className="folder__meta">
                        <Stat
                          value={item.year}
                          label={item.institution}
                          size="md"
                        />
                        <p className="folder__where">{item.location}</p>
                      </div>
                    </div>

                    <Panel tone="slab" className="folder__chart">
                      <Pipeline
                        motionKey={`edu-chart-${item.title}`}
                        thickness="thick"
                        segments={[
                          { span: 6, tone: "hatch" },
                          { span: position - 6, tone },
                          { span: 100 - position, tone: "hatch" },
                        ]}
                        markers={[
                          {
                            at: position,
                            value: String(item.year),
                            label: item.chartLabel,
                            tone,
                          },
                        ]}
                        scale={[String(AXIS_START), String(AXIS_END)]}
                      />
                    </Panel>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
