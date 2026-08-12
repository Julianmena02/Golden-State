import type { Metadata } from "next";
import Image from "next/image";
import { Eyebrow, PageHero, CtaBand } from "@/components/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business acquisitions, real estate, equipment ownership, asset management, and strategic partnerships — the five disciplines of Temetsei Holdings LLC.",
};

const services = [
  {
    kicker: "Acquire",
    title: "Business Acquisitions",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1600&auto=format&fit=crop",
    alt: "Executives reviewing documents in a meeting",
    copy: [
      "We acquire established businesses with proven cash flow, loyal customers, and room to grow — often from owners planning succession or their next chapter.",
      "Sellers deal directly with principals, terms stay as agreed, and the companies we buy keep operating under stewardship that respects what was built.",
    ],
  },
  {
    kicker: "Own",
    title: "Real Estate",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    alt: "Modern California home with pool and palm trees",
    copy: [
      "Commercial and residential property across California, acquired for income today and appreciation over decades.",
      "We improve what we buy — better tenants, better operations, better buildings — and we hold through cycles instead of selling into them.",
    ],
  },
  {
    kicker: "Deploy",
    title: "Equipment & Machinery Ownership",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop",
    alt: "Crews and equipment on an active construction site",
    copy: [
      "Hard assets that earn: construction equipment, machinery, and vehicles owned outright and put to work through leasing and service arrangements.",
      "Equipment gives the portfolio tangible collateral value and income that doesn't depend on any single industry.",
    ],
  },
  {
    kicker: "Steward",
    title: "Asset & Property Management",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    alt: "Reviewing plans and financial documents at a desk",
    copy: [
      "Ownership is where our work starts, not where it ends. Every holding gets active management — budgeting, maintenance, leasing, and operational oversight.",
      "The same discipline is available to select partners who want their assets managed the way we manage our own.",
    ],
  },
  {
    kicker: "Partner",
    title: "Strategic Partnerships & Joint Ventures",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
    alt: "Partners closing an agreement with a handshake",
    copy: [
      "Some of the best opportunities are built together. We co-invest and joint-venture with operators, developers, and investors who bring expertise we respect.",
      "We structure partnerships simply, align incentives honestly, and stay for the duration of the plan — not the first good exit.",
    ],
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Five disciplines, managed under one roof."
        image="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=2400&auto=format&fit=crop"
        alt="Glass office towers against the sky"
      />

      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="max-w-3xl font-display text-2xl leading-relaxed text-navy sm:text-3xl">
          Everything we do is a form of ownership. Whether the asset is a
          company, a building, or a machine, the work is the same: buy it
          well, run it well, and let time do the rest.
        </p>

        <div className="mt-20 space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
            >
              <div className={i % 2 ? "md:order-last" : ""}>
                <div className="relative">
                  <div
                    aria-hidden
                    className={`absolute h-full w-full border border-gold/50 ${
                      i % 2 ? "-bottom-4 -left-4" : "-top-4 -right-4"
                    }`}
                  />
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Eyebrow>{s.kicker}</Eyebrow>
                <h2 className="mt-5 font-display text-3xl leading-snug text-navy">
                  {s.title}
                </h2>
                {s.copy.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-body">
                    {p}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
