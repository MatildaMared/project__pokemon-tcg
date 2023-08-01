"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import Link from "next/link";

interface SetListProps {
  sets: PokemonSet[];
}

function SetList({ sets }: SetListProps) {
  return (
    <ul>
      {sets.map((set) => (
        <li key={set.id}>
          <Link href={`/sets/${set.id}`}>
            <h2>{set.name}</h2>
            <div className="w-40 h-20 relative">
              <Image
                fill={true}
                src={set.images.logo}
                alt={set.name + " logo"}
                style={{ objectFit: "contain" }}
                sizes="100%"
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SetList;
