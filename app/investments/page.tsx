import type { Metadata } from "next";
import { Eyebrow, PageHero, CtaBand } from "@/components/site";

export const metadata: Metadata = {
  title: "Investments",
  description:
    "The investment approach of Temetsei Holdings LLC: disciplined underwriting, real asset backing, and patient, permanent capital.",
};

const criteria = [
  {
    title: "Durable demand",
    copy: "Assets people and businesses will still need in twenty years — housing, workspace, equipment, essential services.",
  },
  {
    title: "Real asset backing",
    copy: "Tangible value underneath the cash flow: property, machinery, contracts, or a business franchise that would be hard to rebuild.",
  },
  {
    title: "Cash flow from day one",
    copy: "We underwrite what an asset earns now. Upside is welcome; it is never the reason to buy.",
  },
  {
    title: "A seller or partner we respect",
    copy: "Good assets come from good hands. We look for counterparties who care how the story continues.",
  },
  {
    title: "A California advantage",
    copy: "Local knowledge is an edge. We favor opportunities where knowing this state's markets, industries, and people matters.",
  },
];

const process = [
  {
    step: "01",
    title: "Source",
    copy: "Direct relationships with owners, brokers, lenders, and operators surface opportunities before they're shopped.",
  },
  {
    step: "02",
    title: "Underwrite",
    copy: "Conservative assumptions, real diligence, and a price that works on today's earnings.",
  },
  {
    step: "03",
    title: "Acquire",
    copy: "Clean structure, committed financing, and a close that happens when we said it would.",
  },
  {
    step: "04",
    title: "Operate",
    copy: "Active management from day one — the plan we underwrote is the plan we execute.",
  },
  {
    step: "05",
    title: "Compound",
    copy: "Earnings are reinvested across the portfolio, and the asset is held as long as it keeps earning its place.",
  },
];

export default function Investments() {
  return (
    <>
      <PageHero
        kicker="Investments"
        title="Patient capital, permanently invested."
        image="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2400&auto=format&fit=crop"
        alt="San Francisco skyline at golden hour"
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            We invest our own capital, on our own clock.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-body">
          <p>
            Temetsei Holdings is not a fund. There is no
            vintage year, no fee clock, and no pressure to deploy or exit on
            someone else&apos;s schedule. That freedom shapes everything: we
            can wait for the right asset, pay a disciplined price, and hold for
            as long as the asset deserves.
          </p>
          <p>
            The portfolio is built to be diversified across industries and
            asset types — businesses, property, and equipment — so that no
            single market decides our outcome, and every new opportunity can be
            judged purely on its merits.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>What we look for</Eyebrow>
          <h2 className="mt-5 max-w-2xl font-display text-3xl leading-snug sm:text-4xl">
            Five tests every opportunity has to pass.
          </h2>
          <ul className="mt-14 border-t border-ink/10">
            {criteria.map((c) => (
              <li
                key={c.title}
                className="grid gap-2 border-b border-ink/10 py-7 md:grid-cols-[1fr_1.4fr] md:gap-8"
              >
                <h3 className="font-display text-xl text-navy sm:text-2xl">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-body">{c.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>From first look to long hold</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug text-ivory sm:text-4xl">
            How an asset joins the portfolio.
          </h2>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p) => (
              <li key={p.step} className="border-t border-gold/40 pt-6">
                <span className="font-display text-sm tracking-[0.2em] text-gold">
                  {p.step}
                </span>
                <h3 className="mt-2 font-display text-xl text-gold-light">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {p.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <Eyebrow>For owners &amp; sellers</Eyebrow>
            <h2 className="mt-5 font-display text-2xl leading-snug text-navy sm:text-3xl">
              Selling a business or property?
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              If you&apos;ve spent years building something valuable, the buyer
              matters. We offer a straightforward process, fair terms, and a
              genuine commitment to operate what you built for the long term.
            </p>
          </div>
          <div>
            <Eyebrow>For partners &amp; lenders</Eyebrow>
            <h2 className="mt-5 font-display text-2xl leading-snug text-navy sm:text-3xl">
              Building or financing something?
            </h2>
            <p className="mt-5 leading-relaxed text-body">
              We co-invest with operators and developers, and we work with
              banks that value conservative underwriting and clean structure.
              If a long-horizon partner strengthens your plan, let&apos;s talk.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
