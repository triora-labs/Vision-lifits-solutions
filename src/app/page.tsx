"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  COMPANY_INFO,
  SOLUTIONS_DATA,
  PROJECTS_DATA,
  SAFETY_FEATURES_DATA,
  TESTIMONIALS_DATA,
} from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";

export default function HomePage() {
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [selectedBuildingType, setSelectedBuildingType] = useState<string>("villa");

  // Hero Lead Form State
  const [leadForm, setLeadForm] = useState({
    name: "",
    buildingType: "Villas & Independent Homes",
    city: "Karimnagar",
    phone: "",
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSubmitted(true);
  };

  const buildingTypes = [
    {
      id: "villa",
      title: "Villas & Homes",
      icon: "🏡",
      series: "VL-Home Luxe Series",
      desc: "Zero machine room, minimal 150mm pit or ramp, runs on single-phase 220V household electricity. Perfect for luxury duplexes and existing homes.",
      highlights: ["Pitless / Shallow 150mm Pit", "Whisper Silent <48 dB", "Glass / Rose Gold Cabin", "ARD Auto-Rescue Included"],
      link: "/solutions#residential",
      image: "/images/residential.png",
    },
    {
      id: "apartment",
      title: "Apartments",
      icon: "🏢",
      series: "VL-Commercial Gearless MRL",
      desc: "Fast, energy-efficient passenger movement designed for multi-family buildings and gated societies. Regenerative drive saves 40% energy.",
      highlights: ["MRL Space Saving", "Up to 1.75 m/s Speed", "Durable SS 304 Finish", "Full Collective Dispatch"],
      link: "/solutions#residential",
      image: "/images/hero-lobby.png",
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: "🏬",
      series: "VL-Commercial Gearless Series",
      desc: "Engineered for intense passenger flow during rush hours. Smart group supervisory controls, RFID access, and luxury glass/stainless cabins.",
      highlights: ["Heavy Duty 16-20 Pax", "TFT Screen Indicators", "Regenerative Power", "Infrared Light Curtain"],
      link: "/solutions#commercial",
      image: "/images/commercial.png",
    },
    {
      id: "hospital",
      title: "Hospitals",
      icon: "🏥",
      series: "VL-Medicare Stretcher Lift",
      desc: "Deep car dimensions accommodating intensive care stretchers and beds. S-curve smooth leveling prevents jerks for critical patients.",
      highlights: ["Stretcher / ICU Bed Depth", "Millimeter Leveling Precision", "Priority Medical Override", "Anti-microbial SS Finish"],
      link: "/solutions#hospital",
      image: "/images/hospital.png",
    },
    {
      id: "industrial",
      title: "Industrial",
      icon: "🏭",
      series: "VL-Heavy Freight Series",
      desc: "Built to withstand forklift loading and pallet trucks. Reinforced structural steel sling and checkered steel flooring up to 5,000 kg.",
      highlights: ["500 kg to 5,000 kg Payload", "Chequered Steel Flooring", "Bi-Parting Steel Gates", "Impact Absorbing Buffers"],
      link: "/solutions#industrial",
      image: "/images/industrial.png",
    },
  ];

  const activeBuilding = buildingTypes.find((b) => b.id === selectedBuildingType) || buildingTypes[0];

  const partners = [
    "Vasavi Group",
    "Trends Retail",
    "Vamsiram Builders",
    "My Home Infra",
    "UrbanX Spaces",
    "Croma Electronics",
    "Muppa Projects",
    "Rajapushpa Properties",
    "APR Group",
    "DSR Infrastructure",
    "Zudio Stores",
    "RV Nirmaan",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (White Background, Inspired by Image 2 lmbib.com) */}
      <section className="bg-white py-14 lg:py-20 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bold Typography & Category Tabs (Matching Image 2) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-[#ff334b] border border-rose-100 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#ff334b] animate-pulse" />
                Trusted Elevator Engineering in Telangana
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Elevator mobility <br />
                built on{" "}
                <span className="relative inline-block">
                  <span className="text-slate-900">trust.</span>
                  {/* Organic yellow curved accent underline like Image 2 */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-amber-400"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    fill="currentColor"
                  >
                    <path d="M0,8 Q50,0 100,6 L100,10 Q50,4 0,11 Z" />
                  </svg>
                </span>
                <br />
                <span className="text-[#ff334b]">Securing your journey.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Elevator design, precision installation, and 24/7 modernization built on engineering integrity, local accountability, and client focus across Karimnagar, Hyderabad, and Telangana.
              </p>

              {/* 5 Rounded Category Pills at bottom of hero (Matching Image 2 layout) */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Select Your Building Type:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-2.5">
                  {buildingTypes.map((type, idx) => {
                    const isSelected = selectedBuildingType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedBuildingType(type.id)}
                        className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 cursor-pointer ${
                          isSelected
                            ? "border-[#ff334b] bg-rose-50/60 shadow-xs ring-1 ring-[#ff334b]/40"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                      >
                        <span className="text-xl">{type.icon}</span>
                        <span className={`text-xs font-bold ${isSelected ? "text-[#ff334b]" : "text-slate-700"}`}>
                          {type.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Clean White Lead Form Card (Matching Image 2) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative backdrop-blur-sm">
                <div className="mb-5">
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Get Free Site Survey & Quote
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Share your details — Ramesh Vilasagar or our senior elevator engineer will call you back.
                  </p>
                </div>

                {leadSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">Request Received!</h4>
                    <p className="text-xs text-slate-600 mb-5">
                      Thank you, <strong>{leadForm.name}</strong>. We will coordinate your free site survey in <strong>{leadForm.city}</strong> shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setLeadSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold uppercase tracking-wider"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        YOUR NAME <span className="text-[#ff334b]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Reddy"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff334b]/40 text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        BUILDING / PROJECT TYPE
                      </label>
                      <select
                        value={leadForm.buildingType}
                        onChange={(e) => setLeadForm({ ...leadForm, buildingType: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff334b]/40 text-slate-800"
                      >
                        <option>Villas & Independent Homes</option>
                        <option>Residential Apartments</option>
                        <option>Commercial Complex / Offices</option>
                        <option>Hospitals & Healthcare</option>
                        <option>Industrial Plant / Warehouses</option>
                        <option>Modernization of Old Lift</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          LOCATION <span className="text-[#ff334b]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Karimnagar, Warangal"
                          value={leadForm.city}
                          onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff334b]/40 text-slate-800"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          MOBILE NUMBER <span className="text-[#ff334b]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98484 80868"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff334b]/40 text-slate-800"
                        />
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-[#ff334b] to-[#ff4767] hover:from-[#ff1f38] hover:to-[#f43f5e] shadow-md shadow-red-500/20 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
                      >
                        Request a Call Back →
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-2">
                        🔒 Zero spam. Direct engineer consultation.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP (Clean White) */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div key={i} className="pt-4 md:pt-0">
                <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PARTNERS LOGO STRIP */}
      <section className="bg-slate-50 py-8 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Trusted by Leading Developers, Institutions & Villa Owners Across South India
          </p>
        </div>
        <div className="flex overflow-x-auto gap-2.5 py-2 px-4 max-w-7xl mx-auto justify-center flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white rounded-full border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs flex items-center gap-2 hover:border-slate-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff334b]" />
              <span>{partner}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. ACTIVE BUILDING SHOWCASE (Clean White & Slate) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-block px-3 py-1 bg-red-100 text-[#ff334b] rounded-full text-xs font-bold uppercase tracking-wider">
                  Recommended: {activeBuilding.series}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeBuilding.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {activeBuilding.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {activeBuilding.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSurveyModalOpen(true)}
                    className="px-6 py-2.5 bg-gradient-to-r from-[#ff334b] to-[#ff4767] hover:from-[#ff1f38] hover:to-[#f43f5e] shadow-md shadow-red-500/20 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                  >
                    Survey This Building
                  </button>
                  <Link
                    href={activeBuilding.link}
                    className="px-6 py-2.5 bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-slate-100 transition-all"
                  >
                    View Specifications →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900">
                  <Image
                    src={activeBuilding.image}
                    alt={activeBuilding.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE SOLUTIONS CARDS (Clean White) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Engineering Range
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Our Elevator Solutions
              </h2>
            </div>
            <Link
              href="/solutions"
              className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#ff334b] hover:text-[#ff334b] flex items-center gap-1"
            >
              <span>Explore All 4 Categories</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_DATA.map((solution) => (
              <div
                key={solution.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 text-slate-900 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    {solution.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#ff334b] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                      {solution.subtitle}
                    </p>
                    <ul className="space-y-1.5 mb-6">
                      {solution.highlights.slice(0, 3).map((hl, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-[#ff334b] font-bold">•</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={solution.slug}
                    className="w-full py-2.5 text-center bg-slate-50 hover:bg-rose-50 text-slate-800 hover:text-[#ff334b] border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. B2B PRODUCTION HUB (Clean White & Slate, NOT Black!) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50/50 to-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
                  B2B Manufacturing & Raw Materials Hub
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Supplying High-Grade Lift Components Across South India
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Beyond end-user installations, <strong>Vision Lifts & Solutions</strong> operates an active manufacturing and component distribution catalog in Karimnagar. We supply gearless traction machines, VVVF micro-processor controllers, automatic door operators, guide rails, and custom designer cabins to other elevator service businesses and contractors.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">PMSM Machines</div>
                    <div className="text-slate-500 text-[11px]">320kg to 2000kg Gearless</div>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">VVVF Controllers</div>
                    <div className="text-slate-500 text-[11px]">Integrated ARD & CAN-bus</div>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
                    <div className="font-bold text-slate-900">Modular SS Cabins</div>
                    <div className="text-slate-500 text-[11px]">SS 304 Titanium & Glass</div>
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href="/production-hub"
                    className="inline-block px-7 py-3 bg-gradient-to-r from-[#ff334b] to-[#ff4767] hover:from-[#ff1f38] hover:to-[#f43f5e] shadow-md shadow-red-500/20 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                  >
                    Browse B2B Component Catalog →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                  <Image
                    src="/images/cabin-study.png"
                    alt="Elevator Manufacturing & Cabin Assembly"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Clean White Cards) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              Verified Feedback
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Trusted by Homeowners, Builders & Healthcare Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-3">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{t.client}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-[11px] font-semibold text-[#ff334b] mt-0.5">
                    Installed: {t.liftType}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL ACTION BANNER (White / Soft Accent with Rounded Buttons) */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
            <span className="inline-block px-3 py-1 bg-[#ff334b]/20 text-red-400 border border-red-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Ready to Upgrade Your Building?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Schedule Your Free On-Site Inspection Today
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Our engineering team based on Gandhi Road, Karimnagar will visit your site, measure hoistway dimensions, evaluate power availability, and prepare a custom blueprint & quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => setSurveyModalOpen(true)}
                className="px-7 py-3.5 bg-gradient-to-r from-[#ff334b] to-[#ff4767] hover:from-[#ff1f38] hover:to-[#f43f5e] shadow-md shadow-red-500/20 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
              >
                Book a Free Site Survey
              </button>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
              >
                Call +91 98484 80868
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteSurveyModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />
    </div>
  );
}
