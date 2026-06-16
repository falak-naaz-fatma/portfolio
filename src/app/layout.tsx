import type { Metadata } from "next";
import { DM_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const siteUrl = "https://falaknaazfatma.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Falak Naaz Fatma | Full Stack Developer",
  description:
    "Portfolio of Falak Naaz Fatma, a front-end focused Full Stack Developer with 1.5 years of experience building clean, responsive product interfaces with full-stack foundations.",
  openGraph: {
    title: "Falak Naaz Fatma | Full Stack Developer",
    description:
      "Front-end focused Full Stack Developer with 1.5 years of experience building clean, responsive product interfaces.",
    url: siteUrl,
    siteName: "Falak Naaz Fatma",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Falak Naaz Fatma | Full Stack Developer",
    description:
      "Front-end focused Full Stack Developer with 1.5 years of experience building clean, responsive product interfaces.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}