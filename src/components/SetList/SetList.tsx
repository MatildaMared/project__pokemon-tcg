"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import styled from "styled-components";

interface SetListProps {
  sets: PokemonSet[];
}

function SetList({ sets }: SetListProps) {
  return (
    <List>
      {sets.map((set) => (
        <Item key={set.id}>
          <Heading>{set.name}</Heading>
          <ImageWrapper>
            <Image
              fill={true}
              src={set.images.logo}
              alt={set.name + " logo"}
              style={{ objectFit: "contain" }}
              sizes="100%"
            />
          </ImageWrapper>
        </Item>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  list-style-type: none;
  gap: 1rem;
  padding: 0;
`;

const Item = styled.li`
  background-color: peachpuff;
  border-radius: 1rem;
  padding: 1rem;
`;

const Heading = styled.h3`
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
`;

export default SetList;
