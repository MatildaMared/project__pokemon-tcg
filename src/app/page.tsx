import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Pokemon TCG</h1>
      <Link href={"/series"}>Series</Link>
    </main>
  );
}
