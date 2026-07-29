import Section from "@/components/layout/section";
import Panel from "@/components/ui/panel";
import Reveal from "@/components/motion/reveal";
import DotMatrixText from "@/components/ui/dot-matrix-text";
import { practice } from "@/lib/data";

export default function Practice() {
  return (
    <Section
      id="practice"
      eyebrow="How I work"
      title="Built with the team, not beside it."
      intro="Engineering decisions land better when product, design, and business are in the room for them."
    >
      <Reveal motionKey="practice-statement">
        <p className="practice__statement">{practice.statement}</p>
      </Reveal>

      <div className="practice__grid">
        {practice.pillars.map((pillar, index) => (
          <Reveal
            key={pillar.title}
            motionKey={`practice-${pillar.title}`}
            delay={index * 90}
          >
            <Panel tone="plain" className="practice__card">
              <span aria-hidden className="practice__index">
                <DotMatrixText
                  value={String(index + 1).padStart(2, "0")}
                  size="md"
                  tone="ghost"
                />
              </span>
              <h3 className="practice__title">
                <DotMatrixText value={pillar.title} tone="ink" wrap />
              </h3>
              <p className="practice__body">{pillar.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
