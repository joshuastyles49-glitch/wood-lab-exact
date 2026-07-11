import { createFileRoute } from "@tanstack/react-router";
import { PremiumCategoryPage } from "@/components/PremiumCategoryPage";
import { CATEGORIES } from "@/lib/category-data";

const data = CATEGORIES["modern-kitchen"];

export const Route = createFileRoute("/kitchens/modern-kitchen")({
  head: () => ({
    meta: [
      { title: data.metaTitle },
      { name: "description", content: data.metaDescription },
      { property: "og:title", content: data.metaTitle },
      { property: "og:description", content: data.metaDescription },
      { property: "og:image", content: data.heroImage },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/kitchens/modern-kitchen" },
    ],
    links: [{ rel: "canonical", href: "/kitchens/modern-kitchen" }],
  }),
  component: () => <PremiumCategoryPage data={data} />,
});
