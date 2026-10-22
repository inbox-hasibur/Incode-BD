"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  Cpu,
  Server,
  Palette,
  Shield,
  Layers,
  Sparkles,
  MapPin,
  Briefcase,
  Users,
  Compass,
  Radio,
  FileText,
  ChevronDown,
  Globe,
  Wifi,
  CreditCard,
  Droplets,
  Zap,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Only Products, Services, Careers have expanding dropdowns. About does NOT.
    if (["Products", "Services", "Careers"].includes(name)) {
      setActiveTab(name);
    } else {
      setActiveTab(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveTab(null);
    }, 180);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Careers", href: "/careers", hasDropdown: true },
    { name: "About", href: "/about", hasDropdown: false }, // About has NO dropdown per user request
  ];

  // Exactly synchronized with the actual /products, /services, and /careers pages!
  const subcategoryData: Record<
    string,
    {
      title: string;
      tagline: string;
      items: {
        title: string;
        desc: string;
        href: string;
        badge?: string;
        icon: React.ElementType;
      }[];
      footerLink: { text: string; href: string };
    }
  > = {
    Products: {
      title: "Featured Engineering Products",
      tagline: "Proprietary IoT hardware, fleet telematics, and enterprise software.",
      items: [
        {
          title: "Catfinder • GPS Pet Tracker",
          desc: "Real-time GPS tracking, safe zone geofences, waterproof IP67 casing & companion app.",
          href: "/products",
          badge: "IoT Hardware",
          icon: Radio,
        },
        {
          title: "BUS Tracking GPS & Fleet Telematics",
          desc: "Live institutional route map rendering, driver GPS beacons & passenger countdowns.",
          href: "/products",
          badge: "Transit IoT",
          icon: Globe,
        },
        {
          title: "Retail & Supermarket Smart POS",
          desc: "High-speed barcode checkout, automated inventory deductions & cloud sync billing.",
          href: "/products",
          badge: "Retail Software",
          icon: CreditCard,
        },
        {
          title: "Enterprise Cloud ERP & HRM",
          desc: "Biometric attendance sync, automated payroll, warehouse stock & client CRM.",
          href: "/products",
          badge: "Enterprise SaaS",
          icon: Server,
        },
        {
          title: "Custom Sensors & IoT Modules",
          desc: "Modular sensors for robotics & automation: Obstacle, Fire, PIR, Soil, GPS & Camera.",
          href: "/products",
          badge: "Modules",
          icon: Cpu,
        },
        {
          title: "QuickTap • Anti-Proxy Attendance",
          desc: "Smart encrypted credential tap verification with instant cloud administrative sync.",
          href: "/products",
          badge: "Cloud Gate",
          icon: Zap,
        },
      ],
      footerLink: { text: "View All Products & Full Specifications", href: "/products" },
    },
    Services: {
      title: "Commercial Engineering Services",
      tagline: "End-to-end bespoke software, firmware, electronics, and digital craft.",
      items: [
        {
          title: "AI-Powered Custom ERP Systems",
          desc: "Automated multi-branch operations, supply chain & inventory with predictive AI.",
          href: "/services",
          badge: "Automation",
          icon: Server,
        },
        {
          title: "Tailored CRM & HRM Solutions",
          desc: "Biometric device sync, automated payroll generation & sales pipeline tracking.",
          href: "/services",
          badge: "Workforce",
          icon: Users,
        },
        {
          title: "ISP Billing & Network Management",
          desc: "MikroTik RouterOS API, FreeRADIUS speed profiling & automated bKash/Nagad billing.",
          href: "/services",
          badge: "Telecom",
          icon: Wifi,
        },
        {
          title: "Custom IoT & PCB Engineering",
          desc: "Schematic design in KiCad, ESP32/STM32 firmware, and physical PCB prototyping.",
          href: "/services",
          badge: "Silicon",
          icon: Cpu,
        },
        {
          title: "High-Conversion Portfolios & Web",
          desc: "Awwwards-standard cyber aesthetics, fluid micro-interactions & sub-second speed.",
          href: "/services",
          badge: "Design",
          icon: Globe,
        },
      ],
      footerLink: { text: "Discuss Commercial Engineering Proposals", href: "/services" },
    },
    Careers: {
      title: "Careers & Engineering Internships",
      tagline: "Join our Dhaka lab or hybrid engineering tracks in CSE, SWE, IT, and EEE.",
      items: [
        {
          title: "Software Engineering & Web Intern",
          desc: "Full-Stack development in React/Next.js, Python/Node, REST & WebSockets on real client apps.",
          href: "/careers",
          badge: "Full-Stack",
          icon: Briefcase,
        },
        {
          title: "IoT & Embedded Systems Intern",
          desc: "ESP32/STM32 firmware, sensor integration, breadboard prototyping & benchtop PCB assembly.",
          href: "/careers",
          badge: "Hardware",
          icon: Cpu,
        },
        {
          title: "Creative & UI/UX Design Intern",
          desc: "High-conversion Figma UI systems, dark-mode visual craft, tokens & Tailwind CSS layouts.",
          href: "/careers",
          badge: "Design",
          icon: Palette,
        },
        {
          title: "Business Development & Sales",
          desc: "Corporate client outreach, client demos, commercial contract negotiation & growth.",
          href: "/careers",
          badge: "Growth",
          icon: Sparkles,
        },
      ],
      footerLink: { text: "Explore All 7 Active Positions & Apply Direct", href: "/careers" },
    },
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? isLight
            ? "bg-[#FAF9F6]/85 backdrop-blur-xl border-b border-slate-300/40 shadow-sm"
            : "bg-[#0A0D14]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-sm"
          : isLight
            ? "bg-[#FAF9F6]/40 backdrop-blur-md border-b border-transparent"
            : "bg-[#0A0D14]/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Clean Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-[#0F1420] border border-white/10 p-1.5 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={isLight ? "/logo-orange.png?v=2" : "/logo.png"}
                alt="Incode BD"
                width={36}
                height={36}
                className={`w-full h-full object-contain filter ${
                  isLight ? "" : "drop-shadow-[0_0_8px_rgba(180,240,0,0.4)]"
                }`}
                priority
              />
            </div>
            <span className="font-logo text-xl sm:text-[1.35rem] tracking-tight text-white flex items-center gap-1.5 select-none">
              Incode <span className={isLight ? "text-[#FF6B00]" : "text-[#B4F000]"}>BD</span>
            </span>
          </Link>

          {/* Desktop Center Navigation Pages */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-slate-300/40 dark:border-white/[0.08] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const isHovered = activeTab === link.name;

              return (
                <div
                  key={link.name}
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                      isActive || isHovered
                        ? isLight
                          ? "text-[#FF6B00] bg-[#FF6B00]/10"
                          : "text-[#B4F000] bg-[#B4F000]/10"
                        : isLight
                          ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/50"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${
                          isHovered ? "rotate-180" : "rotate-0 opacity-60"
                        }`}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Right Action Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/careers"
              className="btn-neon inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ease-in-out"
            >
              <span>Join Team</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-slate-300/40 dark:border-white/10 text-slate-200 hover:text-white focus:outline-none transition-colors duration-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className={`w-6 h-6 ${isLight ? "text-[#FF6B00]" : "text-[#B4F000]"}`} />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* EXPANDING RECTANGULAR BOARD MEGA-MENU (Exact navbar width, 40-50% border)  */}
      {/* ========================================================================= */}
      <div
        onMouseEnter={() => {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
        }}
        onMouseLeave={handleMouseLeave}
        className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out ${
          activeTab && subcategoryData[activeTab]
            ? "max-h-[580px] opacity-100 translate-y-0 pointer-events-auto pb-4"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none pb-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl p-6 sm:p-7 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
              isLight
                ? "bg-[#FAF9F6]/95 border border-slate-300/45 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.1)]"
                : "bg-[#0A0D15]/95 border border-white/10 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]"
            }`}
          >
            {activeTab && subcategoryData[activeTab] && (
              <div className="space-y-6">
                
                {/* Board Top Header */}
                <div className="flex items-center justify-between border-b pb-4 border-slate-200/60 dark:border-white/10">
                  <div>
                    <h4 className="font-raleway text-lg font-bold text-white tracking-tight">
                      {subcategoryData[activeTab].title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {subcategoryData[activeTab].tagline}
                    </p>
                  </div>
                  <Link
                    href={subcategoryData[activeTab].footerLink.href}
                    onClick={() => setActiveTab(null)}
                    className="group inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B4F000] dark:text-[#B4F000] hover:underline"
                  >
                    <span>{subcategoryData[activeTab].footerLink.text}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Subcategories Grid: Synchronized with actual pages */}
                <div className={`grid gap-3.5 ${
                  subcategoryData[activeTab].items.length > 4 
                    ? "grid-cols-2 lg:grid-cols-3" 
                    : "grid-cols-2 lg:grid-cols-4"
                }`}>
                  {subcategoryData[activeTab].items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setActiveTab(null)}
                        className={`p-4 rounded-2xl flex flex-col justify-between transition-all duration-400 ease-in-out group ${
                          isLight
                            ? "bg-white/80 border border-slate-300/40 hover:border-slate-400/60 hover:bg-white shadow-sm"
                            : "bg-white/[0.03] border border-white/[0.08] hover:border-[#B4F000]/40 hover:bg-white/[0.06]"
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                                isLight
                                  ? "bg-slate-100 text-[#FF6B00] group-hover:bg-[#FF6B00]/10"
                                  : "bg-white/5 text-[#B4F000] group-hover:bg-[#B4F000]/10"
                              }`}
                            >
                              <ItemIcon className="w-4 h-4 stroke-[2.2]" />
                            </div>
                            {item.badge && (
                              <span
                                className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold ${
                                  isLight
                                    ? "bg-slate-100 text-slate-700 border border-slate-300/40"
                                    : "bg-white/10 text-slate-300 border border-white/10"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <h5 className="text-sm font-bold text-white group-hover:text-[#B4F000] transition-colors duration-200">
                            {item.title}
                          </h5>
                          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-medium text-slate-400 group-hover:text-white transition-colors duration-200">
                          <span>View on page</span>
                          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2] opacity-70 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 ${
            isLight
              ? "bg-[#FAF9F6]/95 backdrop-blur-xl border-slate-300/50 shadow-lg"
              : "bg-[#0A0D14]/95 backdrop-blur-xl border-white/10 shadow-lg"
          }`}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out ${
                    isActive
                      ? isLight
                        ? "text-[#FF6B00] bg-[#FF6B00]/10"
                        : "text-[#B4F000] bg-[#B4F000]/10"
                      : isLight
                        ? "text-slate-700 hover:bg-slate-100"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-300/40 dark:border-white/10">
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-neon w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold"
            >
              <span>Join Incode BD Team</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
