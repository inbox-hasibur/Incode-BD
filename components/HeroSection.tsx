"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Layers,
  Cpu,
  Server,
  Palette,
  CreditCard,
  Radio,
  Activity,
  Zap,
  MapPin,
  Wifi,
  Battery,
  Search,
  Sliders,
  CheckCircle2
} from "lucide-react";
import HeroPillarsAccordion from "./HeroPillarsAccordion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center pt-28 sm:pt-32 pb-12 sm:pb-16 px-6 sm:px-10 lg:px-14 xl:px-20 overflow-hidden">
      
      {/* Subtle Ambient Radial Lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/4 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,240,0,0.08)_0%,transparent_70%)] -z-10" 
      />

      <div className="w-full max-w-7xl mx-auto pl-1 sm:pl-4 lg:pl-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: 100% Left-Aligned Headline, Services CTA     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            {/* Headline - Clean, Left-Aligned (Removed redundant top badge) */}
            <h1 className="font-raleway text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-white leading-[1.2] mb-4">
              Solving Business Problems with{" "}
              <span className="text-[#B4F000] drop-shadow-[0_0_24px_rgba(180,240,0,0.22)] block sm:inline">
                Hardware, Software, and Aesthetics.
              </span>
            </h1>

            {/* Subtitle - Left-Aligned */}
            <p className="font-raleway text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed font-normal mb-8">
              A dedicated engineering company building intelligent IoT ecosystems, customized enterprise software, and award-grade digital products.
            </p>

            {/* Dual CTAs - Left Aligned with Commercial Services Focus */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Link
                href="/services"
                id="hero-services-cta"
                className="btn-neon inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md"
              >
                <span>View Services</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/careers"
                id="hero-careers-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)] bg-white text-slate-800 border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 dark:bg-white/[0.04] dark:text-slate-200 dark:border-white/10 dark:hover:border-[#B4F000]/40 dark:hover:bg-white/[0.08] backdrop-blur-md"
              >
                <span>Explore Careers &amp; Apply</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4 Feature Highlights Strip - Updated with Core Offerings */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-2xl">
              
              {/* 1: IoT Products */}
              <div className="glass-panel p-3 rounded-2xl text-left border border-white/10 hover:border-[#B4F000]/30 transition group">
                <div className="flex items-center gap-2 mb-1">
                  <Cpu className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span className="text-xs font-bold font-mono text-white group-hover:text-[#B4F000] transition-colors">
                    IoT Products
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Pet &amp; Vehicle GPS
                </p>
              </div>

              {/* 2: SaaS & Cloud */}
              <div className="glass-panel p-3 rounded-2xl text-left border border-white/10 hover:border-[#B4F000]/30 transition group">
                <div className="flex items-center gap-2 mb-1">
                  <Server className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span className="text-xs font-bold font-mono text-white group-hover:text-[#B4F000] transition-colors">
                    SaaS &amp; Cloud
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  ERP, HRM, Custom Web
                </p>
              </div>

              {/* 3: Smart POS */}
              <div className="glass-panel p-3 rounded-2xl text-left border border-white/10 hover:border-[#B4F000]/30 transition group">
                <div className="flex items-center gap-2 mb-1">
                  <CreditCard className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span className="text-xs font-bold font-mono text-white group-hover:text-[#B4F000] transition-colors">
                    Smart POS
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Retail, Inventory, Billing
                </p>
              </div>

              {/* 4: Aesthetic UI/UX */}
              <div className="glass-panel p-3 rounded-2xl text-left border border-white/10 hover:border-[#B4F000]/30 transition group">
                <div className="flex items-center gap-2 mb-1">
                  <Palette className="w-3.5 h-3.5 text-[#B4F000]" />
                  <span className="text-xs font-bold font-mono text-white group-hover:text-[#B4F000] transition-colors">
                    Aesthetic UI/UX
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Glassmorphism, PLC-SCADA
                </p>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3 Vertical Interactive Expandable Bars      */}
          {/* Hardware, Software, Aesthetics (User Requested Feature)   */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center lg:justify-end mt-6 lg:mt-0 z-20 w-full">
            <HeroPillarsAccordion />
          </div>

        </div>
      </div>
    </section>
  );
}
