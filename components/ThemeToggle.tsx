"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={`w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 bg-white/5 text-slate-300 transition ${className}`}
      >
        <Moon className="w-4 h-4" />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode (Brand Theme)" : "Switch to Cyber Dark Mode"}
      className={`relative w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
        isDark
          ? "bg-white/5 border border-white/10 text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/40"
          : "bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#FF6B00] hover:border-[#FF6B00]"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 animate-in spin-in-180 duration-300" />
      ) : (
        <Moon className="w-4 h-4 animate-in spin-in-180 duration-300" />
      )}
    </button>
  );
}
