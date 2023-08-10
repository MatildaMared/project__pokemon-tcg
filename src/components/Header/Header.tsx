"use client";

import React, { useId, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LINKS } from "@/links/links";
import { motion } from "framer-motion";

export default function Header() {
  const pathName = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const id = useId();

  console.log(pathName);
  return (
    <Container>
      <nav onMouseLeave={() => setHoveredLink(null)}>
        <List>
          {LINKS.map((link) => (
            <Item key={link.path}>
              <NavLink
                onMouseEnter={() => setHoveredLink(link.path)}
                href={link.path}
                className={pathName === link.path ? "current" : ""}
              >
                <Image src={link.icon} alt={link.name} width={48} height={48} />
                {link.name}
              </NavLink>
              {hoveredLink === link.path && (
                <Backdrop
                  layoutId={id}
                  initial={{
                    borderRadius: 8,
                  }}
                />
              )}
            </Item>
          ))}
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

const Item = styled.li`
  position: relative;
  margin-block: ${({ theme }) => theme.spacing.s};
  border: 1px solid hotpink;
`;

const NavLink = styled(Link)`
  position: relative;
  padding: 0;
  padding-right: ${({ theme }) => theme.spacing.m};
  padding-left: ${({ theme }) => theme.spacing.xs};
  border-bottom: 4px solid transparent;
  text-decoration: none;
  font-weight: 700;
  display: flex;
  align-items: center;
  transition: border-bottom 0.2s ease-in-out;
  z-index: 2;

  &:hover,
  &.current {
    border-bottom: 4px solid hotpink;
  }
`;

const Backdrop = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 16px;
  z-index: 1;
`;
