import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gagik | Personal Portfolio",
  description: "Gagik Software engineer",
  author: "Gagik Yeranosyan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CYSPY4N3DG" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CYSPY4N3DG');
        `}
      </Script>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36  dark:bg-black/90 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#2b2b2b]"></div>
        <div className="bg-[#d7dbfb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:-[-5rem] dark:bg-[#50505042]"></div> */}
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
