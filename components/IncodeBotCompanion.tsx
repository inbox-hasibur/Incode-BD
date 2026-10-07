"use client";

import React, { useState, useEffect, useRef } from "react";
import { Sparkles, X } from "lucide-react";

interface BotState {
  id: number;
  active: boolean;
  direction: "left-to-right" | "right-to-left";
  yPosition: number; // percentage from top (e.g. 88% = near bottom)
  speech: string;
  isPaused: boolean;
  isCelebrating: boolean;
  progress: number; // 0 to 100
}

const BOT_MESSAGES = [
  "Beep boop! Delivering IoT packets to Tongi Lab! 📦",
  "Hardware + Software + Aesthetics = Perfection ✨",
  "ESP32 firmware compiling... Status: 100% OK ⚡",
  "Join our Engineering Fellowship! Apply now 🚀",
  "Patrolling Akon Villa Ground Floor circuits 🔍",
  "Real-time NatSep audio pipeline operational 🎧",
  "Transit & Ubus tracking node online 🛰️",
];

export default function IncodeBotCompanion() {
  const [bot, setBot] = useState<BotState | null>(null);
  const [showSpeech, setShowSpeech] = useState(false);
  const animRef = useRef<number | null>(null);

  // Trigger bot spawn periodically
  useEffect(() => {
    let spawnTimer: NodeJS.Timeout;

    const scheduleNextBot = () => {
      // Random delay between 12s and 24s
      const delay = Math.floor(Math.random() * 12000) + 12000;
      spawnTimer = setTimeout(() => {
        spawnBot();
      }, delay);
    };

    const spawnBot = () => {
      const direction: "left-to-right" | "right-to-left" =
        Math.random() > 0.5 ? "left-to-right" : "right-to-left";
      
      // Random y level (near bottom: 82% to 92% of screen)
      const yPosition = Math.floor(Math.random() * 10) + 82;
      const speech =
        BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];

      setBot({
        id: Date.now(),
        active: true,
        direction,
        yPosition,
        speech,
        isPaused: false,
        isCelebrating: false,
        progress: direction === "left-to-right" ? -10 : 110,
      });

      setShowSpeech(false);
    };

    // First spawn after 6 seconds on initial load
    const initialTimer = setTimeout(() => {
      spawnBot();
    }, 6000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(spawnTimer);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Animate bot movement across screen
  useEffect(() => {
    if (!bot || !bot.active || bot.isPaused) return;

    let lastTime = performance.now();
    const speed = bot.isCelebrating ? 0.35 : 0.12; // percentage per millisecond

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      setBot((prev) => {
        if (!prev || prev.isPaused) return prev;

        let nextProgress = prev.progress;
        if (prev.direction === "left-to-right") {
          nextProgress += delta * speed * 0.1;
          if (nextProgress > 110) {
            // Reached other side, despawn
            return null;
          }
        } else {
          nextProgress -= delta * speed * 0.1;
          if (nextProgress < -10) {
            // Reached other side, despawn
            return null;
          }
        }

        return { ...prev, progress: nextProgress };
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);

    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [bot?.active, bot?.isPaused, bot?.isCelebrating, bot?.direction]);

  if (!bot || !bot.active) return null;

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
            speech: "Wheee! High-voltage turbo boost! ⚡",
          }
        : null
    );
    setShowSpeech(true);

    setTimeout(() => {
      setShowSpeech(false);
    }, 2800);
  };

  const isFlipped = bot.direction === "right-to-left";

  return (
    <div
      style={{
        position: "fixed",
        top: `${bot.yPosition}vh`,
        left: `${bot.progress}vw`,
        zIndex: 50,
        pointerEvents: "auto",
        transition: bot.isPaused ? "none" : "transform 0.1s linear",
        transform: `translate(-50%, -50%) ${
          isFlipped ? "scaleX(-1)" : "scaleX(1)"
        }`,
      }}
      className="group cursor-pointer select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      title="Click me for a boost!"
    >
      {/* Speech Bubble */}
      {showSpeech && (
        <div
          style={{
            transform: isFlipped ? "scaleX(-1)" : "none",
          }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0F1420]/95 border border-[#B4F000]/60 text-slate-100 text-xs font-mono px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-bounce flex items-center gap-2 z-50 pointer-events-none"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B4F000]" />
          <span>{bot.speech}</span>
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0F1420] border-b border-r border-[#B4F000]/60 rotate-45" />
        </div>
      )}

      {/* Robot SVG Graphics matching the 3D motherboard bot */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_16px_rgba(180,240,0,0.3)] transition-transform duration-200 group-hover:scale-110">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Glowing Ground Shadow */}
          <ellipse
            cx="50"
            cy="92"
            rx="30"
            ry="6"
            fill="rgba(180, 240, 0, 0.25)"
            className="animate-pulse"
          />

          {/* Left & Right Wheels */}
          <rect
            x="22"
            y="76"
            width="12"
            height="18"
            rx="6"
            fill="#1E293B"
            stroke="#0A0D14"
            strokeWidth="2"
          />
          <circle cx="28" cy="85" r="3" fill="#B4F000" />

          <rect
            x="66"
            y="76"
            width="12"
            height="18"
            rx="6"
            fill="#1E293B"
            stroke="#0A0D14"
            strokeWidth="2"
          />
          <circle cx="72" cy="85" r="3" fill="#B4F000" />

          {/* Robot Main Chassis (Rounded Cuboid) */}
          <rect
            x="24"
            y="32"
            width="52"
            height="46"
            rx="14"
            fill="#E2E8F0"
            stroke="#94A3B8"
            strokeWidth="2.5"
          />

          {/* Side Orange Trim */}
          <path
            d="M24 44 H30 V66 H24 Z"
            fill="#F97316"
          />

          {/* Top Antenna */}
          <line
            x1="50"
            y1="32"
            x2="50"
            y2="20"
            stroke="#64748B"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle
            cx="50"
            cy="18"
            r="4.5"
            fill="#B4F000"
            className="animate-ping opacity-80"
          />
          <circle
            cx="50"
            cy="18"
            r="4.5"
            fill="#B4F000"
          />

          {/* Face Screen (Dark Glass) */}
          <rect
            x="32"
            y="40"
            width="36"
            height="26"
            rx="8"
            fill="#090A0F"
            stroke="#1E293B"
            strokeWidth="2"
          />

          {/* Glowing Digital Eyes */}
          {bot.isCelebrating ? (
            // Excited Happy Eyes: ^ ^
            <g stroke="#B4F000" strokeWidth="2.5" strokeLinecap="round">
              <path d="M38 54 L42 50 L46 54" />
              <path d="M54 54 L58 50 L62 54" />
            </g>
          ) : (
            // Normal Digital Eyes with Blink Animation
            <g fill="#B4F000">
              <rect x="38" y="48" width="8" height="9" rx="3" className="animate-pulse" />
              <rect x="54" y="48" width="8" height="9" rx="3" className="animate-pulse" />
            </g>
          )}

          {/* Carrying Arms & Glowing Data Cube in Front */}
          <g>
            {/* Left Arm */}
            <path
              d="M30 62 L18 68 L24 74"
              stroke="#64748B"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right Arm */}
            <path
              d="M70 62 L82 68 L76 74"
              stroke="#64748B"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Glowing Tech Delivery Box */}
            <g transform="translate(64, 46)">
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                rx="4"
                fill="rgba(180, 240, 0, 0.45)"
                stroke="#B4F000"
                strokeWidth="2"
              />
              <line x1="10" y1="4" x2="10" y2="16" stroke="#090A0F" strokeWidth="2" strokeLinecap="round" />
              <line x1="4" y1="10" x2="16" y2="10" stroke="#090A0F" strokeWidth="2" strokeLinecap="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
