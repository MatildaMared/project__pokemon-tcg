import * as React from "react";
import { motion } from "framer-motion";

interface MenuButtonProps {
  onToggle: () => void;
  open: boolean;
}

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="inherit"
    strokeLinecap="round"
    {...props}
  />
);

export default function MenuButton({ onToggle, open }: MenuButtonProps) {
  return (
    <button
      onClick={onToggle}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 stroke-gray-400 hover:stroke-gray-600 ease-in duration-200"
    >
      <svg width="22" height="18" viewBox="0 0 22 18">
        <Path
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          animate={open ? "open" : "closed"}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={open ? "open" : "closed"}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
