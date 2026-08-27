import React from "react";
import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/about" />
      <main className="flex-1">
        <About />
      </main>
      <Footer />
    </div>
  );
}
