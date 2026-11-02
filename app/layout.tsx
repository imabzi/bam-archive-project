import type { Metadata } from "next";
import localFont from "next/font/local";
import { DocumentPreferences } from "@/components/DocumentPreferences";
import { preferenceBootScript } from "@/lib/preferences";
import "./globals.css";

// The active language chooses between these in globals.css (--font-body).
const lato = localFont({
  src: [{ path: "./fonts/lato/Lato-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-lato",
  display: "swap",
});

// The browser only fetches these once Persian text is on the page.
const iranSansX = localFont({
  src: [
    { path: "./fonts/iransansx/IRANSansX-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/iransansx/IRANSansX-Medium.ttf", weight: "500", style: "normal" },
  ],
  variable: "--font-iransansx",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "BAM Architecture Archive",
  description: "The architecture archive of BAM.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={`${lato.variable} ${iranSansX.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceBootScript }} />
      </head>
      <body>
        <DocumentPreferences />
        {children}
      </body>
    </html>
  );
}
