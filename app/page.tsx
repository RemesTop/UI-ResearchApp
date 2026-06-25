"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";

export default function Home() {
  const { locale, setLocale, messages } = useLocale();

  return (
    <div className="min-h-screen bg-slate-100">
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-16 lg:py-24">
        <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-10 lg:p-12">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
              {messages.intro.badge}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">{messages.locale.label}</span>
              <button
                type="button"
                onClick={() => setLocale("fi")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${locale === "fi"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {messages.locale.finnish}
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${locale === "en"
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 text-slate-700 hover:bg-slate-100"
                  }`}
              >
                {messages.locale.english}
              </button>
            </div>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {messages.intro.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            {messages.intro.lead}
          </p>
          <ol className="mt-5 space-y-3">
            {messages.intro.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white mt-0.5">
                  {i + 1}
                </span>
                <span className="text-base leading-7 text-slate-600">
                  <strong className="font-semibold text-slate-800">{step.label}:</strong>{" "}
                  {step.desc}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-sm leading-6 text-slate-500 italic border-t border-slate-100 pt-4">
            {messages.intro.privacyNote}
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-500 italic whitespace-pre-line">
            {messages.intro.surveyClosed}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/studypage1"
              className="shrink-0 inline-flex rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              {messages.intro.begin}
            </Link>

            <div className="flex items-center gap-3 border-l border-slate-200 pl-4 ml-auto shrink-0">
              <p className="text-xs font-medium text-slate-900">
                &copy; University of Eastern Finland
              </p>
              <Image
                src="/icons/University_of_Eastern_Finland_logo.svg"
                alt="University of Eastern Finland"
                width={140}
                height={22}
                style={{ width: "auto", height: "22px" }}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
