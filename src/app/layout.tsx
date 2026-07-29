import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Toaster from "@/components/ui/toaster";
import SiteHeader from "@/components/layout/site-header";
import SiteFooter from "@/components/layout/site-footer";
import { site } from "@/lib/site";
import { MOTION_ARMING_SCRIPT } from "@/lib/utils/motion";
import { THEME_SCRIPT } from "@/lib/utils/theme";

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  authors: [{ name: site.name }],
  keywords: [
    site.name,
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "ASP.NET Core",
    "Vancouver",
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    type: "profile",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth!" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />

        <Script id="motion-arming" strategy="beforeInteractive">
          {MOTION_ARMING_SCRIPT}
        </Script>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-CYSPY4N3DG" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-CYSPY4N3DG');
          `}
        </Script>

        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
