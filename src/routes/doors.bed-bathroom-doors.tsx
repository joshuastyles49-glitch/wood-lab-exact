import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/doors/bed-bathroom-doors")({
  head: () => ({
    meta: [
      { title: "Bed & Bathroom Doors — Wood Lab Islamabad" },
      { name: "description", content: "Interior doors for bedrooms and bathrooms with elegant finishes and reliable hardware." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Doors"
      title="Bed & Bathroom Doors"
      subtitle="Refined interior doors tuned for privacy, quiet and everyday elegance."
      intro="Designed for daily use, our bedroom and bathroom doors combine acoustic comfort, moisture-safe finishes and refined detailing to complement any interior scheme."
      highlights={["Moisture-resistant finishes", "Silent soft-close hinges", "Custom stains & lacquers", "Concealed hardware options"]}
    />
  ),
});
