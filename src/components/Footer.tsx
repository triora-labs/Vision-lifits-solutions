"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071d27] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Compliance Credentials (like Image 1) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white/95 p-2 rounded-xl border border-white/20">
              <div className="relative h-10 w-44">
                <Image
                  src="/images/vision-lifts-logo.png"
                  alt="Vision Lifts & Solutions"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Vision Lifts & Solutions is an elevator engineering and manufacturing enterprise founded by <strong>Ramesh Vilasagar</strong>. Specializing in residential, commercial, hospital, and industrial vertical transport systems across Karimnagar, Hyderabad, and all districts of Telangana.
            </p>

            {/* Registration & Compliance Pills (matching Image 1) */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-[#0b2834] border border-[#143e4f] text-[11px]">
                <div className="text-emerald-400 font-bold uppercase text-[9px] tracking-wider">
                  📍 REGION / HQ
                </div>
                <div className="text-white font-semibold mt-0.5">Karimnagar, TS</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0b2834] border border-[#143e4f] text-[11px]">
                <div className="text-emerald-400 font-bold uppercase text-[9px] tracking-wider">
                  ✓ BIS STANDARD
                </div>
                <div className="text-white font-semibold mt-0.5">IS 14665 (Part 1-5)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0b2834] border border-[#143e4f] text-[11px]">
                <div className="text-emerald-400 font-bold uppercase text-[9px] tracking-wider">
                  🛡️ SAFETY CODE
                </div>
                <div className="text-white font-semibold mt-0.5">NBC 2016 Compliant</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0b2834] border border-[#143e4f] text-[11px]">
                <div className="text-emerald-400 font-bold uppercase text-[9px] tracking-wider">
                  🚨 BREAKDOWN AMC
                </div>
                <div className="text-white font-semibold mt-0.5">24/7 Rapid Response</div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/safety-technology" className="hover:text-white transition-colors">Safety & Tech</Link>
              </li>
              <li>
                <Link href="/production-hub" className="hover:text-white transition-colors">Production Hub</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Projects Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Elevator Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <Link href="/solutions#residential" className="hover:text-white transition-colors">
                  Villas & Independent Homes
                </Link>
              </li>
              <li>
                <Link href="/solutions#residential" className="hover:text-white transition-colors">
                  Residential Apartments
                </Link>
              </li>
              <li>
                <Link href="/solutions#commercial" className="hover:text-white transition-colors">
                  Commercial & Office Towers
                </Link>
              </li>
              <li>
                <Link href="/solutions#hospital" className="hover:text-white transition-colors">
                  Hospital Bed & Stretcher Lifts
                </Link>
              </li>
              <li>
                <Link href="/solutions#industrial" className="hover:text-white transition-colors">
                  Industrial Heavy Freight Lifts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Panoramic Glass Capsule Elevators
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (matching Image 1 layout with circular icons) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Contact Us
            </h4>

            <div className="flex items-start gap-3 text-xs text-slate-300">
              <span className="w-8 h-8 rounded-full bg-[#0b2834] border border-[#143e4f] flex items-center justify-center text-emerald-400 shrink-0">
                📍
              </span>
              <div>
                <p className="font-semibold text-white">Karimnagar Central Office</p>
                <p className="text-slate-400 mt-0.5">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="w-8 h-8 rounded-full bg-[#0b2834] border border-[#143e4f] flex items-center justify-center text-emerald-400 shrink-0">
                📞
              </span>
              <div>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-semibold text-white hover:text-emerald-400">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="w-8 h-8 rounded-full bg-[#0b2834] border border-[#143e4f] flex items-center justify-center text-emerald-400 shrink-0">
                ✉️
              </span>
              <div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-emerald-400 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20to%20enquire%20about%20an%20elevator.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top (matching Image 1) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Vision Lifts & Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Developed by <strong className="text-slate-300">Triora Labs</strong></span>
            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0b2834] hover:bg-[#143e4f] text-emerald-400 flex items-center justify-center transition-all shadow border border-[#143e4f]"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
