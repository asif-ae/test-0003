'use client';

import { ThemeProvider } from "@/contexts/Theme";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
