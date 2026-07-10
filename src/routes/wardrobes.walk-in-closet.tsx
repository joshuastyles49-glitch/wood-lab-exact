import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wardrobes/walk-in-closet")({
  head: () => ({
    meta: [
      { title: "Walk-in Closets — Wood Lab Islamabad" },
      { name: "description", content: "Luxury walk-in closets designed like private boutiques with tailored storage and feature lighting." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Wardrobes"
      title="Walk-in Closet"
      subtitle="A boutique dressing room built exclusively around you."
      intro="From island storage to glass display cabinets and feature lighting — every walk-in closet is designed as a private, curated retreat."
      highlights={["Central dressing islands", "Glass display units", "Concealed & feature lighting", "Custom shoe, bag & jewellery zones"]}
    />
  ),
});
