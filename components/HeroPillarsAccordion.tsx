"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Cpu, Server, Palette, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function HeroPillarsAccordion() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const pillars = [
    {
      id: "hardware",
      title: "Hardware",
      verticalTitle: "HARDWARE",
      tagline: "Embedded IoT & Edge Systems",
      description: "Custom circuit design, ESP32/STM32 firmware, and connected IoT telemetry.",
      image: "/pillar-hardware.jpg",
      href: "/products",
      cta: "Explore Hardware",
      accentColor: "#B4F000",
      accentLight: "#FF6B00",
      icon: Cpu,
    },
    {
      id: "software",
      title: "Software",
      verticalTitle: "SOFTWARE",
      tagline: "Cloud Architecture & SaaS",
      description: "Mission-critical ERPs, high-throughput cloud backends, and automated platforms.",
      image: "/pillar-software.jpg",
      href: "/services",
      cta: "Explore Software",
      accentColor: "#10B981",
      accentLight: "#0284C7",
      icon: Server,
    },
    {
      id: "aesthetics",
      title: "Aesthetics",
      verticalTitle: "AESTHETICS",
      tagline: "Modern UI/UX & Brand Craft",
      description: "Glassmorphic interfaces, Figma design systems, and award-grade digital experiences.",
      image: "/pillar-aesthetics.jpg",
      href: "/about",
      cta: "Explore Aesthetics",
      accentColor: "#A855F7",
      accentLight: "#8B5CF6",
      icon: Palette,
    },
  ];

  return (
    <div className="w-full select-none">
      {/* 3 Vertical Bars Container: 40-50% subtle transparent borders */}
      <div 
        className={`relative flex flex-row gap-2.5 sm:gap-3.5 h-[450px] sm:h-[490px] w-full p-2.5 sm:p-3 rounded-3xl backdrop-blur-2xl transition-all duration-500 ease-in-out ${
          isLight
            ? "bg-white/60 border border-slate-300/40 shadow-[0_16px_40px_-15px_rgba(15,23,42,0.08)]"
            : "bg-[#0A0E17]/80 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
        }`}
      >
        {pillars.map((pillar, idx) => {
          const isActive = activeIndex === idx;
          const Icon = pillar.icon;

          return (
            <div
              key={pillar.id}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-between ${
                isActive
                  ? "flex-[3.2] shadow-2xl ring-1 ring-black/10 dark:ring-white/20"
                  : "flex-1 opacity-90 hover:opacity-100 hover:flex-[1.3]"
              } ${
                isLight
                  ? "border border-slate-300/45 bg-white/70"
                  : "border border-white/10 bg-[#0F1422]"
              }`}
            >
              {/* Background Photography */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className={`object-cover transition-transform duration-700 ease-in-out ${
                    isActive ? "scale-105" : "scale-100 grayscale-[15%]"
                  }`}
                  priority
                />
                
                {/* 
                  THEME-SYNCED GRADIENT OVERLAY LAYER:
                  - In Light Mode: Crisp LIGHT frosted gradient so dark text is 100% visible!
                  - In Dark Mode: Deep DARK gradient so glowing white/lime text pops!
                */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isLight
                      ? isActive
                        ? "bg-gradient-to-t from-white/95 via-white/80 to-white/40"
                        : "bg-gradient-to-t from-white/90 via-white/70 to-white/50"
                      : isActive
                        ? "bg-gradient-to-t from-[#06080F]/95 via-[#06080F]/70 to-[#06080F]/30"
                        : "bg-gradient-to-t from-[#06080F]/90 via-[#06080F]/80 to-[#06080F]/55"
                  }`}
                />

                {/* Ambient Soft Glow in Dark Mode */}
                {!isLight && (
                  <div 
                    className={`absolute -bottom-10 -right-10 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
                      isActive ? "opacity-60" : "opacity-0"
                    }`}
                    style={{ backgroundColor: pillar.accentColor }}
                  />
                )}
              </div>

              {/* TOP HEADER: FIXED SQUARE ICON BOX ONLY (No resizing, No text beside it) */}
              <div className="relative z-10 p-3 sm:p-4 flex items-center justify-start">
                <div 
                  className={`w-11 h-11 min-w-[44px] min-h-[44px] max-w-[44px] max-h-[44px] shrink-0 aspect-square rounded-xl flex items-center justify-center backdrop-blur-md transition-all duration-300 ease-in-out ${
                    isLight
                      ? isActive
                        ? "bg-white text-slate-900 border border-slate-300/50 shadow-md"
                        : "bg-white/80 text-slate-700 border border-slate-300/40"
                      : isActive
                        ? "bg-black/70 text-[#B4F000] border border-[#B4F000]/40 shadow-[0_0_15px_rgba(180,240,0,0.3)]"
                        : "bg-black/50 text-white/80 border border-white/10"
                  }`}
                >
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
              </div>

              {/* MIDDLE AREA: VERTICAL TEXT (Especially visible when collapsed) */}
              <div 
                className={`relative z-10 flex-1 flex items-center justify-center transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-0 pointer-events-none h-0 max-h-0" : "opacity-100 py-4"
                }`}
              >
                <span 
                  className={`[writing-mode:vertical-rl] rotate-180 font-raleway font-black tracking-[0.25em] uppercase text-sm sm:text-base select-none transition-colors duration-300 ${
                    isLight ? "text-slate-800" : "text-white/90"
                  }`}
                >
                  {pillar.verticalTitle}
                </span>
              </div>

              {/* BOTTOM CONTENT: Expandable Details (Only when Active) */}
              <div 
                className={`relative z-10 p-3.5 sm:p-5 flex flex-col justify-end transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-100 max-h-72" : "opacity-0 max-h-12 pointer-events-none"
                }`}
              >
                {isActive && (
                  <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <h3 
                      className={`font-raleway text-xl sm:text-2xl font-black tracking-tight ${
                        isLight ? "text-slate-950" : "text-white"
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    <p 
                      className={`text-xs sm:text-sm font-semibold line-clamp-1 ${
                        isLight ? "text-slate-700" : "text-slate-200"
                      }`}
                    >
                      {pillar.tagline}
                    </p>

                    <p 
                      className={`text-[11px] sm:text-xs leading-relaxed line-clamp-2 ${
                        isLight ? "text-slate-600" : "text-slate-300"
                      }`}
                    >
                      {pillar.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={pillar.href}
                        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ease-in-out ${
                          isLight
                            ? "bg-[#18181B] text-white hover:bg-black shadow-[0_10px_25px_-4px_rgba(0,0,0,0.40),0_4px_10px_-2px_rgba(0,0,0,0.20)] hover:shadow-[0_14px_30px_-4px_rgba(0,0,0,0.50)]"
                            : "bg-[#B4F000] text-[#0A0D14] hover:bg-[#C2F826] shadow-[0_10px_25px_-4px_rgba(180,240,0,0.45),0_4px_10px_-2px_rgba(180,240,0,0.25)]"
                        }`}
                      >
                        <span className={`font-bold tracking-wide ${isLight ? "text-white" : "text-[#0A0D14]"}`}>{pillar.cta}</span>
                        <ArrowUpRight className={`w-3.5 h-3.5 stroke-[2.5] ${isLight ? "text-white" : "text-[#0A0D14]"}`} />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Collapsed indicator dot */}
                {!isActive && (
                  <div className="flex items-center justify-center pb-2">
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${
                        isLight ? "bg-slate-400" : "bg-white/40"
                      }`} 
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
