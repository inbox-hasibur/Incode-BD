"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Layers,
  MapPin,
  Cpu,
  Server,
  Code2
} from "lucide-react";

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Subtle Ambient Radial Lighting - Lightweight GPU friendly */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(180,240,0,0.08)_0%,transparent_70%)] -z-10" 
      />

      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Clean Corporate Location & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-300 mb-6 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] dark:bg-[#B4F000] animate-pulse" />
          <span>Software &amp; IoT Solutions Company</span>
          <span className="text-white/20">•</span>
          <Link
            href="/about"
            className="hover:text-[#B4F000] transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-[#B4F000]" />
            <span>College Gate, Tongi, Dhaka</span>
          </Link>
        </div>

        {/* Scaled-down Elegant Headline */}
        <h1 className="font-tagline text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-[1.2] mb-4">
          <span className="text-[#B4F000]">Solving Business Problems with</span> Hardware, Software, and Aesthetics.
        </h1>

        {/* Refined Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl leading-relaxed font-normal mb-7">
          A dedicated software company building intelligent IoT ecosystems, customized enterprise software, and high-performance digital products.
        </p>

        {/* Dual Call To Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 mb-14 w-full sm:w-auto">
          <Link
            href="/careers"
            id="hero-careers-cta"
            className="btn-neon w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-sm sm:text-base font-bold tracking-wide"
          >
            <span>Explore Careers &amp; Team</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          <Link
            href="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-white/[0.04] border border-white/10 hover:border-[#B4F000]/40 hover:bg-white/[0.08] transition-all backdrop-blur-md"
          >
            <Layers className="w-4 h-4 text-[#B4F000]" />
            <span>Our Products &amp; IoT</span>
          </Link>
        </div>

        {/* Sleek Hardware & Systems Showcase Video Container */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl p-1 bg-white/[0.04] border border-white/10">
          
          <div className="relative w-full aspect-video sm:aspect-[16/9] md:aspect-[21/9] bg-[#07090E] rounded-xl overflow-hidden group border border-white/[0.06]">
            
            {/* The Video Element */}
            {!videoError ? (
              <video
                ref={videoRef}
                src="/hero-video.mp4"
                poster="/hero-3d-lab.jpg"
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            ) : (
              <Image
                src="/hero-3d-lab.jpg"
                alt="Incode BD 3D Hardware Ecosystem"
                fill
                priority
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            )}

            {/* Subtle cyber vignette overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0D14]/80 via-transparent to-transparent opacity-70" />

            {/* Bottom Left Minimal Meta */}
            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0A0D14]/85 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
              <span className="text-xs font-mono text-slate-200">
                Incode Hardware &amp; Embedded Systems
              </span>
            </div>

            {/* Bottom Right Minimal Controls */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-lg bg-[#0A0D14]/85 border border-white/10 text-slate-200 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition backdrop-blur-md"
                title={isPlaying ? "Pause Video" : "Play Video"}
                aria-label="Play/Pause"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-lg bg-[#0A0D14]/85 border border-white/10 text-slate-200 hover:text-[#B4F000] hover:border-[#B4F000]/40 transition backdrop-blur-md"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label="Mute/Unmute"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Enterprise Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto mt-10">
          <div className="glass-panel p-4 rounded-xl text-left border border-white/5">
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#B4F000]">
              Custom IoT
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              ESP32 &amp; Sensor Telematics
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-white/5">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white">
              Cloud SaaS
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              Next.js &amp; Microservices
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-white/5">
            <span className="text-xl sm:text-2xl font-bold font-mono text-[#B4F000]">
              Physical Workspace
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              College Gate Headquarters
            </p>
          </div>

          <div className="glass-panel p-4 rounded-xl text-left border border-white/5">
            <span className="text-xl sm:text-2xl font-bold font-mono text-white">
              Global Standards
            </span>
            <p className="text-xs text-slate-300 mt-0.5">
              High Reliability &amp; Security
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
