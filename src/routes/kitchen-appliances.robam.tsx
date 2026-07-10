import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchen-appliances/robam")({
  head: () => ({
    meta: [
      { title: "Robam Kitchen Appliances — Wood Lab Islamabad" },
      { name: "description", content: "Robam premium kitchen appliances integrated into bespoke kitchens." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchen Appliances"
      title="Robam"
      subtitle="Robam appliances — engineered for the modern kitchen."
      intro="Robam hoods, hobs and ovens integrated into your Wood Lab kitchen — a refined, coordinated appliance package with full aftercare."
      highlights={["High-performance hoods", "Precision gas & induction hobs", "Built-in oven ranges", "Manufacturer warranty"]}
    />
  ),
});
