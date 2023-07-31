"use client";
import { PokemonSet } from "@/types/PokemonSet";
import Image from "next/image";
import styled from "styled-components";

interface SetListProps {
  sets: PokemonSet[];
}

function SetList({ sets }: SetListProps) {
  console.log(sets);
  return (
    <List>
      {sets.map((set) => (
        <Item key={set.id}>
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 1px solid hotpink;
`;

const Item = styled.li`
  border: 1px solid peachpuff;
  padding: 1rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 100px;
`;

export default SetList;
