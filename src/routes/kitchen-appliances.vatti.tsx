import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchen-appliances/vatti")({
  head: () => ({
    meta: [
      { title: "Vatti Kitchen Appliances — Wood Lab Islamabad" },
      { name: "description", content: "Vatti premium kitchen appliances — hobs, hoods and built-in solutions." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchen Appliances"
      title="Vatti"
      subtitle="Premium Vatti appliances integrated into your bespoke kitchen."
      intro="Vatti hobs, hoods and built-in appliances specified and installed as part of your Wood Lab kitchen for a fully coordinated result."
      highlights={["Built-in hobs & hoods", "High extraction efficiency", "Modern minimal design", "Full manufacturer warranty"]}
    />
  ),
});
