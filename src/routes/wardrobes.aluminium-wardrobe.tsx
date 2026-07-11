import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["aluminium-wardrobe"];

export const Route = createFileRoute("/wardrobes/aluminium-wardrobe")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/wardrobes/aluminium-wardrobe" },
    ],
    links: [{ rel: "canonical", href: "/wardrobes/aluminium-wardrobe" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
