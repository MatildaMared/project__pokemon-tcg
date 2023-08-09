import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/registry/StyledComponentsRegistry";
import { Container, MainContent } from "./styles";
import Theme from "@/components/Theme";

const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

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
      <body className={nunito.className}>
        <StyledComponentsRegistry>
          <Theme>
            <Container>
              <Header />
              <MainContent>{children}</MainContent>
            </Container>
          </Theme>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
