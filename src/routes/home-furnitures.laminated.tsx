import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/home-furnitures/laminated")({
  head: () => ({
    meta: [
      { title: "Laminated Furnitures — Wood Lab Islamabad" },
      { name: "description", content: "Contemporary laminated furniture with durable, scratch-resistant surfaces." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Home Furnitures"
      title="Laminated Furnitures"
      subtitle="Modern laminated pieces built for beauty and everyday resilience."
      intro="Laminated furniture pairs high-pressure surfaces with modern silhouettes — an easy-care choice that keeps looking sharp for years."
      highlights={["High-pressure laminates", "Scratch & stain resistant", "Modular configurations", "Contemporary colour palettes"]}
    />
  ),
});
