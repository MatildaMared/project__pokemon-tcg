import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Header from "@/components/Header";

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
        <Header />
        <MaxWidthWrapper>{children}</MaxWidthWrapper>
      </body>
    </html>
  );
}
