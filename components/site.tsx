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

/**
 * The T+M monogram. ponytail: the real logo, background keyed out of the
 * supplied screenshot — 136px square, enough for the 40–44px header/footer
 * marks at 2x. Re-export from vector art if it's ever needed larger.
 */
export function Monogram({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/monogram.png"
      alt=""
      width={136}
      height={136}
      className={`shrink-0 ${className}`}
    />
  );
}

/**
 * The stacked wordmark: TEMETSEI over a ruled HOLDINGS LLC.
 * ponytail: sizes/tracking are measured off the supplied horizontal lockup,
 * scaled to a 44px monogram — cap height 0.37× the mark, both lines the same
 * width so the gold rules fill what HOLDINGS LLC doesn't. Change the two
 * tracking values together or the rules go lopsided.
 */
function Wordmark() {
  return (
    <span className="block">
      <span className="block font-display text-xl leading-none tracking-[0.165em] text-ivory">
        TEMETSEI
      </span>
      <span className="mt-1.5 flex items-center gap-1.5 text-[0.525rem] text-gold">
        <span aria-hidden className="h-px flex-1 bg-gold/70" />
        <span className="font-semibold tracking-[0.09em]">HOLDINGS LLC</span>
        <span aria-hidden className="h-px flex-1 bg-gold/70" />
      </span>
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Monogram className="h-11 w-11" />
          <span aria-hidden className="h-12 w-px bg-ivory/30" />
          <Wordmark />
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
            <Monogram className="h-11 w-11" />
            <span aria-hidden className="h-12 w-px bg-ivory/30" />
            <Wordmark />
          </div>
          <p className="mt-4 text-[0.6rem] font-semibold tracking-[0.3em] text-mist uppercase">
            Building. Investing. Growing.
          </p>
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
                href="mailto:info@temetseiholdings.com"
                className="transition-colors hover:text-gold-light"
              >
                info@temetseiholdings.com
              </a>
            </li>
            <li>California, United States</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Temetsei Holdings LLC. All rights
            reserved.
          </p>
          <p>Building. Investing. Growing.</p>
        </div>
      </div>
    </footer>
  );
}
