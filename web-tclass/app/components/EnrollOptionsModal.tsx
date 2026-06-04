"use client";

import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap, UserRoundPlus, X } from "lucide-react";

const enrollmentOptions = [
  {
    title: "Old Student",
    description: "Continue enrollment using your existing TCLASS student record.",
    href: "#contact",
    icon: GraduationCap,
  },
  {
    title: "New Student",
    description: "Start a new application and create your TCLASS student profile.",
    href: "#contact",
    icon: UserRoundPlus,
  },
];

export default function EnrollOptionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        className="rounded-xl bg-[#08265c] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#0b347a]"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Enroll Now <span aria-hidden="true">-&gt;</span>
      </button>

      {isOpen ? (
        <div
          aria-labelledby="enroll-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-y-auto bg-[#061f4d]/65 px-4 py-6 backdrop-blur-sm"
          role="dialog"
        >
          <button
            aria-label="Close enrollment options"
            className="absolute inset-0 size-full cursor-default"
            onClick={() => setIsOpen(false)}
            type="button"
          />

          <div className="relative my-auto w-full max-w-[520px] overflow-hidden rounded-[24px] border border-white/35 bg-white shadow-2xl shadow-[#061f4d]/25">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#fe9a00]" />

            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 pb-5 pt-7">
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-amber-500">
                  Enrollment
                </p>
                <h2
                  className="mt-1 text-2xl font-black leading-tight text-[#08265c]"
                  id="enroll-modal-title"
                >
                  Choose student type
                </h2>
              </div>

              <button
                aria-label="Close enrollment options"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#08265c]/30 hover:text-[#08265c]"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <div className="grid gap-3 px-6 py-6 sm:grid-cols-2">
              {enrollmentOptions.map((option) => {
                const Icon = option.icon;

                return (
                  <a
                    className="group flex min-h-[180px] flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-[#08265c]/30 hover:shadow-xl hover:shadow-[#08265c]/10"
                    href={option.href}
                    key={option.title}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#eef8ff] text-[#08265c] transition group-hover:bg-[#08265c] group-hover:text-white">
                      <Icon aria-hidden="true" className="size-6" />
                    </span>

                    <span>
                      <span className="block text-lg font-black text-[#08265c]">
                        {option.title}
                      </span>
                      <span className="mt-2 block text-sm font-semibold leading-6 text-slate-600">
                        {option.description}
                      </span>
                    </span>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-amber-600">
                      Continue
                      <ArrowRight
                        aria-hidden="true"
                        className="size-4 transition group-hover:translate-x-1"
                      />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
