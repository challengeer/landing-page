'use client';

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/useMounted";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      ) : (
        <MoonIcon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      )}
    </button>
  );
} 