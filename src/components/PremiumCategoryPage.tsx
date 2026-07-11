import { useEffect, useState, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { COMPANY } from "@/lib/site-data";
import type { CategoryContent } from "@/lib/category-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PROCESS = [
  { n: "01", t: "Consultation", d: "Understanding your space, requirements, preferences and budget." },
  { n: "02", t: "Design & Planning", d: "Developing the layout, material direction, functionality and visual concept." },
  { n: "03", t: "Material Selection", d: "Selecting appropriate materials, finishes, hardware and details." },
  { n: "04", t: "Production & Execution", d: "Professional fabrication and on-site execution by experienced craftsmen." },
  { n: "05", t: "Installation & Finishing", d: "Detailed installation, finishing, inspection and final adjustments." },
  { n: "06", t: "Project Handover", d: "Final quality review and delivery of the completed space." },
];

const WHY_CHOOSE = [
  { t: "Custom Design Solutions", d: "Every project drawn for your space, not adapted from a catalogue." },
  { t: "Design & Execution", d: "One accountable team from first concept to final handover." },
  { t: "Experienced Craftsmen", d: "Skilled joiners, upholsterers and installers with decades of practice." },
  { t: "Premium Materials", d: "Sourced from trusted local and imported suppliers, correctly specified." },
  { t: "Attention to Detail", d: "Mitres, reveals, shadow gaps and finishes checked before handover." },
  { t: "Project Management", d: "One point of contact, clear schedules and honest communication." },
  { t: "Timely Delivery", d: "Realistic timelines committed at project start and tracked to completion." },
  { t: "Islamabad-Based Team", d: "Local design studio and workshop, servicing Islamabad and Rawalpindi." },
];

export function PremiumCategoryPage({ data }: { data: CategoryContent }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % data.gallery.length)),
    [data.gallery.length],
  );
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + data.gallery.length) % data.gallery.length)),
    [data.gallery.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, next, prev]);

  return (
    <>
      {/* ============ CINEMATIC HERO ============ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.heroImage})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" aria-hidden />
        <div className="container-luxe relative pt-40 pb-24 sm:pt-52 sm:pb-32 md:pt-60 md:pb-40">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">{data.eyebrow}</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
                {data.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-lg font-light text-white/85 sm:text-xl">
                {data.headline}
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
                {data.heroSubtitle}
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
                >
                  Book a Design Consultation
                </Link>
                <a
                  href={`tel:${COMPANY.phoneIntl}`}
                  className="rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call {COMPANY.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="container-luxe py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-luxe)]">
              <img
                src={data.introImage}
                alt={`${data.title} — ${data.introHeading}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
                {data.introEyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">{data.introHeading}</h2>
            </Reveal>
            {data.introParagraphs.map((p, i) => (
              <Reveal key={i} delay={140 + i * 60}>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={140 + data.introParagraphs.length * 60}>
              <div className="mt-8 rounded-2xl border-l-4 border-gold bg-accent/40 px-5 py-4 text-sm font-medium text-foreground">
                {data.introKeyBenefit}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STYLES / DESIGN OPTIONS ============ */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Design Options</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{data.stylesHeading}</h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-muted-foreground">{data.stylesSubtitle}</p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.styles.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group overflow-hidden rounded-2xl border bg-card shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-luxe)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={`${s.title} — ${data.title}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MATERIALS & FINISHES ============ */}
      <section className="container-luxe py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Materials</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{data.materialsHeading}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-muted-foreground">
              Every material below is selected for durability, appearance and long-term performance in your space.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {data.materials.map((m, i) => (
            <Reveal key={m} delay={i * 30}>
              <span className="glass rounded-full px-5 py-2.5 text-sm font-medium text-foreground/90">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-gold align-middle" />
                {m}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="bg-primary py-20 text-primary-foreground sm:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Detail</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">{data.featuresHeading}</h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold">
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY (masonry) ============ */}
      <section className="container-luxe py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Gallery</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
              Recent {data.title.toLowerCase()} work
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {data.gallery.map((src, i) => (
            <Reveal key={src + i} delay={(i % 4) * 50}>
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group block w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <img
                  src={src}
                  alt={`${data.title} project ${i + 1}`}
                  loading="lazy"
                  className={
                    "w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] " +
                    (i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square")
                  }
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
          >
            ✕
          </button>
          <button
            type="button"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20 sm:left-8"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={data.gallery[lightbox]}
            alt={`${data.title} project ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[95vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20 sm:right-8"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}

      {/* ============ PROCESS ============ */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Our Process</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">
                Design & Execution — under one roof
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-4 text-muted-foreground">
                Wood Lab designs and executes every project in-house — from first sketch to final handover.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 60}>
                <div className="h-full rounded-2xl border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="text-3xl font-display text-gold">{p.n}</div>
                  <h3 className="mt-3 text-xl font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE WOODLAB ============ */}
      <section className="container-luxe py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">Why Wood Lab</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Why Choose Wood Lab Islamabad</h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w, i) => (
            <Reveal key={w.t} delay={i * 50}>
              <div className="h-full rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-soft)]">
                <h3 className="text-base font-semibold">{w.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-secondary/50 py-20 sm:py-28">
        <div className="container-luxe">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">FAQ</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            </Reveal>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {data.faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="container-luxe relative text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gold">Let's Begin</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl sm:text-4xl md:text-5xl">
              Let's design your space.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mx-auto mt-5 max-w-2xl text-white/75">
              From concept and material selection to complete execution, Wood Lab delivers tailored
              interior solutions designed around your lifestyle.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/book"
                className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-gold-foreground transition-transform hover:scale-[1.03]"
              >
                Book a Consultation
              </Link>
              <a
                href={`tel:${COMPANY.phoneIntl}`}
                className="rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
