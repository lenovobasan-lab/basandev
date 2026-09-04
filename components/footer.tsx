"use client";

import React from "react";
import { schoolConfig } from "@/lib/school-config";
import {
  Facebook,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Heart,
  ChevronRight,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const importantLinks = [
    { label: "Hamro Patro", href: "https://www.hamropatro.com/" },
    { label: "National Examination Board", href: "https://neb.gov.np/" },
    { label: "Ministry of Education", href: "https://moest.gov.np/" },
    { label: "CDC Nepal", href: "https://moecdc.gov.np/" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-indigo-950 text-gray-400 pt-14 pb-8 px-6 sm:px-8 border-t border-white/5 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* 3-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Column 1: School Blurb & Emblem (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-blue-600 to-indigo-700 ring-2 ring-blue-400/30 flex-shrink-0 flex items-center justify-center">
                <img
                  src={schoolConfig.logo}
                  alt={schoolConfig.name}
                  className="w-full h-full object-cover rounded-full bg-slate-900"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white leading-tight uppercase tracking-tight">
                  {schoolConfig.name}
                </h3>
                <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase">
                  {schoolConfig.iemisCode}
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
              "{schoolConfig.motto}" — Dedicated to academic excellence, leadership, and holistic education.
            </p>

            {/* Social Icons Row */}
            <div className="pt-1 flex items-center gap-2.5">
              <a
                href={schoolConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Facebook Page"
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all cursor-pointer"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={schoolConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit YouTube Channel"
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-600 transition-all cursor-pointer"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={schoolConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact via WhatsApp"
                className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-gray-300 hover:text-white hover:bg-emerald-600 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links & Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, "/")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => handleLinkClick(e, "/about")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> About Us
                </a>
              </li>
              <li>
                <a
                  href="/#principal"
                  onClick={(e) => handleLinkClick(e, "/#principal")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Principal's Message
                </a>
              </li>
              <li>
                <a
                  href="/staff"
                  onClick={(e) => handleLinkClick(e, "/staff")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Faculty & Staff
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  onClick={(e) => handleLinkClick(e, "/gallery")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Photo & Video Gallery
                </a>
              </li>
              <li>
                <a
                  href="/notices"
                  onClick={(e) => handleLinkClick(e, "/notices")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Notices & Circulars
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, "/contact")}
                  className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-accent" /> Contact Admissions
                </a>
              </li>
              <li>
                <a
                  href={schoolConfig.enrollmentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" /> Online Admission Form
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-white/10">
              <h5 className="font-bold text-[11px] text-slate-300 uppercase tracking-wider mb-2">
                Important Links
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm">
                {importantLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-accent" />
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Address & Contact (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">
              Campus Office
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>{schoolConfig.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`tel:${schoolConfig.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {schoolConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a
                  href={`mailto:${schoolConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {schoolConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{schoolConfig.officeHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-medium text-gray-400">
          <div className="flex items-center gap-3">
            <span>&copy; {currentYear} {schoolConfig.name}</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full" />
            <span>{schoolConfig.location}</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              onClick={(e) => handleLinkClick(e, "/privacy-policy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              onClick={(e) => handleLinkClick(e, "/terms-of-service")}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <span className="inline-flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NEB Accredited
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
