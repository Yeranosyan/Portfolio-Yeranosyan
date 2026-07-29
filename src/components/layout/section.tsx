import clsx from "clsx";
import Shell from "./shell";
import Eyebrow from "@/components/ui/eyebrow";
import Reveal from "@/components/motion/reveal";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  intro?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  eyebrow,
  title,
  intro,
  className,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={clsx("section", className)}>
      <Shell>
        {hasHeader ? (
          <Reveal motionKey={`section-${id ?? eyebrow ?? "header"}`}>
            <header className="section__header">
              {eyebrow ? <Eyebrow className="mb-6">{eyebrow}</Eyebrow> : null}
              <div className="section__grid">
                {title ? <h2 className="section__title">{title}</h2> : null}
                {intro ? <p className="section__intro">{intro}</p> : null}
              </div>
            </header>
          </Reveal>
        ) : null}
        {children}
      </Shell>
    </section>
  );
}
