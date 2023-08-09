"use client";

import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <Image
              src="/icons/pokeball-100.png"
              alt="Pokemon Logo"
              width={48}
              height={48}
            />
            <Link href="/">Home</Link>
          </Item>
          <Item>
            <Image
              src="/icons/pokeball-100.png"
              alt="Pokemon Logo"
              width={48}
              height={48}
            />
            <Link href="/series">Cards</Link>
          </Item>{" "}
          <Item>
            <Image
              src="/icons/pokeball-100.png"
              alt="Pokemon Logo"
              width={48}
              height={48}
            />
            <Link href="/pokemon">Pokemon</Link>
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
  padding: ${({ theme }) => theme.spacing.s} ${({ theme }) => theme.spacing.m};
  margin: ${({ theme }) => theme.spacing.l} 0 ${({ theme }) => theme.spacing.l}
    0;
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
`;

const Item = styled.li`
  padding: 0;
  padding-right: ${({ theme }) => theme.spacing.s};
  padding-left: ${({ theme }) => theme.spacing.xs};
  border: 1px solid hotpink;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
`;
