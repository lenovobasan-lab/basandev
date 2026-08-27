import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { PrincipalMessage } from "@/components/principal-message";
import { About } from "@/components/about";
import { Staff } from "@/components/staff";
import { Gallery } from "@/components/gallery";
import { Notices } from "@/components/notices";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import PrivacyPolicyPage from "@/app/privacy-policy/page";
import TermsOfServicePage from "@/app/terms-of-service/page";
import { ArrowUp } from "lucide-react";

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const p = window.location.pathname;
      return p && p !== "" ? p : "/";
    }
    return "/";
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || "/");
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = (path: string) => {
    if (path.startsWith("/#")) {
      setCurrentPath("/");
      window.history.pushState({}, "", "/");
      setTimeout(() => {
        const id = path.replace("/#", "");
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return;
    }

    setCurrentPath(path);
    window.history.pushState({}, "", path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/about":
        return <About />;
      case "/staff":
        return <Staff />;
      case "/gallery":
        return <Gallery />;
      case "/notices":
        return <Notices />;
      case "/contact":
        return <Contact />;
      case "/privacy-policy":
        return <PrivacyPolicyPage />;
      case "/terms-of-service":
        return <TermsOfServicePage />;
      case "/":
      default:
        return (
          <>
            <Hero onExploreClick={() => navigate("/about")} />
            <PrincipalMessage />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header currentPath={currentPath} onNavigate={navigate} />

      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      <Footer onNavigate={navigate} />

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          aria-label="Scroll back to top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
