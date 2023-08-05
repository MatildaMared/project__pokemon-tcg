import React from "react";
import Link from "next/link";

interface CrumbProps {
  href: string;
  isCurrentPage?: boolean;
  children: React.ReactNode | string;
}

export default function Crumb({ href, isCurrentPage, children }: CrumbProps) {
  return (
    <li
      className={`[&:not(:first-child)]:before:content-['/'] text-gray-400 ml-1 ${
        isCurrentPage ? "border-b-2" : ""
      }`}
    >
      <Link href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </Link>
    </li>
  );
}
