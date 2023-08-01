"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import Link from "next/link";

interface SetListProps {
  sets: PokemonSet[];
}

export default function SetList({ sets }: SetListProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-4">
      {sets.map((set) => (
        <li key={set.id}>
          <Link
            href={`/sets/${set.id}`}
            className="flex flex-col items-center justify-center h-full bg-gray-50 p-4 rounded-2xl text-center gap-2 hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xs uppercase">{set.name}</h2>
            <div className="w-40 h-20 relative">
              <Image
                fill={true}
                src={set.images.logo}
                alt={set.name + " logo"}
                className={"object-contain"}
                sizes="100%"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
