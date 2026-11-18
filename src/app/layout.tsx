import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Providers from "@/components/Providers";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import SectionRail from "@/components/layout/SectionRail";
import CursorGlow from "@/components/ui/CursorGlow";
import { site } from "@/config/site";
import { origin, personJsonLd, websiteJsonLd } from "@/config/seo";

/** Self-hosted: no build-time network dependency, same two-family system. */
const geist = localFont({
  src: "../fonts/geist-latin.woff2",
  variable: "--font-geist",
  weight: "100 900",
  display: "swap",
});

const instrument = localFont({
  src: [
    {
      path: "../fonts/instrument-serif-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/instrument-serif-italic-latin.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: {
    default: `${site.name} — Engineering ideas into intelligent systems`,
    template: `%s · ${site.name}`,
  },
  description:
    "Computer engineering student at IRISI, FST Marrakech. Full-stack CRM work and DevOps delivery — Laravel, Docker, CI/CD, Python, machine learning and computer vision — with the pipeline and the trade-offs documented.",
  keywords: [
    "Mohamed Ait Abbou",
    "Full-Stack",
    "DevOps",
    "Cloud",
    "Linux",
    "Docker",
    "CI/CD",
    "GitHub Actions",
    "Laravel",
    "CRM",
    "Platform engineering",
    "Python",
    "Machine Learning",
    "Computer Vision",
    "IRISI",
    "Marrakech",
    "Portfolio",
  ],
  authors: [{ name: site.name, url: site.github }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — Engineering ideas into intelligent systems`,
    description:
      "Computer engineering student building products and the delivery systems behind them. Full-stack · DevOps · AI.",
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1254,
        height: 1254,
        alt: "Portrait of Mohamed Ait Abbou",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Engineering ideas into intelligent systems`,
    description:
      "Computer engineering student building products and the delivery systems behind them. Full-stack · DevOps · AI.",
    images: ["/images/portrait.jpg"],
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = [personJsonLd, websiteJsonLd];

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${instrument.variable}`}
    >
      <body className="min-h-screen bg-bg text-ink">
        <CursorGlow />

        <div className="boot-overlay" aria-hidden="true">
          <div className="boot-mark">
            <span className="boot-initials">MA / PORTFOLIO</span>
            <div className="boot-line" />
          </div>
        </div>
        <div className="grain pointer-events-none fixed inset-0 z-[80]" aria-hidden="true" />

        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <Providers>
          <SectionRail />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </Providers>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
