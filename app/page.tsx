import React from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PrincipalMessage } from "@/components/principal-message";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/" />
      <main className="flex-1">
        <Hero />
        <PrincipalMessage />
      </main>
      <Footer />
    </div>
  );
}
