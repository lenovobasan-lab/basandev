import React from "react";
import { schoolConfig } from "@/lib/school-config";
import { Scale, BookOpen, ShieldCheck, CheckCircle } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Scale className="w-4 h-4" /> Academic Regulations
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Terms of Service & Code of Conduct
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Governing the use of {schoolConfig.name} digital platforms and academic policies
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-blue-600" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website, online admission portal, or student circular systems of {schoolConfig.name}, parents, guardians, and visitors agree to abide by these Terms of Service, along with the student handbook and institutional discipline guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Online Admissions & Enrollment Submissions
            </h2>
            <p>
              Submission of an online application form does not automatically guarantee admission. Admissions are subject to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Seat availability across prospective grades.</li>
              <li>Satisfactory performance in entrance assessments and student-guardian interaction sessions.</li>
              <li>Verification of authentic academic transcripts, character certificates, and transfer credentials.</li>
              <li>Timely clearance of admission registration formalities.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Intellectual Property Rights
            </h2>
            <p>
              All materials published on this website — including the school logo, curriculum descriptions, examination questions, event galleries, video archives, and textual publications — are the intellectual property of {schoolConfig.name} or authorized licensors. Reproduction without written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Code of Student Conduct & Campus Discipline
            </h2>
            <p>
              Our institution upholds a zero-tolerance policy against bullying, harassment, cyber-misconduct, and property vandalism. Respect for teachers, peer cooperation, punctuality, and pride in wearing the official school uniform are fundamental core expectations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Governing Law & Jurisdiction
            </h2>
            <p>
              These terms are governed and construed in accordance with the Education Act of Nepal and relevant municipal bylaws. Any formal legal disputes shall be subject to the exclusive jurisdiction of the competent courts of Kaski District, Nepal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
