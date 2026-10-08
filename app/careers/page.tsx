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
  GraduationCap,
  Copy,
  Check,
  AlertTriangle,
  X
} from "lucide-react";

const POSITIONS: JobPosition[] = [
  {
    id: "swe-intern",
    title: "Software Engineering Intern",
    track: "Core Engineering",
    badges: ["Full-Stack", "Flexible Tech Stack", "Real Client Work"],
    duration: "3-4 Month Internship",
    description:
      "We believe strong fundamentals transcend any single framework. Whether you code in React, Node.js, Python, PHP/Laravel, Flutter, Go, or Java — we welcome developers across all stacks to work on real client projects and scalable software architectures.",
    responsibilities: [
      "Develop clean, maintainable software components and REST/WebSocket APIs in your project's chosen stack.",
      "Integrate web and mobile client applications with databases (PostgreSQL, MySQL, MongoDB) and IoT telemetry feeds.",
      "Participate in weekly sprint syncs, architectural discussions, and staging QA deployments.",
      "Receive complete practicum and capstone project support throughout, concluding with a comprehensive mock defense.",
    ],
    requirements: [
      "Solid understanding of programming fundamentals, data structures, and Git version control.",
      "Hands-on experience in any modern stack (React, Node, Python, Laravel, Flutter, or similar).",
      "Problem-solving mindset and eagerness to build real-world software collaboratively.",
      "Open to university students and recent graduates in CSE / SE / EEE.",
    ],
  },
  {
    id: "pm-intern",
    title: "Associate Product Manager (APM)",
    track: "Management & Delivery",
    badges: ["Agile Sprints", "Client Liaison", "Roadmapping"],
    duration: "3-4 Month Internship",
    description:
      "Coordinate sprint cycles, interface between software/hardware engineers and client deliverables, track milestones, and ensure zero-delay project delivery.",
    responsibilities: [
      "Organize sprint cycles, backlog refinement, and milestone tracking in Jira/Trello.",
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
    duration: "3-4 Month Internship",
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
    duration: "3-4 Month Internship",
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
    duration: "3-4 Month Internship",
    description:
      "Prototype connected GPS tracking collars, touch-sensor smart switches, flash ESP32 firmware, and work with physical workspace oscilloscopes and multimeters at College Gate.",
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

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleApplyClick = (job?: JobPosition) => {
    if (job) {
      setSelectedJob(job);
    } else {
      setSelectedJob(POSITIONS[0]);
    }
    setIsModalOpen(true);
  };

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText("career@incodebd.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
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
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000] animate-pulse" />
            <span>INCODE BD // 3-4 MONTH INTERNSHIP PROGRAM</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            Build Real Systems. <br className="hidden sm:inline" />
            <span className="text-[#B4F000] drop-shadow-[0_0_25px_rgba(180,240,0,0.35)]">
              Launch Your Engineering Career.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal mb-8">
            Escape generic classroom theory. Join an active engineering team where you work on real client deployments, IoT hardware, and scalable architectures across flexible modern tech stacks.
          </p>

          {/* Core Candidate Value Proposition Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-left">
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <GraduationCap className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Practicum &amp; Capstone</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Full practicum project support &amp; comprehensive mock defense at the end
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <DollarSign className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">2K Monthly Installment</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Transparent 2,000 BDT/month installment covering desk, kits &amp; cloud servers
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <Layers className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Tech-Stack Flexible</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                React, Node, Python, Laravel, Flutter + hybrid flexible hours
              </span>
            </div>

            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <Award className="w-4 h-4 text-[#B4F000] mb-2" />
              <strong className="text-xs text-white block">Client Projects &amp; Perks</strong>
              <span className="text-[11px] text-slate-300 leading-tight block mt-0.5">
                Official completion certificate &amp; client project revenue-share opportunities
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
                alt="Incode BD Physical Engineering Workspace at College Gate"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-[#0A0D14]/90 border border-white/10 text-xs font-mono text-slate-200">
                Akon Villa Ground Floor Engineering Workspace
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block">
                Workspace &amp; Facilities
              </span>
              <h2 className="text-2xl font-bold text-white">
                A Real, Dedicated Physical Workspace Built for Makers
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No corporate fluff or artificial claims — just an authentic, fan-cooled collaborative environment equipped with dedicated desks, high-speed fiber internet, hardware testing tools, and teammates who genuinely care about building software and hardware that works.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-1">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  📍 College Gate, Tongi
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  🌀 Dedicated Desks &amp; Fans
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  ⚡ High-Speed Fiber Internet
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  ☕ Collaborative Meeting Table
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* The 2-Step Transparent Application Protocol */}
        <div id="application-protocol" className="mb-20 rounded-2xl p-6 sm:p-10 glass-panel border-2 border-[#B4F000]/40">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] text-xs font-mono font-bold uppercase mb-2">
                <span>Both Steps are 100% Mandatory</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white">
                How to Apply in 2 Simple Steps
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 w-fit">
              <MapPin className="w-4 h-4 text-[#B4F000]" />
              <span>Akon Villa, College Gate, Tongi</span>
            </div>
          </div>

          {/* Big Critical Notice: BOTH STEPS MANDATORY */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-400/50 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong className="text-amber-300 text-sm sm:text-base block font-bold mb-1 uppercase tracking-wide">
                ⚠️ ATTENTION CANDIDATES: BOTH STEPS ARE STRICTLY MANDATORY!
              </strong>
              <span>
                You <strong>MUST</strong> complete <strong>BOTH</strong> steps below. Do <strong>NOT</strong> only submit the form or only send an email. The Google Form is solely for <strong>contact details and questionnaires</strong> (class schedule &amp; background), while your formal application is reviewed from your <strong>emailed CV</strong>. Missing either step will result in an incomplete application!
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Step 1 */}
            <div className="bg-white/[0.03] p-6 rounded-2xl border-2 border-white/10 hover:border-[#B4F000]/40 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] font-black font-mono text-lg flex items-center justify-center">
                    01
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] font-mono font-bold uppercase">
                    Mandatory Step
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>Email Your Updated CV</span>
                  <Mail className="w-4 h-4 text-[#B4F000]" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  Send your updated CV, GitHub profile, or portfolio directly to:
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-3">
                  <a
                    href="mailto:career@incodebd.com"
                    className="text-[#B4F000] font-mono underline font-bold text-sm"
                  >
                    career@incodebd.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#B4F000]" /> : <Copy className="w-3.5 h-3.5 text-[#B4F000]" />}
                    <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>
              <p className="text-xs font-mono text-slate-400 bg-black/50 px-3 py-1.5 rounded-lg border border-white/5">
                Subject format: [Role Name] - [Your University Name]
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/[0.03] p-6 rounded-2xl border-2 border-white/10 hover:border-[#B4F000]/40 transition flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] font-black font-mono text-lg flex items-center justify-center">
                    02
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-[#B4F000]/15 text-[#B4F000] font-mono font-bold uppercase">
                    Mandatory Step
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>Submit Contact Details &amp; Questionnaire</span>
                  <ExternalLink className="w-4 h-4 text-[#B4F000]" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  The Google form is for <strong>contact details and questionnaires</strong> — recording your academic class schedule, weekly shift availability, and preferred track.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold"
                >
                  <span>Open Contact Details &amp; Questionnaire Form</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Transparent Fellowship Subsidy Note */}
          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
              <span>
                3-4 Month Internship: Flexible 2K/month installment covering physical workspace desk, hardware sensor kits, final mock defense &amp; practicum guidance.
              </span>
            </div>
            <span className="text-[#B4F000] font-semibold whitespace-nowrap">
              Rolling Admissions Active
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

      {/* ========================================================= */}
      {/* Interactive Application Modal Popup                      */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-2xl w-full bg-[#0D121D] border-2 border-[#B4F000] rounded-3xl p-6 sm:p-9 shadow-[0_0_80px_rgba(180,240,0,0.3)] text-left relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4 pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B4F000]/15 border border-[#B4F000]/30 text-[#B4F000] text-xs font-mono font-bold uppercase mb-2">
                <span>Both Steps are Strictly Mandatory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Applying for {selectedJob?.title || "3-4 Month Internship"}
              </h3>
            </div>

            {/* Big Alert Notice */}
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-400/50 flex items-start gap-3.5">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                <strong className="text-amber-300 block font-bold mb-1 uppercase tracking-wide">
                  ⚠️ BOTH STEPS ARE REQUIRED TO COMPLETE APPLICATION!
                </strong>
                <span>
                  Please do <strong>NOT</strong> only submit the form or only send an email. You must email your CV for evaluation <strong>AND</strong> submit the form for your contact details and questionnaire.
                </span>
              </div>
            </div>

            {/* The 2 Steps */}
            <div className="space-y-4 mb-6">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border-2 border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#B4F000] uppercase">
                    Step 01 (Mandatory): Email Your Updated CV
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#B4F000]/20 text-[#B4F000] font-mono font-bold">
                    Required
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-2">
                  Email your CV, GitHub, or portfolio directly to{" "}
                  <span className="text-[#B4F000] font-mono font-bold">career@incodebd.com</span>
                </p>
                <p className="text-xs font-mono text-slate-400 bg-black/60 px-3 py-1 rounded border border-white/5 mb-3">
                  Subject: [{selectedJob?.title || "Role"}] - [Your University Name]
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:career@incodebd.com?subject=${encodeURIComponent(
                      `${selectedJob?.title || "Internship"} Application - [Your University Name]`
                    )}`}
                    className="btn-neon inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Compose Email Now</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 transition"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#B4F000]" /> : <Copy className="w-3.5 h-3.5 text-[#B4F000]" />}
                    <span>{copiedEmail ? "Copied career@incodebd.com" : "Copy Email Address"}</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border-2 border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-200 uppercase">
                    Step 02 (Mandatory): Submit Contact Details &amp; Questionnaire
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/15 text-slate-200 font-mono font-bold">
                    Required
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-3">
                  This form is strictly for your <strong>contact details and questionnaires</strong> (recording class schedule, shift timings, and tech preferences).
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                >
                  <span>Open Contact Details &amp; Questionnaire Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Tongi Physical Workspace • 3-4 Month Program
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white transition"
              >
                I Understand &amp; Will Complete Both
              </button>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
