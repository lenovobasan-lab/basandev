import React from "react";
import { schoolConfig } from "@/lib/school-config";
import "./globals.css";

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  authors?: { name: string }[];
  openGraph?: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    images: { url: string; width: number; height: number; alt: string }[];
    locale: string;
    type: string;
  };
  twitter?: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
}

export const metadata: Metadata = {
  title: `${schoolConfig.name} | ${schoolConfig.tagline}`,
  description: `${schoolConfig.motto}. Established institution delivering quality education, STEM innovation, and character building in Nepal. ${schoolConfig.iemisCode}`,
  keywords: [
    schoolConfig.name,
    "School in Nepal",
    "Pokhara School",
    "NEB Affiliated School",
    "Best Secondary School",
    "Admissions 2026",
    schoolConfig.iemisCode,
  ],
  authors: [{ name: schoolConfig.name }],
  openGraph: {
    title: `${schoolConfig.name} - ${schoolConfig.tagline}`,
    description: schoolConfig.motto,
    url: "https://school.edu.np",
    siteName: schoolConfig.name,
    images: [
      {
        url: schoolConfig.coverImage,
        width: 1200,
        height: 630,
        alt: `${schoolConfig.name} School`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: schoolConfig.name,
    description: schoolConfig.tagline,
    images: [schoolConfig.coverImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
