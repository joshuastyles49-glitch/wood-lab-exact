import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/doors/sliding-doors")({
  head: () => ({
    meta: [
      { title: "Sliding Doors — Wood Lab Islamabad" },
      { name: "description", content: "Space-saving sliding doors with smooth hardware and premium panels." },
    ],
  }),
  component: () => (
    <CategoryPage
      eyebrow="Doors"
      title="Sliding Doors"
      subtitle="Effortless sliding systems that reclaim space and add architectural drama."
      intro="From full-height room dividers to concealed cavity systems, our sliding doors glide effortlessly on premium hardware and complement any interior."
      highlights={["Smooth top-hung systems", "Cavity & wall-mounted options", "Lacquered, veneered & glass panels", "Soft-close mechanisms"]}
    />
  ),
});
