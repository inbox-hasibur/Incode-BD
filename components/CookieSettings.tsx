"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X, Check } from "lucide-react";

export default function CookieSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(true);

  // Cookie categories state matching reference screenshot
  const [preferences, setPreferences] = useState({
    strictlyNecessary: true, // Always required
    functionality: true,
    performance: true,
    unclassified: true,
    targeting: true,
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("incode_cookie_preferences");
      if (saved) {
        setPreferences(JSON.parse(saved));
        setHasInteracted(true);
      } else {
        setHasInteracted(false);
      }
    } catch (e) {
      // Ignore localStorage error
    }

    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openCookieSettings", handleOpen);
    return () => window.removeEventListener("openCookieSettings", handleOpen);
  }, []);

  const handleToggle = (key: keyof typeof preferences) => {
    if (key === "strictlyNecessary") return; // Locked
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveAndClose = () => {
    try {
      localStorage.setItem("incode_cookie_preferences", JSON.stringify(preferences));
    } catch (e) {}
    setIsOpen(false);
    setHasInteracted(true);
  };

  const handleNecessaryOnly = () => {
    const necessaryOnly = {
      strictlyNecessary: true,
      functionality: false,
      performance: false,
      unclassified: false,
      targeting: false,
    };
    try {
      localStorage.setItem("incode_cookie_preferences", JSON.stringify(necessaryOnly));
    } catch (e) {}
    setPreferences(necessaryOnly);
    setIsOpen(false);
    setHasInteracted(true);
  };

  return (
    <>
      {/* Modal Overlay & Dialog (Opened via Footer Manage Cookies link) */}

      {/* Modal Overlay & Dialog (Exact match to reference image with full light/dark theme sync) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-lg bg-white dark:bg-[#111622] border border-slate-200 dark:border-white/15 rounded-3xl p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] text-left space-y-5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-modal-title"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between">
              <h3 
                id="cookie-modal-title" 
                className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white tracking-tight"
              >
                This website uses cookies
              </h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white flex items-center justify-center transition"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Description */}
            <p className="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
              We use cookies to personalize content and ads, and to analyze our traffic. We also share information about your use of our site with our advertising and analytics partners, who may combine it with other information that you have provided to them or that they have collected from your use of their services. Please see our{" "}
              <a href="/privacy" className="underline text-[#FF6B00] dark:text-[#B4F000] hover:underline font-medium transition">
                Privacy Policy
              </a>
              .
            </p>

            {/* Checkbox Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              
              {/* Strictly necessary (Locked) */}
              <div
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 select-none opacity-85 cursor-not-allowed"
                title="Strictly necessary cookies cannot be disabled"
              >
                <div className="w-5 h-5 rounded-md bg-[#FF6B00] dark:bg-white/20 flex items-center justify-center text-white">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-200">
                  Strictly necessary
                </span>
              </div>

              {/* Functionality */}
              <button
                type="button"
                onClick={() => handleToggle("functionality")}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-left transition select-none"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition ${
                  preferences.functionality 
                    ? "bg-[#FF6B00] text-white dark:bg-white dark:text-black" 
                    : "border border-slate-300 dark:border-white/30"
                }`}>
                  {preferences.functionality && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-medium text-slate-800 dark:text-white">
                  Functionality
                </span>
              </button>

              {/* Performance */}
              <button
                type="button"
                onClick={() => handleToggle("performance")}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-left transition select-none"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition ${
                  preferences.performance 
                    ? "bg-[#FF6B00] text-white dark:bg-white dark:text-black" 
                    : "border border-slate-300 dark:border-white/30"
                }`}>
                  {preferences.performance && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-medium text-slate-800 dark:text-white">
                  Performance
                </span>
              </button>

              {/* Unclassified */}
              <button
                type="button"
                onClick={() => handleToggle("unclassified")}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-left transition select-none"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition ${
                  preferences.unclassified 
                    ? "bg-[#FF6B00] text-white dark:bg-white dark:text-black" 
                    : "border border-slate-300 dark:border-white/30"
                }`}>
                  {preferences.unclassified && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-medium text-slate-800 dark:text-white">
                  Unclassified
                </span>
              </button>

              {/* Targeting */}
              <button
                type="button"
                onClick={() => handleToggle("targeting")}
                className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-white/[0.03] dark:hover:bg-white/[0.06] border border-slate-200 dark:border-white/10 text-left transition select-none sm:col-span-2"
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition ${
                  preferences.targeting 
                    ? "bg-[#FF6B00] text-white dark:bg-white dark:text-black" 
                    : "border border-slate-300 dark:border-white/30"
                }`}>
                  {preferences.targeting && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-medium text-slate-800 dark:text-white">
                  Targeting
                </span>
              </button>

            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSaveAndClose}
                className="w-full sm:flex-1 py-2.5 px-5 rounded-xl bg-[#FF6B00] hover:bg-[#E85D00] text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition shadow text-white-force"
              >
                Save &amp; Close
              </button>

              <button
                type="button"
                onClick={handleNecessaryOnly}
                className="w-full sm:flex-1 py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.05] dark:hover:bg-white/[0.10] border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold text-xs sm:text-sm tracking-wide transition"
              >
                Necessary Only
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
