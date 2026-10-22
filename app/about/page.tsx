"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  MessageSquare,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Users,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
  Building2,
  HeartHandshake,
  Server,
  Radio,
  ExternalLink,
  Laptop,
  Compass
} from "lucide-react";

export default function AboutPage() {
  const googleMapUrl = "https://www.google.com/maps/search/?api=1&query=Incode+BD";
  const embedMapUrl =
    "https://maps.google.com/maps?q=College+Gate+Tongi+Gazipur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* ========================================================= */}
        {/* Header Hero Section                                       */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#B4F000] mb-5 backdrop-blur-md">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Incode BD</span>
          </div>

          <h1 className="font-tagline text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-tight">
            Solving Business Problems with <br className="hidden sm:inline" />
            <span className="text-[#B4F000] drop-shadow-[0_0_30px_rgba(180,240,0,0.35)]">
              Hardware, Software, and Aesthetics.
            </span>
          </h1>

          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 text-left max-w-3xl mx-auto mt-6">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-3">
              <strong className="text-white font-semibold">Incode BD</strong> is a modern technology startup located in College Gate (Tongi), Dhaka. Our core vision and philosophy is: <span className="text-[#B4F000] font-medium">Solving Business Problems with Hardware, Software, and Aesthetics.</span> We engineer smart, effective business solutions by combining embedded hardware (IoT) and scalable software (SaaS) with award-grade modern digital design.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
              <MapPin className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>Akon Villa Ground Floor, College Gate, Tongi, Dhaka</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Two Core Streams                                          */}
        {/* ========================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B4F000] block mb-2">
              Our Core Operational Streams
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              We Operate Across Two Core Streams
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Hardware engineering and scalable software services working in complete harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Stream 1: Custom Client Solutions */}
            <div className="glass-card-interactive rounded-2xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center">
                    <Server className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    Client Solutions
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#B4F000] transition-colors">
                  Custom Client Solutions
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Custom web applications, Enterprise ERP, biometric &amp; cloud HRM, and specialized AI-driven software services tailored for local and global enterprises.
                </p>

                <div className="space-y-2.5 text-xs text-slate-200 border-t border-white/5 pt-5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Custom Web Applications:</strong> High-performance full-stack web platforms and resilient API backends.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Enterprise ERP &amp; CRM:</strong> Automated workflow engines, inventory intelligence, and business portals.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Biometric HRM Platforms:</strong> Cloud-connected attendance tracking, payroll, and employee shift systems.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Specialized AI Services:</strong> Automated data extraction pipelines, intelligent customer bots, and analytics.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B4F000] hover:underline"
                >
                  <span>Explore Commercial Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Stream 2: In-House Smart Products & IoT */}
            <div className="glass-card-interactive rounded-2xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    Proprietary Products
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#B4F000] transition-colors">
                  In-House Smart Products &amp; IoT
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Our proprietary product ecosystem features smart pet trackers, fleet telemetry with custom map engines, water tank automation, neural news aggregation, and microcontroller-based devices.
                </p>

                <div className="space-y-2.5 text-xs text-slate-200 border-t border-white/5 pt-5 mb-6">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Smart Pet Tracker (Incode Track):</strong> Ultra-compact GPS and LoRa telemetry collars for pets and livestock.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Vehicle Tracking &amp; Custom Maps:</strong> Real-time vehicle telematics, custom route layers, and geofence alerts.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Water Tank Automation:</strong> Smart ultrasonic level monitoring and automatic pump controller units.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span><strong>Khobor AI &amp; Smart Microcontrollers:</strong> Neural news ingestion engine with voice digests and ESP32 IoT sensors.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#B4F000] hover:underline"
                >
                  <span>Explore Proprietary Products</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* Official Website CTA Banner                               */}
        {/* ========================================================= */}
        <div className="mb-20 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] border border-[#B4F000]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(180,240,0,0.06)]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-[#B4F000] font-bold uppercase tracking-wider block">
              Official Digital Portal
            </span>
            <p className="text-sm sm:text-base text-slate-200">
              To learn more about our mission, products, and engineering capabilities, visit our official website:
            </p>
            <a
              href="https://incodebd.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B4F000] font-mono font-bold text-base hover:underline inline-block pt-1"
            >
              https://incodebd.com
            </a>
          </div>

          <a
            href="https://incodebd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap"
          >
            <span>Visit incodebd.com</span>
            <ExternalLink className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>

        {/* ========================================================= */}
        {/* Featured Office Interior Showcase (User Photo)            */}
        {/* ========================================================= */}
        <div className="mb-20 rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-slate-200/80 dark:border-white/10 shadow-2xl">
          <div className="bg-slate-50/90 dark:bg-[#0B0F17] rounded-xl overflow-hidden border border-slate-200 dark:border-white/[0.06]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              
              {/* Left Photo Container */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/office-interior.jpg"
                  alt="Incode BD Physical Engineering Workspace & Meeting Room"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 dark:bg-black/90 text-slate-900 dark:text-white border border-slate-300/80 dark:border-white/20 backdrop-blur-md text-xs font-mono shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000]" />
                  <span className="font-medium">Akon Villa Ground Floor Engineering Workspace</span>
                </div>
              </div>

              {/* Right Description */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-[#B4F000] block">
                  The Physical Workspace
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  A Focused, Collaborative Engineering Workspace
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Our ground-floor facility at Akon Villa is built for deep work and hands-on invention. Equipped with dedicated workstations, hardware testing modules, fans, and a collaborative discussion table.
                </p>

                <div className="space-y-3 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                    <span>Comfortable collaborative table &amp; ambient warm lighting</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                    <span>Dedicated testing hardware, electronic modules, and IoT tools</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                    <span>High-speed optical fiber connection with clean, focused setup</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/careers"
                    className="btn-neon inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
                  >
                    <span>Join Our Workspace as an Intern</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* Company Principles Grid                                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="glass-panel p-7 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Integrated Silicon &amp; Web</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We bridge software with actual physical microcontrollers. We believe real engineering happens when digital algorithms control physical hardware.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Zero-Blandness Standard</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every digital interface we author adheres to award-level visual hierarchy, typography, and micro-interactions. Functionality must look and feel exceptional.
            </p>
          </div>

          <div className="glass-panel p-7 rounded-2xl border border-white/10">
            <div className="w-10 h-10 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Mentorship &amp; Growth</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We invest heavily in university CSE/EEE talent through our Fellowship batches, providing mock defense training, practicum verification, and real client projects.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* Physical Location & Map Box                               */}
        {/* ========================================================= */}
        <div className="glass-panel rounded-2xl p-7 sm:p-9 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block">
                Official Headquarters
              </span>
              <h2 className="text-2xl font-bold text-white">
                Find Incode BD in Dhaka
              </h2>
              <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                  <span>
                    Akon Villa, Ground Floor, College Gate, Tongi, Gazipur-1711, Dhaka, Bangladesh
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <a
                    href="https://wa.me/8801581495140"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white font-mono"
                    title="WhatsApp Message Only"
                  >
                    WhatsApp: +880 1581-495140 (Message Only)
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <a href="mailto:contact@incodebd.com" className="hover:text-white font-mono">
                    contact@incodebd.com
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  <span>Open Incode BD on Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>

            {/* Embedded Map Frame with clean border */}
            <div className="lg:col-span-7 rounded-xl overflow-hidden border border-white/10 min-h-[300px] sm:min-h-[360px] relative">
              <iframe
                title="Incode BD Location Map"
                src={embedMapUrl}
                className="w-full h-full min-h-[300px] sm:min-h-[360px] border-0 transition-opacity hover:opacity-100"
                loading="lazy"
                allowFullScreen
              />
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
