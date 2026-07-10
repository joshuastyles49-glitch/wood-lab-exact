import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchen-appliances/fotile")({
  head: () => ({
    meta: [
      { title: "Fotile Kitchen Appliances — Wood Lab Islamabad" },
      { name: "description", content: "Fotile premium kitchen appliances integrated into bespoke kitchens." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchen Appliances"
      title="Fotile"
      subtitle="High-performance Fotile appliances, expertly integrated."
      intro="Fotile hoods, hobs, ovens and dishwashers — sourced and installed as part of your bespoke Wood Lab kitchen for a seamless finish."
      highlights={["Powerful ventilation systems", "Built-in ovens & steamers", "Slim, architectural design", "Manufacturer warranty"]}
    />
  ),
});
