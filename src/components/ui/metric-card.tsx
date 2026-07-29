import Panel from "./panel";
import Stat from "./stat";
import Pipeline, { type DotTone } from "./pipeline";

type MetricCardProps = {
  value: number;
  label: string;
  context: string;
  org: string;
  tone?: DotTone;
};

export default function MetricCard({
  value,
  label,
  context,
  org,
  tone = "brand",
}: MetricCardProps) {
  return (
    <Panel tone="slab" className="metric">
      <div>
        <p className="metric__org">{org}</p>
        <Stat
          value={value}
          unit="%"
          label={label}
          hint={context}
          size="lg"
          className="mt-6"
        />
      </div>

      <Pipeline
        motionKey={`metric-pipe-${label}`}
        thickness="base"
        segments={[
          { span: value, tone },
          { span: 100 - value, tone: "hatch" },
        ]}
      />
    </Panel>
  );
}
