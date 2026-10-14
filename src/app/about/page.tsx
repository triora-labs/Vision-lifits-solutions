"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";

export default function AboutPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);

  const milestones = [
    { year: "2014", title: "Foundation in Karimnagar", desc: "Ramesh Vilasagar established Vision Lifts & Solutions to bring precision vertical mobility engineering to North Telangana." },
    { year: "2017", title: "Expansion to Commercial Towers", desc: "Successfully installed multi-car gearless passenger elevators for prominent business plazas and private healthcare hospitals." },
    { year: "2020", title: "B2B Production Hub Launch", desc: "Expanded into high-precision component distribution, supplying gearless traction motors and VVVF control panels to elevator contractors." },
    { year: "2023", title: "Pitless Home Lift Innovation", desc: "Engineered single-phase, shallow 150mm pit residential elevators tailored specifically for luxury villas and duplexes." },
    { year: "Today", title: "500+ Active Sites & 24/7 AMC", desc: "Over 500 installations across Telangana, backed by an in-house mobile engineering brigade with guaranteed 30-min emergency response." },
  ];

  const regionalHubs = [
    { city: "Karimnagar (HQ)", address: "Gandhi Road, Karimnagar, TS-505001", role: "Central Office, Engineering Design & B2B Production Hub", contact: "+91 9848480868" },
    { city: "Warangal & Hanamkonda", address: "Subedari & Kazipet Corridor", role: "Commercial Installation & Quick AMC Service Depot", contact: "+91 9848480868" },
    { city: "Nizamabad & Jagtial", address: "North Telangana Field Office", role: "Residential Villa Installations & Routine Preventive Maintenance", contact: "+91 9848480868" },
    { city: "Hyderabad Regional Wing", address: "Kondapur & Gachibowli Coordination", role: "High-Rise Commercial & Architectural Glass Project Support", contact: "+91 9848480868" },
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
              <span className="text-red-600 font-bold">About Us</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 uppercase tracking-wider">
              Karimnagar Headquarters & Service Hub
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Pioneering elevator engineering in <span className="text-red-600">Telangana.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Founded by <strong>Ramesh Vilasagar</strong>, Vision Lifts & Solutions blends rigorous mechanical engineering with local service responsiveness, bringing safer, quieter, and smarter vertical mobility to homes, offices, and healthcare facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Founder & Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                Founder&apos;s Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Built on Trust, Precision Engineering and Direct Accountability
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Elevators are among the most critical mechanical assets in any building. When a lift falters, daily life and business stop. Vision Lifts & Solutions was founded on the fundamental principle that building owners in Telangana deserve <strong>direct access to qualified engineers</strong>, zero-compromise safety hardware, and genuine 24/7 local breakdown response—without the frustrating delays of corporate call centers.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Under the technical leadership of <strong>Ramesh Vilasagar</strong>, we have engineered customized lifts for every civil condition: from pitless glass elevators tucked into heritage Karimnagar homes to heavy 5-ton freight cargo systems powering industrial warehouses.
              </p>

              {/* Founder quote box */}
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-red-600 shadow-xs">
                <p className="italic text-slate-700 text-sm">
                  &ldquo;Every lift we commission carries our personal reputation. We treat every passenger cab as if our own family travels in it every day.&rdquo;
                </p>
                <div className="mt-2 font-bold text-slate-900 text-xs">
                  — Ramesh Vilasagar, Founder & Managing Director
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/hero-lobby.png"
                  alt="Vision Lifts Engineering & Lobby Design"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Karimnagar Headquarters
                  </div>
                  <div className="text-base font-bold">
                    Direct Engineering Support on Gandhi Road (TS-505001)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Presence across Telangana */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-100/70 px-3 py-1 rounded-full">
              Regional Strength
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Our Telangana Service & Installation Footprint
            </h2>
            <p className="text-slate-600 mt-2 text-sm">
              Strategically stationed technical teams ensuring maximum uptime and guaranteed rapid arrival for emergency callouts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalHubs.map((hub, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold mb-4">
                    📍
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{hub.city}</h3>
                  <div className="text-xs text-red-600 font-semibold mb-3">{hub.address}</div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{hub.role}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-800">
                  Direct Line: <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-red-600 hover:underline">{hub.contact}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="relative h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
                <Image
                  src="/images/safety-panel.png"
                  alt="Precision Control Panel & Technical Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Certified Engineering Standards
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Our Technical Team & Quality Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                Our engineering team comprises factory-trained mechanical engineers, electrical technicians, and lift safety inspectors who carry out each phase of the project:
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Pre-Civil Structural Verification</h4>
                    <p className="text-xs text-slate-600">Laser-guided plumb alignment of the shaft, pit waterproofing inspection, and overhead clearances before installation begins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Strict Adherence to IS 14665 & IS 15259</h4>
                    <p className="text-xs text-slate-600">All wiring, safety brakes, governor calibration, and door interlocks comply with National Building Code (NBC) 2016 guidelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Comprehensive Pre-Handover Load Testing</h4>
                    <p className="text-xs text-slate-600">Full 125% test-load braking trials, Automatic Rescue Device (ARD) power cut simulations, and levelling precision verification.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all"
                >
                  Consult Our Technical Team
                </button>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                >
                  Visit Karimnagar Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Milestones (Clean White/Slate Theme) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              10+ Years of Vertical Mobility Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="text-xl font-black text-red-600 mb-1">{m.year}</div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
