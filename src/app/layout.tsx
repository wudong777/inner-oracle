import type { Metadata } from "next";
import { Inter, Noto_Serif_SC, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/navigation/Footer";
import { Navigation } from "@/components/navigation/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoSerifSc = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-serif-sc",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INNER ORACLE | 内在神谕",
  description:
    "A luxury emotional commerce system and consciousness brand platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoSerifSc.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
