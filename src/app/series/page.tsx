import Link from "next/link";
import { series } from "@/types/Series";

export default async function SetsPage() {
  return (
    <main>
      <h1>Pokemon TCG Sets</h1>
      <Link href={"/"}>Home</Link>
      <ul>
        {series.map((series) => (
          <Link key={series} href={`/series/${series}`}>
            {series}
          </Link>
        ))}
      </ul>
    </main>
  );
}
