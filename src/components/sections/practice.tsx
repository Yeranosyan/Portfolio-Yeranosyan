import Section from "@/components/layout/section";
import Panel from "@/components/ui/panel";
import Reveal from "@/components/motion/reveal";
import GhostNumber from "@/components/ui/ghost-number";
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
              <GhostNumber className="practice__index">
                {String(index + 1).padStart(2, "0")}
              </GhostNumber>
              <h3 className="practice__title">{pillar.title}</h3>
              <p className="practice__body">{pillar.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
