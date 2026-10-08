"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Terminal,
  Cpu,
  Layers,
  MapPin,
  Play,
  RotateCcw,
  CheckCircle,
  Activity,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

export default function LabSection() {
  const [commandHistory, setCommandHistory] = useState<string[]>([
    "incode-cli --connect-workspace --target=tongi-node-01",
    "[HANDSHAKE]: Connected to Incode BD Physical Hardware Node at Akon Villa, Tongi.",
    "[STATUS]: ESP32-S3 Dual-Core 240MHz • Free Heap: 284KB • Signal: -42dBm (Strong)",
    "[SENSORS]: Temp: 26.2°C • Humidity: 54% • GPS: 23.9012° N, 90.3984° E (College Gate)",
    "[CLOUD]: NatSep Audio DSP Pipeline sync active. Ready for commands.",
  ]);

  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response = "";

    switch (cleanCmd) {
      case "help":
        response = "Available commands: 'status', 'ping', 'sensors', 'fellowship', 'location', 'clear'";
        break;
      case "status":
        response = "[TELEMETRY]: All microservices and physical test benches operating at 99.99% uptime.";
        break;
      case "ping":
        response = "[PONG]: Cloud gateway latency to Tongi workspace bench = 14ms.";
        break;
      case "sensors":
        response = "[READINGS]: Accelerometer: Active • GPS Lock: 8 Satellites • Battery: 4.12V LiPo.";
        break;
      case "fellowship":
        response = "[RECRUITMENT]: Fall '26 Fellowship is active! 5 roles available at /careers.";
        break;
      case "location":
        response = "[HQ]: Akon Villa, Ground Floor, College Gate, Tongi, Gazipur-1711, Dhaka.";
        break;
      case "clear":
        setCommandHistory([]);
        return;
      default:
        response = `Command '${cmd}' not recognized. Type 'help' for available commands.`;
        break;
    }

    setCommandHistory((prev) => [...prev, `> ${cmd}`, response]);
    setInputVal("");
  };

  return (
    <section id="lab" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#080B11]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/30 text-[#B4F000] text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE PHYSICAL WORKSPACE &amp; ENGINEERING HUB</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            Where Academic Theory Meets Silicon &amp; Production Deployments.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most students and junior developers spend years trapped in mock tutorials. At our dedicated physical workspace in College Gate, Tongi, we build real hardware prototypes, deploy live telematics systems, and manage high-traffic cloud infrastructure.
          </p>
        </div>

        {/* 2-Column Grid: Left Philosophy / Right Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Lab Attributes */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#B4F000]/30 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#B4F000]/10 text-[#B4F000]">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Live Client Systems</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                We work on deployed commercial projects — from public transit tracking to AI audio isolation models. Every line of code impacts real users.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#B4F000]/30 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#B4F000]/10 text-[#B4F000]">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Physical Hardware Benches</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Oscilloscopes, logic analyzers, ESP32 boards, soldering stations, and LoRaWAN gateways situated right on the ground floor workspace.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#B4F000]/30 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#B4F000]/10 text-[#B4F000]">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Strategic Location</h3>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Located right at College Gate, Tongi with rapid transit access to leading university campuses (IUT, DUET, AIUB, BRAC, etc.).
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#B4F000] hover:underline"
              >
                <span>Read Fellowship Syllabus &amp; Open Batches</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Hardware Telemetry Terminal */}
          <div className="lg:col-span-7 bg-[#0A0D14] rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
            
            {/* Terminal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0F1420] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#B4F000]" />
                  incode-telemetry-console // v2.6.4
                </span>
              </div>

              <button
                onClick={() => handleCommand("clear")}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1"
                title="Clear screen"
              >
                <RotateCcw className="w-3 h-3" /> clear
              </button>
            </div>

            {/* Quick Command Chips */}
            <div className="px-4 py-2 bg-white/[0.02] border-b border-white/5 flex flex-wrap gap-2 items-center text-xs">
              <span className="text-[10px] font-mono text-slate-400 uppercase">Quick Commands:</span>
              {["status", "ping", "sensors", "fellowship", "location"].map((preset) => (
                <button
                  key={preset}
                  onClick={() => handleCommand(preset)}
                  className="px-2.5 py-0.5 rounded bg-white/5 hover:bg-[#B4F000]/15 hover:text-[#B4F000] border border-white/10 text-[11px] font-mono transition text-slate-300"
                >
                  {preset}
                </button>
              ))}
            </div>

            {/* Terminal Output Body */}
            <div className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto font-mono text-xs text-slate-300 space-y-2 bg-[#090C12]/90">
              {commandHistory.map((line, i) => (
                <div
                  key={i}
                  className={`${
                    line.startsWith(">")
                      ? "text-[#B4F000] font-bold"
                      : line.startsWith("[")
                      ? "text-slate-300"
                      : "text-slate-400"
                  } leading-relaxed`}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Terminal Input Row */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inputVal.trim()) handleCommand(inputVal);
              }}
              className="flex items-center gap-2 px-4 py-3 bg-[#0F1420] border-t border-white/10"
            >
              <span className="text-[#B4F000] font-mono text-xs font-bold">&gt;</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type command ('help', 'sensors', 'status')..."
                className="w-full bg-transparent border-none text-xs font-mono text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                type="submit"
                className="btn-neon px-3 py-1 rounded text-xs font-bold font-mono transition flex items-center gap-1"
              >
                Send <Play className="w-2.5 h-2.5 fill-current" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
