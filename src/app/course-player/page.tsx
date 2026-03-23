"use client";

import React, { useState } from "react";

export default function CoursePlayerPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleCheckAnswer = () => {
    if (selectedOption) {
      setShowFeedback(true);
    }
  };

  return (
    <div className="bg-slate-200 dark:bg-slate-900 font-sans min-h-screen">
      {/* Video Player Container (Background Context) */}
      <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Mock Video Content */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover opacity-40 blur-sm"
            alt="Python code on a dark computer screen"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbMzN1I7dmV1CjrUgu82GmzIy2q0E0CFu2rlnEYG8pyzUGeLVSmRxPrrnzNHOtH1lkq7a0cRaf_fKJrDfqCg8qk_MnwVB_R24UsfJQCy-PWCjOQTT4Px9sWRpatPL0UBjpW4PLsAXgqOBWc3uJ3lyEtYT7KnHOzH_wkd2mEK2jhcZ48cGi-seNQcvCKhIJ8XU8_nMP34m97EeBxhq8OS0zScrukyboiT989Qm6LTRw1Y0kkyC6ljADZtu8wuycQ7GmxTw7GFxHonvE"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>
        </div>

        {/* Quiz Overlay Modal */}
        <div className="relative z-10 w-full max-w-2xl mx-4 bg-slate-50 dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-300 dark:border-slate-800 overflow-hidden">
          {/* Header Section */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500">
                quiz
              </span>
              <h4 className="text-slate-900 dark:text-slate-100 text-lg font-bold">
                Bilgi Kontrolü
              </h4>
            </div>
            <div className="text-slate-500 text-sm font-medium">Soru 1/1</div>
          </div>

          {/* Content Section */}
          <div className="px-8 py-10 flex flex-col items-center">
            <p className="text-slate-800 dark:text-slate-200 text-xl font-medium text-center mb-8 leading-relaxed">
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
                      ? "border-orange-500 bg-orange-50/50 dark:bg-orange-900/10"
                      : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-orange-500/50"
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
                        ? "bg-orange-500 border-orange-500"
                        : "border-slate-200 dark:border-slate-600 group-hover:border-orange-500"
                    }`}
                  >
                    <span
                      className={`text-sm font-bold ${
                        selectedOption === option.id
                          ? "text-white"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {option.id}
                    </span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-semibold">
                    {option.text}
                  </span>
                </label>
              ))}
            </div>

            {/* Feedback Section */}
            {showFeedback && selectedOption === "B" && (
              <div className="w-full mb-8 animate-fade-in">
                <div className="flex flex-col items-start gap-4 rounded-xl border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-900/20 p-5 w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0">
                      <span className="material-symbols-outlined">check</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-emerald-800 dark:text-emerald-400 text-base font-bold leading-tight">
                        Tebrikler! Doğru Cevap
                      </p>
                      <p className="text-emerald-700 dark:text-emerald-500/80 text-sm font-normal">
                        Python&apos;da listeler köşeli parantez [ ] ile
                        tanımlanır.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {showFeedback && selectedOption !== "B" && (
              <div className="w-full mb-8 animate-fade-in">
                <div className="flex flex-col items-start gap-4 rounded-xl border border-red-500/30 bg-red-50 dark:bg-red-900/20 p-5 w-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shrink-0">
                      <span className="material-symbols-outlined">close</span>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-red-800 dark:text-red-400 text-base font-bold leading-tight">
                        Yanlış Cevap
                      </p>
                      <p className="text-red-700 dark:text-red-500/80 text-sm font-normal">
                        Lütfen tekrar deneyin.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 w-full">
              <button
                onClick={handleCheckAnswer}
                disabled={!selectedOption}
                className="flex-1 min-w-[140px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed dark:disabled:bg-slate-700 text-white text-base font-bold tracking-wide transition-colors shadow-lg shadow-blue-900/20"
              >
                Cevabı Kontrol Et
              </button>
              {showFeedback && selectedOption === "B" && (
                <button className="flex items-center justify-center rounded-xl h-14 px-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-base font-bold transition-colors">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-slate-100 dark:bg-slate-900/80 px-8 py-4 flex justify-between items-center border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">
              BAYNAL GROUP ACADEMY
            </span>
            <button className="text-sm text-orange-500 font-semibold hover:underline">
              Soruyu Atla
            </button>
          </div>
        </div>

        {/* Player Controls (Decorative) */}
        <div className="absolute bottom-0 left-0 w-full p-6 flex items-center gap-4 bg-gradient-to-t from-black/80 to-transparent z-0">
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-blue-400 transition-colors">
            play_arrow
          </span>
          <div className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden cursor-pointer">
            <div className="h-full bg-orange-500 w-2/3"></div>
          </div>
          <span className="text-white text-xs font-mono">12:45 / 18:30</span>
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-blue-400 transition-colors">
            volume_up
          </span>
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-blue-400 transition-colors">
            settings
          </span>
          <span className="material-symbols-outlined text-white cursor-pointer hover:text-blue-400 transition-colors">
            fullscreen
          </span>
        </div>
      </div>
    </div>
  );
}
