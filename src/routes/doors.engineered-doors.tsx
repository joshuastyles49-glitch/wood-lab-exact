import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/doors/engineered-doors")({
  head: () => ({
    meta: [
      { title: "Engineered Doors — Wood Lab Islamabad" },
      { name: "description", content: "Engineered doors combining stability, sound insulation and premium veneered finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Doors"
      title="Engineered Doors"
      subtitle="Stable, quiet and beautifully finished — engineered for modern homes."
      intro="Precision-built engineered doors pair a stable core with premium veneered surfaces to deliver silence, strength and a flawless finish over the long term."
      highlights={["Dimensionally stable cores", "Premium veneered surfaces", "Improved sound insulation", "Consistent finish quality"]}
    />
  ),
});
