"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cpu,
  Server,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      id: "hardware",
      badge: "Embedded Hardware & IoT",
      icon: Cpu,
      title: "Hardware & IoT Systems",
      tagline: "Connecting physical environments to scalable cloud architectures.",
      description:
        "We build connected hardware devices, from pet and vehicle telematics GPS trackers to touch-capacitive switchboards and autonomous drone flight platforms.",
      image: "/pillar-hardware.jpg",
      isFeatured: true,
      highlights: [
        "Incode Track: Smart Pet & Livestock GPS/LoRa tracking",
        "Vehicle & Transit Telematics with custom route maps",
        "ESP32, STM32, and Nordic BLE low-power firmware",
        "Custom PCB design, prototyping & assembly at our Dhaka workspace",
      ],
      ctaText: "View Hardware & Products",
      ctaHref: "/products",
    },
    {
      id: "software",
      badge: "Cloud & Enterprise SaaS",
      icon: Server,
      title: "Enterprise Software & SaaS",
      tagline: "Resilient systems, custom ERPs, and automated workflows.",
      description:
        "Building mission-critical business platforms: from AI-driven ERPs and CRM/HRMs to ISP billing engines and Khobor AI daily news aggregation.",
      image: "/pillar-software.jpg",
      isFeatured: false,
      highlights: [
        "Custom ERP, CRM, and biometric HRM attendance systems",
        "ISP billing automation with MikroTik & MFS integration",
        "Khobor AI: Automated news aggregation & neural audio summaries",
        "Scalable Full-Stack architectures & high-performance APIs",
      ],
      ctaText: "Explore Commercial Services",
      ctaHref: "/services",
    },
    {
      id: "uiux-design",
      badge: "UI/UX & Product Design",
      icon: Palette,
      title: "Creative UI/UX Design",
      tagline: "Intuitive user experiences, Figma design systems & modern visual craft.",
      description:
        "We blend empathetic human-centered design with modern visual hierarchy. From wireframes, customer journeys, and design tokens to high-fidelity Figma components.",
      image: "/pillar-aesthetics.jpg",
      isFeatured: false,
      highlights: [
        "User research, wireframing & interactive Figma prototypes",
        "Design systems with reusable tokens, dark modes & typography",
        "Intuitive UX workflows for complex B2B SaaS & mobile apps",
        "Responsive frontend conversion design with fluid micro-interactions",
      ],
      ctaText: "Learn About Our Design",
      ctaHref: "/about",
    },
  ];

  return (
    <section id="solutions" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h2 className="font-raleway text-xl sm:text-3xl font-extrabold text-white tracking-tight mb-2.5">
          The Three Engineering Pillars
        </h2>
        <p className="font-raleway text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          How Incode BD solves high-stakes business challenges with integrated hardware, cloud architectures, and visual craft.
        </p>
      </div>

      {/* Bento Grid with Visual Images & Hierarchy (Reference Image Style) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;

          return (
            <div
              key={pillar.id}
              className={`glass-card-interactive relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden group border transition-all duration-300 ${
                pillar.isFeatured
                  ? "border-white/20 bg-[#0C101A]/85 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.7)] hover:border-[#B4F000]/40"
                  : "border-white/10 bg-[#0A0D14]/60 hover:border-white/20"
              }`}
            >
              {/* Reference Glow Crescent underneath Featured Card */}
              {pillar.isFeatured && (
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full bg-[#B4F000]/12 filter blur-3xl opacity-75 group-hover:opacity-100 transition-opacity" 
                />
              )}

              <div>
                {/* Visual Image Header (Adds image attention as requested) */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-slate-200/80 dark:border-white/10 bg-slate-100 dark:bg-black/40">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#0C101A] dark:via-transparent dark:to-transparent bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Pillar Icon */}
                  <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/90 dark:bg-[#0A0D14]/90 border border-slate-300/60 dark:border-white/15 flex items-center justify-center text-[#FF6B00] dark:text-[#B4F000] backdrop-blur-md shadow-lg">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Clean Category Badge (No green box, clean tag) */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4F000]" />
                  <span className="text-xs font-mono font-medium tracking-wide uppercase text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-raleway text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#B4F000] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-raleway text-xs text-slate-300 mb-3.5 font-normal">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>

                {/* Bullet Highlights */}
                <ul className="space-y-2 mb-6 text-xs text-slate-300">
                  {pillar.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                {/* Action Link (Rounded-full design sync) */}
                <Link
                  href={pillar.ctaHref}
                  className="btn-neon w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all shadow-md"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
