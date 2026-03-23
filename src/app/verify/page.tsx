"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyPage() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const router = useRouter();

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      // Simulate verification and redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 font-sans text-slate-800 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 py-4 lg:px-40 bg-white dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-slate-900 rounded flex items-center justify-center text-white shadow-sm">
                <span className="text-sm font-bold">BG</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-widest uppercase">
                BAYNAL GROUP
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">shield_lock</span>
              </button>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center p-6">
            <div className="flex flex-col max-w-[480px] w-full bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="material-symbols-outlined text-slate-900 dark:text-white text-3xl">
                    vibration
                  </span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight mb-2 tracking-tight">
                  2 Adımlı Doğrulama
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium leading-relaxed tracking-wide">
                  Hesabınızı korumak için telefonunuza gelen{" "}
                  <span className="font-bold text-slate-900 dark:text-white">
                    6 haneli
                  </span>{" "}
                  kodu girin
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                 <div className="flex justify-between gap-2 sm:gap-4 px-2">
                  {code.map((digit, idx) => (
                    <input
                      key={idx}
                      ref={inputRefs[idx]}
                      value={digit}
                      onChange={(e) => handleChange(idx, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(idx, e)}
                      maxLength={1}
                      type="text"
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10 dark:focus:border-white dark:focus:ring-white/10 transition-all text-slate-900 dark:text-white shadow-sm"
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center rounded-lg h-14 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-lg font-bold hover:bg-slate-800 dark:hover:bg-white transition-colors shadow-sm tracking-wide"
                  >
                    Doğrula
                  </button>
                  <div className="text-center pt-2">
                    <p className="text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
                      Kod gelmedi mi?
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        className="text-slate-900 dark:text-white font-bold hover:underline decoration-2 underline-offset-4 disabled:text-slate-400 disabled:no-underline transition-all"
                        disabled
                      >
                        Kodu Tekrar Gönder
                      </button>
                      <span className="text-slate-400 dark:text-slate-500 font-bold">
                        (01:54)
                      </span>
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Uçtan Uca Şifreli
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <span className="material-symbols-outlined text-sm">
                    verified_user
                  </span>
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Güvenli Oturum
                  </span>
                </div>
              </div>
            </div>
          </main>

          <footer className="px-6 py-6 lg:px-40 text-center">
            <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-widest">
              © 2024 BAYNAL GROUP Eğitim Teknolojileri A.Ş. Tüm hakları saklıdır.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
