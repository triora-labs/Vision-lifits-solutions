"use client";

import React from "react";
import { COMPANY_INFO } from "@/data/siteData";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20to%20enquire%20about%20an%20elevator.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition-all hover:scale-105 group text-xs font-semibold"
        title="Chat on WhatsApp (+91 98484 80868)"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885h.005c3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.588-5.772-5.772-5.772zm3.397 8.192c-.145.408-.847.785-1.177.834-.33.049-.757.068-2.457-.638-1.7-.706-2.776-2.441-2.86-2.553-.085-.112-.693-.923-.693-1.761s.437-1.25.592-1.423c.155-.172.338-.216.45-.216.113 0 .226.002.324.007.104.005.244-.04.381.29.145.352.497 1.214.54 1.302.043.088.072.19.014.305-.058.115-.088.187-.175.29-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.103.178.461.761 1.054 1.291.764.681 1.408.892 1.609.992.201.1.32.083.438-.052.119-.136.508-.591.644-.793.136-.203.272-.17.458-.102.186.068 1.182.557 1.385.659.203.102.339.153.39.237.051.085.051.493-.094.901z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Direct Phone Call */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        aria-label="Call Vision Lifts"
        className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"
        title="Call +91 98484 80868"
      >
        <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}
