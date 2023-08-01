import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

export default function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return <div className="w-full max-w-screen-xl p-4 m-auto">{children}</div>;
}
