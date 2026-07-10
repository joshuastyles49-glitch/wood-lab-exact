import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchen-accessories")({
  head: () => ({
    meta: [
      { title: "Kitchen Accessories — Wood Lab Islamabad" },
      { name: "description", content: "Premium kitchen accessories — pull-outs, corner units, cutlery inserts and more." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Accessories"
      title="Kitchen Accessories"
      subtitle="Intelligent hardware that transforms how your kitchen works."
      intro="A curated range of premium kitchen accessories — from tall pull-outs and magic corners to cutlery organisers and integrated waste solutions."
      highlights={["Tall unit pull-outs", "Magic corner solutions", "Cutlery & plate organisers", "Integrated waste bins"]}
    />
  ),
});
