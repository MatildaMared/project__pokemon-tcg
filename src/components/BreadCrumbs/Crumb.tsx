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
      className={`[&:not(:first-child)]:before:content-['/'] [&:not(:first-child)]:before:mr-1 [&:not(:first-child)]:before:font-normal text-gray-400 ml-1 hover:underline [&:not(:first-child)]:before:hover:no-underline ${
        isCurrentPage ? "font-bold" : ""
      }`}
    >
      <Link href={href} aria-current={isCurrentPage ? "page" : undefined}>
        {children}
      </Link>
    </li>
  );
}
