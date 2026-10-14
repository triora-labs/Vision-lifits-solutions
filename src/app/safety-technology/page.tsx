"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SAFETY_FEATURES_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";

export default function SafetyTechnologyPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const ardSteps = [
    {
      step: "01",
      title: "Utility Power Interruption",
      time: "< 50 milliseconds",
      desc: "Grid power failure or severe voltage imbalance is instantly detected by high-speed solid-state phase monitoring relays.",
      state: "Fail-Safe Engaged",
    },
    {
      step: "02",
      title: "Battery Inverter Activation",
      time: "Immediate",
      desc: "Dedicated maintenance-free 48V/96V sealed lead-acid battery bank powers the auxiliary inverter without allowing the car to drop.",
      state: "Auxiliary Power Online",
    },
    {
      step: "03",
      title: "Smart Direction Calculation",
      time: "1.2 seconds",
      desc: "Microprocessor measures motor current demand to dynamically determine whether moving upward or downward requires the least torque.",
      state: "Optimal Path Selected",
    },
    {
      step: "04",
      title: "Flush Levelling & Door Release",
      time: "15 - 25 seconds",
      desc: "The cabin docks with millimeter precision at the nearest landing threshold, releases door mechanical interlocks, and passengers walk out.",
      state: "Safe Evacuation Complete",
    },
  ];

  const complianceStandards = [
    {
      code: "IS 14665 (Part 1 to 5)",
      category: "Bureau of Indian Standards",
      title: "Electric Traction Lifts Safety Code",
      desc: "Governs structural safety factors for counterweights, guide rails, car sling chassis, wire ropes, and mechanical safety gear.",
    },
    {
      code: "IS 15259:2002",
      category: "Installation Standard",
      title: "Shaft & Hoistway Clearances",
      desc: "Regulates pit depth, overhead clearances, ventilation standards, and structural fire enclosure ratings.",
    },
    {
      code: "NBC 2016",
      category: "National Building Code",
      title: "Fire Evacuation & Healthcare Access",
      desc: "Specifies firefighter emergency control override, stretcher bed dimensions, and public disability accessibility.",
    },
    {
      code: "ISO 9001:2015",
      category: "Quality Management",
      title: "Component Traceability & Testing",
      desc: "Ensures every brake assembly, governor, and controller undergoes verified pre-dispatch bench calibration.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. ARCHITECTURAL SPLIT HERO (White Background, Red Accents & Rounded Buttons) */}
      <section className="bg-white border-b border-slate-100 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-red-600 font-bold">Safety & Engineering</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                IS 14665 & NBC 2016 Compliant Systems
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
                Safety systems <br />
                built for <span className="text-red-600">peace of mind.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Elevator safety is not an optional accessory. At Vision Lifts & Solutions, every system installed across Telangana incorporates multi-layered mechanical fail-safes, real-time electronic diagnostics, and automatic battery rescue systems.
              </p>

              {/* Metric Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-2xl font-black text-slate-900">8-Tier</div>
                  <div className="text-xs text-slate-500 font-medium">Redundant Safety</div>
                </div>
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-100">
                  <div className="text-2xl font-black text-emerald-700">100%</div>
                  <div className="text-xs text-emerald-700 font-medium">Anti-Trap ARD</div>
                </div>
                <div className="p-3 rounded-2xl bg-red-50 border border-red-100">
                  <div className="text-2xl font-black text-red-600">&lt; 30 ms</div>
                  <div className="text-xs text-red-600 font-medium">Sensor Reaction</div>
                </div>
              </div>

              {/* Action Buttons (Rounded-Full) */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  Request On-Site Safety Inspection
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-7 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                >
                  Consult Chief Engineer
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl">
                <div className="relative h-80 sm:h-96">
                  <Image
                    src="/images/safety-panel.png"
                    alt="Precision Microprocessor Safety Panel"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-slate-200 shadow-md backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        Active Monitoring Active
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">VVVF Micro-Control</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Real-time CAN-bus sensor feedback on governor tension, door interlocks, and motor thermal limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARD (AUTOMATIC RESCUE DEVICE) INTERACTIVE WORKFLOW */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-3 py-1 rounded-full">
              Power Loss Protection
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Automatic Rescue Device (ARD) Technology
            </h2>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Power outages are common in regional grid systems. Vision Lifts integrates dedicated emergency battery systems ensuring passengers are smoothly evacuated within seconds without requiring manual external assistance.
            </p>
          </div>

          {/* 4 Step Sequential Process with Rounded-2xl Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {ardSteps.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeStep === idx
                    ? "bg-white border-red-600 shadow-md ring-1 ring-red-500/20"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${activeStep === idx ? "bg-red-600 text-white" : "bg-slate-100 text-slate-700"}`}>
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-600">
                    ● {item.state}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EIGHT-POINT REDUNDANT SAFETY SYSTEM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Redundant Fail-Safes
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              8-Tier Protection Standard on All Models
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              From our compact villa lifts to multi-ton industrial cargo elevators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_FEATURES_DATA.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-red-600 mb-1">
                    {item.tag}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATUTORY COMPLIANCE & BIS CERTIFICATIONS */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Regulatory Standards
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Tested & Approved for Commercial Handover
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We handle the entire documentation and inspection workflow required by the Department of Electrical Inspectorate and local municipal authorities in Telangana.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
                >
                  Schedule Statutory Inspection
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceStandards.map((std, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-red-600 mb-1">
                    {std.category}
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{std.code}</h4>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5 mb-2">{std.title}</div>
                  <p className="text-xs text-slate-500 leading-relaxed">{std.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
