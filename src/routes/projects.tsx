import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import { PageHero, Section } from "@/components/sections";

import kitchen from "@/assets/kitchen-cabinets.jpg";
import wardrobes from "@/assets/wardrobes.jpg";
import doors from "@/assets/wooden-doors.jpg";
import office from "@/assets/office-decor.jpg";
import ceiling from "@/assets/false-ceiling.jpg";
import mediaWall from "@/assets/media-wall.jpg";
import closets from "@/assets/walk-in-closets.jpg";
import renovation from "@/assets/home-renovation.jpg";
import bedroom from "@/assets/bedroom.jpg";
import vanities from "@/assets/vanities.jpg";
import wpc from "@/assets/wpc-panels.jpg";
import lamination from "@/assets/lamination.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Wood Lab Islamabad (PVT.) LTD" },
      {
        name: "description",
        content:
          "Browse our portfolio of luxury kitchens, modern bedrooms, office interiors, false ceilings, wardrobes, media walls, home renovations and wooden doors.",
      },
      { property: "og:title", content: "Our Projects — Wood Lab Islamabad" },
      {
        property: "og:description",
        content: "A portfolio of premium interiors crafted across Islamabad.",
      },
    ],
  }),
  component: Projects,
});

type Project = { title: string; category: string; image: string; detail: string };

const PROJECTS: Project[] = [
  { title: "Modular Walnut Kitchen", category: "Luxury Kitchens", image: kitchen, detail: "Handleless walnut cabinetry with marble tops and integrated lighting." },
  { title: "Illuminated Walk-in Wardrobe", category: "Wardrobes", image: wardrobes, detail: "Full-height wardrobe with LED shelving and glass display doors." },
  { title: "Grand Hardwood Entrance", category: "Wooden Doors", image: doors, detail: "Solid hardwood entrance door with custom grain and brass fittings." },
  { title: "Executive Office Suite", category: "Office Interiors", image: office, detail: "Wood-paneled executive office with bespoke desk and storage." },
  { title: "Cove-Lit Living Ceiling", category: "False Ceilings", image: ceiling, detail: "Layered gypsum ceiling with concealed LED cove lighting." },
  { title: "Backlit Media Wall", category: "Media Walls", image: mediaWall, detail: "Wooden panel media wall with backlit shelving and hidden cabling." },
  { title: "Boutique Dressing Room", category: "Wardrobes", image: closets, detail: "Walk-in closet with island storage and feature lighting." },
  { title: "Turnkey Home Transformation", category: "Home Renovation", image: renovation, detail: "Complete double-height home renovation with wood accents." },
  { title: "Panelled Master Bedroom", category: "Modern Bedrooms", image: bedroom, detail: "Custom wood headboard wall with ambient lighting." },
  { title: "Spa-Style Vanity", category: "Home Renovation", image: vanities, detail: "Moisture-resistant vanity with stone top and backlit mirror." },
  { title: "Fluted WPC Feature Wall", category: "Media Walls", image: wpc, detail: "Premium WPC decorative panelling for a modern hallway." },
  { title: "Laminated Living Units", category: "Modern Bedrooms", image: lamination, detail: "Contemporary laminated modular furniture in a bright lounge." },
];

const CATEGORIES = [
  "All",
  "Luxury Kitchens",
  "Modern Bedrooms",
  "Office Interiors",
  "False Ceilings",
  "Wardrobes",
  "Media Walls",
  "Home Renovation",
  "Wooden Doors",
];

function Projects() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<Project | null>(null);

  const filtered =
    active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects That Speak for Themselves"
        subtitle="A selection of interiors we've designed, manufactured and installed with precision."
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setLightbox(p)}
                className="group block w-full overflow-hidden rounded-2xl border bg-card text-left shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1.5 hover:shadow-[var(--shadow-luxe)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/80 via-primary/10 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-sm font-medium text-primary-foreground">View project</span>
                  </div>
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold">{p.category}</span>
                  <h3 className="mt-1.5 text-xl">{p.title}</h3>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-luxe)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur transition-colors hover:bg-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="max-h-[60vh] w-full object-cover"
            />
            <div className="p-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">{lightbox.category}</span>
              <h3 className="mt-1.5 text-2xl">{lightbox.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{lightbox.detail}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
