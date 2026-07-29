import Link from "next/link";
import clsx from "clsx";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
  className?: string;
};

export default function ActionLink({
  href,
  children,
  variant = "solid",
  download,
  external,
  className,
}: ActionLinkProps) {
  const classes = clsx("btn", `btn--${variant}`, className);

  if (download || external) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
