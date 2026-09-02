"use client";

import React, { useState, useEffect } from "react";
import { schoolConfig } from "@/lib/school-config";
import { schoolNotices } from "@/components/notices";
import { QRCodeSVG } from "qrcode.react";
import {
  Menu,
  X,
  Sun,
  Moon,
  QrCode,
  ExternalLink,
  GraduationCap,
  BellRing,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath = "/",
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQrTooltip, setShowQrTooltip] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(false);

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    // Check announcement banner
    const dismissed = sessionStorage.getItem("school_banner_dismissed");
    if (dismissed) {
      setBannerDismissed(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const dismissBanner = () => {
    setBannerDismissed(true);
    sessionStorage.setItem("school_banner_dismissed", "true");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Principal", href: "/#principal" },
    { label: "Staff", href: "/staff" },
    { label: "Gallery", href: "/gallery" },
    { label: "Notices", href: "/notices" },
    { label: "Contact", href: "/contact" },
  ];

  const recentNotices = schoolNotices.slice(0, 3);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
        return;
      }
    }

    if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Announcement Banner */}
      {!bannerDismissed && (
        <aside
          id="announcement-banner"
          aria-label="Urgent Announcements"
          className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white px-4 py-2 text-xs sm:text-sm border-b border-indigo-500/30 relative z-50"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="flex h-2 w-2 relative flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-300 uppercase tracking-wider text-[11px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 flex-shrink-0">
                <BellRing className="w-3 h-3" /> Latest Notices
              </span>
              <div className="notice-ticker min-w-0 flex-1" aria-label="Latest school notices">
                <div className="notice-ticker-track">
                  {[...recentNotices, ...recentNotices].map((notice, index) => (
                    <a
                      key={`${notice.id}-${index}`}
                      href="/notices"
                      onClick={(e) => handleNavClick(e, "/notices")}
                      className="notice-ticker-item text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
                    >
                      <span className="text-emerald-300 font-semibold">{notice.category}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span className="truncate">{notice.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={schoolConfig.enrollmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-2.5 py-1 rounded transition-colors"
              >
                Apply Online <ExternalLink className="w-3 h-3" />
              </a>
              <button
                onClick={dismissBanner}
                aria-label="Dismiss announcement banner"
                className="text-slate-400 hover:text-white p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Main Sticky Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-2.5 border-b border-gray-100 dark:border-slate-800"
            : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md py-3 border-b border-gray-100 dark:border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo & School Name */}
          <a
            id="brand-logo-link"
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-br from-blue-600 to-indigo-700 ring-2 ring-blue-100 dark:ring-blue-900/40 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 flex items-center justify-center">
              <img
                src={schoolConfig.logo}
                alt={`${schoolConfig.name} Emblem Logo`}
                className="w-full h-full object-cover rounded-full bg-white dark:bg-slate-900"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-300 leading-tight uppercase group-hover:opacity-90 transition-opacity">
                {schoolConfig.name}
              </span>
              <span className="text-[10px] font-medium text-gray-400 tracking-widest uppercase">
                {schoolConfig.iemisCode}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-navigation"
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {navLinks.map((link) => {
              const isActive =
                currentPath === link.href ||
                (link.href !== "/" && currentPath.startsWith(link.href));
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-bold"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-button"
              type="button"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700 transition-transform rotate-0 scale-100" />
              )}
            </button>

            {/* Enroll Now CTA with QR Code Tooltip */}
            <div
              className="relative hidden sm:block"
              onMouseEnter={() => setShowQrTooltip(true)}
              onMouseLeave={() => setShowQrTooltip(false)}
            >
              <a
                id="enroll-now-cta-button"
                href={schoolConfig.enrollmentFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-bold rounded-full shadow-lg shadow-blue-200 dark:shadow-none hover:shadow-blue-300 transition-all active:scale-95 inline-flex items-center gap-2"
              >
                <span>Enroll Now</span>
                <QrCode className="w-3.5 h-3.5 opacity-90" />
              </a>

              {/* QR Code Hover Popover */}
              {showQrTooltip && (
                <div
                  id="enroll-qr-tooltip"
                  className="absolute right-0 top-full mt-2 w-64 p-4 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 z-50 animate-scale-in text-center"
                >
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-200 mb-2">
                    Scan with Mobile to Enroll
                  </p>
                  <div className="bg-white p-2.5 rounded-xl inline-block shadow-inner border border-slate-100">
                    <QRCodeSVG
                      value={schoolConfig.enrollmentFormUrl}
                      size={150}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">
                    Direct Online Admission Application
                  </p>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sheet Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-sheet"
            className="w-full max-w-sm h-full bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-slide-up border-l border-slate-200 dark:border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Sheet Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src={schoolConfig.logo}
                    alt={schoolConfig.name}
                    className="w-11 h-11 rounded-full border border-slate-200 dark:border-slate-800 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
                      {schoolConfig.name}
                    </h3>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                      {schoolConfig.iemisCode}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation sheet"
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Accent Border */}
              <nav className="mt-6 flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive =
                    currentPath === link.href ||
                    (link.href !== "/" && currentPath.startsWith(link.href));
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border-l-4 border-accent"
                          : "text-slate-700 dark:text-slate-300 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-900/60 hover:border-l-4 hover:border-accent/70"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>

              {/* Mobile QR & Enrollment CTA */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
                <a
                  href={schoolConfig.enrollmentFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 shadow-md mb-3"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Apply for Admission</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="bg-white p-2 rounded-xl inline-block shadow-xs border border-slate-200">
                  <QRCodeSVG
                    value={schoolConfig.enrollmentFormUrl}
                    size={110}
                    level="M"
                  />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                  Scan QR code for instant mobile form
                </p>
              </div>
            </div>

            {/* Sheet Footer Contacts */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 space-y-2">
              <a
                href={`tel:${schoolConfig.phone}`}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>{schoolConfig.phone}</span>
              </a>
              <a
                href={`mailto:${schoolConfig.email}`}
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-4 h-4 text-indigo-600" />
                <span>{schoolConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
