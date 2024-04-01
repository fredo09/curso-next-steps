
import type { Metadata } from "next";

// * Usamos metada para SEO
export const metadata: Metadata = {
  title: "About Page",
  description: "Something about page",
  keywords: ['about page', 'next.js', 'some keywords']
};

export default function AboutPage() {
  return (
    <div className="text-5xl">About page</div>
  )
}
