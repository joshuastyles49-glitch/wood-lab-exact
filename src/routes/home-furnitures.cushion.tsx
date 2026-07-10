import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/home-furnitures/cushion")({
  head: () => ({
    meta: [
      { title: "Cushion Furnitures — Wood Lab Islamabad" },
      { name: "description", content: "Upholstered sofas, sectionals and lounge seating in premium fabrics." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Home Furnitures"
      title="Cushion Furnitures"
      subtitle="Deeply comfortable upholstered pieces tailored to your home."
      intro="Custom sofas, sectionals and lounge chairs — hand-built frames, high-resilience foams and premium fabrics deliver comfort you can feel."
      highlights={["Hardwood inner frames", "High-resilience foam", "Custom fabrics & leathers", "Modular sectional layouts"]}
    />
  ),
});
