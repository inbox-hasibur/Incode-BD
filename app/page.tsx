"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import IncodeBotCompanion from "@/components/IncodeBotCompanion";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import LabSection from "@/components/LabSection";
import LocationMapSection from "@/components/LocationMapSection";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Mail,
  Cpu,
  Layers,
  Radio,
  ExternalLink,
  CheckCircle2,
  Tv,
  Globe
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black overflow-x-hidden">
      
      {/* Interactive 3D WebGL Particle & Wireframe Canvas */}
      <ThreeCanvas />

      {/* Autonomous Delivery Bot companion traveling across the website */}
      <IncodeBotCompanion />

      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar />

      <main className="w-full flex-grow">
        {/* Hero Section with Ambient Hardware/Software Showcase Video */}
        <HeroSection />

        {/* Core Engineering Pillars */}
        <PillarsSection />

        {/* Flagship Products Highlight Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090C12]">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-1">
                  Proprietary Tech
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Featured Products &amp; IoT Platforms
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B4F000] hover:underline"
              >
                <span>View Full Product Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Product 1: Incode Track */}
              <div className="glass-card-interactive rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#B4F000] px-2 py-0.5 rounded bg-[#B4F000]/10 border border-[#B4F000]/20">
                      IoT Telematics
                    </span>
                    <Radio className="w-5 h-5 text-[#B4F000]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Incode Track
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Ultra-compact GPS &amp; LoRa telemetry tracker for domestic pets, livestock, and mobile assets with geofence alerts.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#B4F000] hover:underline pt-3 border-t border-white/5"
                >
                  <span>Explore Hardware Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Product 2: Khobor AI */}
              <div className="glass-card-interactive rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#B4F000] px-2 py-0.5 rounded bg-[#B4F000]/10 border border-[#B4F000]/20">
                      AI &amp; Media Platform
                    </span>
                    <Tv className="w-5 h-5 text-[#B4F000]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Khobor AI
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Autonomous multi-source news aggregator with audible neural text-to-speech digests and live IPTV media streams.
                  </p>
                </div>
                <a
                  href="https://kahfnews.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#B4F000] hover:underline pt-3 border-t border-white/5"
                >
                  <span>Live at kahfnews.vercel.app</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Product 3: Fleet Transit Maps */}
              <div className="glass-card-interactive rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase text-[#B4F000] px-2 py-0.5 rounded bg-[#B4F000]/10 border border-[#B4F000]/20">
                      Fleet Operations
                    </span>
                    <Globe className="w-5 h-5 text-[#B4F000]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Transit &amp; Custom Fleet Maps
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Organizational vehicle tracking with custom map layers, passenger dashboards, and real-time transit telemetry feeds.
                  </p>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#B4F000] hover:underline pt-3 border-t border-white/5"
                >
                  <span>View Transit Engine</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </section>

        {/* Physical Prototyping Lab & Telemetry Console */}
        <LabSection />

        {/* Location & Bordered Google Map Frame */}
        <LocationMapSection />

        {/* High-Conversion Footer CTA Banner */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-gradient-to-b from-[#0A0D14] via-[#0D121D] to-[#0A0D14]">
          <div className="max-w-4xl mx-auto rounded-2xl p-8 sm:p-12 glass-panel border border-[#B4F000]/30 text-center relative overflow-hidden shadow-2xl">
            
            <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-2">
              Incode BD Engineering Workspace
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Building Production Technology from Dhaka
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Explore our 3-4 Month Internship for aspiring engineers, or partner with our software company to engineer your company&apos;s custom software and IoT hardware.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/careers"
                className="btn-neon w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-bold"
              >
                <span>Join Engineering Fellowship</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-[#B4F000]/40 transition"
              >
                <Layers className="w-4 h-4 text-[#B4F000]" />
                <span>Our Commercial Services</span>
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
