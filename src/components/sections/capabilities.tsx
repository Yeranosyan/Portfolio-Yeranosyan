import Section from "@/components/layout/section";
import GhostNumber from "@/components/ui/ghost-number";
import Stat from "@/components/ui/stat";
import Tag from "@/components/ui/tag";
import { capabilities, teamCapabilities } from "@/lib/data";
import Reveal from "@/components/motion/reveal";

type CapabilityRowProps = {
  index: string;
  kicker: string;
  title: string;
  body: string;
  children: React.ReactNode;
};

function CapabilityRow({
  index,
  kicker,
  title,
  body,
  children,
}: CapabilityRowProps) {
  return (
    <Reveal motionKey={`cap-row-${index}`}>
      <article className="capability">
        <div className="capability__index">
          <GhostNumber>{index}</GhostNumber>
          <p className="capability__kicker">{kicker}</p>
        </div>

        <div className="col-span-6">
          <h3 className="capability__title">{title}</h3>
          <p className="capability__body">{body}</p>
        </div>

        <div className="capability__proof">{children}</div>
      </article>
    </Reveal>
  );
}

export default function Capabilities() {
  return (
    <Section
      id="problems"
      eyebrow="What I solve for business"
      title={
        <>
          Six problems I get
          <br />
          <span className="text-ink-faint">hired to fix.</span>
        </>
      }
      intro="The first three started as a business cost — slow quotes, long support calls, or a team that could not ship confidently. The last three are the ones that cause the first three: requirements nobody confirmed, work nobody owns, and teams that only talk through tickets."
    >
      <div className="capability-group">
        <p className="capability-group__label">In the product</p>
        {capabilities.map((capability) => (
          <CapabilityRow
            key={capability.index}
            index={capability.index}
            kicker={capability.kicker}
            title={capability.title}
            body={capability.body}
          >
            <Stat
              value={capability.proof.value}
              unit={capability.proof.unit}
              label={capability.proof.label}
              size="lg"
            />
          </CapabilityRow>
        ))}
      </div>

      <div className="capability-group">
        <p className="capability-group__label">In the team</p>
        {teamCapabilities.map((capability) => (
          <CapabilityRow
            key={capability.index}
            index={capability.index}
            kicker={capability.kicker}
            title={capability.title}
            body={capability.body}
          >
            <ul className="capability__signals">
              {capability.signals.map((signal) => (
                <Tag key={signal}>{signal}</Tag>
              ))}
            </ul>
          </CapabilityRow>
        ))}
      </div>
    </Section>
  );
}
