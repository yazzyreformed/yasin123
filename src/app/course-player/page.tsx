"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function CoursePlayerPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCheckAnswer = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 font-sans min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-8 relative z-20 shadow-sm flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link href="/my-trainings" className="flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px] mr-1">arrow_back</span>
            <span className="text-sm font-semibold hidden sm:inline">Eğitimlere Dön</span>
          </Link>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
          <h1 className="text-slate-900 dark:text-white font-semibold text-sm md:text-base truncate max-w-[200px] sm:max-w-md">
            İleri Seviye Web Geliştirme - Bölüm 3: Python Temelleri
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors relative rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">help_outline</span>
          </button>
        </div>
      </header>

      {/* Video Player Container (Background Context) */}
      <div className="relative w-full flex-grow bg-black flex items-center justify-center overflow-hidden">
        {/* Mock Video Content */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-40 blur-sm"
            alt="Python code on a dark computer screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbMzN1I7dmV1CjrUgu82GmzIy2q0E0CFu2rlnEYG8pyzUGeLVSmRxPrrnzNHOtH1lkq7a0cRaf_fKJrDfqCg8qk_MnwVB_R24UsfJQCy-PWCjOQTT4Px9sWRpatPL0UBjpW4PLsAXgqOBWc3uJ3lyEtYT7KnHOzH_wkd2mEK2jhcZ48cGi-seNQcvCKhIJ8XU8_nMP34m97EeBxhq8OS0zScrukyboiT989Qm6LTRw1Y0kkyC6ljADZtu8wuycQ7GmxTw7GFxHonvE"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
        </div>

        {/* Quiz Overlay Modal */}
        <div className="relative z-10 w-full max-w-3xl mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
          {/* Header Section */}
          <div className="flex items-center justify-between px-8 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[22px] text-slate-700 dark:text-slate-300">
                quiz
              </span>
              <h4 className="text-slate-900 dark:text-white text-lg font-bold">
                Bilgi Kontrolü
              </h4>
            </div>
            <div className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold px-3 py-1 rounded-md">
              Soru 1/1
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-10 flex flex-col items-center flex-grow overflow-y-auto">
            <p className="text-slate-900 dark:text-white text-xl font-medium text-center mb-8 leading-relaxed max-w-xl">
              Python&apos;da liste tanımlamak için hangi parantez kullanılır?
            </p>

            {/* Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              {[
                { id: "A", text: "( ) Parantez" },
                { id: "B", text: "[ ] Köşeli Parantez" },
                { id: "C", text: "{ } Süslü Parantez" },
                { id: "D", text: "< > Küçüktür/Büyüktür" },
              ].map((option) => (
                <label
                  key={option.id}
                  className={`group relative flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer ${
                    selectedOption === option.id
                      ? "border-slate-900 bg-slate-50 dark:border-slate-400 dark:bg-slate-800/50"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500"
                  }`}
                >
                  <input
                    className="hidden peer"
                    name="quiz-options"
                    type="radio"
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                  />
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg border-2 mr-4 transition-colors ${
                      selectedOption === option.id
                        ? "bg-slate-900 border-slate-900 dark:bg-slate-300 dark:border-slate-300"
                        : "border-slate-300 dark:border-slate-600 group-hover:border-slate-400"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        selectedOption === option.id
                          ? "text-white dark:text-slate-900"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {option.id}
                    </span>
                  </div>
                  <span className={`font-semibold ${selectedOption === option.id ? "text-slate-900 dark:text-white" : "text-slate-700 dark:text-slate-300"}`}>
                    {option.text}
                  </span>
                </label>
              ))}
            </div>

            {/* Feedback Section */}
            {showFeedback && selectedOption === "B" && (
              <div className="w-full mb-8 animate-fade-in">
                <div className="flex items-start gap-4 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50 dark:bg-emerald-900/20 p-5 w-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <span className="material-symbols-outlined text-[20px] font-bold">check</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-emerald-800 dark:text-emerald-300 text-base font-bold leading-tight mb-1">
                      Doğru Cevap
                    </p>
                    <p className="text-emerald-700 dark:text-emerald-400/80 text-sm font-medium">
                      Python&apos;da listeler köşeli parantez [ ] ile
                      tanımlanır.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {showFeedback && selectedOption !== "B" && (
              <div className="w-full mb-8 animate-fade-in">
                <div className="flex items-start gap-4 rounded-xl border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-900/20 p-5 w-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 shrink-0">
                    <span className="material-symbols-outlined text-[20px] font-bold">close</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-red-800 dark:text-red-300 text-base font-bold leading-tight mb-1">
                      Yanlış Cevap
                    </p>
                    <p className="text-red-700 dark:text-red-400/80 text-sm font-medium">
                      Lütfen tekrar deneyin.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 w-full mt-auto pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                className="flex-1 min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed dark:bg-slate-100 dark:hover:bg-white dark:text-slate-900 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 text-base font-bold tracking-wide transition-colors shadow-sm"
              >
                Cevabı Kontrol Et
              </button>
              {showFeedback && selectedOption === "B" && (
                <button className="flex items-center justify-center rounded-xl h-12 px-8 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-base font-bold transition-colors">
                  <span className="hidden sm:inline mr-2">Devam Et</span>
                  <span className="material-symbols-outlined text-[20px]">
                    arrow_forward
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-slate-50 dark:bg-slate-950 px-8 py-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest flex items-center gap-2">
              <div className="w-5 h-5 bg-slate-900 dark:bg-white rounded flex items-center justify-center text-white dark:text-slate-900 font-bold text-[10px]">
                BG
              </div>
              BAYNAL GROUP
            </span>
            <button className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white font-semibold flex items-center gap-1 transition-colors">
              Soruyu Atla
              <span className="material-symbols-outlined text-[16px]">skip_next</span>
            </button>
          </div>
        </div>

        {/* Player Controls (Decorative - Corporate Style) */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex items-center gap-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-0">
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[28px] drop-shadow-md">play_arrow</span>
          </button>
          <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden cursor-pointer backdrop-blur-sm">
            <div className="h-full bg-blue-500 w-2/3 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
          </div>
          <span className="text-white/90 text-sm font-medium tracking-wide drop-shadow-md">12:45 <span className="text-white/50 mx-1">/</span> 18:30</span>
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity ml-2">
            <span className="material-symbols-outlined text-[24px] drop-shadow-md">volume_up</span>
          </button>
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[24px] drop-shadow-md">settings</span>
          </button>
          <button className="text-white opacity-80 hover:opacity-100 transition-opacity">
            <span className="material-symbols-outlined text-[24px] drop-shadow-md">fullscreen</span>
          </button>
        </div>
      </div>
    </div>
  );
}
