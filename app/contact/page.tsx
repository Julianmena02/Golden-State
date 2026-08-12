import type { Metadata } from "next";
import { Eyebrow, PageHero } from "@/components/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Temetsei Holdings LLC about selling a business or property, partnership opportunities, or financing relationships.",
};

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-ink/35 focus:border-gold focus:outline-none";

const labelClass =
  "text-[0.7rem] font-semibold tracking-[0.28em] text-navy uppercase";

export default function Contact() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start the conversation."
        image="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2400&auto=format&fit=crop"
        alt="City skyline in evening light"
      />

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-[1fr_1.4fr] md:py-32">
        <div>
          <Eyebrow>Reach us directly</Eyebrow>
          <h2 className="mt-5 font-display text-3xl leading-snug sm:text-4xl">
            Every inquiry is read by a principal.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            Whether you&apos;re selling a business, offering a property,
            proposing a partnership, or exploring a lending relationship,
            you&apos;ll hear back from a decision-maker — typically within two
            business days.
          </p>
          <dl className="mt-10 space-y-6">
            <div>
              <dt className={labelClass}>Email</dt>
              <dd className="mt-2">
                <a
                  href="mailto:info@temetseiholdings.com"
                  className="font-display text-xl text-navy underline decoration-gold decoration-2 underline-offset-8 transition-colors hover:text-gold"
                >
                  info@temetseiholdings.com
                </a>
              </dd>
            </div>
            <div>
              <dt className={labelClass}>Location</dt>
              <dd className="mt-2 text-body">California, United States</dd>
            </div>
          </dl>
        </div>

        {/* ponytail: native mailto form — no backend. Swap action for a form
            service (Formspree, Resend, an API route) when real intake matters. */}
        <form
          action="mailto:info@temetseiholdings.com"
          method="post"
          encType="text/plain"
          className="border border-ink/10 bg-white p-8 sm:p-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Name
              </label>
              <input
                id="name"
                name="Name"
                required
                autoComplete="name"
                placeholder="Your full name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>
                Company
              </label>
              <input
                id="company"
                name="Company"
                autoComplete="organization"
                placeholder="Optional"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="interest" className={labelClass}>
                I&apos;m contacting you about
              </label>
              <select
                id="interest"
                name="Interest"
                className={`${inputClass} cursor-pointer`}
                defaultValue="Selling a business"
              >
                <option>Selling a business</option>
                <option>Real estate opportunity</option>
                <option>Equipment or machinery</option>
                <option>Partnership or joint venture</option>
                <option>Banking or financing</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                required
                rows={5}
                placeholder="Tell us about the opportunity."
                className={`${inputClass} resize-y`}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-navy mt-10">
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
