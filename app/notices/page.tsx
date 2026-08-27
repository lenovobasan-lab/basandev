import React from "react";
import { Header } from "@/components/header";
import { Notices } from "@/components/notices";
import { Footer } from "@/components/footer";

export default function NoticesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/notices" />
      <main className="flex-1">
        <Notices />
      </main>
      <Footer />
    </div>
  );
}
