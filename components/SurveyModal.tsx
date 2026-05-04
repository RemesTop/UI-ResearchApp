"use client";

import { useLocale } from "@/lib/LocaleContext";
import { useVariant } from "@/lib/VariantContext";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const studyRoutes = [
  "/studypage1",
  "/studypage2",
  "/studypage3",
  "/studypage4",
  "/studypage5",
];

type SurveyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const { messages, locale } = useLocale();
  const { surveyUrl } = useVariant();
  const router = useRouter();
  const pathname = usePathname();

  const currentRouteIndex = studyRoutes.indexOf(pathname);
  const hasNext =
    currentRouteIndex >= 0 && currentRouteIndex < studyRoutes.length - 1;

  const [maxRouteIndex, setMaxRouteIndex] = useState(0);

  useEffect(() => {
    if (currentRouteIndex < 0) return;
    
    const saved = sessionStorage.getItem("ux-study-max-route");
    const savedMax = saved ? parseInt(saved, 10) : 0;
    const newMax = Math.max(savedMax, currentRouteIndex);
    
    setMaxRouteIndex(newMax);
    sessionStorage.setItem("ux-study-max-route", newMax.toString());
  }, [currentRouteIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.dataset.surveyOpen = "true";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      delete document.body.dataset.surveyOpen;
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isOpen]);


  const handleNext = () => {
    if (!hasNext) {
      return;
    }

    onClose();
    router.push(studyRoutes[currentRouteIndex + 1]);
  };

  const navRoutesMobile = studyRoutes.slice(0, -1);

  const renderNavButtons = (routes: string[], showEndLabel: boolean) => (
    <div className="flex w-max flex-nowrap gap-2">
      {routes.map((route) => {
        const routeIndex = studyRoutes.indexOf(route);
        // A button is accessible if it's the current page, previously visited, or exactly one step ahead of the furthest visited page
        const isGreyedOut = routeIndex > maxRouteIndex + 1;
        const isEnd = showEndLabel && routeIndex === studyRoutes.length - 1;
        return (
          <button
            key={route}
            onClick={() => {
              onClose();
              router.push(route);
            }}
            disabled={isGreyedOut}
            className={`flex h-8 ${isEnd ? "w-auto px-4" : "w-8"} items-center justify-center rounded-full text-[12px] font-medium transition sm:text-[13px] md:text-sm ${
              currentRouteIndex === routeIndex
                ? "bg-slate-900 text-white"
                : isGreyedOut
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {isEnd ? (locale === "fi" ? "Loppu" : "End") : routeIndex + 1}
          </button>
        );
      })}
    </div>
  );

  const nextButton = (
    <button
      onClick={handleNext}
      disabled={!hasNext}
      className="min-w-[110px] rounded-md bg-slate-900 px-4 py-2 text-[14px] font-medium text-white disabled:bg-slate-300"
    >
      {messages.survey.next}
    </button>
  );

  return (
    <div
      className={`fixed inset-0 z-50 flex items-stretch justify-center p-0 transition sm:items-start sm:px-4 sm:pt-4 sm:pb-0 ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      <div className="relative z-10 flex h-[100dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-none bg-white px-3 pt-4 pb-3 shadow-2xl sm:h-[96vh] sm:max-h-[96vh] sm:rounded-2xl sm:p-6">
        <div className="flex flex-none items-start justify-between gap-4">
          <div>
            <h2 className="text-[20px] font-semibold text-slate-900 sm:text-2xl">
              {messages.survey.title}
            </h2>
            <p className="mt-1 text-[13px] text-slate-600">
              <span className="block sm:inline">{messages.survey.description}</span>
              <span className="mt-1 block text-[11px] text-slate-500 sm:mt-0 sm:ml-2 sm:inline sm:text-[12px]">
                {messages.survey.responsesSaved}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md bg-red-600 p-1.5 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            aria-label={messages.survey.close}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="mt-3 flex flex-none items-center gap-2 sm:hidden">
          <div className="min-w-0 flex-1 overflow-x-auto">
            {renderNavButtons(navRoutesMobile, false)}
          </div>
          {nextButton}
        </div>

        {/* Iframe Container for webropol survey */}
        <div className="relative mt-3 flex-1 min-h-0 overflow-hidden rounded-none border border-slate-200 bg-slate-50 sm:mt-4 sm:rounded-xl -mx-2 sm:mx-0">
          {surveyUrl ? (
            <iframe
              title={messages.survey.title}
              src={surveyUrl}
              className="absolute inset-0 h-full w-full survey-iframe"
              loading="lazy"
            />
          ) : (
            <p className="p-4 text-[13px] text-slate-600">
              {messages.survey.notConfigured}
            </p>
          )}
        </div>

        {/* Footer for buttons */}
        <div className="mt-3 hidden flex-none flex-row items-center justify-end gap-4 sm:flex">
          {renderNavButtons(studyRoutes, true)}
          {nextButton}
        </div>
      </div>
    </div>
  );
}
