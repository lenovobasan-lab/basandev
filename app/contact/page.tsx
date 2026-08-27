import React from "react";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/contact" />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
