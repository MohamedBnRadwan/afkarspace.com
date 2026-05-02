import "./globals.css";
import { Cairo, Cormorant_Garamond, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { ThemeScript } from "@/components/ui/theme-script";

const displayLatin = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display-latin",
  weight: ["400", "500", "600", "700"]
});

const displayArabic = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-display-arabic",
  weight: ["500", "600", "700"]
});

const bodyLatin = Manrope({
  subsets: ["latin"],
  variable: "--font-body-latin"
});

const bodyArabic = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-body-arabic",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Afkar",
  description: "Premium interior design, finishing, fit-out, facades, and furniture solutions."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${displayLatin.variable} ${displayArabic.variable} ${bodyLatin.variable} ${bodyArabic.variable} antialiased`}
      >
        <ThemeScript />
        {children}
      </body>
    </html>
  );
}
