"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <NavLink href="/" className={pathName === "/" ? "current" : ""}>
              <Image
                src="/icons/pokeball-100.png"
                alt="Pokemon Logo"
                width={48}
                height={48}
              />
              Home
            </NavLink>
          </Item>
          <Item>
            <NavLink href="/series">
              <Image
                src="/icons/bulbasaur-100.png"
                alt="Pokemon Logo"
                width={48}
                height={48}
              />
              Cards
            </NavLink>
          </Item>{" "}
          <Item>
            <NavLink href="/pokemon">
              <Image
                src="/icons/charmander-100.png"
                alt="Pokemon Logo"
                width={48}
                height={48}
              />
              Pokemon
            </NavLink>
          </Item>
        </List>
      </nav>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  background-color: ${({ theme }) => theme.colors.backgroundLighter};
  padding-inline: ${({ theme }) => theme.spacing.l};
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: ${({ theme }) => theme.shadows.l};
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.s};
`;

const Item = styled.li``;

const NavLink = styled(Link)`
  padding: 0;
  padding-right: ${({ theme }) => theme.spacing.m};
  padding-left: ${({ theme }) => theme.spacing.xs};
  gap: ${({ theme }) => theme.spacing.s};
  padding-block: ${({ theme }) => theme.spacing.xs};
  border-bottom: 4px solid transparent;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: border-bottom 0.2s ease-in-out;

  &:hover,
  &.current {
    border-bottom: 4px solid hotpink;
  }
`;
