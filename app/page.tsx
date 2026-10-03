"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowUpRight, 
  MapPin, 
  Globe, 
  Sparkles, 
  Cpu, 
  Code2, 
  Palette,
  ExternalLink 
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#090A0F] text-slate-100 px-4 sm:px-6 md:px-8 py-6 sm:py-8 overflow-hidden cyber-grid selection:bg-[#C6F135] selection:text-black">
      {/* Dynamic Ambient Glow Backdrops */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] md:w-[850px] h-[340px] sm:h-[600px] md:h-[850px] rounded-full bg-gradient-to-b from-[#C6F135]/15 via-[#8EA71A]/10 to-transparent blur-[120px] -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] rounded-full bg-[#C6F135]/5 blur-[100px] -z-10" 
      />

      {/* Top Bar / Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between z-10">
        {/* Domain Badge */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <Globe className="w-3.5 h-3.5 text-[#C6F135]" />
          <span className="text-xs font-mono tracking-wider text-slate-300">
            incodebd.com
          </span>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6F135] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C6F135]"></span>
          </span>
          <span className="text-xs font-medium text-slate-300 hidden sm:inline">
            Status: Initializing Core
          </span>
          <span className="text-xs font-medium text-slate-300 sm:hidden">
            Active
          </span>
        </div>
      </header>

      {/* Main Hero Container (Centered) */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center my-auto py-8 sm:py-12 z-10">
        
        {/* Central Logo Container with ambient neon flare */}
        <div className="relative group mb-8">
          <div className="absolute -inset-4 rounded-3xl bg-[#C6F135]/20 blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
          <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-[#0E1218]/90 border border-white/10 shadow-2xl p-4 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/logo.png"
              alt="Incode BD Mark"
              width={96}
              height={96}
              priority
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(198,241,53,0.35)]"
            />
          </div>
        </div>

        {/* Sub-badge: Launch Announcement */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6F135]/[0.08] border border-[#C6F135]/30 text-[#C6F135] text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-[0_0_20px_rgba(198,241,53,0.15)] animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
          <span>Official Launching This October</span>
          <span className="text-white/40">|</span>
          <span className="inline-flex items-center gap-1 text-slate-200">
            <MapPin className="w-3 h-3 text-[#C6F135]" /> College Gate, Dhaka
          </span>
        </div>

        {/* Brand Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-white">Incode</span>{" "}
          <span className="text-[#C6F135] drop-shadow-[0_0_25px_rgba(198,241,53,0.4)]">
            BD
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl md:text-3xl font-light text-slate-200 max-w-2xl leading-relaxed sm:leading-snug mb-8">
          &ldquo;Solving Business Problems with{" "}
          <span className="font-semibold text-white">Hardware</span>,{" "}
          <span className="font-semibold text-white">Software</span>, and{" "}
          <span className="font-semibold text-[#C6F135]">Aesthetics</span>.&rdquo;
        </p>

        {/* 3 Core Pillars Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-slate-300">
            <Cpu className="w-3.5 h-3.5 text-[#C6F135]" />
            <span>Hardware Engineering</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-[#C6F135]" />
            <span>Software Architecture</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-xs sm:text-sm text-slate-300">
            <Palette className="w-3.5 h-3.5 text-[#C6F135]" />
            <span>Premium Aesthetics</span>
          </div>
        </div>

        {/* Primary Call To Action (Neon Button) */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md">
          <a
            href={process.env.NEXT_PUBLIC_INTERNSHIP_FORM_URL || "https://forms.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            id="apply-internship-cta"
            className="btn-neon w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base sm:text-lg font-bold tracking-wide cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C6F135] focus:ring-offset-2 focus:ring-offset-[#090A0F]"
          >
            <span>Apply for Practicum / Internship</span>
            <ArrowUpRight className="w-5 h-5 text-[#090A0F] stroke-[2.5]" />
          </a>

          <p className="text-xs text-slate-400 font-mono tracking-wide mt-1">
            ⚡ Open to engineers, developers &amp; creative minds in Bangladesh
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-xs text-slate-400 z-10">
        <p>© 2026 Incode BD. All rights reserved.</p>

        {/* Quick Social & Contact links */}
        <div className="flex items-center gap-6 text-slate-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C6F135] transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C6F135] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@incodebd.com"
            className="hover:text-[#C6F135] transition-colors"
          >
            contact@incodebd.com
          </a>
        </div>
      </footer>
    </main>
  );
}
