"use client";
import { PokemonCard } from "@/types/PokemonCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface CardListProps {
  cards: PokemonCard[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <div
      className={
        "grid grid-cols-[repeat(auto-fill,minmax(175px,1fr))] gap-4 place-items-center"
      }
    >
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={"w-full"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.02 }}
        >
          <Link href={`/cards/${card.id}`}>
            <Image
              src={card.images.small}
              alt={card.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
