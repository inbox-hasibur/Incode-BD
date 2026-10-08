"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

interface BotState {
  id: number;
  direction: "left-to-right" | "right-to-left";
  yPosition: number;
  speech: string;
  isPaused: boolean;
  isCelebrating: boolean;
}

const BOT_MESSAGES = [
  "Beep boop! Delivering IoT packets to Tongi Workspace! 📦",
  "Hardware + Software + Aesthetics = Perfection ✨",
  "ESP32 firmware compiling... Status: 100% OK ⚡",
  "Join our 3-4 Month Internship! Apply now 🚀",
  "Patrolling Akon Villa Ground Floor circuits 🔍",
  "Real-time NatSep audio pipeline operational 🎧",
  "Transit & Ubus tracking node online 🛰️",
];

export default function IncodeBotCompanion() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accentColor = isLight ? "#FF6B00" : "#B4F000";

  const [bot, setBot] = useState<BotState | null>(null);
  const [showSpeech, setShowSpeech] = useState(false);

  // Periodically spawn a bot companion
  useEffect(() => {
    let spawnTimer: NodeJS.Timeout;

    const scheduleNext = (delayMs: number) => {
      spawnTimer = setTimeout(() => {
        const direction = Math.random() > 0.5 ? "left-to-right" : "right-to-left";
        const yPosition = Math.floor(Math.random() * 8) + 84; // 84vh - 92vh
        const speech = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];

        setBot({
          id: Date.now(),
          direction,
          yPosition,
          speech,
          isPaused: false,
          isCelebrating: false,
        });
        setShowSpeech(false);
      }, delayMs);
    };

    // First spawn 8 seconds after load
    scheduleNext(8000);

    return () => clearTimeout(spawnTimer);
  }, []);

  const handleAnimationEnd = () => {
    setBot(null);
    setShowSpeech(false);
    // Schedule next bot 18-28 seconds later
    const nextDelay = Math.floor(Math.random() * 10000) + 18000;
    setTimeout(() => {
      const direction = Math.random() > 0.5 ? "left-to-right" : "right-to-left";
      const yPosition = Math.floor(Math.random() * 8) + 84;
      const speech = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];

      setBot({
        id: Date.now(),
        direction,
        yPosition,
        speech,
        isPaused: false,
        isCelebrating: false,
      });
    }, nextDelay);
  };

  if (!bot) return null;

  const handleMouseEnter = () => {
    setBot((prev) => (prev ? { ...prev, isPaused: true } : null));
    setShowSpeech(true);
  };

  const handleMouseLeave = () => {
    if (!bot.isCelebrating) {
      setBot((prev) => (prev ? { ...prev, isPaused: false } : null));
      setShowSpeech(false);
    }
  };

  const handleClick = () => {
    setBot((prev) =>
      prev
        ? {
            ...prev,
            isCelebrating: true,
            isPaused: false,
            speech: "Turbo boost activated! ⚡ 100% Speed!",
          }
        : null
    );
    setShowSpeech(true);
  };

  const isFlipped = bot.direction === "right-to-left";
  const duration = bot.isCelebrating ? "8s" : "22s";

  return (
    <>
      <style jsx global>{`
        @keyframes botMoveLR {
          0% { transform: translate3d(-90px, 0, 0); }
          100% { transform: translate3d(calc(100vw + 90px), 0, 0); }
        }
        @keyframes botMoveRL {
          0% { transform: translate3d(calc(100vw + 90px), 0, 0) scaleX(-1); }
          100% { transform: translate3d(-90px, 0, 0) scaleX(-1); }
        }
      `}</style>
      <div
        key={bot.id}
        style={{
          position: "fixed",
          top: `${bot.yPosition}vh`,
          left: 0,
          zIndex: 50,
          pointerEvents: "auto",
          animation: `${bot.direction === "left-to-right" ? "botMoveLR" : "botMoveRL"} ${duration} linear forwards`,
          animationPlayState: bot.isPaused ? "paused" : "running",
          willChange: "transform",
        }}
        className="group cursor-pointer select-none"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onAnimationEnd={handleAnimationEnd}
        title="Incode Companion Bot"
      >
        {/* Speech Bubble */}
        {showSpeech && (
          <div
            style={{
              transform: isFlipped ? "scaleX(-1)" : "none",
            }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F1420]/95 light:bg-white border border-[#B4F000]/60 light:border-orange-400 text-slate-100 light:text-slate-800 text-xs font-mono px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 z-50 pointer-events-none"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B4F000] light:text-[#FF6B00]" />
            <span>{bot.speech}</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0F1420] light:bg-white border-b border-r border-[#B4F000]/60 light:border-orange-400 rotate-45" />
          </div>
        )}

        {/* Robot SVG Graphics */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-200 group-hover:scale-110">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="92" rx="26" ry="5" fill={isLight ? "rgba(255, 107, 0, 0.15)" : "rgba(180, 240, 0, 0.2)"} />
            {/* Wheels */}
            <rect x="22" y="76" width="12" height="18" rx="6" fill="#1E293B" stroke="#0A0D14" strokeWidth="2" />
            <circle cx="28" cy="85" r="3" fill={accentColor} />
            <rect x="66" y="76" width="12" height="18" rx="6" fill="#1E293B" stroke="#0A0D14" strokeWidth="2" />
            <circle cx="72" cy="85" r="3" fill={accentColor} />
            {/* Main Chassis */}
            <rect x="24" y="32" width="52" height="46" rx="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2.5" />
            <path d="M24 44 H30 V66 H24 Z" fill="#F97316" />
            {/* Antenna */}
            <line x1="50" y1="32" x2="50" y2="20" stroke="#64748B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="18" r="4.5" fill={accentColor} />
            {/* Face Screen */}
            <rect x="32" y="40" width="36" height="26" rx="8" fill="#090A0F" stroke="#1E293B" strokeWidth="2" />
            {/* Digital Eyes */}
            {bot.isCelebrating ? (
              <g stroke={accentColor} strokeWidth="2.5" strokeLinecap="round">
                <path d="M38 54 L42 50 L46 54" />
                <path d="M54 54 L58 50 L62 54" />
              </g>
            ) : (
              <g fill={accentColor}>
                <rect x="38" y="48" width="8" height="9" rx="3" />
                <rect x="54" y="48" width="8" height="9" rx="3" />
              </g>
            )}
            {/* Arms & Delivery Box */}
            <path d="M30 62 L18 68 L24 74" stroke="#64748B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 62 L82 68 L76 74" stroke="#64748B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <g transform="translate(64, 46)">
              <rect x="0" y="0" width="18" height="18" rx="4" fill={isLight ? "rgba(255, 107, 0, 0.25)" : "rgba(180, 240, 0, 0.45)"} stroke={accentColor} strokeWidth="1.5" />
              <line x1="9" y1="3" x2="9" y2="15" stroke="#090A0F" strokeWidth="1.5" />
              <line x1="3" y1="9" x2="15" y2="9" stroke="#090A0F" strokeWidth="1.5" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}
