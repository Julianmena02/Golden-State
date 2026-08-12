import Image from "next/image";
import Link from "next/link";
import { Eyebrow, CtaBand } from "@/components/site";

const disciplines = [
  {
    title: "Business Acquisitions",
    copy: "Acquiring established companies with durable cash flow, and operating them with an owner's care.",
  },
  {
    title: "Real Estate",
    copy: "Commercial and residential property across California — acquired, improved, and held.",
  },
  {
    title: "Equipment Ownership",
    copy: "Machinery and equipment assets that earn through ownership, leasing, and service.",
  },
  {
    title: "Asset Management",
    copy: "Hands-on stewardship of every holding — because value is built after the purchase.",
  },
  {
    title: "Strategic Partnerships",
    copy: "Joint ventures with operators, developers, and investors who share a long horizon.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end bg-navy">
        <Image
          src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2400&auto=format&fit=crop"
          alt="Los Angeles skyline at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-navy/10" />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20">
          <div className="rise">
            <Eyebrow line="h-24">
              Building. Investing. Growing.
            </Eyebrow>
          </div>
          <h1 className="rise-2 mt-6 max-w-4xl font-display text-5xl leading-[1.08] text-ivory sm:text-6xl md:text-7xl">
            Assets built to outlast the cycle.
          </h1>
          <p className="rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-mist">
            We are a diversified California-based holding company that acquires,
            manages, and grows long-term assets — operating businesses, real
            estate, equipment, and the partnerships that connect them.
          </p>
          <div className="rise-3 mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="btn btn-gold">
              Explore our services
            </Link>
            <Link href="/investments" className="btn btn-line">
              Our investment approach
            </Link>
          </div>
        </div>
      </section>

      {/* Discipline strip */}
      <div className="border-y border-gold/25 bg-navy-2">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 py-5 text-[0.7rem] font-semibold tracking-[0.28em] text-gold-light uppercase">
          <li>Business Acquisitions</li>
          <li aria-hidden className="text-gold/50">·</li>
          <li>Real Estate</li>
          <li aria-hidden className="text-gold/50">·</li>
          <li>Equipment Ownership</li>
          <li aria-hidden className="text-gold/50">·</li>
          <li>Strategic Partnerships</li>
        </ul>
      </div>

      {/* About teaser */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Eyebrow>The firm</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            A diversified holding company, built for permanence.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Temetsei Holdings exists to build long-term value
            — not to trade it. We acquire businesses, property, and equipment
            with real earning power, then manage them closely so they compound
            for decades, not quarters.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Our structure is deliberately broad. It lets us follow value across
            industries and move decisively when the right opportunity appears.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-xs font-semibold tracking-[0.22em] text-navy uppercase underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
          >
            About the company
          </Link>
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute -top-4 -right-4 h-full w-full border border-gold/50"
          />
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?q=80&w=1600&auto=format&fit=crop"
              alt="Golden Gate Bridge, San Francisco"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ledger of disciplines */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>What we own &amp; operate</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
            Five disciplines. One balance sheet.
          </h2>
          <ul className="mt-14 border-t border-ink/10">
            {disciplines.map((d) => (
              <li key={d.title} className="group border-b border-ink/10">
                <Link
                  href="/services"
                  className="grid gap-2 py-7 transition-colors group-hover:bg-ivory md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-8"
                >
                  <h3 className="font-display text-xl text-navy sm:text-2xl">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-body">{d.copy}</p>
                  <span
                    aria-hidden
                    className="hidden text-gold transition-transform group-hover:translate-x-1 md:block"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Philosophy band */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>How we think</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug text-ivory sm:text-4xl">
            Buy well. Manage closely.{" "}
            <span className="text-gold-light">Hold patiently.</span>
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Buy well",
                copy: "Price discipline over momentum. We underwrite every acquisition on what it earns today — not on what a forecast hopes it earns later.",
              },
              {
                title: "Manage closely",
                copy: "We are operators, not spectators. Every asset gets active oversight: costs controlled, tenants and customers served, value protected.",
              },
              {
                title: "Hold patiently",
                copy: "Time is our structural advantage. With no fund clock forcing an exit, we can let good assets do what good assets do — compound.",
              },
            ].map((p) => (
              <div key={p.title} className="border-t border-gold/40 pt-6">
                <h3 className="font-display text-xl text-gold-light">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="relative aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="Crews and equipment on an active construction site"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] sm:mt-10">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop"
              alt="Business partners in a meeting"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Rooted in California. Positioned for what&apos;s next.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            California is one of the largest economies in the world — a market
            of builders, operators, and owners. We know its industries, its
            property, and its people, and we invest where that knowledge gives
            us an edge.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            From commercial corridors to construction sites, our home state is
            where we find assets worth holding — and partners worth keeping.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
