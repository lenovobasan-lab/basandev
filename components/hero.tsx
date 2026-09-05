"use client";

import React, { useState, useEffect } from "react";
import { schoolConfig } from "@/lib/school-config";
import {
  ChevronDown,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Users,
} from "lucide-react";

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) * 0.015;
      const y = (e.clientY - innerHeight / 2) * 0.02;
      setMouseOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScrollDown = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const principalElem = document.getElementById("principal");
      if (principalElem) {
        principalElem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({
          top: window.innerHeight * 0.85,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
    >
      {/* Background Image Container with Parallax */}
      <div
        className="absolute inset-0 w-full h-full transform transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: `scale(1.06) translate(${mouseOffset.x}px, ${mouseOffset.y}px)`,
        }}
      >
        <img
          src={schoolConfig.coverImage}
          alt={`${schoolConfig.name} Campus Ground`}
          className="w-full h-full object-cover object-center brightness-90"
          loading="eager"
        />
      </div>

      {/* Multi-layer Gradient Overlays & Vignettes */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />

      {/* Ambient Glowing Blobs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Est. / Accreditation Tag */}
        <span className="text-emerald-400 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
          Est. {schoolConfig.establishedYear} • {schoolConfig.affiliation}
        </span>

        {/* School Name */}
        <h1
          id="hero-school-name"
          className="animate-slide-up text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight uppercase leading-tight"
        >
          {schoolConfig.name}
        </h1>

        {/* Tagline Gradient */}
        <h2 className="animate-fade-in-delayed text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 mb-6">
          {schoolConfig.tagline}
        </h2>

        {/* Motto Text */}
        <p className="animate-fade-in text-gray-200 text-base sm:text-lg max-w-2xl mx-auto font-medium mb-10 text-balance">
          "{schoolConfig.motto}"
        </p>

        {/* Call to Actions */}
        <div className="animate-scale-in flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <a
            id="hero-enroll-button"
            href={schoolConfig.enrollmentFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-2xl shadow-blue-500/40 transform hover:-translate-y-1 transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <span>Admission 2084</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            id="hero-explore-button"
            type="button"
            onClick={handleScrollDown}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold rounded-xl transition-all active:scale-95 inline-flex items-center justify-center gap-2"
          >
            <span>Explore Our School</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        {/* Key Highlight Badges */}
        <div className="animate-fade-in-delayed mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <Award className="w-5 h-5 text-amber-400 mb-1.5" />
            <div className="font-extrabold text-base sm:text-xl text-white">
              55+ Years
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
              Academic Excellence
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <BookOpen className="w-5 h-5 text-sky-400 mb-1.5" />
            <div className="font-extrabold text-base sm:text-xl text-white">
              100% Success
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
              Better Results
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <Users className="w-5 h-5 text-emerald-400 mb-1.5" />
            <div className="font-extrabold text-base sm:text-xl text-white">
              ICT Based Learning
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
              Educators & Staff
            </div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-left">
            <Sparkles className="w-5 h-5 text-purple-400 mb-1.5" />
            <div className="font-extrabold text-base sm:text-xl text-white">
              Music and Arts
            </div>
            <div className="text-[11px] sm:text-xs text-slate-300 font-medium">
              ECA & Sports
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Capsule Scroll Indicator */}
      <button
        id="hero-scroll-indicator"
        type="button"
        aria-label="Scroll down to explore"
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-opacity focus:outline-none"
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </button>
    </section>
  );
};
