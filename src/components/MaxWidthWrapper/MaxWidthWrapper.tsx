import React from "react";

interface MaxWidthWrapperProps {
  children: React.ReactNode;
}

export default function MaxWidthWrapper({ children }: MaxWidthWrapperProps) {
  return (
    <div className="w-full h-full max-w-screen-xl m-auto p-4">{children}</div>
  );
}
