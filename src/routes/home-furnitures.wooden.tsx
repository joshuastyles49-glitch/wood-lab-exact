import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/home-furnitures/wooden")({
  head: () => ({
    meta: [
      { title: "Wooden Furnitures — Wood Lab Islamabad" },
      { name: "description", content: "Solid wood furniture with rich grain, precision joinery and hand-applied finishes." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Home Furnitures"
      title="Wooden Furnitures"
      subtitle="Heirloom-grade wooden pieces built to last generations."
      intro="Solid wood furniture crafted with traditional joinery and hand-applied finishes — beds, tables, sideboards and more, made to your specification."
      highlights={["Solid hardwood construction", "Precision joinery", "Hand-applied finishes", "Fully bespoke sizing"]}
    />
  ),
});
