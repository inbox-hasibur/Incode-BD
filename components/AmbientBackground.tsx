"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/ThemeProvider";

export default function AmbientBackground() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  // References for mouse-interactive movement
  const mouseTargetRef = useRef({ x: 0, y: 0, clientX: 0, clientY: 0, hasMoved: false });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const bottomWaveDarkRef = useRef<HTMLDivElement>(null);
  const bottomWaveLightRef = useRef<HTMLDivElement>(null);
  const sideGlowDarkRef = useRef<HTMLDivElement>(null);
  const sideGlowLightRef = useRef<HTMLDivElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalized coordinates (-1 to 1) from viewport center
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseTargetRef.current = {
        x: nx,
        y: ny,
        clientX: e.clientX,
        clientY: e.clientY,
        hasMoved: true,
      };

      // Direct transform for smooth cursor glow
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.transform = `translate3d(${e.clientX - 250}px, ${e.clientY - 250}px, 0)`;
        cursorGlowRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.opacity = "0";
      }
      mouseTargetRef.current.hasMoved = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let animationFrameId: number;

    const animate = () => {
      const cur = currentPosRef.current;
      const tgt = mouseTargetRef.current;

      // Smooth lerp (0.045 factor for elegant floating inertia)
      cur.x += (tgt.x - cur.x) * 0.045;
      cur.y += (tgt.y - cur.y) * 0.045;

      const parallaxX = cur.x * 55;
      const parallaxY = cur.y * 30;

      // 1. Move Dark Mode SecurePay Bottom Wave
      if (bottomWaveDarkRef.current) {
        bottomWaveDarkRef.current.style.transform = `translate3d(calc(-50% + ${parallaxX}px), ${parallaxY}px, 0)`;
      }

      // 2. Move Dark Mode Side Glow
      if (sideGlowDarkRef.current) {
        sideGlowDarkRef.current.style.transform = `translate3d(${-parallaxX * 0.7}px, ${-parallaxY * 0.7}px, 0)`;
      }

      // 3. Move Light Mode Nietzsche Bottom/Top Gradients
      if (bottomWaveLightRef.current) {
        bottomWaveLightRef.current.style.transform = `translate3d(calc(-50% + ${parallaxX}px), ${parallaxY}px, 0)`;
      }

      if (sideGlowLightRef.current) {
        sideGlowLightRef.current.style.transform = `translate3d(${-parallaxX * 0.6}px, ${-parallaxY * 0.6}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-30 overflow-hidden select-none transition-colors duration-700"
    >
      {/* Dynamic Cursor Ambient Follower (Subtle atmospheric spotlight) */}
      <div
        ref={cursorGlowRef}
        className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full filter blur-[110px] pointer-events-none opacity-0 transition-opacity duration-500 will-change-transform z-10"
        style={{
          background: isLight
            ? "radial-gradient(circle, rgba(255, 107, 0, 0.08) 0%, rgba(254, 215, 170, 0.04) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(180, 240, 0, 0.07) 0%, rgba(16, 185, 129, 0.05) 45%, transparent 70%)",
        }}
      />

      {/* ========================================================================= */}
      {/* DARK MODE: SecurePay-Inspired Deep Obsidian + Subtle Bottom Animated Mesh */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLight ? "opacity-0 pointer-events-none hidden" : "opacity-100"
        } bg-[#06080D]`}
      >
        {/* The Exact Dotted and Box-Box Background from Pillars Section across the entire site */}
        <div className="absolute inset-0 circuit-grid opacity-100" />

        {/* Top Starting Organic Glowing Theme Wave (Matching Footer) */}
        <div
          className="absolute -top-[14%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[140%] h-[480px] sm:h-[620px] rounded-[100%] filter blur-[95px] sm:blur-[135px] opacity-60 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 15%, rgba(180, 240, 0, 0.30) 0%, rgba(16, 185, 129, 0.24) 30%, rgba(6, 182, 212, 0.10) 60%, transparent 85%)",
          }}
        />

        {/* SecurePay Signature: Bottom Organic Glowing Gradient Wave */}
        <div
          ref={bottomWaveDarkRef}
          className="absolute -bottom-[16%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[140%] h-[500px] sm:h-[650px] rounded-[100%] filter blur-[95px] sm:blur-[135px] opacity-60 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 85%, rgba(180, 240, 0, 0.28) 0%, rgba(16, 185, 129, 0.24) 30%, rgba(6, 182, 212, 0.12) 60%, rgba(6, 8, 13, 0) 85%)",
          }}
        />

        {/* Periodic Left & Right Margin Theme Color Glows */}
        {/* Upper Left Glow */}
        <div
          className="absolute top-[16%] -left-[10%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full filter blur-[120px] sm:blur-[150px] opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(180, 240, 0, 0.20) 0%, rgba(16, 185, 129, 0.14) 40%, transparent 70%)",
          }}
        />

        {/* Mid Right Glow */}
        <div
          ref={sideGlowDarkRef}
          className="absolute top-[42%] -right-[8%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full filter blur-[110px] sm:blur-[150px] opacity-40 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.24) 0%, rgba(180, 240, 0, 0.16) 40%, rgba(6, 8, 13, 0) 70%)",
          }}
        />

        {/* Lower Left Glow */}
        <div
          className="absolute top-[68%] -left-[10%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full filter blur-[120px] sm:blur-[150px] opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.20) 0%, rgba(180, 240, 0, 0.15) 40%, transparent 70%)",
          }}
        />

        {/* Lower Right Glow */}
        <div
          className="absolute top-[82%] -right-[8%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full filter blur-[120px] sm:blur-[140px] opacity-35"
          style={{
            background:
              "radial-gradient(circle, rgba(180, 240, 0, 0.22) 0%, rgba(16, 185, 129, 0.14) 45%, transparent 70%)",
          }}
        />

        {/* Deep Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(6,8,13,0.5)_100%)]" />
      </div>

      {/* ========================================================================= */}
      {/* LIGHT MODE: Nietzsche-Inspired Soft Warm Orangish Gradient Atmosphere    */}
      {/* ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isLight ? "opacity-100" : "opacity-0 pointer-events-none hidden"
        } bg-[#FAF9F6]`}
      >
        {/* Circuit Grid (Dotted and Box-Box Background) in Light Mode */}
        <div className="absolute inset-0 circuit-grid opacity-100" />

        {/* Nietzsche Ethereal Top Sunset Aura */}
        <div
          className="absolute -top-[14%] left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] h-[500px] sm:h-[700px] rounded-full filter blur-[90px] sm:blur-[130px] opacity-75"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 25%, rgba(255, 107, 0, 0.16) 0%, rgba(254, 215, 170, 0.30) 40%, rgba(250, 249, 246, 0) 75%)",
          }}
        />

        {/* Interactive Bottom Warm Horizon Glow */}
        <div
          ref={bottomWaveLightRef}
          className="absolute -bottom-[15%] left-1/2 -translate-x-1/2 w-[110%] sm:w-[130%] h-[450px] sm:h-[600px] rounded-[100%] filter blur-[95px] sm:blur-[130px] opacity-55 will-change-transform"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 85%, rgba(255, 107, 0, 0.14) 0%, rgba(251, 146, 60, 0.16) 35%, rgba(254, 240, 138, 0.12) 60%, rgba(250, 249, 246, 0) 80%)",
          }}
        />

        {/* Periodic Side Warm Amber & Orange Glows in Light Mode */}
        {/* Upper Left Glow */}
        <div
          className="absolute top-[18%] -left-[10%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full filter blur-[100px] sm:blur-[140px] opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 107, 0, 0.12) 0%, rgba(254, 215, 170, 0.20) 45%, transparent 70%)",
          }}
        />

        {/* Mid-Right Glow */}
        <div
          ref={sideGlowLightRef}
          className="absolute top-[42%] -right-[8%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full filter blur-[100px] sm:blur-[140px] opacity-50 will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 122, 0, 0.15) 0%, rgba(253, 186, 116, 0.22) 45%, transparent 70%)",
          }}
        />

        {/* Lower Left Glow */}
        <div
          className="absolute top-[68%] -left-[10%] w-[500px] sm:w-[650px] h-[500px] sm:h-[650px] rounded-full filter blur-[100px] sm:blur-[140px] opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 107, 0, 0.14) 0%, rgba(251, 146, 60, 0.18) 45%, transparent 70%)",
          }}
        />

        {/* Lower Right Glow */}
        <div
          className="absolute top-[82%] -right-[8%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full filter blur-[100px] sm:blur-[140px] opacity-45"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 122, 0, 0.14) 0%, rgba(254, 215, 170, 0.20) 45%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
