import React from "react";
import { schoolConfig } from "@/lib/school-config";
import { Shield, Lock, FileText, CheckCircle2 } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-2">
            <Shield className="w-4 h-4" /> Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Privacy & Data Protection Policy
          </h1>
          <div className="h-1 w-20 bg-accent mx-auto mt-3 rounded-full" />
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Last Updated: January 2026 • Applies to {schoolConfig.name} Portal & Admissions
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-8">
          <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <Lock className="w-5 h-5 text-blue-600" /> 1. Commitment to Student & Guardian Privacy
            </h2>
            <p>
              {schoolConfig.name} ("the Institution") takes the privacy, confidentiality, and data protection of our students, parents, guardians, and faculty with highest integrity. This policy outlines how information is gathered, managed, and safeguarded under the laws of Nepal and Educational Board regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Information We Collect
            </h2>
            <p>
              When you interact with our online admission forms, inquiry portals, or physical admission counters, we collect necessary educational and demographic records, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-600 dark:text-slate-400 text-sm">
              <li>Student identification details (Full name, date of birth, previous school transcripts, birth certificate).</li>
              <li>Parent / Legal Guardian contact records (Names, telephone numbers, emails, emergency contact details, permanent and current residential addresses).</li>
              <li>Academic assessments, terminal examination results, ECA records, and health/allergy notifications.</li>
              <li>Digital interactions through our official website portal (anonymized analytics, form submissions).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. Purpose & Utilization of Data
            </h2>
            <p>We utilize the collected information strictly for:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Processing admissions & NEB student registration certificates.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Dispatching emergency SMS notices and academic report cards.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Managing school bus routing, security logistics, and infirmary records.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Government IEMIS data synchronization with the Ministry of Education.</span>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Media & Photograph Consent
            </h2>
            <p>
              Photographs and video recordings taken during school assemblies, sports meets, cultural exhibitions, and graduation events may be published on the official school website or annual magazine for archival and promotional purposes. Parents who wish to opt out may submit a written notice to the administrative office.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Contacting the Data Protection Officer
            </h2>
            <p>
              For any questions regarding personal data corrections or policy inquiries, please contact our administrative desk:
            </p>
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-200 space-y-1">
              <p><strong>Institution:</strong> {schoolConfig.name}</p>
              <p><strong>Email:</strong> {schoolConfig.email}</p>
              <p><strong>Telephone:</strong> {schoolConfig.phone}</p>
              <p><strong>Address:</strong> {schoolConfig.location}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
