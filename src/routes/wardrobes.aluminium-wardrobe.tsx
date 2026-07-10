import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/wardrobes/aluminium-wardrobe")({
  head: () => ({
    meta: [
      { title: "Aluminium Wardrobes — Wood Lab Islamabad" },
      { name: "description", content: "Modern aluminium-framed wardrobes with sliding doors and premium finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Wardrobes"
      title="Aluminium Wardrobe"
      subtitle="Contemporary aluminium-framed wardrobes engineered for durability and style."
      intro="Sleek aluminium-framed wardrobes pairing slim profiles with premium panels — perfect for modern bedrooms that call for a refined, architectural feel."
      highlights={["Slim aluminium profiles", "Sliding & hinged options", "Lacquered, mirror & glass panels", "Anti-jump smooth rollers"]}
    />
  ),
});
