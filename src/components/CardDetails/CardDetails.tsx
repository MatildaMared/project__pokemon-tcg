"use client";
import { styled } from "styled-components";
import { PokemonCard } from "@/types/PokemonCard";
import Image from "next/image";

interface CardDetailsProps {
  card: PokemonCard;
}

export default function CardDetails({ card }: CardDetailsProps) {
  return (
    <Container>
      <div className="w-auto h-3/6 relative">
        <ImageWrapper>
          <StyledImage
            fill={true}
            src={card.images.large}
            alt={card.name}
            className={"object-contain"}
            width={0}
            height={0}
            sizes="100vw"
          />
        </ImageWrapper>
      </div>
      <h2>{card.name}</h2>
      <p>Set: {card.set.name}</p>
      <p>hp: {card.hp}</p>
      <h2>Types</h2>
      <ul>
        {card.types.map((type) => (
          <li key={type}>{type}</li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 275px;
  height: 400px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 250px;
  height: auto;
  object-fit: contain;
`;
