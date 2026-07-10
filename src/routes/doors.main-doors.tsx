import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/doors/main-doors")({
  head: () => ({
    meta: [
      { title: "Main Doors — Wood Lab Islamabad" },
      { name: "description", content: "Grand entrance doors in solid hardwood with premium locks and rich detailing." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Doors"
      title="Main Doors"
      subtitle="Grand entrances crafted from solid hardwood with precision joinery."
      intro="Our main doors set the tone for the entire home — solid hardwood construction, custom stains and premium hardware for a truly grand first impression."
      highlights={["Solid hardwood cores", "Custom grain & carving", "High-security locking systems", "Weather-sealed finishing"]}
    />
  ),
});
