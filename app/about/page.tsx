import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, PageHero, CtaBand } from "@/components/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Temetsei Holdings LLC is a diversified California holding company built to acquire, manage, and grow long-term assets with an owner's mindset.",
};

const values = [
  {
    title: "Discipline",
    copy: "We say no far more than we say yes. Every acquisition must stand on its own economics, at its own price.",
  },
  {
    title: "Transparency",
    copy: "Banks, sellers, and partners get straight answers — on structure, on timeline, and on how we intend to operate.",
  },
  {
    title: "Patience",
    copy: "We buy to hold. Without a forced exit date, we can make decisions a decade out, not a quarter out.",
  },
  {
    title: "Stewardship",
    copy: "An asset is a responsibility — to its tenants, its employees, and its community. We manage accordingly.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        kicker="About the firm"
        title="A holding company with an owner's mindset."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2400&auto=format&fit=crop"
        alt="Commercial office building facade"
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Broad by design. Focused in practice.
          </h2>
        </div>
        <div className="space-y-5 leading-relaxed text-body">
          <p>
            Temetsei Holdings LLC is a California-based
            holding company focused on acquiring, managing, and growing
            valuable assets across multiple industries — operating businesses,
            real estate, equipment, and strategic partnerships.
          </p>
          <p>
            The company is intentionally broad. Markets shift, industries
            cycle, and the best opportunity of the next decade rarely looks
            like the last one. Our structure lets us follow value wherever it
            appears, while our standards stay constant: real assets, real cash
            flow, and management we can do well.
          </p>
          <p>
            What we are not is a trading operation. We buy to own, we operate
            what we own, and we measure success in years of compounded value —
            not in exits.
          </p>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <Eyebrow>What guides us</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug text-ivory sm:text-4xl">
            Four commitments behind every acquisition.
          </h2>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="border-t border-gold/40 pt-6">
                <h3 className="font-display text-xl text-gold-light">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  {v.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div className="relative order-last md:order-first">
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 h-full w-full border border-gold/50"
          />
          <div className="relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
              alt="Two business partners shaking hands"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Direct, decisive, and easy to deal with.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Sellers and partners work directly with decision-makers. We move
            quickly when the fit is right, we keep our word on terms, and we
            close what we commit to. For business owners thinking about
            succession, that means a buyer who will care for what they built.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            For banks and co-investors, it means a counterparty with
            conservative underwriting, clean structure, and a genuine long-term
            plan for every asset on our books.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
