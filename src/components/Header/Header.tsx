"use client";

import { useState } from "react";
import styled from "styled-components";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
      <HeaderContent>
        <h1>Pokemon TCG</h1>
      </HeaderContent>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid hotpink;
  padding-block: var(--space-l);
`;

const HeaderContent = styled.header``;
