"use client";

import React from "react";
import Link from "next/link";
import {
  Cpu,
  Server,
  Palette,
  CheckCircle2,
  ArrowUpRight,
  Radio,
  Layers,
  Code2
} from "lucide-react";

export default function PillarsSection() {
  const pillars = [
    {
      id: "hardware",
      badge: "Pillar 01 // Embedded Hardware & IoT",
      icon: Cpu,
      title: "Hardware & IoT Systems",
      tagline: "Connecting the physical world to cloud architectures.",
      description:
        "We build connected hardware devices — from pet and vehicle telematics GPS trackers to touch-capacitive smart switchboards and autonomous drone flight platforms.",
      highlights: [
        "Incode Track: Smart Pet & Livestock GPS/LoRa tracking",
        "Vehicle & Transit Telematics with custom route maps",
        "ESP32, STM32, and Nordic BLE low-power firmware",
        "Custom PCB design, prototyping & assembly at our Dhaka workspace",
      ],
      specs: [
        { label: "Hardware", val: "ESP32-S3 Dual-Core" },
        { label: "Latency", val: "< 120ms to Cloud" },
        { label: "Endurance", val: "30-Day LiPo Sleep" },
      ],
      ctaText: "View Hardware & Products",
      ctaHref: "/products",
    },
    {
      id: "software",
      badge: "Pillar 02 // Cloud & Distributed Architecture",
      icon: Server,
      title: "Enterprise Software & SaaS",
      tagline: "Resilient systems, custom ERPs, and automated workflows.",
      description:
        "Building mission-critical business platforms: from AI-driven ERPs and CRM/HRMs to ISP billing engines and Khobor AI daily news aggregation.",
      highlights: [
        "Custom ERP, CRM, and biometric HRM attendance systems",
        "ISP billing automation with MikroTik & MFS integration",
        "Khobor AI: Automated news aggregation & neural audio summaries",
        "Scalable Full-Stack architectures & high-performance APIs (Node, Python, PHP, Go)",
      ],
      specs: [
        { label: "Stack", val: "Flexible Full-Stack" },
        { label: "Database", val: "PostgreSQL & Mongo" },
        { label: "Deployment", val: "Docker & Cloud Stacks" },
      ],
      ctaText: "Explore Commercial Services",
      ctaHref: "/services",
    },
    {
      id: "uiux-design",
      badge: "Pillar 03 // User Experience & Product Design",
      icon: Palette,
      title: "Creative UI/UX Design",
      tagline: "Intuitive user experiences, Figma design systems & modern visual craft.",
      description:
        "We blend empathetic human-centered design with modern visual hierarchy. From wireframes, customer journeys, and design tokens to high-fidelity Figma components and responsive interfaces, we create experiences users love.",
      highlights: [
        "User research, wireframing & interactive Figma prototypes",
        "Design systems with reusable tokens, dark modes & typography",
        "Intuitive UX workflows for complex B2B SaaS & mobile applications",
        "Responsive frontend conversion design with fluid micro-interactions",
      ],
      specs: [
        { label: "Design Tool", val: "Figma & FigJam" },
        { label: "UX Research", val: "User Journey & Audits" },
        { label: "Frontend", val: "Modern Responsive UI" },
      ],
      ctaText: "Learn About Our Design",
      ctaHref: "/about",
    },
  ];

  return (
    <section id="solutions" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 circuit-grid">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#B4F000] mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>CORE ENGINEERING CAPABILITIES</span>
        </div>

        <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight mb-2.5">
          The Three Engineering Pillars
        </h2>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          How Incode BD solves high-stakes business challenges with integrated hardware, cloud architectures, and visual craft.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((pillar) => {
          const IconComponent = pillar.icon;

          return (
            <div
              key={pillar.id}
              className="glass-card-interactive relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden group border border-white/10"
            >
              <div>
                {/* Icon Header */}
                <div className="mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#0F1420] border border-white/10 flex items-center justify-center text-[#B4F000] group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-[#B4F000] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-slate-300 mb-4">
                  {pillar.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
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

              <div>
                {/* Technical Specifications Grid */}
                <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 mb-5">
                  {pillar.specs.map((spec, sIdx) => (
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
                <Link
                  href={pillar.ctaHref}
                  className="btn-neon w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold tracking-wide"
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
