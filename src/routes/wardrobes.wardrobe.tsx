import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wardrobes/wardrobe")({
  head: () => ({
    meta: [
      { title: "Wardrobes — Wood Lab Islamabad" },
      { name: "description", content: "Bespoke wardrobes crafted with premium materials, tailored internal organisation and refined finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Wardrobes"
      title="Wardrobe"
      subtitle="Bespoke wardrobes tailored to your space, style and storage needs."
      intro="From sliding to hinged, matte to high-gloss — our wardrobes are engineered around your wardrobe collection with premium hardware, integrated lighting and refined finishes."
      highlights={["Sliding & hinged configurations", "Integrated LED lighting", "Custom compartments & drawers", "Premium soft-close hardware"]}
    />
  ),
});
