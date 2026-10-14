"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Karimnagar",
    serviceType: "New Elevator Installation",
    buildingType: "Residential Villa / Home",
    floors: "G+2 Floors",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header Banner (White Background) */}
      <section className="bg-white border-b border-slate-100 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-red-600 font-bold">Contact Us</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-bold text-red-600 uppercase tracking-wider">
              Direct Technical Line to Ramesh Vilasagar
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Contact Vision Lifts & <span className="text-red-600">Solutions.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Have an upcoming construction project, need a free site survey in Karimnagar or across Telangana, or require urgent 24/7 elevator maintenance? Reach out directly to our engineering desk.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info & Lead Form */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Coordinates */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  Headquarters & Workshop
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                  Karimnagar Central Office
                </h2>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  Located right in the commercial hub of Karimnagar with swift highway connectivity to Warangal, Nizamabad, Jagtial, and Hyderabad.
                </p>
              </div>

              {/* Coordinates Cards */}
              <div className="space-y-3.5">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-base shrink-0">
                    📍
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Registered Office Address</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">
                      {COMPANY_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Gandhi Road Commercial Zone, Telangana - 505001
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-base shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Founder & Support Line</h4>
                    <p className="text-base font-extrabold text-slate-900 mt-0.5">
                      <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-red-600 transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Contact Person: <strong>{COMPANY_INFO.founder}</strong>
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-base shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Project Quotation Email</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5 break-all">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-red-600 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Send architectural blueprints and CAD shaft drawings
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-base shrink-0">
                    💬
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">Instant WhatsApp Chat</h4>
                    <p className="text-xs text-emerald-900 mt-0.5 mb-2.5">
                      Get immediate ballpark price estimates and hoistway dimensions.
                    </p>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20am%20contacting%20you%20regarding%20an%20elevator%20quotation.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-xs transition-all"
                    >
                      Chat on WhatsApp (+91 98484 80868)
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Operating Hours:
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-slate-800">
                  <span className="text-slate-400">Office & Site Consultations:</span>
                  <span className="font-semibold text-slate-200">Mon - Sat (9:00 AM - 7:30 PM)</span>
                </div>
                <div className="flex justify-between text-xs py-1 mt-1">
                  <span className="text-slate-400">24/7 Breakdown Dispatch:</span>
                  <span className="font-bold text-emerald-400">24 Hours / 365 Days</span>
                </div>
              </div>
            </div>

            {/* Right: Dynamic Lead Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider">
                    Site Survey & Quotation Form
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                    Request an Official Project Estimate
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill out the form below. Ramesh Vilasagar or our senior elevator engineer will get back to you within 2-4 hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                      ✓
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-1">Inquiry Successfully Submitted!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto mb-5">
                      Thank you, <strong>{formData.name}</strong>. We have logged your request for a <strong>{formData.buildingType}</strong> in <strong>{formData.city}</strong>. We will call you at <strong>{formData.phone}</strong> promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Reddy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98484 80868"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@gmail.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Site Location / City <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Karimnagar, Warangal, Hyderabad"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Service Needed
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option>New Elevator Installation</option>
                          <option>Modernization of Old Lift</option>
                          <option>Annual Maintenance (AMC)</option>
                          <option>Breakdown / Repair</option>
                          <option>B2B Components Purchase</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Building Type
                        </label>
                        <select
                          value={formData.buildingType}
                          onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option>Residential Villa / Home</option>
                          <option>Apartment Complex</option>
                          <option>Commercial / Office Building</option>
                          <option>Hospital / Medical Center</option>
                          <option>Industrial Plant / Warehouse</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                          Number of Stops
                        </label>
                        <select
                          value={formData.floors}
                          onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                          className="w-full px-4 py-2.5 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          <option>G+1 (2 Stops)</option>
                          <option>G+2 (3 Stops)</option>
                          <option>G+3 (4 Stops)</option>
                          <option>G+4 (5 Stops)</option>
                          <option>G+5 or more</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Project Notes / Special Civil Requirements
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Mention pit availability, shaft dimensions, glass capsule preference, etc."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
                      >
                        Submit Quotation & Survey Request
                      </button>
                      <p className="text-center text-[11px] text-slate-400 mt-2">
                        🔒 Direct technical assessment. No third-party spam.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section / Karimnagar Location Card */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  Google Maps Location
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Visit Us on Gandhi Road, Karimnagar
                </h3>
                <p className="text-xs text-slate-500">
                  TS-505001, Telangana, India · Walking distance from central transport hubs
                </p>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent("Gandhi Road, Karimnagar, Telangana 505001")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all text-center"
              >
                Open in Google Maps →
              </a>
            </div>

            {/* Visual Location Frame */}
            <div className="relative h-72 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
              <iframe
                title="Vision Lifts Office Location - Karimnagar"
                src="https://maps.google.com/maps?q=Gandhi+Road,+Karimnagar,+Telangana+505001&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
