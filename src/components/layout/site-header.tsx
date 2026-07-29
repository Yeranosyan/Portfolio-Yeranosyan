"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Shell from "./shell";
import ThemeToggle from "./theme-toggle";
import { navLinks, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href.includes("#")) return false;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Shell>
        <div className="site-header__bar">
          <Link href="/" className="site-header__brand">
            {site.name}
            <span className="site-header__brand-role"> — {site.role}</span>
          </Link>

          <nav aria-label="Main" className="site-nav">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "site-nav__link",
                    active && "site-nav__link--active",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />
        </div>
      </Shell>
    </header>
  );
}
