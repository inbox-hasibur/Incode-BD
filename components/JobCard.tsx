"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";

export interface JobPosition {
  id: string;
  title: string;
  badges: string[];
  track: string;
  category: "Tech Tracks — CSE / SWE / IT / EEE" | "Non-Tech Tracks — BBA / Any Discipline";
  description: string;
  responsibilities: string[];
  requirements: string[];
  slots?: string;
  duration?: string;
  schedule?: string;
  isFullTime?: boolean;
}

export default function JobCard({
  job,
  onApply,
}: {
  job: JobPosition;
  onApply: (job: JobPosition) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card-interactive rounded-2xl p-6 sm:p-7 border border-white/10 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] text-[11px] font-mono font-semibold uppercase">
            {job.track}
          </span>
          {job.badges.map((b, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono"
            >
              {b}
            </span>
          ))}
        </div>

        {/* Job Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#B4F000] transition-colors">
          {job.title}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-5">
          {job.description}
        </p>

        {/* Quick Specs metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-5 pb-5 border-b border-white/5">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#B4F000]" /> Tongi Physical Workspace
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#B4F000]" /> {job.schedule || "10 AM - 1 PM Hybrid"}
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Briefcase className="w-3.5 h-3.5 text-[#B4F000]" /> {job.duration || "3-4 Month Internship"}
          </span>
        </div>

        {/* Fellowship & Workspace Facilities Container (ONLY for internship roles, NOT for full-time roles like Project Manager) */}
        {!job.isFullTime && (
          <div className="rounded-xl p-4 sm:p-5 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors mb-5">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
              <h4 className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                Fellowship &amp; Workspace Facilities
              </h4>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              As an early-stage startup, we currently onboard self-paid interns with a dedicated office space management fee of 2,000 BDT per month.
            </p>

            <div className="pt-2.5 border-t border-white/5">
              <span className="text-[11px] font-mono text-slate-400 block mb-2 font-medium">
                What you will receive:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>Official Internship Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>Dedicated Physical Workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>Real Production Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>1-on-1 Mock Defense Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>Flexible Hybrid Office Schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0" />
                  <span>Client Project Earning Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Expandable Details: Responsibilities & Requirements */}
        {expanded && (
          <div className="space-y-4 mb-6 pt-1 text-xs leading-relaxed animate-in fade-in duration-200">
            <div>
              <strong className="text-slate-200 block mb-2 font-mono uppercase text-[11px] tracking-wider text-[#B4F000]">
                Core Responsibilities:
              </strong>
              <ul className="space-y-1.5 text-slate-300">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F000] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <strong className="text-slate-200 block mb-2 font-mono uppercase text-[11px] tracking-wider text-[#B4F000]">
                Prerequisites &amp; Qualifications:
              </strong>
              <ul className="space-y-1.5 text-slate-300">
                {job.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B4F000] font-mono">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition"
        >
          <span>{expanded ? "Show Less" : "View Curriculum & Duties"}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        <button
          onClick={() => onApply(job)}
          className="btn-neon inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold tracking-wide"
        >
          <span>Apply Now</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
}
