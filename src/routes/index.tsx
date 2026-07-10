import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles } from "lucide-react";

import { HeroSlideshow } from "@/components/HeroSlideshow";
import craftImg from "@/assets/craftsmanship.jpg";
import interiorDesignImg from "@/assets/interior-designing.jpg";
import beforeImg from "@/assets/before-after-before.jpg";
import afterImg from "@/assets/before-after-after.jpg";
import { COMPANY, SERVICES, STATS, WHY_CHOOSE } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { ServiceCard } from "@/components/ServiceCard";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Section, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      raf = requestAnimationFrame(() => setScrollY(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const factor = isMobile ? 0.4 : 1;
  const clamped = Math.min(scrollY, 900);

  return (
    <>
      {/* HERO with parallax */}
      <section ref={heroRef} className="relative h-screen min-h-[640px] overflow-hidden">
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `translateY(${clamped * 0.4 * factor}px) scale(${1 + clamped * 0.0004 * factor})`,
          }}
        >
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/85" />

        </div>

        {/* floating decorative shapes */}
        <div
          className="pointer-events-none absolute left-[8%] top-[22%] h-24 w-24 rounded-full border border-gold/40"
          style={{ transform: `translateY(${-clamped * 0.25 * factor}px)` }}
        />
        <div
          className="pointer-events-none absolute right-[12%] top-[30%] h-40 w-40 rounded-full bg-gold/10 blur-2xl"
          style={{ transform: `translateY(${clamped * 0.5 * factor}px)` }}
        />

        <div
          className="container-luxe relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground"
          style={{
            transform: `translateY(${-clamped * 0.18 * factor}px)`,
            opacity: Math.max(1 - clamped / 620, 0),
          }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-primary/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            {COMPANY.tagline}
          </div>
          <h1 className="max-w-4xl text-4xl leading-[1.08] sm:text-6xl md:text-7xl">
            Luxury Wood Interiors Crafted for Modern Living
          </h1>
          <p className="mt-6 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
            Premium kitchens, wardrobes, wooden doors, media walls, false ceilings, and complete
            home renovations designed with craftsmanship and precision.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-105"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-primary-foreground/10"
            >
              Explore Projects
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm text-primary-foreground/80">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={i < 4 ? "h-4 w-4 fill-gold text-gold" : "h-4 w-4 text-primary-foreground/40"}
                />
              ))}
            </div>
            <span>{COMPANY.rating} · {COMPANY.reviewsCount} Google Reviews</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-primary-foreground/60">
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-primary-foreground/40 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-primary-foreground/70" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-luxe grid grid-cols-2 gap-8 py-16 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="text-center">
              <div className="font-display text-4xl text-gold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </div>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <Section className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={craftImg}
              alt="Master craftsman handcrafting luxury woodwork"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl shadow-[var(--shadow-luxe)]"
            />
            <div className="glass absolute -bottom-6 -right-4 rounded-2xl px-6 py-4 shadow-[var(--shadow-glass)] sm:-right-6">
              <p className="font-display text-3xl text-gold">12+</p>
              <p className="text-xs text-muted-foreground">Years of Craftsmanship</p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="Crafting Timeless Interiors Since Day One"
          />
          <Reveal delay={120}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Wood Lab Islamabad (PVT.) LTD is a premium interior construction and woodworking
              company specializing in luxury residential and commercial interiors. Our experienced
              craftsmen and designers combine creativity with precision to deliver elegant interiors
              that are both functional and timeless.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              From luxurious kitchens and wardrobes to complete home renovations, office décor, media
              walls, false ceilings, and custom woodwork, we transform ordinary spaces into
              extraordinary living experiences.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section className="bg-secondary/40">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Signature Services"
          subtitle="Every service is delivered end to end — from concept and design to manufacturing and installation."
        />
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={(i % 3) * 100} />
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </Section>

      {/* INTERIOR DESIGNING & EXECUTION */}
      <Section className="grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            align="left"
            eyebrow="Design + Build"
            title="Interior Designing & Execution"
            subtitle="From first sketch to final handover — we design, plan, and execute complete interiors that feel cohesive, luxurious, and unmistakably yours."
          />
          <Reveal delay={120}>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our in-house team of interior designers and project managers work alongside our
              craftsmen to deliver turnkey solutions. We handle space planning, 2D & 3D visualisation,
              material selection, lighting design, custom woodwork, false ceilings, paint, and every
              finishing detail.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-6 space-y-3">
              {[
                "2D & 3D design layouts",
                "Material & finish curation",
                "End-to-end project execution",
                "Single point of contact",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={280}>
            <Link
              to="/book"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold hover:text-gold-foreground"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="order-1 lg:order-2">
          <div className="relative">
            <img
              src={interiorDesignImg}
              alt="Luxury interior design and execution by Wood Lab Islamabad"
              loading="lazy"
              width={1024}
              height={1024}
              className="rounded-3xl shadow-[var(--shadow-luxe)]"
            />
            <div className="glass absolute -bottom-6 -left-4 rounded-2xl px-6 py-4 shadow-[var(--shadow-glass)] sm:-left-6">
              <p className="font-display text-3xl text-gold">Turnkey</p>
              <p className="text-xs text-muted-foreground">Design to Delivery</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* WHY CHOOSE US */}
      <Section>
        <SectionHeading
          eyebrow="Why Wood Lab"
          title="Why Clients Choose Us"
          subtitle="A relentless commitment to quality, detail and a seamless experience from start to finish."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((reason, i) => (
            <Reveal key={reason} delay={(i % 3) * 90}>
              <div className="group flex items-center gap-4 rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 font-display text-lg text-gold transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-medium">{reason}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* BEFORE & AFTER */}
      <Section>
        <SectionHeading
          eyebrow="Transformations"
          title="Before & After Transformations"
          subtitle="See how thoughtful design and expert craftsmanship transform ordinary spaces into elegant, functional interiors."
        />
        <Reveal className="mt-14">
          <BeforeAfter
            beforeSrc={afterImg}
            afterSrc={beforeImg}
            beforeAlt="Kitchen before renovation"
            afterAlt="Kitchen after renovation"
          />
        </Reveal>
      </Section>

      {/* REVIEWS */}
      <Section className="bg-secondary/40">
        <SectionHeading eyebrow="Client Love" title="What Our Clients Say" />
        <div className="mt-12">
          <ReviewsCarousel />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-luxe py-20 text-center sm:py-24">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-5xl">
              Let's Build Your Dream Interior
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">
              Book a free consultation and let our designers bring your vision to life with premium
              craftsmanship.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/book"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-medium text-gold-foreground transition-transform hover:scale-105"
            >
              Book Your Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}