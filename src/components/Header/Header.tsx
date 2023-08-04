"use client";

import { useState } from "react";
import MobileMenu from "@/components/Menu/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-2 border-pink-400 w-full h-16">
      <div className="flex flex-row-reverse justify-between items-center w-full max-w-screen-xl h-full p-4 m-auto">
        <MobileMenu />
        <h1>Pokemon TCG</h1>
      </div>
    </header>
  );
}
