"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeCanvas from "@/components/ThreeCanvas";
import IncodeBotCompanion from "@/components/IncodeBotCompanion";
import JobCard, { JobPosition } from "@/components/JobCard";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Cpu,
  Layers,
  Award,
  Users,
  Briefcase,
  DollarSign,
  Coffee,
  GraduationCap
} from "lucide-react";

const POSITIONS: JobPosition[] = [
  {
    id: "swe-intern",
    title: "Software Engineering Intern",
    track: "Core Engineering",
    badges: ["Full-Stack", "Next.js", "Production Code"],
    slots: "3 Seats Available",
    description:
      "Work directly on production Next.js architectures, Supabase/PostgreSQL backends, real-time IoT websockets, and mission-critical client projects.",
    responsibilities: [
      "Author clean, maintainable TypeScript and Next.js App Router components.",
      "Build optimized REST and WebSocket endpoints connecting IoT telemetry with cloud dashboards.",
      "Participate in weekly architectural reviews, sprint planning, and staging QA deployments.",
      "Receive complete mentorship for your university final project / capstone defense.",
    ],
    requirements: [
      "Basic grasp of JavaScript/TypeScript, React fundamentals, and Git.",
      "Familiarity with SQL or MongoDB databases.",
      "Enthusiasm for real-world software shipping and collaborative problem solving.",
      "Open to university students and recent graduates in CSE / SE / EEE.",
    ],
  },
  {
    id: "pm-intern",
    title: "Associate Product Manager (APM)",
    track: "Management & Delivery",
    badges: ["Agile Sprints", "Client Liaison", "Roadmapping"],
    slots: "2 Seats Available",
    description:
      "Coordinate sprint cycles, interface between software/hardware engineers and client deliverables, track milestones, and ensure zero-delay project delivery.",
    responsibilities: [
      "Organize daily standups, backlog refinement, and milestone tracking in Jira/Trello.",
      "Document client requirements into clear technical specifications and user stories.",
      "Collaborate closely with technical leads on resource allocation and release timelines.",
      "Facilitate seamless communication across engineering, marketing, and design tracks.",
    ],
    requirements: [
      "Exceptional organizational and written communication skills in English and Bengali.",
      "Familiarity with Agile, Scrum, or modern project management frameworks.",
      "Background in CSE, MIS, BBA, or Engineering Management.",
      "Proactive leadership and problem-resolution mindset.",
    ],
  },
  {
    id: "marketing-intern",
    title: "Marketing & Growth Intern",
    track: "Brand & Outreach",
    badges: ["Campus Outreach", "B2B Deals", "Social Growth"],
    slots: "2 Seats Available",
    description:
      "Drive Incode BD brand visibility, manage university campus partnerships across IUT, DUET, AIUB, and leading universities, and execute digital marketing campaigns.",
    responsibilities: [
      "Manage official Incode BD channels (Facebook, LinkedIn, GitHub showcases).",
      "Organize campus tech talks, developer fellowship outreach, and student partnerships.",
      "Author compelling technical case studies showcasing our IoT and SaaS systems.",
      "Assist leadership in commercial B2B client presentations and discovery calls.",
    ],
    requirements: [
      "Energetic communicator with natural campus network and community presence.",
      "Basic familiarity with content creation, social media growth, and copywriting.",
      "Comfortable speaking with students, faculty, and corporate stakeholders.",
      "Studies in Marketing, BBA, English, Media, or CSE.",
    ],
  },
  {
    id: "creative-intern",
    title: "Creative & UI/UX Design Intern",
    track: "Creative Dev",
    badges: ["Figma", "Tailwind CSS", "Visual Craft"],
    slots: "2 Seats Available",
    description:
      "Design high-conversion dark-mode interfaces, author interactive design tokens in Figma, and build kinetic web layouts that leave lasting impressions.",
    responsibilities: [
      "Design responsive, dark-cyber UI mockups and interaction prototypes in Figma.",
      "Collaborate with frontend developers on Tailwind CSS styling and Framer Motion micro-interactions.",
      "Author high-converting social media creatives and product brand assets.",
      "Ensure pixel-perfect visual hierarchy across mobile, tablet, and widescreen monitors.",
    ],
    requirements: [
      "Demonstrated portfolio in Figma, UI design, or graphic art.",
      "Strong understanding of modern dark-mode palettes, typography, and spacing.",
      "Basic knowledge of HTML/CSS is a plus (willingness to learn Tailwind is celebrated).",
      "Passionate about award-caliber aesthetics and digital craft.",
    ],
  },
  {
    id: "iot-intern",
    title: "IoT & Embedded Systems Intern",
    track: "Hardware Lab",
    badges: ["ESP32", "PCB Design", "Sensors"],
    slots: "2 Seats Available",
    description:
      "Prototype connected GPS tracking collars, touch-sensor smart switches, flash ESP32 firmware, and work with physical lab oscilloscopes at our Tongi workspace.",
    responsibilities: [
      "Write and test C++ / MicroPython firmware for ESP32 and STM32 microcontrollers.",
      "Assemble and test physical breadboards, sensor modules (GPS, smoke, optical, touch).",
      "Assist in 2-layer PCB layout routing and surface-mount soldering at our physical benches.",
      "Validate wireless telemetry latency over Wi-Fi, BLE, and LoRaWAN gateways.",
    ],
    requirements: [
      "Hands-on experience with Arduino IDE, ESP-IDF, or microcontrollers.",
      "Basic electronic circuit debugging skills and familiarity with multimeters.",
      "Enthusiasm for physical invention and hardware fabrication.",
      "Student or graduate in EEE, ETE, CSE, or Applied Physics.",
    ],
  },
];

export default function CareersPage() {
  const formUrl =
    process.env.NEXT_PUBLIC_INTERNSHIP_FORM_URL ||
    "https://forms.gle/dE1ivECwFbrzrLHf6";

  const handleApplyClick = (job?: JobPosition) => {
    window.open(formUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0D14] text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <ThreeCanvas />
      <IncodeBotCompanion />
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* ========================================================= */}
        {/* Header Hero Banner                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#B4F000] text-xs font-mono mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-pulse" />
            <span>INCODE BD FELLOWSHIP &amp; TALENT PROGRAM // ACTIVE RECRUITMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            Build Real Systems. <br className="hidden sm:inline" />
            <span className="text-[#B4F000] drop-shadow-[0_0_25px_rgba(180,240,0,0.35)]">
              Launch Your Engineering Career.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            Escape generic classroom theory. Join an active engineering studio where you work on real client deployments, physical IoT hardware, and scalable cloud architectures.
          </p>

          {/* Core Candidate Value Proposition Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <GraduationCap className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Mock Defense Support</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Complete guidance for university project, thesis &amp; defense
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <DollarSign className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Client Earning Share</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Paid revenue-share opportunities on live commercial projects
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <Coffee className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Chill &amp; Flexible Culture</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Flexible hybrid hours (10 AM - 1 PM core days)
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <Award className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Certified Credentials</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Official recommendation letter &amp; verified work credentials
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* The Physical Workspace Section (Featuring Real Office)    */}
        {/* ========================================================= */}
        <div className="mb-16 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/office-interior.jpg"
                alt="Incode BD Engineering Lab Workspace at College Gate"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-[#0A0D14]/90 border border-white/10 text-xs font-mono text-slate-200">
                Akon Villa Ground Floor Prototyping Lab
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block">
                Workspace &amp; Facilities
              </span>
              <h2 className="text-2xl font-bold text-white">
                A Dedicated Air-Conditioned Studio Built for Makers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                You won&apos;t be trapped in isolated Zoom calls all day. When you visit our College Gate facility, you get a clean personal workstation, high-speed optical fiber, electronic prototyping components, and a comfortable collaborative environment.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-1">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  📍 College Gate, Tongi
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  ⚡ 24/7 Power Backup
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  ☕ Collaborative Lounge
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* The 2-Step Transparent Application Protocol               */}
        {/* ========================================================= */}
        <div className="mb-20 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#0F1420] via-[#121927] to-[#0F1420] border border-[#B4F000]/30 shadow-2xl">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#B4F000] uppercase mb-1 block">
                Direct Application Protocol
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                How to Apply in 2 Simple Steps
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 w-fit">
              <MapPin className="w-3.5 h-3.5 text-[#B4F000]" />
              <span>Akon Villa, College Gate, Tongi</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {/* Step 1 */}
            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] font-black font-mono text-base flex items-center justify-center flex-shrink-0">
                01
              </div>
              <div className="space-y-1.5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Send Your Updated CV via Email</span>
                  <Mail className="w-4 h-4 text-[#B4F000]" />
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Email your CV or GitHub link to{" "}
                  <a
                    href="mailto:career@incodebd.com"
                    className="text-[#B4F000] font-mono underline font-medium"
                  >
                    career@incodebd.com
                  </a>
                </p>
                <p className="text-[11px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded w-fit mt-1">
                  Subject: [Role Name] - [Your University Name]
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white/[0.02] p-5 rounded-xl border border-white/10 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] font-black font-mono text-base flex items-center justify-center flex-shrink-0">
                02
              </div>
              <div className="space-y-1.5 flex-1">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Submit the Candidate Questionnaire</span>
                  <ExternalLink className="w-4 h-4 text-[#B4F000]" />
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fill in your academic schedule, preferred track, and technical stack via our candidate portal form.
                </p>
                <div className="pt-2">
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <span>Open Screening Form</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Fellowship Subsidy Note */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
              <span>
                Transparent Fellowship Option: Flexible 2K/month installment covering physical lab desk, hardware sensor kits &amp; cloud servers.
              </span>
            </div>
            <span className="text-[#B4F000] font-semibold whitespace-nowrap">
              Rolling Batch Admissions
            </span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* Open Positions Grid                                       */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-1">
                Open Tracks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Select Your Role &amp; Apply
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hidden sm:inline-block">
              {POSITIONS.length} Active Tracks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {POSITIONS.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={() => handleApplyClick(job)}
              />
            ))}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
