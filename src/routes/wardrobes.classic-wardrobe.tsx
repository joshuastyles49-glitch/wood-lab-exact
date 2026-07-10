import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wardrobes/classic-wardrobe")({
  head: () => ({
    meta: [
      { title: "Classic Wardrobes — Wood Lab Islamabad" },
      { name: "description", content: "Elegant classic wardrobes crafted with rich wood detailing and bespoke internal organisation." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Wardrobes"
      title="Classic Wardrobe"
      subtitle="Heritage-inspired wardrobes with warm timber and refined detailing."
      intro="Tailored classic wardrobes with elegant panelled doors, quality hardware and thoughtful internal layouts that stand the test of time."
      highlights={["Raised-panel & shaker doors", "Solid wood frames", "Custom compartments & drawers", "Premium hinges & handles"]}
    />
  ),
});
