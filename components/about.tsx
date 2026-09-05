"use client";

import React from "react";
import { schoolConfig } from "@/lib/school-config";
import {
  Compass,
  Eye,
  Target,
  MapPin,
  Building,
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  Globe2,
  Shield,
  HeartHandshake,
  Clock,
  Navigation,
} from "lucide-react";

export const About: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <GraduationCap className="w-4 h-4" /> Discover Our Legacy
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About {schoolConfig.name}
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Fostering holistic excellence, analytical acumen, and ethical leadership
            since {schoolConfig.establishedYear}.
          </p>
        </div>

        {/* Mission + Vision 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shadow-inner">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <div className="h-1 w-12 bg-accent mb-4 rounded-full" />
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To deliver world-class, inclusive, and learner-centered education
              that cultivates intellectual rigor, moral integrity, artistic
              creativity, and environmental consciousness. We prepare our students
              to excel in higher academic spheres while serving their communities
              with humility and distinction.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 shadow-inner">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Our Vision
            </h2>
            <div className="h-1 w-12 bg-accent mb-4 rounded-full" />
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              To be recognized nationwide and internationally as a premier model
              academy that seamlessly synthesizes progressive 21st-century STEAM
              methodologies with timeless humanitarian values, producing visionary
              global citizens and empathetic leaders.
            </p>
          </div>
        </div>

        {/* Core Pillars / Values Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Pillars of Institutional Excellence
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              The guiding foundations embedded in every curriculum layer
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-blue-500 transition-colors">
              <BookOpen className="w-6 h-6 text-blue-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Academic Rigor
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                NEB-aligned syllabus with advanced STEM inquiry, digital tools, and
                personalized remedial mentoring.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-500 transition-colors">
              <Shield className="w-6 h-6 text-amber-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Character & Ethics
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Daily mindfulness, moral literacy, anti-bullying pledge, and
                grassroots community volunteer initiatives.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-emerald-500 transition-colors">
              <Sparkles className="w-6 h-6 text-emerald-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Innovation & ECA
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Coding & Robotics labs, Model UN debates, inter-school football,
                cricket, music, and performing arts.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-purple-500 transition-colors">
              <Globe2 className="w-6 h-6 text-purple-600 mb-3" />
              <h4 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                Global Competence
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Multilingual training (English, Nepali), global climate
                action projects, and exchange dialogues.
              </p>
            </div>
          </div>
        </div>

        {/* Location Block Card with bg-muted/50 */}
        <div
          id="school-location-card"
          className="p-8 sm:p-10 rounded-3xl bg-slate-100/70 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-md"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                <MapPin className="w-4 h-4" /> School Location & Accessibility
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                Situated in the Heart of Ilam
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Our purpose-built, secure, and earthquake-resilient school spans over
                beautiful landscaped grounds with panoramic views of the
                hills of Ilam, providing a calm, green, and inspiring
                learning sanctuary.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Navigation className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Official Address:</strong>
                    <br />
                    {schoolConfig.location}
                  </div>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>School Hours:</strong>
                    <br />
                    {schoolConfig.officeHours}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  🚍 Dedicated School for learners
                </span>
                <span className="text-xs px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  🛡️ 24/7 CCTV & Security
                </span>
                <span className="text-xs px-3 py-1 bg-white dark:bg-slate-800 rounded-full font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  🏥 Full-Time School Infirmary
                </span>
              </div>
            </div>

            {/* Visual Location Mock Map Embed Container */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="aspect-[4/3] w-full relative bg-slate-200 dark:bg-slate-800">
                  <iframe
                    title="School Campus Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1319.2075824086262!2d88.07497071960837!3d26.911705598388544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5cf87409751dd%3A0x7351c53829fe510c!2z4KSw4KS-4KS34KWN4KSf4KWN4KSw4KWA4KSvIOCkhuCkp-CkvuCksOCkreClgeCkpCDgpKzgpL_gpKfgpY3gpK_gpL7gpLLgpK8!5e1!3m2!1sen!2snp!4v1788602030034!5m2!1sen!2snp"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    Rastriya Basic School, Ilam, Nepal
                  </span>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
