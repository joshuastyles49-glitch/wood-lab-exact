import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["engineered-doors"];

export const Route = createFileRoute("/doors/engineered-doors")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/doors/engineered-doors" },
    ],
    links: [{ rel: "canonical", href: "/doors/engineered-doors" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
