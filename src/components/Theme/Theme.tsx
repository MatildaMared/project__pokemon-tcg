"use client";

import React from "react";
import { ThemeProvider } from "styled-components";
import lightTheme from "@/styles/lightTheme";

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}
