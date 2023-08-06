import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/registry/StyledComponentsRegistry";
import { Container } from "./styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokémon TCG",
  description: "Browse Pokémon TCG cards",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Container>
            <Header />
            {children}
          </Container>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
