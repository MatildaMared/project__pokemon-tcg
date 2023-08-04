import Link from "next/link";
import { series } from "@/types/Series";

export default async function SetsPage() {
  return (
    <main>
      <h1 className="text-2xl">Pokemon TCG Sets</h1>
      <Link href={"/"}>Home</Link>
      <ul>
        {series.map((series) => (
          <Link key={series.slug} href={`/series/${series.slug}`}>
            {series.name}
          </Link>
        ))}
      </ul>
    </main>
  );
}
