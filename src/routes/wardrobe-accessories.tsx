import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wardrobe-accessories")({
  head: () => ({
    meta: [
      { title: "Wardrobe Accessories — Wood Lab Islamabad" },
      { name: "description", content: "Premium wardrobe accessories — pull-out trays, tie racks, LED lighting and more." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Accessories"
      title="Wardrobe Accessories"
      subtitle="The details that turn a wardrobe into a boutique."
      intro="From glass-fronted drawers and jewellery inserts to LED lighting and pull-out trays — accessories that make everyday routines feel effortless."
      highlights={["Pull-out trouser & shoe racks", "Jewellery & watch inserts", "Integrated LED lighting", "Soft-close drawers"]}
    />
  ),
});
