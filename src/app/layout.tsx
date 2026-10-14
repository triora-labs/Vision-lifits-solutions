import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Vision Lifts & Solutions | Premium Elevators in Karimnagar & Telangana",
  description:
    "Vision Lifts & Solutions manufactures, installs and services residential, commercial, hospital, and industrial elevators across Karimnagar, Hyderabad, and Telangana. B2B Lift Components Supplier & 24/7 AMC.",
  keywords: [
    "Vision Lifts and Solutions",
    "Elevator Company Karimnagar",
    "Lift Installation Telangana",
    "Home Lifts Hyderabad",
    "Commercial Elevators Telangana",
    "Hospital Bed Lifts",
    "Industrial Goods Elevators",
    "Elevator Parts Supplier",
    "Ramesh Vilasagar Vision Lifts",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-slate-800 bg-white">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

