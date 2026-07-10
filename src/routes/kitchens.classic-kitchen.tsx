import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchens/classic-kitchen")({
  head: () => ({
    meta: [
      { title: "Classic Kitchens — Wood Lab Islamabad" },
      { name: "description", content: "Timeless classic kitchens with rich wood detailing, elegant profiles and premium finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchens"
      title="Classic Kitchen"
      subtitle="Timeless craftsmanship with rich detailing and warm, enduring elegance."
      intro="Classic kitchens designed with heritage profiles, carved detailing and warm hardwood tones — perfectly suited for homes that celebrate tradition and craftsmanship."
      highlights={["Shaker & raised-panel profiles", "Solid wood detailing", "Hand-finished stains & polishes", "Premium brass & bronze fittings"]}
    />
  ),
});
