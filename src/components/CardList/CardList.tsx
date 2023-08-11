"use client";
import { PokemonCard } from "@/types/PokemonCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { styled } from "styled-components";

interface CardListProps {
  cards: PokemonCard[];
}

export default function CardList({ cards }: CardListProps) {
  return (
    <Container>
      {cards.map((card) => (
        <Card
          key={card.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.02 }}
        >
          <Link href={`/cards/${card.id}`}>
            <StyledImage
              src={card.images.small}
              alt={card.name}
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
        </Card>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  gap: ${({ theme }) => theme.spacing.m};
  place-items: center;
`;

const Card = styled(motion.div)`
  width: 100%;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;
