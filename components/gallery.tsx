"use client";

import React, { useState, useEffect } from "react";
import { Videos } from "@/components/videos";
import {
  Images,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Calendar,
  Layers,
  Sparkles,
} from "lucide-react";

export interface GalleryEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  photos: string[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: "event-1",
    title: "Annual Sports Meet & Athletics Championship",
    category: "Sports",
    date: "January 18, 2026",
    description:
      "Thrilling 100m sprints, high-jump relays, football finals, and martial arts demonstrations.",
    photos: [
      "/photos/events/sports-day.JPEG",
      "/photos/events/sports-day-2.JPEG",
      "/photos/events/sports-day-3.JPEG",
      "/photos/events/sports-day-4.JPEG",
    ],
  },
  {
    id: "event-2",
    title: "National Science & Robotics Expo 2025",
    category: "Academics & STEAM",
    date: "December 12, 2025",
    description:
      "Students presenting solar tracking arrays, drone delivery prototypes, and AI-assisted agricultural sensors.",
    photos: [
      "/photos/events/science-fair-2.JPG",
      "/photos/events/science-exhibition.jpg",
      "/photos/events/science-fair-3.jpg",
      "/photos/events/science-fair-4.jpg",
    ],
  },
  {
    id: "event-3",
    title: "Grand Cultural Day & Musical Gala",
    category: "Cultural Arts",
    date: "November 24, 2025",
    description:
      "Vibrant traditional folk costumes, Deuda circles, classical violin orchestras, and theatrical dramas.",
    photos: [
      "/photos/events/cultural-program.JPG",
      "/photos/events/cultural-program-2.JPG",
      "/photos/events/cultural-program-3.JPG",
      "/photos/events/cultural-program-4.JPG",
      "/photos/events/cultural-program-5.JPG",
      "/photos/events/cultural-program-6.JPG",

    ],
  },
  {
    id: "event-4",
    title: "Graduation Convocation & Farewell Ceremony",
    category: "Milestones",
    date: "October 30, 2025",
    description:
      "Celebrating the passing out batch of Grade 12 students with medals, honors, and emotional speeches.",
    photos: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&auto=format&fit=crop&q=85",
    ],
  },
  {
    id: "event-5",
    title: "Junior Wing Art & Craft Exhibition",
    category: "Primary & Arts",
    date: "September 15, 2025",
    description:
      "Creative clay modeling, watercolor landscape paintings, origami galleries, and interactive puppet shows.",
    photos: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=1200&auto=format&fit=crop&q=85",
    ],
  },
  {
    id: "event-6",
    title: "Environmental Tree Plantation & Scout Camp",
    category: "Community & ECA",
    date: "August 20, 2025",
    description:
      "Over 1,200 saplings planted across the valley alongside scout survival skill workshops and campfire leadership.",
    photos: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1200&auto=format&fit=crop&q=85",
    ],
  },
];

interface EventCarouselProps {
  event: GalleryEvent;
  onImageClick: (photoUrl: string, title: string) => void;
}

const EventCarousel: React.FC<EventCarouselProps> = ({
  event,
  onImageClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Auto-slide every 4 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % event.photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, event.photos.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(
      (prev) => (prev - 1 + event.photos.length) % event.photos.length
    );
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % event.photos.length);
  };

  return (
    <div
      id={`gallery-carousel-${event.id}`}
      className="group relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Image Stage */}
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900 cursor-pointer"
        onClick={() =>
          onImageClick(event.photos[currentIndex], `${event.title} (${currentIndex + 1}/${event.photos.length})`)
        }
      >
        {/* Skeleton loading animation */}
        {!loaded && (
          <div className="absolute inset-0 bg-slate-800 animate-pulse" />
        )}

        <img
          src={event.photos[currentIndex]}
          alt={`${event.title} - Photo ${currentIndex + 1}`}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Dark Overlay with Event Badge & Counter */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600/90 backdrop-blur-md text-white shadow-xs">
            {event.category}
          </span>
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-slate-200 border border-white/10 flex items-center gap-1">
            <Layers className="w-3 h-3" />
            {currentIndex + 1} / {event.photos.length}
          </span>
        </div>

        {/* Prev / Next Chevrons (Visible on Hover) */}
        <button
          type="button"
          aria-label="Previous photo"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 focus:outline-none"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          aria-label="Next photo"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 focus:outline-none"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Zoom Lightbox Indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 p-1.5 rounded-lg text-white pointer-events-none">
          <Maximize2 className="w-4 h-4" />
        </div>

        {/* Stretchy Dot Indicators */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 z-10 pointer-events-auto">
          {event.photos.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Jump to photo ${idx + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-6 bg-amber-400 shadow-xs"
                  : "w-1.5 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Card Text Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            <span>{event.date}</span>
          </div>
          <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {event.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {event.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
          <span>Click to view {event.photos.length} photos</span>
          <span className="text-slate-400 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </div>
      </div>
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    caption: string;
  } | null>(null);

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Images className="w-4 h-4" /> Moments & Milestones
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Campus Photo Gallery
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A visual tapestry of our academic triumphs, sports spectacles, cultural festivals, and everyday joy.
          </p>
        </div>

        {/* 3-Column Responsive Grid of Event Carousels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryEvents.map((event) => (
            <EventCarousel
              key={event.id}
              event={event}
              onImageClick={(url, caption) => setSelectedPhoto({ url, caption })}
            />
          ))}
        </div>

        {/* Embedded Videos Section below Gallery */}
        <Videos />
      </div>

      {/* High-Resolution Lightbox Modal */}
      {selectedPhoto && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            aria-label="Close image lightbox"
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <p className="mt-4 text-sm sm:text-base font-semibold text-white bg-black/50 px-4 py-2 rounded-xl backdrop-blur-md border border-white/10">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
