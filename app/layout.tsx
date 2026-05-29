import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Seattle Pipeworks — Underground Plumbing Experts Since 1979",
  description:
    "45+ years of sewer repair, trenchless pipe replacement, and underground plumbing expertise in Seattle. 5-star rated, BBB A+. Call Tim Walsh at (206) 383-6820.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${plusJakartaSans.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
