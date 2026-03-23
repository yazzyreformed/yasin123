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
              <div className="size-8 bg-blue-900 rounded flex items-center justify-center text-white">
                <span className="text-sm font-bold">BG</span>
              </div>
              <h2 className="text-blue-900 dark:text-white text-xl font-bold leading-tight tracking-tight uppercase">
                BAYNAL GROUP
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center rounded-xl h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <span className="material-symbols-outlined">shield_lock</span>
              </button>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center p-6">
            <div className="flex flex-col max-w-[480px] w-full bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800">
              <div className="mb-8 text-center">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-blue-900 dark:text-blue-400 text-4xl">
                    vibration
                  </span>
                </div>
                <h1 className="text-blue-900 dark:text-white text-3xl font-bold leading-tight mb-2">
                  2 Adımlı Doğrulama
                </h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                  Hesabınızı korumak için telefonunuza gelen{" "}
                  <span className="font-semibold text-blue-900 dark:text-blue-400">
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
                      className="w-12 h-14 sm:w-14 sm:h-16 text-center text-2xl font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:border-blue-900 focus:ring-1 focus:ring-blue-900 dark:focus:border-blue-400 dark:focus:ring-blue-400 transition-all text-slate-900 dark:text-white"
                    />
                  ))}
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center rounded-lg h-14 bg-blue-900 text-white text-lg font-bold hover:bg-blue-950 transition-colors shadow-sm"
                  >
                    Doğrula
                  </button>
                  <div className="text-center pt-2">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">
                      Kod gelmedi mi?
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline decoration-2 underline-offset-4 disabled:text-slate-400 disabled:no-underline"
                        disabled
                      >
                        Kodu Tekrar Gönder
                      </button>
                      <span className="text-slate-400 dark:text-slate-500 text-sm">
                        (01:54)
                      </span>
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="text-xs uppercase tracking-widest font-bold">
                    Uçtan Uca Şifreli
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
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
            <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
              © 2024 BAYNAL GROUP Eğitim Teknolojileri A.Ş. Tüm hakları
              saklıdır.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
