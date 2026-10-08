"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ArrowUpRight,
  Github,
  Linkedin,
  Facebook,
  ShieldCheck,
  Cpu,
  Layers
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <footer className="relative bg-[#07090E] border-t border-white/10 text-slate-300 pt-16 pb-12 overflow-hidden z-10">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[radial-gradient(circle_at_center,rgba(180,240,0,0.04)_0%,transparent_70%)] -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          
          {/* Column 1 & 2: Brand & Vision */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#0F1420] border border-white/10 p-1.5 flex items-center justify-center transition">
                <Image
                  src={isLight ? "/logo-orange.png?v=2" : "/logo.png"}
                  alt="Incode BD"
                  width={34}
                  height={34}
                  className={`w-full h-full object-contain filter ${
                    isLight ? "" : "drop-shadow-[0_0_8px_rgba(180,240,0,0.5)]"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-logo text-xl sm:text-[1.35rem] tracking-tight text-white select-none">
                  Incode <span className={isLight ? "text-[#FF6B00]" : "text-[#B4F000]"}>BD</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                  Software Company
                </span>
              </div>
            </Link>

            <p className="font-tagline text-sm text-slate-400 max-w-sm leading-relaxed">
              &ldquo;Solving Business Problems with Hardware, Software, and Aesthetics.&rdquo; Building production-grade IoT telemetry, intelligent cloud stacks, and digital products.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com/incodebd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/incodebd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/inbox-hasibur"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/jeDY2fVmKujYxibK8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#B4F000]" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B4F000]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#B4F000] transition">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#B4F000] transition">
                  Solutions &amp; Systems
                </Link>
              </li>
              <li>
                <Link href="/#lab" className="hover:text-[#B4F000] transition">
                  Physical Workspace
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#B4F000] transition flex items-center gap-1.5">
                  <span>Fellowship Careers</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#B4F000]/10 text-[#B4F000] border border-[#B4F000]/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-[#B4F000] transition">
                  Location &amp; Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Engineering Pillars */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B4F000]">
              Core Pillars
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                <span>IoT &amp; ESP32 Hardware</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                <span>Transit &amp; Pet Tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                <span>Next.js Cloud Stacks</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                <span>Real-Time Audio Demixing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                <span>WebGL &amp; 3D Creative Tech</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Headquarters & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B4F000]">
              Dhaka Headquarters
            </h4>
            <div className="space-y-3 text-xs leading-relaxed text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                <span>
                  Akon Villa, Ground Floor, College Gate, Tongi, Gazipur-1711, Dhaka, Bangladesh
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                <a href="tel:+8801581495140" className="hover:text-white transition">
                  +880 1581-495140
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                <a href="mailto:contact@incodebd.com" className="hover:text-white transition">
                  contact@incodebd.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                <a href="mailto:career@incodebd.com" className="hover:text-white transition">
                  career@incodebd.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Incode BD. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000] animate-pulse" />
              Production Core: Live in Dhaka
            </span>
            <a
              href="https://incodebd.com"
              className="text-slate-400 hover:text-[#B4F000] transition"
            >
              incodebd.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
