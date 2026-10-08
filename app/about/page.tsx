"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import IncodeBotCompanion from "@/components/IncodeBotCompanion";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Users,
  Cpu,
  Layers,
  ArrowUpRight,
  Sparkles,
  Compass,
  Building2,
  HeartHandshake
} from "lucide-react";

export default function AboutPage() {
  const googleMapUrl = "https://maps.app.goo.gl/jeDY2fVmKujYxibK8";
  const embedMapUrl =
    "https://maps.google.com/maps?q=College+Gate+Tongi+Gazipur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <ThreeCanvas />
      <IncodeBotCompanion />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#B4F000] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ABOUT INCODE BD // SOFTWARE COMPANY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Solving Business Problems with Hardware, Software, and Aesthetics.
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            Headquartered at College Gate, Tongi, Dhaka — we are an independent Software Company (Software &amp; IoT Solutions) dedicated to high-performance IoT hardware, custom enterprise systems, and award-grade digital products.
          </p>
        </div>

        {/* ========================================================= */}
        {/* Featured Office Interior Showcase (User Photo)            */}
        {/* ========================================================= */}
        <div className="mb-20 rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/10 shadow-2xl">
          <div className="bg-[#0B0F17] rounded-xl overflow-hidden border border-white/[0.06]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
              
              {/* Left Photo Container */}
              <div className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/office-interior.jpg"
                  alt="Incode BD Physical Engineering Workspace & Meeting Room"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D14]/90 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000]" />
                  <span>Akon Villa Ground Floor Engineering Workspace</span>
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

        {/* Company Principles Grid */}
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

        {/* Physical Location & Map Box */}
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
                  <Phone className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <a href="tel:+8801882082502" className="hover:text-white font-mono">
                    +880 1882-082502
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
