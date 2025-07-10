"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/contexts/Theme";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="dark:bg-gray-900 bg-white min-h-screen p-[12px_24px]">
        <ThemeToggle />
      </div>
    </div>
  );
}
