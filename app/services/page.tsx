"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import IncodeBotCompanion from "@/components/IncodeBotCompanion";
import Link from "next/link";
import {
  Server,
  Layers,
  Users,
  Wifi,
  Cpu,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  Terminal,
  Code2
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: "ai-erp",
      icon: Server,
      badge: "Enterprise Automation",
      title: "AI-Powered Custom ERP Systems",
      summary:
        "Bespoke Enterprise Resource Planning software engineered to automate complex multi-branch business operations, supply chains, and inventory pipelines with predictive AI insights.",
      offerings: [
        "Automated inventory management with low-stock machine learning forecasts",
        "Financial reporting, multi-currency invoicing, and tax accounting compliance",
        "Role-based granular access control (RBAC) with complete audit logging",
        "Direct synchronization with hardware barcode scanners and IoT telemetry",
      ],
      techStack: ["Next.js App Router", "PostgreSQL", "Supabase", "Docker"],
    },
    {
      id: "crm-hrm",
      icon: Users,
      badge: "Workforce & Customer Ops",
      title: "Tailored CRM & HRM Solutions",
      summary:
        "Comprehensive workforce management, payroll automation, biometric device integration, and streamlined customer deal pipeline management.",
      offerings: [
        "Biometric attendance device integration and automated overtime calculations",
        "Automated employee payroll generation with local tax and bank disbursement sheets",
        "Multi-stage sales pipeline tracking with automated client email and SMS follow-ups",
        "Performance review analytics, leave approval workflows, and document vaults",
      ],
      techStack: ["React / TypeScript", "Node.js", "Redis", "REST / GraphQL"],
    },
    {
      id: "isp-management",
      icon: Wifi,
      badge: "Network Infrastructure",
      title: "ISP Billing & Network Management",
      summary:
        "Engineered specifically for Internet Service Providers to handle high-volume user authentication, bandwidth queue shaping, and automated local MFS billing.",
      offerings: [
        "MikroTik API and FreeRADIUS automated provisioning and speed profiling",
        "Automated bill collection via bKash, Nagad, and Rocket MFS gateways",
        "Automated client disconnection on bill expiry and instant reactivation on payment",
        "Fiber network outage mapping and automated customer support ticketing",
      ],
      techStack: ["MikroTik RouterOS API", "FreeRADIUS", "PostgreSQL", "Next.js"],
    },
    {
      id: "bespoke-web",
      icon: Globe,
      badge: "Creative Engineering",
      title: "High-Conversion Portfolios & Web Platforms",
      summary:
        "Award-caliber corporate websites and bespoke digital products designed to leave an unforgettable impression on investors, clients, and talent.",
      offerings: [
        "Awwwards-standard cyber-dark visual aesthetics with fluid micro-interactions",
        "Sub-second load times and 100/100 Google Lighthouse Core Web Vitals",
        "Custom CMS architectures, headless blogging, and technical SEO structure",
        "Interactive 3D WebGL canvases and dynamic data visualization viewports",
      ],
      techStack: ["Next.js 14", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      id: "hardware-prototyping",
      icon: Cpu,
      badge: "Physical Silicon & Firmware",
      title: "Custom IoT & PCB Engineering",
      summary:
        "End-to-end electronic product design: from schematic capture and 2-layer PCB layout to firmware flashing and physical enclosure prototyping at our Dhaka Workspace.",
      offerings: [
        "Custom schematic design in EasyEDA / KiCad for ESP32, STM32, and Nordic chips",
        "Prototype PCB assembly, surface-mount soldering, and benchtop testing",
        "Firmware development for wireless sensor nodes (Wi-Fi, BLE, LoRa, cellular)",
        "End-to-end hardware-to-cloud telemetry infrastructure and remote OTA updates",
      ],
      techStack: ["ESP-IDF / C++", "KiCad", "MQTT", "WebSockets"],
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <ThreeCanvas />
      <IncodeBotCompanion />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto pt-6 pb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-[#B4F000] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>COMMERCIAL SOFTWARE &amp; ENGINEERING SERVICES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Custom Systems Built for Scale
          </h1>

          <p className="text-base sm:text-lg text-slate-300">
            We partner with businesses in Bangladesh and globally to engineer mission-critical ERPs, ISP billing platforms, and proprietary hardware solutions.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-8 mb-20">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;

            return (
              <div
                key={svc.id}
                className="glass-card-interactive rounded-2xl p-7 sm:p-9 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Left Overview Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0F1420] border border-white/10 flex items-center justify-center text-[#B4F000] shadow-lg">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono tracking-wider uppercase text-[#B4F000] block">
                        {svc.badge}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {svc.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {svc.summary}
                  </p>

                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2">
                      Core Technology Stack:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Offerings Column */}
                <div className="lg:col-span-7 bg-[#090C12]/80 rounded-xl p-6 border border-white/5 space-y-4">
                  <h3 className="text-xs font-mono uppercase text-[#B4F000] tracking-wider">
                    Capabilities Included:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    {svc.offerings.map((item, iIdx) => (
                      <div key={iIdx} className="flex items-start gap-2.5 bg-white/[0.01] p-2.5 rounded-lg border border-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex justify-end">
                    <a
                      href={`mailto:contact@incodebd.com?subject=Inquiry: ${svc.title}`}
                      className="btn-neon inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold"
                    >
                      <span>Request Proposal &amp; Timeline</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Engineering Protocol */}
        <div className="glass-panel rounded-2xl p-8 sm:p-10 border border-white/10 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-1">
              Production Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How We Deliver Production Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
              <span className="text-xl font-mono font-bold text-[#B4F000] block mb-2">01</span>
              <h3 className="text-sm font-bold text-white mb-1">Architecture Discovery</h3>
              <p className="text-xs text-slate-400">
                Detailed requirements breakdown, database modeling, and hardware constraints assessment.
              </p>
            </div>

            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
              <span className="text-xl font-mono font-bold text-[#B4F000] block mb-2">02</span>
              <h3 className="text-sm font-bold text-white mb-1">Rapid Prototyping</h3>
              <p className="text-xs text-slate-400">
                Functional UI/UX components and benchtop PCB breadboard testing within the first two weeks.
              </p>
            </div>

            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
              <span className="text-xl font-mono font-bold text-[#B4F000] block mb-2">03</span>
              <h3 className="text-sm font-bold text-white mb-1">Staging &amp; Security</h3>
              <p className="text-xs text-slate-400">
                Rigorous testing on staging servers, penetration audit, and real-world sensor telemetry validation.
              </p>
            </div>

            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/5">
              <span className="text-xl font-mono font-bold text-[#B4F000] block mb-2">04</span>
              <h3 className="text-sm font-bold text-white mb-1">Production Rollout</h3>
              <p className="text-xs text-slate-400">
                Zero-downtime deployment, continuous monitoring, and ongoing maintenance SLA support.
              </p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
