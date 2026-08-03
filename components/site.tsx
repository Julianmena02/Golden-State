import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./mobile-nav";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/investments", label: "Investments" },
  { href: "/contact", label: "Contact" },
];

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center border border-gold/60 font-display text-base text-gold-light ${className}`}
    >
      GS
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Monogram />
          <span className="font-display text-sm leading-tight tracking-[0.16em] text-ivory uppercase">
            Golden State
            <span className="block text-[0.65rem] tracking-[0.28em] text-mist">
              Assets &amp; Services
            </span>
          </span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs font-medium tracking-[0.2em] text-mist uppercase transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileNav nav={nav} />
      </div>
    </header>
  );
}

/** The plumb line — a gold rule dropped from above each heading. */
export function Eyebrow({
  children,
  line = "h-10",
}: {
  children: React.ReactNode;
  line?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <span aria-hidden className={`w-px bg-gold ${line}`} />
      <p className="text-[0.7rem] font-semibold tracking-[0.32em] text-gold uppercase">
        {children}
      </p>
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  image,
  alt,
}: {
  kicker: string;
  title: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative flex min-h-[52svh] items-end bg-navy">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/20" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pt-40 pb-16">
        <div className="rise">
          <Eyebrow line="h-16">{kicker}</Eyebrow>
        </div>
        <h1 className="rise-2 mt-5 max-w-3xl font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
          {title}
        </h1>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="border-t border-gold/30 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-center md:justify-between">
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <p className="mt-5 max-w-xl font-display text-3xl leading-snug text-ivory sm:text-4xl">
            Tell us what you&apos;re building — or what you&apos;re ready to
            sell.
          </p>
        </div>
        <Link href="/contact" className="btn btn-gold shrink-0">
          Contact us
        </Link>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-mist">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Monogram />
            <span className="font-display text-sm tracking-[0.16em] text-ivory uppercase">
              Golden State
              <span className="block text-[0.65rem] tracking-[0.28em] text-mist">
                Assets &amp; Services
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            A California holding company acquiring, managing, and growing
            long-term assets across industries.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="text-[0.7rem] font-semibold tracking-[0.32em] text-gold uppercase">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.32em] text-gold uppercase">
            Reach us
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href="mailto:info@goldenstateassets.com"
                className="transition-colors hover:text-gold-light"
              >
                info@goldenstateassets.com
              </a>
            </li>
            <li>California, United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Golden State Assets &amp; Services
            LLC. All rights reserved.
          </p>
          <p>Built and held for the long term.</p>
        </div>
      </div>
    </footer>
  );
}
