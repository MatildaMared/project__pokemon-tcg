import Link from "next/link";
import { series } from "@/types/Series";

export default async function SetsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Pokemon TCG Sets</h1>
      <Link href={"/"}>Home</Link>
      <ul className="flex flex-col">
        {series.map((series) => (
          <Link key={series} href={`/series/${series}`}>
            {series}
          </Link>
        ))}
      </ul>
    </main>
  );
}
