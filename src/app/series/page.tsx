import Link from "next/link";
import { series } from "@/types/Series";

export default async function SetsPage() {
  return (
    <main>
      <h1 className="text-2xl">Pokemon TCG Sets</h1>
      <ul>
        {series.map((series) => (
          <li key={series.slug}>
            <Link href={`/series/${series.slug}`}>{series.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
