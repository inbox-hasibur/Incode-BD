"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
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
  Globe,
  MapPin,
  MessageSquare,
  Navigation
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black overflow-x-hidden">
      
      {/* Sticky Blurred Glass Navigation Bar */}
      <Navbar />

      <main className="w-full flex-grow">
        {/* Hero Section with 3D Realistic Phone & ESP32 Board */}
        <HeroSection />

        {/* ========================================================= */}
        {/* About Incode BD Section: Balanced Composition              */}
        {/* ========================================================= */}
        <section id="about-spotlight" className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent dark:bg-[#080B10]/20 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Left Column: Descriptive Text & Value Props */}
                <div className="flex flex-col justify-between space-y-6 text-left">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#B4F000]">
                      <span>About Incode BD</span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                      Solving Business Problems with <br className="hidden sm:inline" />
                      <span className="text-[#B4F000]">Hardware, Software, and Aesthetics.</span>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      Incode BD is a modern technology engineering startup located at College Gate (Tongi), Dhaka. Our core philosophy is Solving Business Problems with Hardware, Software, and Aesthetics, delivering high-stakes commercial systems by combining embedded microcontrollers (ESP32) and scalable cloud SaaS with award-caliber aesthetics.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <strong className="text-xs font-mono text-[#B4F000] block mb-1">
                          01. Custom Client Solutions
                        </strong>
                        <span className="text-xs text-slate-300 leading-relaxed block">
                          Enterprise ERP, biometric &amp; cloud HRM, custom web platforms, and Smart POS systems engineered for high-volume retail.
                        </span>
                      </div>
                      <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                        <strong className="text-xs font-mono text-[#B4F000] block mb-1">
                          02. In-House Smart Products
                        </strong>
                        <span className="text-xs text-slate-300 leading-relaxed block">
                          Pet Tracking GPS, BUS Fleet Transit Maps, Water Tank Automation, and Khobor AI News Aggregator platform.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3.5 text-xs font-mono">
                    <Link
                      href="/about"
                      className="btn-neon inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs shadow-md"
                    >
                      <span>Explore About Us</span>
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.06)] bg-white text-slate-800 border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 dark:bg-white/[0.04] dark:text-slate-200 dark:border-white/10 dark:hover:border-[#B4F000]/40 dark:hover:bg-white/[0.08]"
                    >
                      <span>Our Commercial Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: 50% Clean Visual Facility Card */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-300/50 dark:border-white/15 shadow-2xl flex flex-col justify-between p-6 min-h-[420px] group">
                  {/* Full Background Facility Image */}
                  <Image
                    src="/office-interior.jpg"
                    alt="Incode BD Engineering Workspace at College Gate, Tongi"
                    fill
                    className="object-cover object-center -z-10"
                  />
                  {/* Light Shadow in Light Mode, Dark Shadow in Dark Mode */}
                  <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#0A0D14]/90 dark:via-transparent dark:to-[#0A0D14]/50 bg-gradient-to-t from-white/80 via-transparent to-white/35 -z-10" />

                  {/* Top Rectangular Location Badge - Light & Dark Synced */}
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#0A0D14]/95 text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/20 text-xs font-mono w-fit backdrop-blur-md shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] dark:text-[#B4F000]" />
                    <span className="font-semibold">Akon Villa Ground Floor, College Gate, Tongi</span>
                  </div>

                  {/* Clean Bottom Redirects Row - Light & Dark Synced */}
                  <div className="mt-auto pt-4 border-t border-slate-200/80 dark:border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-white/95 dark:bg-[#0A0D14]/90 text-slate-900 dark:text-white p-3 rounded-xl backdrop-blur-md shadow-md">
                    <a
                      href="https://incodebd.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 dark:text-slate-200 hover:text-[#FF6B00] dark:hover:text-[#B4F000] inline-flex items-center gap-1.5 font-bold transition"
                    >
                      <span>incodebd.com</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Incode+BD"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#FF6B00] text-white hover:bg-[#E85D00] shadow-[0_8px_20px_-3px_rgba(255,107,0,0.4)] dark:bg-white/10 dark:text-slate-100 dark:hover:bg-[#B4F000] dark:hover:text-black font-semibold transition text-white-force"
                    >
                      <Navigation className="w-3 h-3 stroke-[2.5]" />
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Core Engineering Pillars */}
        <PillarsSection />

        {/* ========================================================= */}
        {/* Featured Products: Wide, High-Visibility Cards             */}
        {/* ========================================================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-transparent dark:bg-[#090C12]/20 backdrop-blur-[2px]">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-1">
                  Proprietary Tech
                </span>
                <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                  Featured Products
                </h2>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF6B00] dark:text-[#B4F000] hover:underline"
              >
                <span>View Full Product Portfolio</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>
            </div>

            {/* Expansive 2-Column Wide Grid for Crystal Clear Visuals */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Product 1: BUS Tracking GPS & Transit Engine */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40 shadow-md">
                    <Image
                      src="/ubus-preview.png"
                      alt="UBUS V2 Fleet Map"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        Fleet Operations &amp; Transit Engine
                      </span>
                    </div>
                    <Globe className="w-4 h-4 text-[#B4F000]" />
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    UBUS • Institutional Fleet Transit Tracker
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    Real-time institutional bus telematics platform featuring live route map rendering, driver GPS beacons, accurate arrival countdowns, and passenger seat feeds.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Deployed Fleet Telematics</span>
                  <Link
                    href="/products"
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>View Transit Engine</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              {/* Product 2: Catfinder GPS Pet Tracker */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40 shadow-md">
                    <Image
                      src="/catfinder-preview.jpg"
                      alt="Catfinder GPS Pet Tracker"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        IoT Telematics &amp; Hardware
                      </span>
                    </div>
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    Catfinder • GPS Pet Tracker
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    Keep your furry friend safe, wherever they go. Real-time GPS location, safe zone geofence alerts, long battery life, and waterproof IP67 collar tags.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Hardware &amp; Mobile App</span>
                  <Link
                    href="/products"
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>Explore Catfinder</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              {/* Product 3: QuickTap Anti-Proxy Attendance */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40 shadow-md">
                    <Image
                      src="/quicktap-preview.png"
                      alt="QuickTap Anti-Proxy Attendance Gateway"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        IoT Hardware Gateway
                      </span>
                    </div>
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    QuickTap • Anti-Proxy Attendance System
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    Cost-effective institutional anti-proxy biometric &amp; RFID attendance gateway with instant MQTT sync, cloud audit logging, and administrative portal.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#FF6B00] dark:text-[#B4F000]">Active Platform</span>
                  <a
                    href="https://quicktapp.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 shadow-sm bg-white text-slate-800 border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 hover:text-[#FF6B00] dark:bg-white/[0.04] dark:border-white/10 dark:hover:border-[#B4F000]/40 dark:text-[#B4F000]"
                  >
                    <span>Visit quicktapp.vercel.app</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Product 4: Khobor AI News Aggregator */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-black/40 shadow-md">
                    <Image
                      src="/kahfnews-preview.png"
                      alt="Khobor AI KahfNews Platform"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        AI Media &amp; News Engine
                      </span>
                    </div>
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    Khobor AI • Neural News Aggregator
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    Autonomous multi-channel news curation platform with audible neural text-to-speech audio digests, topic clustering, and integrated live IPTV feeds.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-[#FF6B00] dark:text-[#B4F000]">Live Production</span>
                  <a
                    href="https://kahfnews.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold transition-all duration-300 shadow-sm bg-white text-slate-800 border border-slate-300/80 hover:bg-slate-50 hover:border-slate-400 hover:text-[#FF6B00] dark:bg-white/[0.04] dark:border-white/10 dark:hover:border-[#B4F000]/40 dark:text-[#B4F000]"
                  >
                    <span>Visit kahfnews.vercel.app</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Product 5: Retail & Supermarket Smart POS System */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40 shadow-md">
                    <Image
                      src="/pos-preview.jpg"
                      alt="Smart POS System"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        Retail Software &amp; POS
                      </span>
                    </div>
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    Retail &amp; Supermarket Smart POS
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    High-speed retail billing platform with barcode scanning, automated stock inventory syncing, multi-branch revenue analytics, and thermal receipt printing.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">POS Hardware &amp; Cloud</span>
                  <Link
                    href="/products"
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>View POS Solution</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

              {/* Product 6: Enterprise Cloud ERP & HRM */}
              <div className="glass-card-interactive rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group shadow-xl">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 bg-black/40 shadow-md">
                    <Image
                      src="/erp-hrm-preview.jpg"
                      alt="Enterprise Cloud ERP & HRM"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                      <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                        Enterprise Cloud SaaS
                      </span>
                    </div>
                  </div>
                  <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#B4F000] transition-colors leading-snug">
                    Enterprise Cloud ERP &amp; HRM
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    Scalable organizational operating system featuring biometric attendance integration, automated payroll calculation, inventory, and cross-branch operations.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">SaaS Architecture</span>
                  <Link
                    href="/products"
                    className="btn-neon inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md"
                  >
                    <span>Explore ERP System</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* High-Conversion Client Targeting Pre-Footer CTA           */}
        {/* ========================================================= */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 glass-panel border border-[#B4F000]/30 text-center relative overflow-hidden">
            
            <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-2">
              Business Transformation &amp; Engineering
            </span>

            <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight mb-3">
              Looking for Custom SaaS, Smart POS, or Custom IoT Hardware?
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto mb-8 font-normal leading-relaxed">
              Whether you need automated retail inventory POS, enterprise cloud ERP/HRM, or embedded telematics hardware, our Dhaka engineering team delivers production-ready systems tailored to your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/services"
                className="btn-neon w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-bold"
              >
                <span>Explore SaaS &amp; POS Services</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </Link>

              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-[#B4F000]/40 transition"
              >
                <Layers className="w-4 h-4 text-[#B4F000]" />
                <span>Browse In-House Products</span>
              </Link>

              <a
                href="https://wa.me/8801581495140"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#B4F000] bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Message</span>
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* Global Corporate Footer */}
      <Footer />
    </div>
  );
}
