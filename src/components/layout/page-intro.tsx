import Shell from "./shell";
import Eyebrow from "@/components/ui/eyebrow";
import Stat from "@/components/ui/stat";
import Reveal from "@/components/motion/reveal";

type Figure = {
  value: string | number;
  unit?: string;
  label: string;
};

type PageIntroProps = {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  figures?: Figure[];
};

export default function PageIntro({
  eyebrow,
  title,
  intro,
  figures,
}: PageIntroProps) {
  return (
    <section className="hero">
      <Shell>
        <Reveal motionKey={`intro-eyebrow-${eyebrow}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal motionKey={`intro-title-${eyebrow}`} delay={60}>
          <h1 className="hero__title">{title}</h1>
        </Reveal>
        <Reveal motionKey={`intro-copy-${eyebrow}`} delay={120}>
          <p className="hero__intro">{intro}</p>
        </Reveal>

        {figures?.length ? (
          <div className="hero__figures">
            {figures.map((figure, index) => (
              <Reveal
                key={figure.label}
                motionKey={`intro-figure-${figure.label}`}
                delay={index * 80}
              >
                <Stat
                  key={figure.label}
                  value={figure.value}
                  unit={figure.unit}
                  label={figure.label}
                  size="lg"
                />
              </Reveal>
            ))}
          </div>
        ) : null}
      </Shell>
    </section>
  );
}
