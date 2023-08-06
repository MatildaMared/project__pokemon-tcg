import React from "react";

interface BreadCrumbsProps {
  children: React.ReactNode;
}

export default function BreadCrumbs({ children }: BreadCrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="p-0 m-0 flex items-center text-xs tracking-wide mb-2">
        {children}
      </ol>
    </nav>
  );
}
