import type { Metadata } from "next";

// * Usamos metada para SEO
export const metadata: Metadata = {
  title: "contact Page",
  description: "Something about page",
  keywords: ["contact page", "next.js", "some keywords"],
};

export default function ContactPage() {
  return <div className="text-5xl">ContactPage</div>;
}
