import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/interiors/wooden-flooring")({
  head: () => ({
    meta: [
      { title: "Wooden Flooring — Wood Lab Islamabad" },
      { name: "description", content: "Premium engineered and solid wooden flooring in a range of tones and finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Interiors"
      title="Wooden Flooring"
      subtitle="Warm, timeless flooring engineered for modern living."
      intro="Premium wooden flooring supplied and expertly installed — engineered stability with the natural depth and character of real timber."
      highlights={["Engineered & solid options", "Wide-plank formats", "Matte, satin & oiled finishes", "Underlay & moisture protection"]}
    />
  ),
});
