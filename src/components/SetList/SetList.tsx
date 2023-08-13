"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

interface SetListProps {
  sets: PokemonSet[];
}

export default function SetList({ sets }: SetListProps) {
  return (
    <List>
      {sets.map((set) => (
        <Set key={set.id}>
          <StyledLink href={`/sets/${set.id}`}>
            <SetTitle>{set.name}</SetTitle>
            <StyledImage
              src={set.images.logo}
              alt={set.name}
              width={0}
              height={0}
              sizes="100vw"
            />
          </StyledLink>
        </Set>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.m};
  list-style: none;
  padding: 0;
`;

const Set = styled.li`
  height: fit-content;
  width: fit-content;
  border: 1px solid hotpink;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
`;

const StyledImage = styled(Image)`
  width: 100%;
  max-width: 250px;
  height: auto;
  max-height: 100px;
  object-fit: contain;
`;

const SetTitle = styled.h2``;
