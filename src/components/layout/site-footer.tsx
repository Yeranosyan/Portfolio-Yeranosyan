import Link from "next/link";
import Shell from "./shell";
import { navLinks, site, socialLinks } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Shell>
        <div className="site-footer__grid">
          <div>
            <p className="site-footer__heading">Contact</p>
            <a href={`mailto:${site.email}`} className="site-footer__link">
              {site.email}
            </a>
            <p className="mt-3 text-sm text-ink-muted">{site.location}</p>
            <p className="site-footer__coords">{site.coordinates}</p>
          </div>

          <nav aria-label="Footer">
            <p className="site-footer__heading">Pages</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="site-footer__heading">Elsewhere</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-footer__link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer__heading">Availability</p>
            <p className="text-sm text-ink-soft">{site.availability}</p>
            <p className="mt-3 text-sm text-ink-muted">
              {site.role}, {site.yearsOfExperience} years
            </p>
          </div>
        </div>

        <div className="site-footer__legal">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </Shell>
    </footer>
  );
}
