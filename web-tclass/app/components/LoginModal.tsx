"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";

export default function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");
    
    if (email === "student" && password === "student") {
      setSuccess("Login successful! Redirecting to Student Dashboard...");
      setTimeout(() => {
        setIsOpen(false);
        router.push("/student");
      }, 1000);
    } else if (email === "faculty" && password === "faculty") {
      setSuccess("Login successful! Redirecting to Faculty Dashboard...");
      setTimeout(() => {
        setIsOpen(false);
        router.push("/faculty");
      }, 1000);
    } else if (email === "admin" && password === "admin") {
      setSuccess("Login successful! Redirecting to Admin Dashboard...");
      setTimeout(() => {
        setIsOpen(false);
        router.push("/admin");
      }, 1000);
    } else {
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <>
      <button
        className="rounded-xl bg-[#08265c] px-5 py-2.5 text-[13px] font-bold text-white transition hover:bg-[#0b347a]"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        Login
      </button>

      {isOpen ? (
        <div
          aria-labelledby="login-modal-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-y-auto bg-[#061f4d]/65 px-4 py-6 backdrop-blur-sm"
          role="dialog"
        >
          <button
            aria-label="Close login modal"
            className="absolute inset-0 size-full cursor-default"
            onClick={() => setIsOpen(false)}
            type="button"
          />

          <div className="relative my-auto max-h-[calc(100dvh-3rem)] w-full max-w-[440px] overflow-y-auto rounded-[24px] border border-white/35 bg-white shadow-2xl shadow-[#061f4d]/25">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-[#fe9a00]" />

            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 pb-5 pt-7">
              <div className="flex items-center gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#eef8ff] text-[#08265c]">
                  <ShieldCheck aria-hidden="true" className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wide text-amber-500">
                    TCLASS Portal
                  </p>
                  <h2
                    className="mt-1 text-2xl font-black leading-tight text-[#08265c]"
                    id="login-modal-title"
                  >
                    Welcome back
                  </h2>
                </div>
              </div>

              <button
                aria-label="Close login modal"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-500 transition hover:border-[#08265c]/30 hover:text-[#08265c]"
                onClick={() => setIsOpen(false)}
                type="button"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <form className="px-6 py-6" onSubmit={handleSubmit}>
              {error && (
                <div className="mb-5 rounded-xl bg-rose-50 p-3.5 text-sm font-semibold text-rose-600 border border-rose-100/50 flex items-center gap-3">
                  <div className="size-1.5 rounded-full bg-rose-500 shrink-0" />
                  {error}
                </div>
              )}
              {success && (
                <div className="mb-5 rounded-xl bg-emerald-50 p-3.5 text-sm font-semibold text-emerald-600 border border-emerald-100/50 flex items-center gap-3">
                  <div className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {success}
                </div>
              )}

              <label className="block">
                <span className="text-xs font-black uppercase tracking-wide text-[#08265c]">
                  Username
                </span>
                <span className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 transition focus-within:border-[#08265c]/50 focus-within:ring-4 focus-within:ring-[#08265c]/10">
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-slate-400" />
                  <input
                    autoComplete="username"
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#08265c] outline-none placeholder:text-slate-400"
                    placeholder="Enter your username"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </span>
              </label>

              <label className="mt-4 block">
                <span className="text-xs font-black uppercase tracking-wide text-[#08265c]">
                  Password
                </span>
                <span className="mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 focus-within:border-[#08265c]/50 focus-within:ring-4 focus-within:ring-[#08265c]/10">
                  <LockKeyhole
                    aria-hidden="true"
                    className="size-5 shrink-0 text-slate-400"
                  />
                  <input
                    autoComplete="current-password"
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#08265c] outline-none placeholder:text-slate-400"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="grid size-8 shrink-0 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-[#08265c]"
                    onClick={() => setShowPassword((value) => !value)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="size-4" />
                    ) : (
                      <Eye aria-hidden="true" className="size-4" />
                    )}
                  </button>
                </span>
              </label>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
                <label className="flex cursor-pointer items-center gap-2 font-semibold text-slate-600">
                  <input
                    className="size-4 rounded border-slate-300 accent-[#08265c]"
                    type="checkbox"
                  />
                  Remember me
                </label>
                <a className="font-black text-amber-600 hover:text-amber-500" href="#">
                  Forgot password?
                </a>
              </div>

              <button
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#08265c] px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-[#08265c]/20 transition hover:-translate-y-0.5 hover:bg-[#0b347a]"
                type="submit"
              >
                <UserRound aria-hidden="true" className="size-5" />
                Sign in
              </button>

              <p className="mt-5 text-center text-xs font-semibold leading-5 text-slate-500">
                Use your assigned TCLASS account. Your dashboard will open based on your role.
              </p>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
