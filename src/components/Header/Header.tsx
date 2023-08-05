"use client";

import { useState } from "react";
import MobileMenu from "@/components/Menu/MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full h-16 bg-gray-100">
      <div className="flex flex-row-reverse lg:flex-row justify-between items-center w-full h-full p-4 m-auto">
        <MobileMenu />
        <h1>Pokemon TCG</h1>
      </div>
    </header>
  );
}
