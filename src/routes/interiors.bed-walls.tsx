import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/interiors/bed-walls")({
  head: () => ({
    meta: [
      { title: "Bed Walls — Wood Lab Islamabad" },
      { name: "description", content: "Luxury bed walls and headboards with panelling, upholstery and accent lighting." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Interiors"
      title="Bed Walls"
      subtitle="Sculpted bed walls that anchor the bedroom in quiet luxury."
      intro="Full-height bed walls combining panelled joinery, upholstered accents and integrated lighting to create a truly hotel-grade bedroom moment."
      highlights={["Panelled timber joinery", "Upholstered headboard inserts", "Integrated bedside lighting", "Concealed niches & storage"]}
    />
  ),
});
