import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI VORA — Automate • Build • Grow",
  description:
    "AI VORA is an AI and digital product engineering studio building intelligent software, web platforms, mobile ecosystems, and autonomous AI systems.",
  keywords: [
    "AI VORA",
    "AI Engineering",
    "Automate Build Grow",
    "Digital Product Studio",
    "Web Development",
    "App Development",
    "Personal Branding",
    "UI/UX Design",
    "AI Agents",
    "RAG Systems",
    "Intelligent Automation",
    "Full-Stack Products",
  ],
  authors: [{ name: "AI VORA Studio" }],
  creator: "AI VORA",
  metadataBase: new URL("https://ai-vora.com"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ai-vora.com",
    title: "AI VORA — Automate • Build • Grow",
    description:
      "AI VORA is an AI and digital product engineering studio building intelligent software, web platforms, mobile ecosystems, and autonomous AI systems.",
    siteName: "AI VORA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI VORA — Automate • Build • Grow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI VORA — Automate • Build • Grow",
    description:
      "AI VORA is an AI and digital product engineering studio building intelligent software, web platforms, mobile ecosystems, and autonomous AI systems.",
    images: ["/og-image.png"],
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
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="antialiased selection:bg-accent-lime selection:text-vora-black">
        <SmoothScrollProvider>
          <CustomCursor />
          <NoiseOverlay />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
