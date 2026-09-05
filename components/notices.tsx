"use client";

import React, { useState } from "react";
import { schoolConfig } from "@/lib/school-config";
import { assetPath } from "@/lib/asset-path";
import {
  Bell,
  Calendar,
  Download,
  AlertCircle,
  FileText,
  Search,
  ChevronRight,
  Sparkles,
  Share2,
} from "lucide-react";

export interface NoticeItem {
  id: string;
  title: string;
  date: string;
  category: "Admissions" | "Examination" | "Holidays" | "Academic" | "Events";
  urgent?: boolean;
  image: string;
  description: string;
  fileSize?: string;
}

export const schoolNotices: NoticeItem[] = [
  {
    id: "notice-1",
    title: "Notice for Krishna Janmashtami hoiday",
    date: "February 20, 2026",
    category: "Holidays",
    urgent: true,
    image: assetPath("/photos/notices/janmastami.png"),
    description:
      "Online admission forms are now live. Entrance examination and parent-student orientation schedules are detailed in the circular. Merit scholarships available for meritorious students.",
    fileSize: "1.8 MB (PDF)",
  },
  {
    id: "notice-2",
    title: "Annual Terminal Examination Routine & Syllabus Distribution (Grades 1-10)",
    date: "February 15, 2026",
    category: "Examination",
    urgent: false,
    image: assetPath("/photos/notices/vacation-schedule.jpg"),
    description:
      "The final comprehensive exam schedule for academic session 2025/26 has been published. All students are advised to clear outstanding dues and collect examination admit cards by Feb 28.",
    fileSize: "850 KB (PDF)",
  },
  {
    id: "notice-3",
    title: "Notice Regarding Maha Shivaratri & National Democracy Day Holiday",
    date: "February 10, 2026",
    category: "Holidays",
    urgent: false,
    image: assetPath("/photos/notices/vacation-schedule.jpg"),
    description:
      "The school administrative offices and physical classes will remain closed on the occasion of Maha Shivaratri. Regular academic routines will resume promptly on Sunday at 9:00 AM.",
    fileSize: "420 KB (PDF)",
  },
  {
    id: "notice-4",
    title: "Inter-School Science Olympiad & Robotics Tournament Registration",
    date: "February 02, 2026",
    category: "Events",
    urgent: false,
    image: assetPath("/photos/notices/vacation-schedule.jpg"),
    description:
      "Mount Everest Academy is proud to host the 8th Western Region STEM Olympiad. Participating teams must register their project abstracts with the STEAM department coordinator.",
    fileSize: "2.4 MB (PDF)",
  },
  {
    id: "notice-5",
    title: "Parent-Teacher Conference (PTC) & Progress Report Card Distribution",
    date: "January 28, 2026",
    category: "Academic",
    urgent: true,
    image: assetPath("/photos/notices/vacation-schedule.jpg"),
    description:
      "All respected guardians are cordially invited to attend the terminal progress review meeting to discuss academic progress, behavioral indicators, and remedial strategies.",
    fileSize: "650 KB (PDF)",
  },
  {
    id: "notice-6",
    title: "Notice on Winter School Uniform Transition & Thermal Wear Guidelines",
    date: "January 14, 2026",
    category: "Academic",
    urgent: false,
    image: assetPath("/photos/notices/vacation-schedule.jpg"),
    description:
      "Guidelines regarding the mandatory winter blazers, navy blue sweaters, and thermal socks for both primary and senior wing students as per student code regulation.",
    fileSize: "510 KB (PDF)",
  },
];

export const Notices: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadModalNotice, setDownloadModalNotice] = useState<NoticeItem | null>(null);

  const categories = ["All", "Admissions", "Examination", "Academic", "Holidays", "Events"];

  const filteredNotices = schoolNotices.filter((n) => {
    const matchesCategory = selectedCategory === "All" || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (notice: NoticeItem) => {
    setDownloadModalNotice(notice);
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Bell className="w-4 h-4" /> Official Bulletins & Circulars
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Notice Board & Announcements
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Stay informed with the latest official notices, examination schedules, holiday circulars, and academic deadlines.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-blue-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search circulars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* 2-Column Grid of Notice Cards */}
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                id={`notice-card-${notice.id}`}
                className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* 48px/h-48 Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                  <img
                    src={notice.image}
                    alt={notice.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-black/30 to-transparent" />

                  {/* Badges on Top */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-600 text-white shadow-xs">
                      {notice.category}
                    </span>

                    {notice.urgent && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white shadow-xs animate-pulse">
                        <AlertCircle className="w-3 h-3" /> Urgent
                      </span>
                    )}
                  </div>

                  {/* Date Badge at Bottom Left of Image */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{notice.date}</span>
                  </div>
                </div>

                {/* Notice Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                      Ref: NEB-{notice.id.toUpperCase()}
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {notice.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {notice.description}
                    </p>
                  </div>

                  {/* Action Row */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => handleDownload(notice)}
                      className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Circular ({notice.fileSize || "PDF"})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        if (navigator.share) {
                          navigator.share({
                            title: notice.title,
                            text: notice.description,
                            url: window.location.href,
                          }).catch(() => {});
                        } else {
                          navigator.clipboard.writeText(
                            `${notice.title} - Read at ${window.location.href}`
                          );
                          alert("Notice link copied to clipboard!");
                        }
                      }}
                      className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Share Notice"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <FileText className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-bold text-slate-800 dark:text-slate-200">
              No notices match your criteria
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Try clearing filters or searching another keyword.
            </p>
          </div>
        )}
      </div>

      {/* Download Modal / Dialog simulation */}
      {downloadModalNotice && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setDownloadModalNotice(null)}
        >
          <div
            className="w-full max-w-md bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
              Official Document Ready
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {downloadModalNotice.title}
            </p>
            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Document Type:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Signed PDF Circular
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Issued On:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {downloadModalNotice.date}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">File Size:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {downloadModalNotice.fileSize}
                </span>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setDownloadModalNotice(null)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(
                    `Simulating secure download for: ${downloadModalNotice.title}`
                  );
                  setDownloadModalNotice(null);
                }}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
