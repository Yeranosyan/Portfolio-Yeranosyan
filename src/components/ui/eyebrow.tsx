import clsx from "clsx";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={clsx("eyebrow", className)}>
      <span aria-hidden>{"/// "}</span>
      {children}
      <span aria-hidden>{" ///"}</span>
    </p>
  );
}
