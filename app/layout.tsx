import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import { Header, Footer } from "@/components/site";
import "./globals.css";

// ponytail: Cinzel/Montserrat are the Google-hosted stand-ins for the brand's
// Trajan Pro / Montserrat Semi Bold. Swap to next/font/local if Trajan is licensed.
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Temetsei Holdings LLC — Building. Investing. Growing.",
    template: "%s — Temetsei Holdings LLC",
  },
  description:
    "Temetsei Holdings LLC acquires, manages, and grows long-term assets across real estate, operating businesses, equipment, and strategic partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
