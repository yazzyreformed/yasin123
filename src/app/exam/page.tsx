"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ExamPage() {
  const [focusMode, setFocusMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2692); // 44:52
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleFinishExam = () => {
    // Navigate to dashboard for demo
    router.push("/dashboard");
  };

  return (
    <div
      className={`flex flex-col flex-1 h-screen overflow-hidden ${
        focusMode ? "focus-mode-active" : ""
      }`}
    >
      {/* Main Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link href="/dashboard" className="bg-primary text-white p-2 rounded font-bold text-xl flex items-center justify-center w-10 h-10 hover:bg-primary-dark transition-colors">
            BG
          </Link>
          <div>
            <h1 className="text-lg font-bold text-primary dark:text-slate-100 leading-tight">
              BAYNAL GROUP
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
              Sınav Merkezi
            </p>
          </div>
        </div>

        {/* Timer Display */}
        <div className="flex items-center bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 px-4 py-2 rounded-lg">
          <svg
            className="h-5 w-5 text-amber-600 dark:text-amber-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-semibold text-amber-700 dark:text-amber-500 leading-none">
              Kalan Süre
            </span>
            <span className="text-xl font-mono font-bold text-amber-800 dark:text-amber-400 tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6 flex-shrink-0">
          <button
            className="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary-light text-sm font-medium flex items-center transition-colors"
            onClick={() => setFocusMode(!focusMode)}
          >
            {focusMode ? (
              <>
                <svg
                  className="h-5 w-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                  />
                </svg>
                Normal Mod
              </>
            ) : (
              <>
                <svg
                  className="h-5 w-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Odak Modu
              </>
            )}
          </button>
          <button
            onClick={handleFinishExam}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold transition-colors shadow-sm text-sm"
          >
            Sınavı Bitir
          </button>
        </div>
      </header>

      <main className="flex-grow flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex distraction-element transition-opacity duration-300">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
            <h2 className="font-bold text-primary dark:text-slate-100">Sorular</h2>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              <span>Toplam: 40 Soru</span>
              <span>Tamamlanan: 12/40</span>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
            <div className="grid grid-cols-5 gap-2">
              {/* Active Question */}
              <button className="w-10 h-10 rounded-md border-2 border-primary bg-blue-50 dark:bg-primary/20 text-primary dark:text-blue-300 font-bold text-sm question-nav-btn">
                1
              </button>
              {/* Answered Questions */}
              <button className="w-10 h-10 rounded-md border border-emerald-200 dark:border-emerald-800 bg-emerald-500 text-white font-bold text-sm question-nav-btn">
                2
              </button>
              <button className="w-10 h-10 rounded-md border border-emerald-200 dark:border-emerald-800 bg-emerald-500 text-white font-bold text-sm question-nav-btn">
                3
              </button>
              {/* Flagged/Review Question */}
              <button className="w-10 h-10 rounded-md border border-amber-200 dark:border-amber-800 bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-500 font-bold text-sm question-nav-btn relative">
                4
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
              </button>
              {/* Unanswered Questions Generated */}
              {[...Array(36)].map((_, i) => {
                const q = i + 5;
                return (
                  <button
                    key={q}
                    className="w-10 h-10 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary font-medium text-sm question-nav-btn transition-colors"
                  >
                    {q}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="p-4 border-t border-slate-100 dark:border-slate-800 space-y-2 bg-slate-50/30 dark:bg-slate-800/30">
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="w-3 h-3 bg-emerald-500 rounded mr-2"></span>{" "}
              Cevaplandı
            </div>
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="w-3 h-3 bg-amber-100 border border-amber-300 dark:border-amber-700 rounded mr-2"></span>{" "}
              Gözden Geçir
            </div>
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-medium">
              <span className="w-3 h-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded mr-2"></span>{" "}
              Cevaplanmadı
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-grow flex flex-col bg-slate-50 dark:bg-slate-950 overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full p-6 lg:p-10 flex-grow">
            {/* Question Card */}
            <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-tight">
                  SORU 1 / 40
                </span>
                <button className="text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-500/10 px-3 py-1.5 rounded-full text-xs font-bold flex items-center transition-colors">
                  <svg
                    className="h-4 w-4 mr-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  İşaretle ve Sonra Bak
                </button>
              </div>

              <div className="p-8">
                <div className="prose max-w-none text-slate-900 dark:text-slate-100 mb-10">
                  <p className="text-lg leading-relaxed font-bold">
                    Aşağıdakilerden hangisi Baynal Group iş sağlığı ve güvenliği
                    protokolleri çerçevesinde, yüksekte çalışma alanlarında
                    kullanılması zorunlu olan temel ekipmanlar arasında yer alır?
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-4">
                  <label className="group flex items-center p-5 border-2 border-slate-100 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary dark:hover:border-primary/50 hover:bg-blue-50/30 dark:hover:bg-primary/5 transition-all">
                    <input
                      className="w-5 h-5 text-primary bg-slate-100 border-slate-300 dark:border-slate-600 focus:ring-primary dark:bg-slate-800"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-200 font-semibold">
                      <span className="font-bold mr-2 text-slate-400 dark:text-slate-500">
                        A)
                      </span>
                      Tam vücut tipi emniyet kemeri ve lanyard
                    </span>
                  </label>
                  
                  {/* Selected Option (Mock) */}
                  <label className="group flex items-center p-5 border-2 border-primary bg-blue-50/50 dark:bg-primary/10 rounded-xl cursor-pointer transition-all">
                    <input
                      defaultChecked
                      className="w-5 h-5 text-primary bg-slate-100 border-slate-300 focus:ring-primary"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-primary dark:text-blue-400 font-bold">
                      <span className="font-bold mr-2 text-blue-400 dark:text-primary-light">
                        B)
                      </span>
                      Sadece standart iş ayakkabısı ve reflektörlü yelek
                    </span>
                  </label>

                  <label className="group flex items-center p-5 border-2 border-slate-100 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary dark:hover:border-primary/50 hover:bg-blue-50/30 dark:hover:bg-primary/5 transition-all">
                    <input
                      className="w-5 h-5 text-primary bg-slate-100 border-slate-300 dark:border-slate-600 focus:ring-primary dark:bg-slate-800"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-200 font-semibold">
                      <span className="font-bold mr-2 text-slate-400 dark:text-slate-500">
                        C)
                      </span>
                      Eldiven ve koruyucu gözlük kombinasyonu
                    </span>
                  </label>

                  <label className="group flex items-center p-5 border-2 border-slate-100 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary dark:hover:border-primary/50 hover:bg-blue-50/30 dark:hover:bg-primary/5 transition-all">
                    <input
                      className="w-5 h-5 text-primary bg-slate-100 border-slate-300 dark:border-slate-600 focus:ring-primary dark:bg-slate-800"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-200 font-semibold">
                      <span className="font-bold mr-2 text-slate-400 dark:text-slate-500">
                        D)
                      </span>
                      Gürültü önleyici kulaklık ve toz maskesi
                    </span>
                  </label>
                </div>
              </div>

              <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <button className="px-6 py-2.5 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Önceki Soru
                </button>
                <button className="px-8 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-md flex items-center">
                  Sonraki Soru
                  <svg
                    className="h-5 w-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </article>

            {/* Informational Footer */}
            <footer className="mt-12 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm distraction-element transition-opacity duration-300">
              <p className="font-medium">
                © 2023 BAYNAL GROUP - Eğitim Yönetim Sistemi
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  className="hover:text-primary transition-colors font-semibold"
                  href="#"
                >
                  Yardım
                </Link>
                <Link
                  className="hover:text-primary transition-colors font-semibold"
                  href="#"
                >
                  Kullanım Koşulları
                </Link>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
