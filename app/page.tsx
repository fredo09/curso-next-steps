import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-5xl">Hello Steps!! 🚀 </h1>

      <Link href={"/about"}>Go to About Page</Link>
    </main>
  );
}
