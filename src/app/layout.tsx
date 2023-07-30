import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import StyledComponentsRegistry from "@/utils/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokémon TCG",
  description: "Browse Pokémon TCG cards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
