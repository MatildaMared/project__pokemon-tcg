import Link from "next/link";

export default function Menu() {
  return (
    <div className="p-4 w-full h-full lg:pt-0">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/series">Series</Link>
        </li>
      </ul>
    </div>
  );
}
