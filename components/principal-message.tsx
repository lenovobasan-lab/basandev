"use client";

import React, { useState } from "react";
import { schoolConfig } from "@/lib/school-config";
import {
  Quote,
  Languages,
  Award,
  BookMarked,
  CheckCircle2,
  Mail,
  Phone,
} from "lucide-react";

export interface PrincipalData {
  name: string;
  nameNepali: string;
  title: string;
  titleNepali: string;
  qualifications: string;
  image: string;
  experience: string;
  email: string;
  phone: string;
  quote: {
    en: string;
    ne: string;
  };
  paragraphsEn: string[];
  paragraphsNe: string[];
}

export const principalData: PrincipalData = {
  name: "Prof. Dr. Narayan Prasad Sharma",
  nameNepali: "प्रा. डा. नारायण प्रसाद शर्मा",
  title: "Principal & Executive Director",
  titleNepali: "प्रधानाध्यापक तथा कार्यकारी निर्देशक",
  qualifications: "Ph.D. in Educational Leadership, M.Ed. (Curriculum & Instruction)",
  image:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85",
  experience: "24+ Years in Academic Administration",
  email: "principal@mounteverest.edu.np",
  phone: "+977-61-532104 (Ext. 101)",
  quote: {
    en: "Education is not merely the accumulation of facts, but the training of the mind to think critically, act ethically, and serve humanity.",
    ne: "शिक्षा केवल तथ्यहरूको सङ्ग्रह होइन, अपितु विवेकशील सोच, नैतिक चरित्र र समाज सेवाको लागि मन र मस्तिष्कको निर्माण हो।",
  },
  paragraphsEn: [
    `Welcome to ${schoolConfig.name}. For over two decades, our institution has stood as a beacon of academic distinction, ethical leadership, and holistic personality development. We are committed to fostering an atmosphere where students are inspired to inquire fearlessly, innovate responsibly, and cultivate empathy for the world around them.`,
    "In an era transformed by rapid technological change and global interconnectedness, education must go far beyond conventional textbook memorization. Our pedagogy emphasizes experiential learning, state-of-the-art laboratory practice, digital literacy, and rich co-curricular opportunities in arts, debate, leadership, and athletic disciplines.",
    "We work in close synergy with parents, alumni, and pedagogical mentors to nurture every learner's unique potential. I invite all prospective students, parents, and community partners to embark on this transformative journey with us as we empower our youth to learn, lead, and succeed.",
  ],
  paragraphsNe: [
    `${schoolConfig.name} मा यहाँहरूलाई हार्दिक स्वागत छ। विगत दुई दशकभन्दा बढी समयदेखि हाम्रो शिक्षालय उच्च शैक्षिक गुणस्तर, नैतिक नेतृत्व र समग्र व्यक्तित्व विकासको एक अग्रगामी केन्द्रका रूपमा समर्पित छ। हाम्रा विद्यार्थीहरूलाई निर्धक्क भई प्रश्न गर्न, नवीन सोच विकास गर्न र समाजप्रति संवेदनशील नागरिक बन्न हामी सधैँ प्रेरित गर्दछौँ।`,
    "सूचना तथा प्रविधिको द्रुत विकास भइरहेको आधुनिक युगमा शिक्षा परम्परागत घोकाइमा मात्र सीमित रहन सक्दैन। हाम्रो शिक्षण पद्धति प्रयोगात्मक सिकाइ, अत्याधुनिक विज्ञान तथा कम्प्युटर प्रयोगशाला, डिजिटल साक्षरता तथा कला, खेलकुद र नेतृत्व विकासमा केन्द्रित छ।",
    "हामी अभिभावक, समुदाय तथा सम्पूर्ण शुभेच्छुकहरूसँग सहकार्य गर्दै प्रत्येक बालबालिकाको अन्तर्निहित प्रतिभा प्रस्फुटन गराउन प्रतिबद्ध छौँ। भविष्यका कर्णधारहरूलाई सक्षम, सफल र संस्कारयुक्त नागरिक बनाउने हाम्रो यस अभियानमा यहाँहरूको निरन्तर साथ र विश्वासको अपेक्षा गर्दछौँ।",
  ],
};

export const PrincipalMessage: React.FC = () => {
  const [lang, setLang] = useState<"en" | "ne">("en");

  return (
    <section
      id="principal"
      className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-1">
              <BookMarked className="w-4 h-4" /> Leadership & Vision
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Principal's Message
            </h2>
            <div className="h-1 w-20 bg-accent mt-2 rounded-full" />
          </div>

          {/* Multilingual Toggle Switch */}
          <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-1.5 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700">
            <Languages className="w-4 h-4 text-slate-500 ml-2" />
            <button
              id="lang-toggle-en"
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                lang === "en"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
              }`}
            >
              English
            </button>
            <button
              id="lang-toggle-ne"
              type="button"
              onClick={() => setLang("ne")}
              className={`px-3 py-1 text-xs sm:text-sm font-semibold rounded-lg transition-all font-serif ${
                lang === "ne"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
              }`}
            >
              नेपाली
            </button>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm overflow-hidden">
          {/* Left Column: Principal Photo with Grayscale Hover & Sleek Overlay */}
          <div className="lg:col-span-5 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-gray-100 dark:border-slate-800 min-h-[380px] lg:min-h-[480px]">
            <img
              src={principalData.image}
              alt={principalData.name}
              className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <p className="text-[10px] uppercase tracking-widest font-bold text-blue-400 mb-1">
                Our Visionary & Leader
              </p>
              <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                {lang === "en" ? principalData.name : principalData.nameNepali}
              </h3>
              <p className="text-xs text-gray-300 mt-0.5">
                {lang === "en" ? principalData.title : principalData.titleNepali}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {principalData.qualifications}
              </p>

              {/* Direct contact links */}
              <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                <a
                  href={`mailto:${principalData.email}`}
                  className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span className="truncate">{principalData.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Message & Stat Counters */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-gray-50/50 dark:bg-slate-900/40">
            <div className="w-12 h-1 bg-indigo-600 mb-5 rounded-full" />
            <h4 className="text-xs uppercase tracking-widest font-black text-gray-400 dark:text-gray-500 mb-3">
              Message from the Principal
            </h4>

            {/* Rainbow Quote Highlight */}
            <p className="text-lg sm:text-xl leading-relaxed font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 via-blue-600 to-purple-600 text-justify mb-6 italic">
              "{lang === "en" ? principalData.quote.en : principalData.quote.ne}"
            </p>

            {/* Message Body Paragraphs */}
            <div className="space-y-3.5 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed text-justify">
              {(lang === "en"
                ? principalData.paragraphsEn
                : principalData.paragraphsNe
              ).map((paragraph, index) => (
                <p key={index} className="indent-4 sm:indent-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Stat Counters Row from Sleek Interface Theme */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 mt-6 border-t border-gray-200 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-indigo-900 dark:text-indigo-300">
                  1.2k+
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mt-0.5">
                  Alumni Network
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-indigo-900 dark:text-indigo-300">
                  45+
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mt-0.5">
                  Certifications
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-indigo-900 dark:text-indigo-300">
                  98%
                </span>
                <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mt-0.5">
                  Success Rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
