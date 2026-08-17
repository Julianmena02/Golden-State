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

const description =
  "Temetsei Holdings LLC acquires, manages, and grows long-term assets across real estate, operating businesses, equipment, and strategic partnerships.";

export const metadata: Metadata = {
  metadataBase: new URL("https://temetsei.com"),
  title: {
    default: "Temetsei Holdings LLC — Building. Investing. Growing.",
    template: "%s — Temetsei Holdings LLC",
  },
  description,
  openGraph: {
    type: "website",
    url: "/",
    // Without this, search results label the site with the bare domain.
    siteName: "Temetsei Holdings LLC",
    title: "Temetsei Holdings LLC — Building. Investing. Growing.",
    description,
  },
};

// Google reads the name it prints above a result from WebSite schema first,
// og:site_name second. Both say the same thing here.
const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Temetsei Holdings LLC",
  alternateName: "Temetsei Holdings",
  url: "https://temetsei.com/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
