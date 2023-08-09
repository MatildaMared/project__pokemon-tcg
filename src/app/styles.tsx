"use client";
import styled from "styled-components";

export const Container = styled.div`
  padding-top: ${({ theme }) => theme.spacing.l};
  padding-inline: ${({ theme }) => theme.spacing.s};
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.l};
`;

export const MainContent = styled.main`
  background: ${({ theme }) => theme.colors.backgroundLighter};
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  padding: ${({ theme }) => theme.spacing.l};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: ${({ theme }) => theme.shadows.l};
`;
