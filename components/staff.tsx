"use client";

import React, { useState } from "react";
import { schoolConfig } from "@/lib/school-config";
import {
  Users,
  Phone,
  Mail,
  GraduationCap,
  Award,
  Filter,
  CheckCircle,
} from "lucide-react";

export interface StaffMember {
  id: string;
  name: string;
  position: string;
  department: string;
  qualification: string;
  contact: string;
  email: string;
  image: string;
  experience: string;
}

export const staffDirectory: StaffMember[] = [
  {
    id: "staff-1",
    name: "Prof. Dr. Narayan Prasad Sharma",
    position: "Principal & Executive Director",
    department: "Leadership",
    qualification: "Ph.D. in Educational Leadership, M.Ed.",
    contact: "+977-61-532104",
    email: "principal@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85",
    experience: "24 Years Experience",
  },
  {
    id: "staff-2",
    name: "Sita Kumari Gurung",
    position: "Vice Principal (Senior Wing)",
    department: "Leadership",
    qualification: "M.Sc. Physics (Tribhuvan University)",
    contact: "+977-9856012301",
    email: "sita.gurung@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=85",
    experience: "18 Years Experience",
  },
  {
    id: "staff-3",
    name: "Er. Bikram Thapa",
    position: "Head of Science & STEAM",
    department: "Science & Tech",
    qualification: "M.Tech in Electronics & Robotics",
    contact: "+977-9856012302",
    email: "bikram.thapa@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=85",
    experience: "12 Years Experience",
  },
  {
    id: "staff-4",
    name: "Pooja Regmi",
    position: "Head of English & Literature",
    department: "Languages",
    qualification: "M.A. English (Gold Medalist, TU)",
    contact: "+977-9856012303",
    email: "pooja.regmi@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&auto=format&fit=crop&q=85",
    experience: "14 Years Experience",
  },
  {
    id: "staff-5",
    name: "Manoj Kumar Shrestha",
    position: "Senior Mathematics Lecturer",
    department: "Science & Tech",
    qualification: "M.Sc. Applied Mathematics",
    contact: "+977-9856012304",
    email: "manoj.shrestha@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=85",
    experience: "16 Years Experience",
  },
  {
    id: "staff-6",
    name: "Dr. Anupama Karki",
    position: "Senior Chemistry Specialist",
    department: "Science & Tech",
    qualification: "Ph.D. in Organic Chemistry",
    contact: "+977-9856012305",
    email: "anupama.karki@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&auto=format&fit=crop&q=85",
    experience: "11 Years Experience",
  },
  {
    id: "staff-7",
    name: "Ramesh Acharya",
    position: "Senior Nepali Literature Teacher",
    department: "Languages",
    qualification: "M.A. Nepali Literature & Linguistics",
    contact: "+977-9856012306",
    email: "ramesh.acharya@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&auto=format&fit=crop&q=85",
    experience: "19 Years Experience",
  },
  {
    id: "staff-8",
    name: "Sunil Sunar",
    position: "Sports & Physical Education Director",
    department: "ECA & Sports",
    qualification: "B.P.Ed., Certified AFC Football Coach",
    contact: "+977-9856012307",
    email: "sunil.sports@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=85",
    experience: "10 Years Experience",
  },
  {
    id: "staff-9",
    name: "Kopila Adhikari",
    position: "Head of Primary Wing & Counseling",
    department: "Primary School",
    qualification: "M.A. Child Psychology & Montessori Diploma",
    contact: "+977-9856012308",
    email: "kopila.primary@mounteverest.edu.np",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=85",
    experience: "15 Years Experience",
  },
];

export const Staff: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const departments = [
    "All",
    "Leadership",
    "Science & Tech",
    "Languages",
    "Primary School",
    "ECA & Sports",
  ];

  const filteredStaff =
    selectedDept === "All"
      ? staffDirectory
      : staffDirectory.filter((s) => s.department === selectedDept);

  const handleImageLoad = (id: string) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Users className="w-4 h-4" /> Academic & Leadership Team
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Dedicated Faculty
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Passionate educators, mentors, and specialists committed to nurturing
            curiosity, character, and academic mastery.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDept(dept)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedDept === dept
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-102"
                  : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((member) => {
            const isLoaded = loadedImages[member.id];

            return (
              <div
                key={member.id}
                id={`staff-card-${member.id}`}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Tall Portrait Photo Area (h-80) with Skeleton Loader */}
                <div className="relative h-80 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  {/* Skeleton Placeholder */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 animate-pulse" />
                  )}

                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.position}`}
                    onLoad={() => handleImageLoad(member.id)}
                    className={`w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    loading="lazy"
                  />

                  {/* Gradient Overlay & Experience Badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute top-3 right-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30 shadow-xs">
                      {member.experience}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-600/90 text-white shadow-xs">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-bold text-accent mt-1">
                      {member.position}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span>{member.qualification}</span>
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
                    <a
                      href={`tel:${member.contact}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 px-3 py-2 rounded-xl transition-colors"
                      aria-label={`Call ${member.name} at ${member.contact}`}
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-600" />
                      <span>{member.contact}</span>
                    </a>

                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`Email ${member.name} at ${member.email}`}
                      title={member.email}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
