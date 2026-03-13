import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kartikeyagarwal.com"),

  title: {
    default: "Kartikey Agarwal",
    template: "%s | Kartikey Agarwal",
  },

  description:
    "Engineer working at the intersection of technology, product, and data-driven systems. IIT Delhi graduate with experience building fintech infrastructure, AI tooling, and full-stack applications in early-stage startups.",

  keywords: [
    "Kartikey Agarwal",
    "IIT Delhi",
    "Software Engineer",
    "Full Stack Engineer",
    "Fintech Engineer",
    "AI Systems",
    "Product Engineering",
    "Startup Engineer",
  ],

  authors: [{ name: "Kartikey Agarwal" }],
  creator: "Kartikey Agarwal",

  openGraph: {
    title: "Kartikey Agarwal",
    description:
      "Engineer building fintech systems, AI infrastructure, and scalable digital products.",
    url: "https://kartikeyagarwal.com",
    siteName: "Kartikey Agarwal",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kartikey Agarwal",
    description:
      "Engineer building fintech systems, AI infrastructure, and scalable products.",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f12" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <Navigation />

        <main className="min-h-screen">{children}</main>

        <Footer />

        <Analytics />
      </body>
    </html>
  );
}
