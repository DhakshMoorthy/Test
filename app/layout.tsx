import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Providers from "@/components/providers/Providers";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wrightfully Fit | Fitness Beyond the Gym",
  description:
    "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos. Grace Bay gym at Saltmills Plaza.",
  keywords: [
    "Wrightfully Fit",
    "Grace Bay gym",
    "wellness retreats",
    "personal training Turks and Caicos",
  ],
  openGraph: {
    title: "Wrightfully Fit | Fitness Beyond the Gym",
    description:
      "Personal training, luxury wellness retreats, and premium wellness products in Turks & Caicos.",
    type: "website",
    siteName: "Wrightfully Fit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
