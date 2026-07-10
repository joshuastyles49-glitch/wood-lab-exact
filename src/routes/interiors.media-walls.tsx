import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/interiors/media-walls")({
  head: () => ({
    meta: [
      { title: "Media Walls — Wood Lab Islamabad" },
      { name: "description", content: "Luxury TV media walls with wooden panels, ambient lighting and concealed storage." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Interiors"
      title="Media Walls"
      subtitle="A statement centrepiece for the modern living room."
      intro="Bespoke media walls combining warm wooden panels, backlit shelving and concealed cable management to turn any living room into a cinematic experience."
      highlights={["Wooden feature panels", "Backlit display shelves", "Concealed cable management", "Integrated storage & seating"]}
    />
  ),
});
