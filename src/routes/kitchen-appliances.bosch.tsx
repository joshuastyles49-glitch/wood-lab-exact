import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchen-appliances/bosch")({
  head: () => ({
    meta: [
      { title: "Bosch Kitchen Appliances — Wood Lab Islamabad" },
      { name: "description", content: "Bosch premium built-in appliances integrated into bespoke kitchens." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchen Appliances"
      title="Bosch"
      subtitle="Iconic Bosch engineering, seamlessly built in."
      intro="Bosch ovens, hobs, dishwashers and refrigeration — specified and integrated as part of your Wood Lab kitchen for a truly premium result."
      highlights={["Built-in ovens & compact appliances", "Induction & gas hobs", "Silent dishwashers", "Integrated refrigeration"]}
    />
  ),
});
