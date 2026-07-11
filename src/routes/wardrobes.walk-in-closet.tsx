import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["walk-in-closet"];

export const Route = createFileRoute("/wardrobes/walk-in-closet")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/wardrobes/walk-in-closet" },
    ],
    links: [{ rel: "canonical", href: "/wardrobes/walk-in-closet" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
