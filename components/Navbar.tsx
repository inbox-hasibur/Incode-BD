"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? isLight
            ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E2D9CC]"
            : "bg-[#0A0D14]/90 backdrop-blur-md border-b border-white/[0.08]"
          : isLight
            ? "bg-[#FAF7F2]/80 backdrop-blur-sm border-b border-[#E2D9CC]/60"
            : "bg-[#0A0D14]/60 backdrop-blur-sm border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Clean Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-[#0F1420] border border-white/10 p-1.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src={isLight ? "/logo-orange.png?v=2" : "/logo.png"}
                alt="Incode BD"
                width={36}
                height={36}
                className={`w-full h-full object-contain filter ${
                  isLight ? "" : "drop-shadow-[0_0_8px_rgba(180,240,0,0.4)]"
                }`}
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              Incode <span className={isLight ? "text-[#FF6B00]" : "text-[#B4F000]"}>BD</span>
            </span>
          </Link>

          {/* Desktop Center Navigation Pages */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? isLight
                        ? "text-[#FF6B00] bg-[#FF6B00]/10"
                        : "text-[#B4F000] bg-[#B4F000]/10"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/careers"
              className="btn-neon inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide"
            >
              <span>Join Team</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isLight ? "text-[#FF6B00]" : "text-[#B4F000]"}`} />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 ${
            isLight
              ? "bg-[#FAF7F2] border-[#E2D9CC]"
              : "bg-[#0A0D14]/98 border-white/10"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? isLight
                        ? "text-[#FF6B00] bg-[#FF6B00]/10"
                        : "text-[#B4F000] bg-[#B4F000]/10"
                      : "text-slate-200 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-neon w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold"
            >
              <span>Join Team / Careers</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
