import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["laminated"];

export const Route = createFileRoute("/home-furnitures/laminated")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/home-furnitures/laminated" },
    ],
    links: [{ rel: "canonical", href: "/home-furnitures/laminated" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
