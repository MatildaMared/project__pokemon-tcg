"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import styled from "styled-components";

interface SetListProps {
  sets: PokemonSet[];
}

function SetList({ sets }: SetListProps) {
  return (
    <ul>
      {sets.map((set) => (
        <li key={set.id}>
          <h2>{set.name}</h2>
          <ImageWrapper>
            <Image
              layout={"responsive"}
              width={200}
              height={150}
              src={set.images.logo}
              alt={set.name + " logo"}
            />
          </ImageWrapper>
        </li>
      ))}
    </ul>
  );
}

const ImageWrapper = styled.div`
  width: 150px;
  height: auto;
`;

export default SetList;
