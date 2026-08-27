import React from "react";
import { Header } from "@/components/header";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/gallery" />
      <main className="flex-1">
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
