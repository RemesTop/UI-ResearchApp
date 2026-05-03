"use client";

import React from "react";
import { useLocale } from "@/lib/LocaleContext";

const pageContent = {
  fi: {
    title: "Kiitos osallistumisesta!",
    message: "Arvostamme suuresti aikaasi ja vastauksiasi. Olemme nyt näyttäneet sinulle kaikki sivut.",
    reminder: "Muistathan lähettää kyselyn vastaukset. Voit tehdä tämän painamalla 'Avaa kysely' -painiketta ja vastaamalla kaikkiin kysymyksiin.",
  },
  en: {
    title: "Thank you for participating!",
    message: "We greatly appreciate your time and answers. We have now shown you all the pages.",
    reminder: "Please remember to submit the survey answers. You can do so by pressing on the 'Open survey' button and answering all the questions.",
  }
};

export default function StudyPage5() {
  const { locale } = useLocale();
  const t = pageContent[locale];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 md:p-16 text-center border border-slate-100">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.title}</h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto">
          {t.message}
        </p>
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow-inner">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-indigo-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-indigo-900 font-medium text-lg leading-snug">
              {t.reminder}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
