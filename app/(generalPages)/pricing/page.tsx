import type { Metadata } from "next";

// * Usamos metada para SEO
export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Something about page",
  keywords: ["pricing page", "next.js", "some keywords"],
};

export default function PricingPage() {
  return <div className="text-5xl">PricingPage</div>;
}
