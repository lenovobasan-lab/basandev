import React from "react";
import { Header } from "@/components/header";
import { Staff } from "@/components/staff";
import { Footer } from "@/components/footer";

export default function StaffPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPath="/staff" />
      <main className="flex-1">
        <Staff />
      </main>
      <Footer />
    </div>
  );
}
