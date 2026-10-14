"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "./SiteSurveyModal";

interface NavDropdownItem {
  title: string;
  desc: string;
  href: string;
  icon?: string;
  badge?: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll completely when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const solutionsDropdown: NavDropdownItem[] = [
    {
      title: "Residential Elevators",
      desc: "Compact, quiet gearless lifts for private villas & duplexes",
      href: "/solutions#residential",
      icon: "🏡",
    },
    {
      title: "Commercial MRL Lifts",
      desc: "High-traffic, energy-efficient lifts for offices & retail",
      href: "/solutions#commercial",
      icon: "🏢",
    },
    {
      title: "Hospital & Stretcher Lifts",
      desc: "Jerk-free precision leveling for patient beds & stretchers",
      href: "/solutions#hospital",
      icon: "🏥",
    },
    {
      title: "Industrial & Heavy Freight",
      desc: "Robust cargo lifts engineered up to 5,000 kg capacity",
      href: "/solutions#industrial",
      icon: "🏭",
    },
    {
      title: "Modernization & Retrofit",
      desc: "Upgrade legacy lifts with modern PMSM drive & VVVF safety",
      href: "/solutions#modernization",
      icon: "⚡",
    },
  ];

  const productsDropdown: NavDropdownItem[] = [
    {
      title: "VL-Home Luxe Series",
      desc: "Ultra-quiet villa lifts with Italian hydraulic / PMSM drive",
      href: "/products#vl-home-luxe",
      icon: "✨",
    },
    {
      title: "VL-Commercial MRL",
      desc: "Machine-room-less modular lifts with speeds up to 2.5 m/s",
      href: "/products#vl-commercial-mrl",
      icon: "🚀",
    },
    {
      title: "VL-Medicare Series",
      desc: "Antibacterial finishes, wide doors & NBC 2016 compliance",
      href: "/products#vl-medicare",
      icon: "🩺",
    },
    {
      title: "VL-Heavy Freight",
      desc: "Industrial grade reinforced floors & bi-parting doors",
      href: "/products#vl-heavy-freight",
      icon: "📦",
    },
    {
      title: "Panoramic Glass Capsule",
      desc: "Curved 360° architectural glass lifts for luxury spaces",
      href: "/products#panoramic-capsule",
      icon: "💎",
    },
    {
      title: "OEM Elevator Components",
      desc: "PMSM machines, controllers & door operators for B2B buyers",
      href: "/production-hub",
      icon: "⚙️",
      badge: "B2B",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Clean White Architectural Header with Light Attractive Red Accents */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Standalone Official Logo (Image 3) */}
            <Link
              href="/"
              className="flex items-center shrink-0 py-2 group"
              aria-label="Vision Lifts & Solutions Home"
            >
              <div className="relative h-13 w-40 sm:w-48 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/vision-lifts-logo.png"
                  alt="Vision Lifts & Solutions"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2.5"
              aria-label="Main Navigation"
            >
              {/* Home */}
              <Link
                href="/"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Home</span>
                {isActive("/") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/about")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>About Us</span>
                {isActive("/about") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/solutions"
                  className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/solutions")
                      ? "text-[#423887] font-bold"
                      : "text-slate-600 hover:text-[#423887]"
                  }`}
                >
                  <span>Solutions</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "solutions" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive("/solutions") && (
                    <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </Link>

                {/* Dropdown Panel */}
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Tailored Lift Solutions
                      </p>
                    </div>
                    {solutionsDropdown.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/50 transition-colors group"
                      >
                        <span className="text-lg p-1.5 rounded-lg bg-slate-50 group-hover:bg-purple-100/60 text-slate-700 transition-colors">
                          {item.icon}
                        </span>
                        <div>
                          <div className="text-xs font-bold text-slate-800 group-hover:text-[#423887] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <Link
                        href="/solutions"
                        className="block text-center text-xs font-bold text-[#423887] hover:text-[#ff1f38] py-1"
                      >
                        View All Engineering Solutions →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products"
                  className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/products")
                      ? "text-[#423887] font-bold"
                      : "text-slate-600 hover:text-[#423887]"
                  }`}
                >
                  <span>Products</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                  {isActive("/products") && (
                    <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </Link>

                {/* Dropdown Panel */}
                {activeDropdown === "products" && (
                  <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Elevator Product Lineup
                      </p>
                    </div>
                    {productsDropdown.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50/50 transition-colors group"
                      >
                        <span className="text-lg p-1.5 rounded-lg bg-slate-50 group-hover:bg-purple-100/60 text-slate-700 transition-colors">
                          {item.icon}
                        </span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-800 group-hover:text-[#423887] transition-colors">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-purple-50 text-[#423887] border border-purple-100">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="pt-2 mt-1 border-t border-slate-100">
                      <Link
                        href="/products"
                        className="block text-center text-xs font-bold text-[#423887] hover:text-[#ff1f38] py-1"
                      >
                        Explore Complete Technical Catalog →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services */}
              <Link
                href="/services"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/services")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Services</span>
                {isActive("/services") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* Safety & Tech */}
              <Link
                href="/safety-technology"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/safety-technology")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Safety & Tech</span>
                {isActive("/safety-technology") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* Production Hub (B2B) */}
              <Link
                href="/production-hub"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                  isActive("/production-hub")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Production Hub</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-full bg-purple-50 text-[#423887] border border-purple-100">
                  B2B
                </span>
                {isActive("/production-hub") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* Projects */}
              <Link
                href="/projects"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/projects")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Projects</span>
                {isActive("/projects") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                className={`relative px-2.5 py-2 text-[14px] font-medium transition-colors whitespace-nowrap ${
                  isActive("/contact")
                    ? "text-[#423887] font-bold"
                    : "text-slate-600 hover:text-[#423887]"
                }`}
              >
                <span>Contact Us</span>
                {isActive("/contact") && (
                  <span className="absolute -bottom-4.5 left-2 right-2 h-[2.5px] bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] rounded-full" />
                )}
              </Link>
            </nav>

            {/* Right Action: Clean Rounded-Full Phone & CTA Button with Light Attractive Red */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#423887] hover:bg-purple-50/50 transition-colors whitespace-nowrap"
                title="Call Vision Lifts Directly"
              >
                <span className="w-7 h-7 rounded-full bg-purple-50 text-[#423887] flex items-center justify-center text-xs">
                  📞
                </span>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={() => setSurveyModalOpen(true)}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] hover:opacity-95 text-white shadow-sm shadow-[#863078]/25 hover:shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                Book Free Survey
              </button>
            </div>

            {/* Mobile Actions: Survey Pill + Clean 3-Lines Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setSurveyModalOpen(true)}
                className="px-3.5 py-1.5 text-xs font-bold bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] text-white rounded-full uppercase tracking-wider shadow-xs cursor-pointer active:scale-95 transition-all"
              >
                Survey
              </button>

              {/* Clean 3-Horizontal-Lines Hamburger Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="w-10 h-10 rounded-full hover:bg-slate-100 active:scale-95 flex flex-col items-center justify-center gap-1.25 transition-all focus:outline-none cursor-pointer border border-slate-200/80 bg-white"
                aria-label="Open menu"
                title="Open menu"
              >
                <span className="w-5 h-[2px] bg-slate-800 rounded-full block" />
                <span className="w-5 h-[2px] bg-slate-800 rounded-full block" />
                <span className="w-5 h-[2px] bg-slate-800 rounded-full block" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN Mobile Navigation Menu (Moved outside <header> to escape backdrop-filter containing block) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 w-full h-full bg-white z-[9999] flex flex-col justify-between overflow-y-auto">
          {/* Header & Navigation Links */}
          <div className="w-full">
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-white shrink-0 sticky top-0 z-20">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <div className="relative h-12 w-44">
                  <Image
                    src="/images/vision-lifts-logo.png"
                    alt="Vision Lifts & Solutions"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 flex items-center justify-center font-bold text-lg transition-all active:scale-95 shadow-2xs cursor-pointer"
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Direct Support Hotline Strip */}
              <div className="px-5 py-2.5 bg-purple-50/70 border-b border-purple-100/70 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-medium text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Karimnagar & Telangana HQ</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="font-bold text-[#423887] hover:underline flex items-center gap-1"
                >
                  📞 {COMPANY_INFO.phone}
                </a>
              </div>

              {/* Navigation Links List */}
              <div className="p-4 space-y-1.5">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🏠</span>
                    <span>Home</span>
                  </span>
                  {isActive("/") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>

                {/* About Us */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/about")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🏢</span>
                    <span>About Us</span>
                  </span>
                  {isActive("/about") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>

                {/* Solutions Accordion */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white">
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 bg-slate-50/60">
                    <Link
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 hover:text-[#423887] flex-1 font-bold"
                    >
                      <span className="text-base">🛗</span>
                      <span>Solutions</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === "mobile-solutions" ? null : "mobile-solutions")
                      }
                      className="p-1.5 text-slate-500 hover:text-slate-900"
                      aria-label="Toggle solutions submenu"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === "mobile-solutions" ? "rotate-180 text-[#423887]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {(activeDropdown === "mobile-solutions" || isActive("/solutions")) && (
                    <div className="px-4 py-2 bg-slate-50/30 space-y-1 border-t border-slate-100">
                      {solutionsDropdown.map((s) => (
                        <Link
                          key={s.title}
                          href={s.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-[#423887] hover:bg-white transition-colors"
                        >
                          <span>{s.icon}</span>
                          <span>{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Products Accordion */}
                <div className="rounded-2xl border border-slate-100 overflow-hidden bg-white">
                  <div className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-800 bg-slate-50/60">
                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 hover:text-[#423887] flex-1 font-bold"
                    >
                      <span className="text-base">📦</span>
                      <span>Products</span>
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveDropdown(activeDropdown === "mobile-products" ? null : "mobile-products")
                      }
                      className="p-1.5 text-slate-500 hover:text-slate-900"
                      aria-label="Toggle products submenu"
                    >
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === "mobile-products" ? "rotate-180 text-[#423887]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>

                  {(activeDropdown === "mobile-products" || isActive("/products")) && (
                    <div className="px-4 py-2 bg-slate-50/30 space-y-1 border-t border-slate-100">
                      {productsDropdown.map((p) => (
                        <Link
                          key={p.title}
                          href={p.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:text-[#423887] hover:bg-white transition-colors"
                        >
                          <span className="flex items-center gap-2.5">
                            <span>{p.icon}</span>
                            <span>{p.title}</span>
                          </span>
                          {p.badge && (
                            <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded-full bg-purple-50 text-[#423887] border border-purple-100">
                              {p.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Services */}
                <Link
                  href="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/services")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🛠️</span>
                    <span>Services & AMC</span>
                  </span>
                  {isActive("/services") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>

                {/* Safety & Tech */}
                <Link
                  href="/safety-technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/safety-technology")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🛡️</span>
                    <span>Safety & Technology</span>
                  </span>
                  {isActive("/safety-technology") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>

                {/* Production Hub */}
                <Link
                  href="/production-hub"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/production-hub")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">🏭</span>
                    <span>Production Hub</span>
                  </span>
                  <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-purple-50 text-[#423887] border border-purple-100">
                    B2B
                  </span>
                </Link>

                {/* Projects */}
                <Link
                  href="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/projects")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">📸</span>
                    <span>Projects Gallery</span>
                  </span>
                  {isActive("/projects") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>

                {/* Contact Us */}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                    isActive("/contact")
                      ? "bg-purple-50 text-[#423887] font-bold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-base">📍</span>
                    <span>Contact Us</span>
                  </span>
                  {isActive("/contact") && <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887]" />}
                </Link>
              </div>
            </div>

            {/* Bottom Actions inside Full-Screen Menu */}
            <div className="p-5 border-t border-slate-100 bg-white space-y-3 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSurveyModalOpen(true);
                }}
                className="w-full py-3.5 bg-gradient-to-r from-[#d3313f] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold rounded-full text-xs uppercase tracking-wider text-center shadow-md shadow-[#863078]/25 transition-all cursor-pointer active:scale-98"
              >
                Book Free Site Survey
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="py-3 px-3 bg-slate-50 border border-slate-200/80 text-slate-800 font-semibold rounded-full text-xs text-center hover:bg-slate-100 flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <span>📞</span>
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20to%20enquire%20about%20an%20elevator.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full text-xs text-center flex items-center justify-center gap-2 transition-all active:scale-98 shadow-2xs"
                >
                  <span>💬</span>
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-1 text-center text-[10px] text-slate-400">
                Gandhi Road, Karimnagar, Telangana · IS 14665 Certified
              </div>
            </div>
          </div>
        )}

      <SiteSurveyModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />
    </>
  );
}
