import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wrightfully Fit | Fitness Beyond the Gym",
  description:
    "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos. Train at our Grace Bay gym or immerse yourself in a 4-day fitness retreat.",
  keywords: [
    "Wrightfully Fit",
    "personal training",
    "wellness retreats",
    "Grace Bay gym",
    "Turks and Caicos fitness",
    "luxury wellness",
  ],
  openGraph: {
    title: "Wrightfully Fit | Fitness Beyond the Gym",
    description:
      "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos.",
    type: "website",
    locale: "en_US",
    siteName: "Wrightfully Fit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
