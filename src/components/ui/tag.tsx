import clsx from "clsx";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Tag({ children, className }: TagProps) {
  return <li className={clsx("tag", className)}>{children}</li>;
}
