"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
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
  Navigation,
  Globe,
  Droplets,
  Plane,
  CreditCard,
  Server
} from "lucide-react";

export default function ProductsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const products = [
    // ==========================================
    // [IoT Products Category]
    // ==========================================
    {
      id: "catfinder-pet-tracker",
      category: "iot",
      badge: "IoT Products",
      title: "Catfinder • GPS Pet Tracker",
      summary:
        "Keep your furry friend safe, wherever they go. Real-time GPS location, configurable safe zone alerts, extended battery endurance, waterproof IP67 casing, and interchangeable collar tag shapes.",
      image: "/catfinder-preview.jpg",
      isFeatured: true,
      features: [
        "Real-time GPS tracking with high-accuracy sub-3 meter mobile telemetry",
        "Configurable safe zone geofences with instant smartphone push alerts",
        "Ultra-low-power Bluetooth & cellular telemetry with extended battery endurance",
        "Waterproof IP67 design with multiple ergonomic shapes (Cat Head, Panda, Stone, Bone)",
      ],
      linkText: "Request Catfinder Specs",
      linkHref: "mailto:contact@incodebd.com?subject=Catfinder Pet Tracker Inquiry",
    },
    {
      id: "touch-fire-sensors",
      category: "iot",
      badge: "Hardware & Sensors",
      title: "Custom Sensors & IoT Modules",
      summary:
        "Small Sensors, Big Ideas. Complete range of modular sensors for robotics, automation, and IoT: Obstacle, Light, Fire, Motion PIR, Temperature/Humidity, Soil Moisture, Gas, GPS, and Camera modules.",
      image: "/sensors-preview.jpg",
      isFeatured: true,
      features: [
        "Ultrasonic & IR obstacle sensors, LDR light sensors, and optical flame/fire detectors",
        "PIR motion, DHT11/DHT22 temp & humidity, soil moisture, and MQ gas detection",
        "ESP32-CAM optical modules, NEO-6M/7M GPS, OLED/LCD displays, and relay units",
        "Calibrated plug-and-play pinouts with custom enclosure fabrication available",
      ],
      linkText: "Request Sensor Catalog",
      linkHref: "mailto:contact@incodebd.com?subject=Sensors and IoT Modules Inquiry",
    },
    {
      id: "bus-tracking",
      category: "iot",
      badge: "IoT Products",
      title: "BUS Tracking GPS & Fleet Telematics",
      summary:
        "Comprehensive public transit and organizational vehicle tracking system with passenger dashboards, route telemetry, and custom-styled interactive maps.",
      image: "/ubus-preview.png",
      isFeatured: true,
      features: [
        "Live interactive route visualization with sub-second websocket telemetry",
        "Real-time arrival estimation and passenger mobile notifications",
        "Vehicle health diagnostics and organizational fleet analytics",
        "Custom branded map interfaces tailored for transit fleets & universities",
      ],
      linkText: "Schedule Fleet Demo",
      linkHref: "mailto:contact@incodebd.com?subject=BUS Tracking GPS Inquiry",
    },
    {
      id: "quicktap-attendance",
      category: "iot",
      badge: "IoT & Cloud",
      title: "QuickTap • Anti-Proxy Attendance System",
      summary:
        "Cost-effective anti-proxy organizational attendance system with smart credential verification, instant cloud sync, and admin gateway.",
      image: "/quicktap-preview.png",
      isFeatured: true,
      features: [
        "Encrypted credential tap authentication eliminating attendance proxy & falsification",
        "Offline-capable local hardware validation with automatic cloud server sync",
        "Secure admin gateway with live roster check-ins and monthly exportable reports",
        "Plug-and-play Wi-Fi gateway hardware with low power consumption",
      ],
      linkText: "Visit quicktapp.vercel.app",
      linkHref: "https://quicktapp.vercel.app/",
      isExternal: true,
    },
    {
      id: "water-tank-automation",
      category: "iot",
      badge: "IoT Products",
      title: "Water Tank Automation System",
      summary:
        "Non-contact ultrasonic liquid level detection system with heavy-duty pump relay switching, dry-run safety protection, and real-time mobile telemetry.",
      image: "/pillar-hardware.jpg",
      isFeatured: false,
      features: [
        "Ultrasonic liquid level monitoring accurate to ±1 centimeter",
        "Automated pump control logic preventing overflow and dry-run pump burns",
        "Over-the-air schedule overrides and water consumption statistics",
        "Industrial-grade relay switches with surge protection",
      ],
      linkText: "Inquire Automation Specs",
      linkHref: "mailto:contact@incodebd.com?subject=Water Tank Automation Inquiry",
    },

    // ==========================================
    // [Software Products Category]
    // ==========================================
    {
      id: "smart-pos",
      category: "software",
      badge: "Software & Retail",
      title: "Retail & Supermarket Smart POS System",
      summary:
        "Faster Checkout. Smarter Business. Manage sales, inventory, customers, and revenues in one powerful, easy-to-use cloud POS platform engineered for modern retail and supermarkets.",
      image: "/pos-preview.jpg",
      isFeatured: true,
      features: [
        "High-speed checkout interface with barcode scanner and thermal receipt printer support",
        "Automated inventory stock deductions, low-stock threshold alerts, and purchase orders",
        "Integrated electronic cash drawer triggering and secure payment card terminals",
        "Real-time multi-branch revenue analytics with offline-first billing & cloud synchronization",
      ],
      linkText: "Request POS Demo",
      linkHref: "mailto:contact@incodebd.com?subject=Retail POS System Inquiry",
    },
    {
      id: "cloud-erp-hrm",
      category: "software",
      badge: "Enterprise Cloud",
      title: "Enterprise Cloud ERP & HRM Platform",
      summary:
        "Smarter People. Stronger Business. Streamline your operations, workforce management, and enterprise growth in an all-in-one scalable, secure cloud-based software.",
      image: "/erp-hrm-preview.jpg",
      isFeatured: true,
      features: [
        "Comprehensive HRM: Biometric attendance synchronization, automated payroll, and leave workflows",
        "Integrated business modules: Inventory warehouse, Sales CRM, Purchase, and Finance ledgers",
        "Modern web portal and companion mobile app for employee self-service and management",
        "Enterprise data protection, automated daily backups, and role-based multi-branch access control",
      ],
      linkText: "Schedule ERP Demo",
      linkHref: "mailto:contact@incodebd.com?subject=Cloud ERP and HRM Demo",
    },
    {
      id: "khobor-ai",
      category: "software",
      badge: "Software Products",
      title: "Khobor AI • News Aggregator",
      summary:
        "Autonomous multi-source news aggregator featuring neural audible summaries, automated Bengali categorization, and live media IPTV streaming integration.",
      image: "/kahfnews-preview.png",
      isFeatured: true,
      features: [
        "Automated continuous aggregation across major Bengali and global publications",
        "Neural text-to-speech audio engine generating 60-second news digests",
        "Integrated media player with live IPTV streaming and video news",
        "Zero-latency search and topic demixing powered by vector indexing",
      ],
      linkText: "Visit kahfnews.vercel.app",
      linkHref: "https://kahfnews.vercel.app",
      isExternal: true,
    },

    // ==========================================
    // [Prototype / R&D Category]
    // ==========================================
    {
      id: "autonomous-drone",
      category: "rnd",
      badge: "Prototype / R&D",
      title: "Autonomous Surveillance Drone Platform",
      summary:
        "Smarter Eyes for a Safer Tomorrow. AI-controlled multi-rotor aerial system capable of executing autonomous waypoint surveys, edge computer vision obstacle detection, and encrypted flight telemetry.",
      image: "/drone-preview.jpg",
      isFeatured: true,
      features: [
        "Stable carbon multi-rotor frame with high-capacity Li-Po battery power system",
        "4K stabilized gimbal camera for high-resolution aerial monitoring & inspection",
        "Edge AI onboard computer running real-time vision algorithms for obstacle avoidance",
        "Precision flight controller and long-range encrypted RF/telemetry communications",
      ],
      linkText: "Inquire Drone R&D",
      linkHref: "mailto:contact@incodebd.com?subject=Autonomous Drone Platform Inquiry",
    },
  ];

  const filteredProducts =
    selectedFilter === "all"
      ? products
      : products.filter((p) => p.category === selectedFilter);

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <Navbar />

      <main className="w-full flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-raleway text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Production Products &amp; Prototypes
          </h1>
          <p className="font-raleway text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            In-house hardware telemetry devices and scalable software platforms engineered, tested, and deployed at Incode BD.
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {[
              { id: "all", label: "All Products" },
              { id: "iot", label: "IoT Products" },
              { id: "software", label: "Software Products" },
              { id: "rnd", label: "Prototype / R&D" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFilter(f.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === f.id
                    ? "bg-[#FF6B00] dark:bg-[#B4F000] text-white dark:text-black shadow-md font-bold text-white-force"
                    : "bg-white/80 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-white/10 shadow-sm"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Expansive 2-Column Wide Visual Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className={`glass-card-interactive rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-white/10 flex flex-col justify-between group shadow-xl transition-all duration-300 relative overflow-hidden ${
                prod.isFeatured
                  ? "shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)]"
                  : ""
              }`}
            >
              {/* Optional Subtle Glow Aura for Featured Cards */}
              {prod.isFeatured && (
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-20 rounded-full bg-[#FF6B00]/10 dark:bg-[#B4F000]/10 filter blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" 
                />
              )}

              <div>
                {/* Visual Image Banner for Prominent UI Legibility */}
                {prod.image && (
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-black/60 shadow-md">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                )}

                {/* Clean Top Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000]" />
                    <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-500 dark:text-slate-400">
                      {prod.badge}
                    </span>
                  </div>
                  <Globe className="w-4 h-4 text-[#FF6B00] dark:text-[#B4F000]" />
                </div>

                <h3 className="font-raleway text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#FF6B00] dark:group-hover:text-[#B4F000] transition-colors leading-snug">
                  {prod.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {prod.summary}
                </p>

                {/* Technical Feature Specs List */}
                <div className="space-y-2.5 mb-6 border-t border-slate-200/80 dark:border-white/10 pt-4">
                  {prod.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B00] dark:text-[#B4F000] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Row */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  {prod.badge}
                </span>

                {prod.isExternal ? (
                  <a
                    href={prod.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>{prod.linkText}</span>
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                ) : (
                  <a
                    href={prod.linkHref}
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>{prod.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-[#FF6B00]/30 dark:border-[#B4F000]/30 text-center relative overflow-hidden">
          <span className="text-xs font-mono uppercase text-[#FF6B00] dark:text-[#B4F000] tracking-wider block mb-2">
            Enterprise Custom Prototyping
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Need a Proprietary IoT Device or Custom SaaS Platform?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
            Incode BD engineers custom circuit schematics, multi-layer PCBs, embedded firmware, and production cloud applications tailored to your proprietary requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@incodebd.com?subject=Proprietary Solution Inquiry"
              className="btn-neon inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold"
            >
              <span>Contact Engineering Team</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
            <Link
              href="/services"
              className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-[#FF6B00]/40 dark:hover:border-[#B4F000]/40 transition"
            >
              View Commercial Services
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
