import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["wooden-flooring"];

export const Route = createFileRoute("/interiors/wooden-flooring")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/interiors/wooden-flooring" },
    ],
    links: [{ rel: "canonical", href: "/interiors/wooden-flooring" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
