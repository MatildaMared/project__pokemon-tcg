"use client";
import { motion } from "framer-motion";
import MenuButton from "@/components/Menu/MenuButton";
import { useRef, useState } from "react";
import Menu from "@/components/Menu";
import useWindowSize from "@/hooks/useWindowSize";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { height } = useWindowSize();
  const containerRef = useRef(null);

  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.nav
      className="absolute top-0 left-0 bottom-0 w-64"
      variants={variants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="w-64 border-2 border-blue-600 bg-gray-100 absolute top-0 left-0 bottom-0"
        variants={variants}
      />
      <MenuButton
        onToggle={() => setIsOpen((isOpen) => !isOpen)}
        open={isOpen}
      />
      <Menu />
    </motion.nav>
  );
}
