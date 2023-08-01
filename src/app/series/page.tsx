import Link from "next/link";
import { series } from "@/types/Series";

export default async function SetsPage() {
  return (
    <main>
      <h1 className="text-xxl">Pokemon TCG Sets</h1>
      <Link href={"/"}>Home</Link>
      <div className={"bg-slate-100 rounded-xl dark:bg-slate-800"}>
        <p>Hej</p>
        <p>Hej</p>
        <p>Hej</p>
        <p>Hej</p>
      </div>
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
