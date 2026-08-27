"use client";

import React from "react";
import { Youtube, PlayCircle, Clock, Video } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  youtubeUrl: string;
  embedUrl: string;
  duration: string;
  description: string;
  category: string;
}

export const schoolVideos: VideoItem[] = [
  {
    id: "vid-1",
    title: "Annual Sports Meet & Athletic Championship 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "4:32",
    category: "Sports & Athletics",
    description:
      "Highlights of track and field events, relay races, march-past, and trophy ceremony with international sports delegates.",
  },
  {
    id: "vid-2",
    title: "STEAM Exhibition: Robotics & Green Energy Innovations",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "6:15",
    category: "Academic & Tech",
    description:
      "Student-built automated hydroponics, humanoid robotics demonstrations, and solar energy models showcased to university judges.",
  },
  {
    id: "vid-3",
    title: "Cultural Extravaganza: Traditional Folk Dances & Choir",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "8:40",
    category: "Cultural Arts",
    description:
      "A grand celebration of Nepal's vibrant multi-ethnic heritage, classical Deuda, Gurung, Newari, and Tharu traditional performances.",
  },
  {
    id: "vid-4",
    title: "Campus Tour & World-Class Facilities Walkthrough",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "3:50",
    category: "Campus Tour",
    description:
      "Take an immersive aerial and interior walkthrough of our science laboratories, e-library, football ground, and smart auditoriums.",
  },
  {
    id: "vid-5",
    title: "Inter-School Debate Championship & Model United Nations",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "5:20",
    category: "Leadership & MUN",
    description:
      "Young diplomats resolving climate crisis resolutions and geopolitical treaties at the Pokhara Valley Model UN forum.",
  },
  {
    id: "vid-6",
    title: "Graduation & Farewell Gala: Class of 2025",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    duration: "7:10",
    category: "Celebrations",
    description:
      "Emotional farewell speeches, scholarship awards, valedictorian address, and celebratory caps thrown in honor of our graduates.",
  },
];

export const Videos: React.FC = () => {
  return (
    <div id="school-videos-section" className="mt-20 pt-16 border-t border-slate-200 dark:border-slate-800">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
          <Youtube className="w-4 h-4 text-red-600" /> Video Archives & Broadcasts
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Featured Campus Documentaries & Events
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
          Relive our most memorable celebrations, sports championships, and academic milestones in HD video.
        </p>
      </div>

      {/* 3-Column Responsive Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {schoolVideos.map((video) => (
          <div
            key={video.id}
            id={`video-card-${video.id}`}
            className="group rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
          >
            {/* 16:9 Aspect Ratio Iframe Embed */}
            <div className="relative aspect-video w-full bg-slate-900 overflow-hidden">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Content Details */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
                    {video.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {video.duration}
                  </span>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                  {video.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:underline"
                >
                  <PlayCircle className="w-4 h-4" /> Watch on YouTube
                </a>
                <span className="text-[11px] text-slate-400">1080p Full HD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
