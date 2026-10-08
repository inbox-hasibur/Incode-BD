"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import IncodeBotCompanion from "@/components/IncodeBotCompanion";
import Link from "next/link";
import {
  Compass,
  Radio,
  Cpu,
  Layers,
  ArrowUpRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Tv,
  Newspaper,
  Volume2,
  Eye,
  SlidersHorizontal,
  Flame,
  Zap,
  Navigation
} from "lucide-react";

export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const products = [
    {
      id: "pet-tracking",
      category: "telematics",
      badge: "Commercial Hardware // Live Telemetry",
      title: "Incode Track • Pet & Asset Telematics",
      summary:
        "Ultra-lightweight GPS, LoRa, and BLE telemetry device designed for pet tracking, livestock monitoring, and high-value mobile asset protection.",
      features: [
        "Real-time GPS coordinates with sub-3 meter accuracy",
        "Configurable safe geofence zones with instant mobile push alerts",
        "Ultra-low-power sleep modes providing up to 30 days battery endurance",
        "Durable, water-resistant IP67 casing engineered for active pets",
      ],
      specs: [
        { label: "Hardware", val: "ESP32-S3 + NEO-6M GPS" },
        { label: "Connectivity", val: "BLE 5.0 + 4G/LoRa" },
        { label: "Battery", val: "850mAh LiPo" },
      ],
      linkText: "Request Hardware Specs",
      linkHref: "mailto:contact@incodebd.com?subject=Incode Track Inquiry",
    },
    {
      id: "fleet-maps",
      category: "telematics",
      badge: "Enterprise Transportation Platform",
      title: "Incode Transit & Custom Fleet Maps",
      summary:
        "Comprehensive organizational transit management suite providing live vehicle tracking, passenger dashboards, route analytics, and custom-styled interactive maps.",
      features: [
        "Live interactive route visualization with sub-second websocket telemetry",
        "Driver schedule optimization and delay notification pipelines",
        "Vehicle health diagnostics and fuel consumption estimation",
        "Custom branded map interfaces tailored for universities & enterprises",
      ],
      specs: [
        { label: "Architecture", val: "Next.js + WebSockets" },
        { label: "Map Engine", val: "Vector Tiles / Custom Layers" },
        { label: "Latency", val: "< 100ms Broadcast" },
      ],
      linkText: "Schedule Fleet Demo",
      linkHref: "mailto:contact@incodebd.com?subject=Incode Transit Inquiry",
    },
    {
      id: "khobor-ai",
      category: "ai",
      badge: "AI Media & Aggregation Platform",
      title: "Khobor AI • News Aggregator & Neural Audio",
      summary:
        "Autonomous multi-source news aggregator featuring neural audible summaries, automated categorization, and live media IPTV streaming integration.",
      features: [
        "Automated continuous aggregation across major Bengali and global publications",
        "Neural text-to-speech audio engine generating 60-second news digests",
        "Integrated media player with live IPTV streaming and video news",
        "Zero-latency search and topic demixing powered by vector indexing",
      ],
      specs: [
        { label: "Live Demo", val: "kahfnews.vercel.app" },
        { label: "Audio Engine", val: "Neural TTS Pipeline" },
        { label: "Media Stream", val: "HLS / Live IPTV" },
      ],
      linkText: "Visit kahfnews.vercel.app",
      linkHref: "https://kahfnews.vercel.app",
      isExternal: true,
    },
    {
      id: "autonomous-drone",
      category: "hardware",
      badge: "R&D Prototype // Autonomous Aviation",
      title: "AeroAutonomous Drone Platform",
      summary:
        "AI-controlled aerial vehicle capable of executing complex multi-waypoint instructions and environmental inspection beyond the boundaries of standard manual radio control.",
      features: [
        "Onboard optical and spatial flow sensors for GPS-denied navigation",
        "Autonomous mission instruction parsing without human pilot intervention",
        "Edge computer vision pipeline for real-time obstacle detection",
        "Failsafe auto-return and telemetry logging via encrypted cloud relay",
      ],
      specs: [
        { label: "Flight Controller", val: "STM32 / PX4 Autopilot" },
        { label: "Edge Processor", val: "Raspberry Pi CM4 / NPU" },
        { label: "Range", val: "Autonomous Waypoint" },
      ],
      linkText: "Inquire R&D Specs",
      linkHref: "mailto:contact@incodebd.com?subject=AeroAutonomous Drone Inquiry",
    },
    {
      id: "smarthome-iot",
      category: "hardware",
      badge: "Custom PCB & Smart Environment",
      title: "Incode Touch & Ambient Sensor Suite",
      summary:
        "Custom-fabricated capacitive touch switchboards and multi-sensor modules for smart buildings, commercial offices, and educational laboratories.",
      features: [
        "Sleek tempered glass capacitive touch switches for lights and fans",
        "Modular ambient sensor nodes: smoke detection, obstacle sensors, and optical lux",
        "Local Wi-Fi and Bluetooth mesh control with zero internet fallback",
        "Custom PCB design and enclosure tailored to client interior aesthetics",
      ],
      specs: [
        { label: "PCB Type", val: "Double-Layer FR4 Glass" },
        { label: "Sensors", val: "Optical, Gas, Smoke, IR" },
        { label: "Control", val: "Capacitive Touch & Web" },
      ],
      linkText: "Custom Hardware Quote",
      linkHref: "mailto:contact@incodebd.com?subject=Custom PCB and IoT Quote",
    },
  ];

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.category === selectedFilter);

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <ThreeCanvas />
      <IncodeBotCompanion />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#B4F000] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>COMMERCIAL PRODUCTS &amp; HARDWARE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Products Built for the Real World
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            From connected GPS telematics and intelligent drones to autonomous news aggregators and custom PCB smart-home switchboards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Products" },
              { id: "telematics", label: "Telematics & Tracking" },
              { id: "hardware", label: "IoT Hardware & Drones" },
              { id: "ai", label: "AI & Media Platforms" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-4 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  selectedFilter === f.id
                    ? "btn-neon font-bold"
                    : "bg-white/[0.03] text-slate-300 hover:text-white border border-white/10"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="glass-card-interactive rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#B4F000] px-2.5 py-1 rounded bg-[#B4F000]/10 border border-[#B4F000]/20 block w-fit mb-4">
                  {prod.badge}
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {prod.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {prod.summary}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono uppercase text-slate-400 block tracking-wider">
                    Key Capabilities:
                  </span>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {prod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Specs */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 mb-6">
                  {prod.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="bg-white/[0.02] p-2 rounded-lg border border-white/5">
                      <p className="text-[9px] font-mono uppercase text-slate-400 truncate">
                        {spec.label}
                      </p>
                      <p className="text-xs font-mono font-bold text-slate-200 truncate mt-0.5">
                        {spec.val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <a
                  href={prod.linkHref}
                  target={prod.isExternal ? "_blank" : undefined}
                  rel={prod.isExternal ? "noopener noreferrer" : undefined}
                  className="btn-neon w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide"
                >
                  <span>{prod.linkText}</span>
                  {prod.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Hardware Consultation Banner */}
        <div className="glass-panel rounded-2xl p-8 border border-[#B4F000]/30 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">
            Need a Custom IoT Hardware or Enterprise Software Solution?
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
            We build proprietary hardware prototypes, custom firmware, and cloud backends tailored to your exact business specifications.
          </p>
          <a
            href="mailto:contact@incodebd.com?subject=Custom Engineering Inquiry"
            className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold"
          >
            <span>Discuss Your Product Requirements</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </main>

      <Footer />
    </div>
  );
}
