import type { Metadata } from "next";
import { Marcellus, Archivo } from "next/font/google";
import { Header, Footer } from "@/components/site";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: "Golden State Assets & Services LLC",
    template: "%s — Golden State Assets & Services LLC",
  },
  description:
    "A California holding company that acquires, manages, and grows long-term assets across real estate, operating businesses, equipment, and strategic partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${marcellus.variable} ${archivo.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
