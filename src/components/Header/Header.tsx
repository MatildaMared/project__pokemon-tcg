"use client";

import { useState } from "react";
import MenuButton from "@/components/Menu/MenuButton/MenuButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="border-2 border-pink-400 w-full h-16">
      <div className="flex flex-row justify-between items-center w-full max-w-screen-xl h-full p-4 m-auto">
        <MenuButton onToggle={() => setMenuOpen(!menuOpen)} open={menuOpen} />
        <h1>Pokemon TCG</h1>
      </div>
    </header>
  );
}
