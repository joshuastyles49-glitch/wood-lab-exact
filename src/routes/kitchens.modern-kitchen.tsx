import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchens/modern-kitchen")({
  head: () => ({
    meta: [
      { title: "Modern Kitchens — Wood Lab Islamabad" },
      { name: "description", content: "Contemporary handleless kitchens with sleek finishes, smart storage and integrated appliances." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchens"
      title="Modern Kitchen"
      subtitle="Sleek, minimal and engineered for a truly contemporary lifestyle."
      intro="Clean lines, seamless finishes and intelligent storage — our modern kitchens are designed to feel effortless while performing beautifully every day."
      highlights={["Handleless push-to-open design", "Matte & high-gloss lacquers", "Integrated appliance columns", "Concealed LED task lighting"]}
    />
  ),
});
