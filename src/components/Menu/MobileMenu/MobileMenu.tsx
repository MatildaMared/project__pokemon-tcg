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
      clipPath: `circle(${height * 2 + 200}px at 40px 32px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(24px at 40px 32px)",
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
      className="fixed top-0 left-0 bottom-0 w-72 z-10"
      variants={variants}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className="w-72 bg-gray-100 absolute top-0 left-0 bottom-0"
        variants={variants}
      />
      <MenuButton
        onToggle={() => setIsOpen((isOpen) => !isOpen)}
        open={isOpen}
      />
      <div className="absolute top-16 left-0 right-0">
        <Menu />
      </div>
    </motion.nav>
  );
}
