"use client";
import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
