import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["cushion"];

export const Route = createFileRoute("/home-furnitures/cushion")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/home-furnitures/cushion" },
    ],
    links: [{ rel: "canonical", href: "/home-furnitures/cushion" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
