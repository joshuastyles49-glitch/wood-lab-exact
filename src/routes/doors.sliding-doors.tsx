import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["sliding-doors"];

export const Route = createFileRoute("/doors/sliding-doors")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/doors/sliding-doors" },
    ],
    links: [{ rel: "canonical", href: "/doors/sliding-doors" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
