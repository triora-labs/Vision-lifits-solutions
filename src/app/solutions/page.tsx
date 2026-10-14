"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";

export default function SolutionsPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSolutions =
    activeTab === "all"
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category.toLowerCase() === activeTab.toLowerCase());

  const comparisonData = [
    {
      category: "Residential Villa Lifts",
      series: "VL-Home Luxe",
      pit: "150 mm (Pitless)",
      overhead: "2800 mm",
      speed: "0.5 - 0.7 m/s",
      capacity: "250 - 450 kg (3-6 Pax)",
      power: "Single Phase 220V / 3-Ph",
      bestFor: "Duplex Villas, Bungalows, Penthouse",
    },
    {
      category: "Commercial Office Lifts",
      series: "VL-Commercial MRL",
      pit: "1200 - 1400 mm",
      overhead: "3800 mm",
      speed: "1.0 - 1.75 m/s",
      capacity: "544 - 1360 kg (8-20 Pax)",
      power: "3 Phase 415V, 50Hz",
      bestFor: "Corporate Offices, Malls, Showrooms",
    },
    {
      category: "Hospital Bed Lifts",
      series: "VL-Medicare Stretcher",
      pit: "1400 mm",
      overhead: "4200 mm",
      speed: "0.75 - 1.0 m/s",
      capacity: "1020 - 1768 kg (Bed + Attendants)",
      power: "3 Phase 415V, 50Hz",
      bestFor: "Hospitals, Nursing Homes, Clinics",
    },
    {
      category: "Industrial Freight Lifts",
      series: "VL-Heavy Cargo",
      pit: "1500 mm",
      overhead: "4400 mm",
      speed: "0.35 - 0.5 m/s",
      capacity: "1000 - 5000 kg Heavy Load",
      power: "3 Phase 415V, Heavy Duty",
      bestFor: "Factories, Warehouses, Auto Centers",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header Banner (White Background) */}
      <section className="bg-white border-b border-slate-100 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600 font-bold">Solutions</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 uppercase tracking-wider">
              Categorized Elevator Systems
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Elevator solutions for <span className="text-red-600">every building.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              From whisper-quiet pitless villa elevators running on single-phase household power to high-capacity hospital bed lifts and heavy industrial freight systems across Telangana.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Rounded-Full) */}
      <section className="py-6 bg-slate-50 border-b border-slate-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {["all", "Residential", "Commercial", "Hospital", "Industrial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeTab.toLowerCase() === tab.toLowerCase()
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {tab === "all" ? "All Solutions" : tab}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="px-5 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-800 transition-all"
            >
              Request Hoistway Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredSolutions.map((solution, idx) => (
            <div
              key={solution.id}
              id={solution.id}
              className="scroll-mt-32 p-6 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    {solution.category} Elevator Solution
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {solution.title}
                  </h2>
                  <p className="text-red-600 font-semibold text-xs sm:text-sm">
                    {solution.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {solution.description}
                  </p>

                  <div className="bg-white p-4 rounded-2xl border border-slate-200">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Key Engineering Inclusions:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {solution.highlights.map((hl, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                    {solution.specs.map((sp, i) => (
                      <span key={i} className="bg-white px-3 py-1 rounded-full border border-slate-200">
                        {sp}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                    >
                      Book Site Survey for {solution.category}
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20am%20interested%20in%20a%20quotation%20for%20${encodeURIComponent(solution.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all flex items-center gap-1.5"
                    >
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparative Specification Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              Civil & Technical Comparison
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Compare Elevator Series Requirements
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Evaluate pit depth, overhead height, and power configurations before finalising your architectural plan.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Solution / Series</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Min. Pit Depth</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Overhead</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Rated Speed</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Carrying Capacity</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Electrical Supply</th>
                  <th className="p-4 text-xs font-bold uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-4 font-bold text-slate-900">
                      <div>{row.category}</div>
                      <div className="text-[11px] text-red-600 font-semibold">{row.series}</div>
                    </td>
                    <td className="p-4 text-slate-700 font-medium">{row.pit}</td>
                    <td className="p-4 text-slate-700">{row.overhead}</td>
                    <td className="p-4 text-slate-700">{row.speed}</td>
                    <td className="p-4 text-slate-700">{row.capacity}</td>
                    <td className="p-4 text-slate-700 font-medium">{row.power}</td>
                    <td className="p-4">
                      <button
                        type="button"
                        onClick={() => setSurveyOpen(true)}
                        className="px-3.5 py-1.5 bg-red-600 text-white font-bold rounded-full text-[11px] uppercase tracking-wider hover:bg-red-700 transition-all"
                      >
                        Survey
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
