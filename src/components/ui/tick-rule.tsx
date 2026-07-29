import clsx from "clsx";

type TickRuleProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function TickRule({ children, className }: TickRuleProps) {
  return (
    <div className={clsx("rule", className)} aria-hidden>
      <span className="rule__mark">+</span>
      <span className="rule__measure" />
      {children ? (
        <>
          <span className="rule__label">{children}</span>
          <span className="rule__measure" />
        </>
      ) : null}
      <span className="rule__mark">+</span>
    </div>
  );
}
