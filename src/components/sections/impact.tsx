import Section from "@/components/layout/section";
import MetricCard from "@/components/ui/metric-card";
import Reveal from "@/components/motion/reveal";
import { impactMetrics } from "@/lib/data";

export default function Impact() {
  return (
    <Section
      id="impact"
      eyebrow="Measured outcomes"
      title={
        <>
          Numbers from
          <br />
          <span className="text-ink-faint">shipped work.</span>
        </>
      }
      intro="Each figure comes from a production engagement and was measured after release, not estimated during planning."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {impactMetrics.map((metric, index) => (
          <Reveal
            key={metric.label}
            motionKey={`impact-${metric.label}`}
            delay={index * 90}
          >
            <MetricCard
              value={metric.value}
              label={metric.label}
              context={metric.context}
              org={metric.org}
              tone={metric.tone}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
