import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

// "Wardrobe" landing uses the classic wardrobe premium content.
const data = CATEGORIES["classic-wardrobe"];

export const Route = createFileRoute("/wardrobes/wardrobe")({
  head: () => ({
    meta: [
      { title: "Wardrobes in Islamabad | Wood Lab" },
      { name: "description", content: "Bespoke wardrobes in Islamabad — classic, aluminium and walk-in — designed and built by Wood Lab." },
      { property: "og:title", content: "Wardrobes in Islamabad | Wood Lab" },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/wardrobes/wardrobe" },
    ],
    links: [{ rel: "canonical", href: "/wardrobes/wardrobe" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
