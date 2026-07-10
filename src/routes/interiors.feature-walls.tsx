import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/interiors/feature-walls")({
  head: () => ({
    meta: [
      { title: "Feature Walls — Wood Lab Islamabad" },
      { name: "description", content: "Bespoke feature walls with fluted panels, textures and accent lighting." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Interiors"
      title="Feature Walls"
      subtitle="Signature walls that shape the mood of an entire room."
      intro="From fluted timber and stone to sculpted plaster, our feature walls create depth, texture and a distinctive focal point in any space."
      highlights={["Fluted timber panels", "Textured plaster & stone", "Backlit accent detailing", "Custom scale & profiles"]}
    />
  ),
});
