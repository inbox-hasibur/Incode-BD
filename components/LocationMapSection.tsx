"use client";

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Navigation,
  Compass,
  Search
} from "lucide-react";

export default function LocationMapSection() {
  const googleMapSearchUrl = "https://maps.app.goo.gl/jeDY2fVmKujYxibK8";
  const embedMapUrl =
    "https://maps.google.com/maps?q=College+Gate+Tongi+Gazipur&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#090C12]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[#B4F000] text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>HEADQUARTERS &amp; PHYSICAL WORKSPACE</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Locate Incode BD in Dhaka
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Situated at College Gate, Tongi with direct transit connectivity to leading tech universities.
          </p>
        </div>

        {/* Bento Grid: Info Card + Bordered Map Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 shadow-xl">
            <div>
              <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#B4F000]/10 border border-[#B4F000]/20 text-[#B4F000] text-xs font-mono w-fit mb-5">
                <span className="w-2 h-2 rounded-full bg-[#B4F000] animate-pulse" />
                <span>Physical Headquarters</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                Incode BD Software &amp; Hardware Workspace
              </h3>
              <p className="text-xs font-mono text-slate-400 mb-6">
                College Gate, Tongi, Gazipur-1711, Dhaka
              </p>

              {/* Address details */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-300 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B4F000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Physical Facility:</strong>
                    <span>
                      Akon Villa, Ground Floor, College Gate, Tongi, Gazipur-1711, Dhaka, Bangladesh.
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Direct Line:</strong>
                    <a
                      href="tel:+8801882082502"
                      className="hover:text-[#B4F000] transition font-mono text-xs sm:text-sm"
                    >
                      +880 1882-082502
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Communications:</strong>
                    <a
                      href="mailto:contact@incodebd.com"
                      className="hover:text-[#B4F000] transition font-mono text-xs sm:text-sm"
                    >
                      contact@incodebd.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#B4F000] flex-shrink-0" />
                  <div>
                    <strong className="text-white block mb-0.5">Visiting &amp; Core Workspace Hours:</strong>
                    <span>Saturday – Thursday: 10:00 AM – 6:00 PM BST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions with Google Maps search */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold"
              >
                <Search className="w-4 h-4" />
                <span>Open Google Maps</span>
              </a>

              <a
                href={googleMapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-white/5 border border-white/10 hover:border-[#B4F000]/40 transition"
              >
                <Navigation className="w-4 h-4 text-[#B4F000]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Bordered Interactive Google Map Container */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl relative min-h-[350px] sm:min-h-[420px] bg-[#0E1218] p-1">
            <div className="w-full h-full rounded-xl overflow-hidden relative border border-white/10">
              {/* Map watermark overlay */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0D14]/90 border border-white/10 backdrop-blur-md text-xs font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#B4F000]" />
                <span>INCODE BD // COLLEGE GATE TONGI</span>
              </div>

              <iframe
                title="Incode BD Google Map"
                src={embedMapUrl}
                className="w-full h-full min-h-[350px] sm:min-h-[420px] border-0 filter invert-[90%] hue-rotate-180 contrast-[110%] opacity-90 transition-opacity hover:opacity-100"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
