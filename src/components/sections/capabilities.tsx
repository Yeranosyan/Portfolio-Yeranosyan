import Section from "@/components/layout/section";
import GhostNumber from "@/components/ui/ghost-number";
import Stat from "@/components/ui/stat";
import { capabilities } from "@/lib/data";
import Reveal from "@/components/motion/reveal";

export default function Capabilities() {
  return (
    <Section
      id="problems"
      eyebrow="What I solve for business"
      title={
        <>
          Three problems I get
          <br />
          <span className="text-ink-faint">hired to fix.</span>
        </>
      }
      intro="Every engagement below started as a business cost — slow quotes, long support calls, or a team that could not ship confidently. These are the patterns behind the work."
    >
      <div>
        {capabilities.map((capability) => (
          <Reveal
            key={capability.index}
            motionKey={`cap-row-${capability.index}`}
          >
            <article className="capability">
              <div className="capability__index">
                <GhostNumber>{capability.index}</GhostNumber>
                <p className="capability__kicker">{capability.kicker}</p>
              </div>

              <div className="col-span-6">
                <h3 className="capability__title">{capability.title}</h3>
                <p className="capability__body">{capability.body}</p>
              </div>

              <div className="capability__proof">
                <Stat
                  value={capability.proof.value}
                  unit={capability.proof.unit}
                  label={capability.proof.label}
                  size="lg"
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
