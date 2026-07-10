import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/kitchens/modular-kitchen")({
  head: () => ({
    meta: [
      { title: "Modular Kitchens — Wood Lab Islamabad" },
      { name: "description", content: "Bespoke modular kitchens with premium finishes, smart storage and soft-close hardware." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Kitchens"
      title="Modular Kitchen"
      subtitle="Precision-engineered modular kitchens tailored to your space and lifestyle."
      intro="Our modular kitchens combine bespoke cabinetry, imported hardware and premium worktops to deliver a workspace that is beautiful, efficient and built to last."
      highlights={["Handleless modular design", "Soft-close hinges & drawer runners", "Quartz & marble countertops", "Integrated lighting & appliances"]}
    />
  ),
});
