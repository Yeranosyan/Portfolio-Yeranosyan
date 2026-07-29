import clsx from "clsx";

type ShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Shell({ children, className }: ShellProps) {
  return <div className={clsx("shell", className)}>{children}</div>;
}
