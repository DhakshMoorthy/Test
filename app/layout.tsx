import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import MouseGlow from "@/components/providers/MouseGlow";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kannanware | Intelligent ERP & AI for Digital Transformation",
  description:
    "Experience how Kannanware transforms businesses with SAP ERP, AI agents, and digital transformation. Scroll through an interactive story of enterprise evolution.",
  keywords: [
    "Kannanware",
    "SAP ERP",
    "AI",
    "Digital Transformation",
    "Enterprise Resource Planning",
    "Business Intelligence",
    "Manufacturing ERP",
    "Supply Chain",
  ],
  openGraph: {
    title: "Kannanware | Transforming Businesses with Intelligent ERP & AI",
    description:
      "An interactive journey through enterprise transformation — from chaos to clarity with Kannanware ERP & AI.",
    type: "website",
    locale: "en_US",
    siteName: "Kannanware",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kannanware | Intelligent ERP & AI",
    description:
      "Transform your business with Kannanware — SAP ERP, AI agents, and digital transformation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-background text-foreground font-sans antialiased`}
      >
        <SmoothScrollProvider>
          <MouseGlow />
          <div className="noise-overlay" aria-hidden />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
