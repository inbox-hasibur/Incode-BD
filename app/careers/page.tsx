"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  Sparkles,
  Coffee,
  GraduationCap,
  Copy,
  Check,
  AlertTriangle,
  X,
  Code2,
  Terminal,
  BrainCircuit,
  Megaphone,
  Headphones,
  UserCheck
} from "lucide-react";

const POSITIONS: JobPosition[] = [
  // ==========================================
  // [Tech Tracks: CSE / SWE / IT / EEE]
  // ==========================================
  {
    id: "swe-intern",
    title: "Software Engineering & Web Development Intern",
    track: "Tech Tracks (CSE / SWE / IT / EEE)",
    category: "Tech Tracks: CSE / SWE / IT / EEE",
    badges: ["Flexible Tech Stack", "Full-Stack", "REST & WebSockets", "Databases"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "We believe strong fundamentals transcend any single framework. Whether you code in React, Next.js, Node.js, Python, PHP/Laravel, Flutter, Go, or Java, we welcome developers across all stacks to work on real client projects and scalable software architectures.",
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
      "Open to university students and recent graduates in CSE / SWE / IT / EEE.",
    ],
  },
  {
    id: "creative-uiux-intern",
    title: "Creative & UI/UX Design Intern",
    track: "Tech Tracks (CSE / SWE / IT / EEE)",
    category: "Tech Tracks: CSE / SWE / IT / EEE",
    badges: ["Figma", "Tailwind CSS", "Visual Craft", "Design System"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Design high-conversion dark-mode interfaces, author interactive design tokens in Figma, and build kinetic web layouts with Tailwind CSS that leave lasting impressions.",
    responsibilities: [
      "Design responsive, dark-cyber UI mockups and interaction prototypes in Figma.",
      "Collaborate with frontend developers on Tailwind CSS styling, design tokens, and micro-interactions.",
      "Author high-converting social media creatives, infographics, and product brand assets.",
      "Ensure pixel-perfect visual hierarchy across mobile, tablet, and widescreen monitors.",
    ],
    requirements: [
      "Demonstrated portfolio or case studies in Figma, UI design, or graphic art.",
      "Strong understanding of modern dark-mode palettes, typography, and spacing.",
      "Basic knowledge of HTML/CSS is a plus (willingness to learn Tailwind CSS is celebrated).",
      "Passionate about award-caliber aesthetics and digital craft.",
    ],
  },
  {
    id: "iot-embedded-intern",
    title: "IoT & Embedded Systems Intern",
    track: "Tech Tracks (CSE / SWE / IT / EEE)",
    category: "Tech Tracks: CSE / SWE / IT / EEE",
    badges: ["ESP32", "Hardware & Smart Sensors", "PCB Design", "MicroPython"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Prototype connected GPS tracking collars, water tank automation, touch-sensor smart switches, flash ESP32 firmware, and work with physical workspace test equipment at College Gate.",
    responsibilities: [
      "Write and test C++ / MicroPython firmware for ESP32 and STM32 microcontrollers.",
      "Assemble and test physical breadboards, sensor modules (GPS, ultrasonic, touch, optical).",
      "Assist in 2-layer PCB layout routing and surface-mount soldering at our physical benches.",
      "Validate wireless telemetry latency over Wi-Fi, BLE, and LoRaWAN gateways.",
    ],
    requirements: [
      "Hands-on experience with Arduino IDE, ESP-IDF, or microcontroller programming.",
      "Basic electronic circuit debugging skills and familiarity with multimeters.",
      "Enthusiasm for physical invention, robotics, and hardware fabrication.",
      "Open to university students or graduates in CSE / SWE / IT / EEE / ETE / Applied Physics.",
    ],
  },
  {
    id: "ai-data-intern",
    title: "AI & Data Engineering Intern",
    track: "Tech Tracks (CSE / SWE / IT / EEE)",
    category: "Tech Tracks: CSE / SWE / IT / EEE",
    badges: ["Pipelines & AI/ML Models", "Python", "Data Engineering", "LLM Integration"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Build automated data scraping and ingestion pipelines, neural text-to-speech / NLP models, news aggregation engines (Khobor AI), and intelligent telemetry analytics for IoT sensors.",
    responsibilities: [
      "Design and optimize automated data ingestion, ETL pipelines, and API connectors in Python.",
      "Implement and fine-tune machine learning and NLP workflows (LLM APIs, embeddings, news summarization).",
      "Process and analyze telemetry sensor datasets for anomaly detection and pattern prediction.",
      "Deploy lightweight inference endpoints and microservices with Docker.",
    ],
    requirements: [
      "Proficiency in Python and fundamental data libraries (Pandas, NumPy, Scikit-Learn).",
      "Familiarity with REST APIs, web scraping (BeautifulSoup/Playwright), or LLM integrations.",
      "Curiosity for artificial intelligence, real-time streaming, and algorithmic efficiency.",
      "Open to students or graduates in CSE / SWE / IT / Data Science / EEE.",
    ],
  },

  // ==========================================
  // [Non-Tech Tracks: BBA / Any Discipline]
  // ==========================================
  {
    id: "project-manager",
    title: "Project Manager",
    track: "Project Management",
    category: "Non-Tech Tracks: BBA / Any Discipline",
    badges: ["Full-Time / Regular", "Agile Sprints", "Client Delivery"],
    duration: "Full-Time / Regular",
    schedule: "Full-Time Schedule",
    isFullTime: true,
    description:
      "Lead technical project delivery, coordinate agile sprint cycles between corporate clients and engineering teams, manage scopes, milestones, and deliverables for web, cloud, and IoT client contracts.",
    responsibilities: [
      "Manage end-to-end client software and hardware project lifecycle from scope to production handover.",
      "Lead sprint planning, daily standups, backlog prioritization, and milestone reviews in Jira/Trello.",
      "Serve as the direct liaison between corporate clients and the development team to clarify requirements.",
      "Ensure quality assurance, zero-delay release timelines, and transparent stakeholder progress updates.",
    ],
    requirements: [
      "Demonstrated experience in technical project management, Agile/Scrum delivery, or software team coordination.",
      "Exceptional organizational and written/verbal communication skills in English and Bengali.",
      "Background in CSE, SE, MIS, BBA, or Engineering Management.",
      "Proactive leadership and problem-resolution mindset.",
    ],
  },
  {
    id: "marketing-growth-intern",
    title: "Marketing & Growth Intern",
    track: "Non-Tech Tracks (BBA / Any Discipline)",
    category: "Non-Tech Tracks: BBA / Any Discipline",
    badges: ["B2B Deals", "Campus Outreach", "Growth Strategy", "Content & Media"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Drive Incode BD brand visibility, manage university campus partnerships across IUT, DUET, AIUB, and leading universities, and execute digital marketing campaigns and corporate outreach.",
    responsibilities: [
      "Manage official Incode BD channels (Facebook, LinkedIn, GitHub showcases, campus clubs).",
      "Organize campus tech talks, developer fellowship outreach, and student partnerships.",
      "Author compelling technical case studies showcasing our IoT and SaaS systems.",
      "Assist leadership in commercial B2B client presentations, proposals, and discovery calls.",
    ],
    requirements: [
      "Energetic communicator with natural campus network and community presence.",
      "Basic familiarity with content creation, social media growth, and copywriting.",
      "Comfortable speaking with students, faculty, and corporate stakeholders.",
      "Open to students in BBA, Marketing, Communications, English, or any discipline.",
    ],
  },
  {
    id: "client-relations-executive",
    title: "Client Relations / Customer Support Executive",
    track: "Non-Tech Tracks (BBA / Any Discipline)",
    category: "Non-Tech Tracks: BBA / Any Discipline",
    badges: ["Client Relations", "Customer Support", "CRM", "Communication"],
    duration: "3-4 Month Internship / Fellowship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Serve as the direct bridge between Incode BD and enterprise software & IoT clients. Ensure seamless onboarding, prompt communication, professional client handling, and high satisfaction.",
    responsibilities: [
      "Manage client inquiries, onboarding workflows, and post-delivery support via phone, email, and CRM.",
      "Coordinate with technical engineering teams to communicate client feedback and bug reports.",
      "Prepare meeting agendas, follow-up minutes, and project status documentation for corporate clients.",
      "Foster long-term relationships and identify upselling or renewal opportunities.",
    ],
    requirements: [
      "Fluent spoken and written communication in Bengali and English.",
      "Empathetic problem-solver with strong interpersonal and customer handling skills.",
      "Familiarity with email communication, Google Docs/Sheets, and CRM tools.",
      "Open to students or graduates in BBA, English, Economics, Social Sciences, or any discipline.",
    ],
  },
  {
    id: "hr-talent-intern",
    title: "HR & Talent Operations Intern",
    track: "Non-Tech Tracks (BBA / Any Discipline)",
    category: "Non-Tech Tracks: BBA / Any Discipline",
    badges: ["People Ops", "Talent Acquisition", "Batch Coordination", "Office Ops"],
    duration: "3-4 Month Internship",
    schedule: "10 AM - 1 PM Hybrid",
    description:
      "Coordinate talent recruitment, candidate evaluation, internship batch operations, and cultivate an inspiring collaborative engineering culture at our College Gate physical workspace.",
    responsibilities: [
      "Screen incoming candidate applications, schedule interviews, and maintain applicant tracking sheets.",
      "Coordinate onboarding logistics, attendance, and mock defense scheduling for internship fellows.",
      "Assist leadership with internal HR policies, employee documentation, and official certificate issuance.",
      "Organize team-building activities, workspace culture initiatives, and internal comms.",
    ],
    requirements: [
      "Strong organizational, interpersonal, and communication skills.",
      "Passion for people operations, talent acquisition, and organizational development.",
      "Proficiency in Google Workspace (Sheets, Docs) and professional correspondence.",
      "Open to students or graduates in HRM, BBA, Public Administration, Psychology, or any discipline.",
    ],
  },
];

export default function CareersPage() {
  const formUrl =
    process.env.NEXT_PUBLIC_INTERNSHIP_FORM_URL ||
    "https://forms.gle/jar4AikSZNRMiNac8";

  const [activeTab, setActiveTab] = useState<"all" | "tech" | "non-tech">("all");
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

  const filteredPositions = POSITIONS.filter((pos) => {
    if (activeTab === "tech") {
      return pos.category === "Tech Tracks: CSE / SWE / IT / EEE";
    }
    if (activeTab === "non-tech") {
      return pos.category === "Non-Tech Tracks: BBA / Any Discipline";
    }
    return true;
  });

  return (
    <div className="relative min-h-screen text-slate-100 flex flex-col justify-between selection:bg-[#B4F000] selection:text-black">
      <Navbar />

      <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
        
        {/* ========================================================= */}
        {/* Header Hero Banner                                        */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto pt-6 pb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[#B4F000] text-xs font-mono mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000] animate-pulse" />
            <span>Careers &amp; Fellowships</span>
          </div>

          <h1 className="font-tagline text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight">
            Build Real Systems. <br className="hidden sm:inline" />
            <span className="text-[#B4F000] drop-shadow-[0_0_25px_rgba(180,240,0,0.35)]">
              Launch Your Engineering &amp; Professional Career.
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Escape generic classroom theory. Join an active engineering startup in Dhaka where you work on real client deployments, IoT hardware, and scalable architectures across flexible modern stacks.
          </p>
        </div>


        {/* ========================================================= */}
        {/* The 2-Step Transparent Application Protocol               */}
        {/* ========================================================= */}
        <div id="application-protocol" className="mb-20 rounded-2xl p-6 sm:p-10 glass-panel border-2 border-[#B4F000]/40">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] text-xs font-mono font-bold uppercase mb-2">
                <span>Both Steps are 100% Mandatory</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">
                How to Apply in 2 Simple Steps
              </h2>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 w-fit">
              <MapPin className="w-4 h-4 text-[#B4F000]" />
              <span>Akon Villa, College Gate, Tongi</span>
            </div>
          </div>

          {/* Big Critical Notice: BOTH STEPS MANDATORY (Brand Theme Aligned) */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#B4F000]/10 border-2 border-[#B4F000]/40 shadow-[0_0_25px_rgba(180,240,0,0.1)] flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-[#B4F000] flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong className="text-[#B4F000] text-sm sm:text-base block font-bold mb-1 uppercase tracking-wide">
                ⚠️ ATTENTION CANDIDATES: BOTH STEPS ARE STRICTLY MANDATORY!
              </strong>
              <span>
                You <strong>MUST</strong> complete <strong>BOTH</strong> steps below. Do <strong>NOT</strong> only submit the form or only send an email. The Google Form is solely for <strong>IncodeBD Onboarding Screening Form</strong> (class schedule &amp; background), while your formal application is reviewed from your <strong>emailed CV</strong>. Missing either step will result in an incomplete application!
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
              <p className="text-xs font-mono text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-black/50 px-3 py-2 rounded-xl border border-slate-300/80 dark:border-white/10 shadow-sm">
                Subject format: [Role Name] - [Your University Name / Name]
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
                  <span>IncodeBD Onboarding Screening Form</span>
                  <ExternalLink className="w-4 h-4 text-[#B4F000]" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  The Google form is for <strong>IncodeBD Onboarding Screening Form</strong> to record your academic class schedule, weekly shift availability, and preferred track.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold"
                >
                  <span>IncodeBD Onboarding Screening Form</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>

          {/* Admission Info Note */}
          <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm text-slate-300 font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
              <span>
                Track curricula, responsibilities, and fellowship facilities are detailed inside each role card below.
              </span>
            </div>
            <span className="text-[#B4F000] font-semibold whitespace-nowrap">
              Rolling Admissions Active
            </span>
          </div>

        </div>

        {/* ========================================================= */}
        {/* Open Positions Grid & Category Navigation                 */}
        {/* ========================================================= */}
        <div className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase text-[#B4F000] tracking-wider block mb-1">
                📌 Open Tracks
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Select Your Role &amp; Apply
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex items-center p-1 rounded-xl bg-white/5 border border-white/10 gap-1">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  activeTab === "all"
                    ? "bg-[#B4F000] text-black font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                All Tracks ({POSITIONS.length})
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  activeTab === "tech"
                    ? "bg-[#B4F000] text-black font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Tech Tracks (4)
              </button>
              <button
                onClick={() => setActiveTab("non-tech")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition ${
                  activeTab === "non-tech"
                    ? "bg-[#B4F000] text-black font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Non-Tech Tracks (4)
              </button>
            </div>
          </div>

          {/* Group 1: Tech Tracks */}
          {(activeTab === "all" || activeTab === "tech") && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <Code2 className="w-5 h-5 text-[#B4F000]" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  [Tech Tracks: CSE / SWE / IT / EEE]
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#B4F000]/10 text-[#B4F000] border border-[#B4F000]/25">
                  4 Active Tracks
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {POSITIONS.filter((j) => j.category === "Tech Tracks: CSE / SWE / IT / EEE").map(
                  (job) => (
                    <JobCard
                       key={job.id}
                       job={job}
                       onApply={() => handleApplyClick(job)}
                    />
                  )
                )}
              </div>
            </div>
          )}

          {/* Group 2: Non-Tech Tracks */}
          {(activeTab === "all" || activeTab === "non-tech") && (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                <Users className="w-5 h-5 text-[#B4F000]" />
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  [Non-Tech Tracks: BBA / Any Discipline]
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/15">
                  4 Active Tracks
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {POSITIONS.filter((j) => j.category === "Non-Tech Tracks: BBA / Any Discipline").map(
                  (job) => (
                    <JobCard
                      key={job.id}
                      job={job}
                      onApply={() => handleApplyClick(job)}
                    />
                  )
                )}
              </div>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* The Physical Workspace Section (Featuring Real Office)    */}
        {/* ========================================================= */}
        <div className="mt-16 mb-6 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src="/office-interior.jpg"
                alt="Incode BD Physical Engineering Workspace at College Gate"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-black/90 border border-slate-300/80 dark:border-white/20 text-xs font-mono text-slate-900 dark:text-white shadow-md">
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
                No corporate fluff or artificial claims, just an authentic, collaborative environment equipped with dedicated desks, high-speed fiber internet, hardware testing tools, and teammates who genuinely care about building software and hardware that works.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300 pt-1">
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  📍 College Gate, Tongi
                </span>
                <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  🌀 Dedicated Desks &amp; Physical Space
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

      </main>

      {/* ========================================================= */}
      {/* Interactive Application Modal Popup                       */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="max-w-2xl w-full bg-white dark:bg-[#0D121D] border-2 border-[#FF6B00] dark:border-[#B4F000] rounded-3xl p-6 sm:p-9 shadow-[0_0_80px_rgba(255,107,0,0.2)] dark:shadow-[0_0_80px_rgba(180,240,0,0.3)] text-left relative overflow-hidden max-h-[90vh] overflow-y-auto text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-4 pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/15 dark:bg-[#B4F000]/15 border border-[#FF6B00]/30 dark:border-[#B4F000]/30 text-[#FF6B00] dark:text-[#B4F000] text-xs font-mono font-bold uppercase mb-2">
                <span>Both Steps are Strictly Mandatory</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white">
                Applying for {selectedJob?.title || "Position"}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                Track: {selectedJob?.track}
              </p>
            </div>

            {/* Big Alert Notice (Theme Aligned) */}
            <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-[#FF6B00]/10 dark:bg-[#B4F000]/10 border-2 border-[#FF6B00]/40 dark:border-[#B4F000]/40 shadow-[0_0_20px_rgba(255,107,0,0.1)] dark:shadow-[0_0_20px_rgba(180,240,0,0.1)] flex items-start gap-3.5">
              <AlertTriangle className="w-6 h-6 text-[#FF6B00] dark:text-[#B4F000] flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                <strong className="text-[#FF6B00] dark:text-[#B4F000] block font-bold mb-1 uppercase tracking-wide">
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
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border-2 border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#FF6B00] dark:text-[#B4F000] uppercase">
                    Step 01 (Mandatory): Email Your Updated CV
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FF6B00]/15 dark:bg-[#B4F000]/20 text-[#FF6B00] dark:text-[#B4F000] font-mono font-bold">
                    Required
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                  Email your CV, GitHub, or portfolio directly to{" "}
                  <span className="text-[#FF6B00] dark:text-[#B4F000] font-mono font-bold">career@incodebd.com</span>
                </p>
                <p className="text-xs font-mono text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-black/60 px-3 py-1.5 rounded-lg border border-slate-300/80 dark:border-white/5 mb-3">
                  Subject: [{selectedJob?.title || "Role"}] - [Your Name]
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`mailto:career@incodebd.com?subject=${encodeURIComponent(
                      `${selectedJob?.title || "Role"} Application - [Your Name]`
                    )}`}
                    className="btn-neon inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Compose Email Now</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-slate-200 transition"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#FF6B00] dark:text-[#B4F000]" /> : <Copy className="w-3.5 h-3.5 text-[#FF6B00] dark:text-[#B4F000]" />}
                    <span>{copiedEmail ? "Copied career@incodebd.com" : "Copy Email Address"}</span>
                  </button>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.03] border-2 border-slate-200 dark:border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-200 uppercase">
                    Step 02 (Mandatory): Submit IncodeBD Onboarding Screening Form
                  </span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-white/15 text-slate-800 dark:text-slate-200 font-mono font-bold">
                    Required
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-3">
                  {selectedJob?.isFullTime ? (
                    <span>
                      This form is strictly for your <strong>IncodeBD Onboarding Screening Form</strong> to record your contact info, project delivery background, and availability.
                    </span>
                  ) : (
                    <span>
                      This form is strictly for your <strong>IncodeBD Onboarding Screening Form</strong> to record your academic class schedule, weekly shift availability, and preferred track.
                    </span>
                  )}
                </p>
                <a
                  href={formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold"
                >
                  <span>IncodeBD Onboarding Screening Form</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Footer action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Tongi Physical Workspace • {selectedJob?.duration || "10 AM - 1 PM Hybrid"}
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
