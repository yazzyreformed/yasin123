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
      className={`flex flex-col flex-1 h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 ${
        focusMode ? "focus-mode-active" : ""
      }`}
    >
      {/* Main Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center space-x-4 flex-shrink-0">
          <Link href="/dashboard" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-2 rounded-lg font-bold text-xl flex items-center justify-center w-10 h-10 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm">
            BG
          </Link>
          <div>
            <h1 className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
              BAYNAL GROUP
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
              Sınav Merkezi
            </p>
          </div>
        </div>

        {/* Timer Display */}
        <div className="flex items-center bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 px-5 py-2 rounded-xl shadow-sm">
          <span className="material-symbols-outlined text-[20px] text-red-600 dark:text-red-400 mr-2 animate-pulse">
            timer
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-red-700 dark:text-red-400 leading-none">
              Kalan Süre
            </span>
            <span className="text-xl font-mono font-bold text-red-700 dark:text-red-400 tabular-nums">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6 flex-shrink-0">
          <button
            className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-semibold flex items-center transition-colors"
            onClick={() => setFocusMode(!focusMode)}
          >
            {focusMode ? (
              <>
                <span className="material-symbols-outlined text-[20px] mr-1.5">visibility</span>
                Normal Mod
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[20px] mr-1.5">fullscreen</span>
                Odak Modu
              </>
            )}
          </button>
          <button
            onClick={handleFinishExam}
            className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-lg font-bold transition-colors shadow-sm text-sm"
          >
            Sınavı Bitir
          </button>
        </div>
      </header>

      <main className="flex-grow flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className="w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col hidden lg:flex distraction-element transition-opacity duration-300">
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
            <h2 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-slate-500">format_list_bulleted</span>
              Sorular
            </h2>
            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 mt-2 font-semibold">
              <span>Toplam: 40</span>
              <span className="text-emerald-600 dark:text-emerald-400">Tamamlanan: 12</span>
            </div>
            {/* Minimal Progress Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mt-3">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: "30%" }}></div>
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto p-5 custom-scrollbar">
            <div className="grid grid-cols-5 gap-2.5">
              {/* Active Question */}
              <button className="w-10 h-10 rounded-lg border-2 border-slate-900 dark:border-white bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold text-sm shadow-sm transition-all">
                1
              </button>
              {/* Answered Questions */}
              <button className="w-10 h-10 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm transition-all flex items-center justify-center relative">
                2
                <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] bg-white rounded-full text-emerald-600">check_circle</span>
              </button>
              <button className="w-10 h-10 rounded-lg border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 font-bold text-sm transition-all flex items-center justify-center relative">
                3
                <span className="absolute -bottom-1 -right-1 material-symbols-outlined text-[12px] bg-white dark:bg-slate-900 rounded-full text-emerald-600">check_circle</span>
              </button>
              {/* Flagged/Review Question */}
              <button className="w-10 h-10 rounded-lg border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-500 font-bold text-sm transition-all relative">
                4
                <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
                </span>
              </button>
              {/* Unanswered Questions Generated */}
              {[...Array(36)].map((_, i) => {
                const q = i + 5;
                return (
                  <button
                    key={q}
                    className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white font-semibold text-sm transition-colors"
                  >
                    {q}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-5 border-t border-slate-200 dark:border-slate-800 space-y-3 bg-slate-50/50 dark:bg-slate-950/50">
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-semibold gap-2">
              <span className="w-3.5 h-3.5 flex items-center justify-center bg-emerald-50 border border-emerald-200 dark:bg-emerald-900/30 dark:border-emerald-800 rounded-sm">
                <span className="material-symbols-outlined text-[10px] text-emerald-600 dark:text-emerald-400">check</span>
              </span>
              Cevaplandı
            </div>
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-semibold gap-2">
              <span className="w-3.5 h-3.5 flex items-center justify-center bg-amber-50 border border-amber-200 dark:bg-amber-900/30 dark:border-amber-800 rounded-sm">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
              </span>
              Gözden Geçir
            </div>
            <div className="flex items-center text-xs text-slate-600 dark:text-slate-400 font-semibold gap-2">
              <span className="w-3.5 h-3.5 flex items-center justify-center bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 rounded-sm">
              </span>
              Cevaplanmadı
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-grow flex flex-col overflow-y-auto">
          <div className="max-w-4xl mx-auto w-full p-6 lg:p-10 flex-grow flex flex-col">
            {/* Question Card */}
            <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col flex-grow">
              <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">menu_book</span>
                  SORU 1 / 40
                </span>
                <button className="text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20 px-4 py-2 rounded-lg text-xs font-bold flex items-center transition-colors border border-transparent hover:border-amber-200 dark:hover:border-amber-800">
                  <span className="material-symbols-outlined text-[16px] mr-1.5">bookmark</span>
                  İşaretle ve Sonra Bak
                </button>
              </div>

              <div className="p-8 md:p-10 flex-grow">
                <div className="prose max-w-none text-slate-900 dark:text-slate-100 mb-10">
                  <p className="text-xl leading-relaxed font-bold tracking-tight">
                    Aşağıdakilerden hangisi Baynal Group iş sağlığı ve güvenliği
                    protokolleri çerçevesinde, yüksekte çalışma alanlarında
                    kullanılması zorunlu olan temel ekipmanlar arasında yer alır?
                  </p>
                </div>

                {/* Options List */}
                <div className="space-y-4">
                  <label className="group flex items-center p-5 border-2 border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                    <input
                      className="w-5 h-5 text-slate-900 bg-white border-slate-300 dark:bg-slate-950 dark:border-slate-700 focus:ring-slate-900"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-300 font-medium text-lg">
                      <span className="font-bold mr-3 text-slate-400 dark:text-slate-500">
                        A)
                      </span>
                      Tam vücut tipi emniyet kemeri ve lanyard
                    </span>
                  </label>
                  
                  {/* Selected Option (Mock) */}
                  <label className="group flex items-center p-5 border-2 border-slate-900 dark:border-slate-300 bg-slate-50 dark:bg-slate-800/80 rounded-xl cursor-pointer transition-all shadow-sm">
                    <input
                      defaultChecked
                      className="w-5 h-5 text-slate-900 bg-white border-slate-900 focus:ring-slate-900"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-900 dark:text-white font-bold text-lg">
                      <span className="font-bold mr-3 text-slate-500 dark:text-slate-400">
                        B)
                      </span>
                      Sadece standart iş ayakkabısı ve reflektörlü yelek
                    </span>
                  </label>

                  <label className="group flex items-center p-5 border-2 border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                    <input
                      className="w-5 h-5 text-slate-900 bg-white border-slate-300 dark:bg-slate-950 dark:border-slate-700 focus:ring-slate-900"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-300 font-medium text-lg">
                      <span className="font-bold mr-3 text-slate-400 dark:text-slate-500">
                        C)
                      </span>
                      Eldiven ve koruyucu gözlük kombinasyonu
                    </span>
                  </label>

                  <label className="group flex items-center p-5 border-2 border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                    <input
                      className="w-5 h-5 text-slate-900 bg-white border-slate-300 dark:bg-slate-950 dark:border-slate-700 focus:ring-slate-900"
                      name="exam-option"
                      type="radio"
                    />
                    <span className="ml-4 text-slate-700 dark:text-slate-300 font-medium text-lg">
                      <span className="font-bold mr-3 text-slate-400 dark:text-slate-500">
                        D)
                      </span>
                      Gürültü önleyici kulaklık ve toz maskesi
                    </span>
                  </label>
                </div>
              </div>

              <div className="px-8 py-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center mt-auto">
                <button className="px-6 py-3 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors flex items-center">
                  <span className="material-symbols-outlined text-[20px] mr-2">arrow_back</span>
                  Önceki Soru
                </button>
                <button className="px-8 py-3 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 font-bold rounded-lg transition-colors shadow-sm flex items-center">
                  Sonraki Soru
                  <span className="material-symbols-outlined text-[20px] ml-2">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Informational Footer */}
            <footer className="mt-8 py-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-400 text-sm distraction-element transition-opacity duration-300 content-end">
              <p className="font-medium tracking-wide">
                © 2024 BAYNAL GROUP LMS
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 font-semibold gap-2">
                <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
                  Yardım
                </Link>
                <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
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
