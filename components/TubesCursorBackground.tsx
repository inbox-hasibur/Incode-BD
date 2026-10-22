"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

// Final Tuned Incode BD 3D Tubes Configuration (Experimentally Approved)
const TUBES_CONFIG = {
  light: {
    colors: ["#FFFFFF", "#F5F5F4", "#FFFFFF"],
    lights: ["#FFFFFF", "#FAFAF9", "#E7E5E4", "#FFFFFF"],
    intensity: 80,
    opacity: 0.07,
    mixBlendMode: "normal" as const,
    blur: 0.5,
    spotlightOpacity: 0.02,
    spotlightSize: 380,
    spotlightColor: "#78716C",
  },
  dark: {
    colors: ["#CCFF00", "#B4F000", "#84CC16"],
    lights: ["#CCFF00", "#A3E635", "#BEF264", "#10B981"],
    intensity: 110,
    opacity: 0.48,
    mixBlendMode: "screen" as const,
    blur: 0,
    spotlightOpacity: 0.1,
    spotlightSize: 550,
    spotlightColor: "#CCFF00",
  },
};

export default function TubesCursorBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tubesInstanceRef = useRef<any>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const activeConfig = isLight ? TUBES_CONFIG.light : TUBES_CONFIG.dark;

  // Fluid spotlight cursor illumination
  useEffect(() => {
    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible && spotlightRef.current) {
        isVisible = true;
        spotlightRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = "0";
      }
    };

    const updateGlow = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      if (spotlightRef.current && isVisible) {
        const offset = activeConfig.spotlightSize / 2;
        spotlightRef.current.style.transform = `translate3d(${currentX - offset}px, ${currentY - offset}px, 0)`;
      }
      rafId = requestAnimationFrame(updateGlow);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    rafId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [activeConfig.spotlightSize]);

  // WebGL 3D Tubes Cursor Initialization
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let isDisposed = false;

    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") ||
            testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) return;

    timer = setTimeout(async () => {
      try {
        const importFn = new Function("url", "return import(url)");
        const module = await importFn("/tubes.min.js");
        const initTubes = module.default;

        if (isDisposed || !canvasRef.current) return;

        tubesInstanceRef.current = initTubes(canvasRef.current, {
          tubes: {
            colors: activeConfig.colors,
            lights: {
              intensity: activeConfig.intensity,
              colors: activeConfig.lights,
            },
          },
          // In Light Mode, disabling bloom prevents any background tint
          bloom: isLight
            ? false
            : {
                threshold: 0.12,
                strength: 0.55,
                radius: 0.45,
              },
        });
      } catch (err) {
        console.warn("TubesCursor initialization skipped:", err);
      }
    }, 120);

    return () => {
      isDisposed = true;
      clearTimeout(timer);
      if (
        tubesInstanceRef.current &&
        typeof tubesInstanceRef.current.dispose === "function"
      ) {
        tubesInstanceRef.current.dispose();
        tubesInstanceRef.current = null;
      }
    };
  }, [isLight]);

  // Real-time synchronization of tube colors, lights, and intensity on theme change
  useEffect(() => {
    if (!tubesInstanceRef.current?.tubes) return;
    try {
      if (typeof tubesInstanceRef.current.tubes.setColors === "function") {
        tubesInstanceRef.current.tubes.setColors(activeConfig.colors);
      }
      if (typeof tubesInstanceRef.current.tubes.setLightsColors === "function") {
        tubesInstanceRef.current.tubes.setLightsColors(activeConfig.lights);
      }
      if (typeof tubesInstanceRef.current.tubes.setLightsIntensity === "function") {
        tubesInstanceRef.current.tubes.setLightsIntensity(activeConfig.intensity);
      }
    } catch (err) {
      console.warn("Real-time WebGL update error:", err);
    }
  }, [activeConfig.colors, activeConfig.lights, activeConfig.intensity]);

  return (
    <>
      {/* 1. Interactive 3D WebGL Tubes Canvas */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block transition-opacity duration-500"
          style={{
            opacity: activeConfig.opacity,
            mixBlendMode: activeConfig.mixBlendMode,
            filter: activeConfig.blur > 0 ? `blur(${activeConfig.blur}px)` : "none",
          }}
        />
      </div>

      {/* 2. Fluid Cursor Spotlight Glow */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 rounded-full filter blur-[100px] opacity-0 transition-opacity duration-500 will-change-transform z-[1] select-none"
        style={{
          width: `${activeConfig.spotlightSize}px`,
          height: `${activeConfig.spotlightSize}px`,
          background: `radial-gradient(circle, ${activeConfig.spotlightColor}${Math.round(
            activeConfig.spotlightOpacity * 255
          )
            .toString(16)
            .padStart(2, "0")} 0%, transparent 70%)`,
        }}
      />
    </>
  );
}
