"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MyTrainingsPage() {
  const [activeTab, setActiveTab] = useState<"devam-edenler" | "tamamlananlar">("devam-edenler");

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-8 relative z-10 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-slate-500">book_4</span>
          Eğitimlerim
        </h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">TR</span>
        </div>
      </header>

      {/* Dashboard Body */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-8 space-y-8">
        {/* Navigation & Tabs Area */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex p-1 bg-slate-200/60 dark:bg-slate-800/60 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("devam-edenler")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "devam-edenler"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">motion_photos_on</span>
              Devam Edenler
            </button>
            <button
              onClick={() => setActiveTab("tamamlananlar")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "tamamlananlar"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Tamamlananlar
            </button>
          </div>

          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input 
              type="text" 
              placeholder="Eğitim Ara..." 
              className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-white/10 transition-shadow text-slate-900 dark:text-white"
            />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Course Card 1 */}
          <article className="group bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-900">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=450')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                SCORM
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2 title-font">
                İş Sağlığı ve Güvenliği Eğitimi (2024)
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    İlerleme
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    %65
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-5 overflow-hidden">
                  <div
                    className="bg-slate-900 dark:bg-slate-300 h-1.5 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">picture_as_pdf</span>
                      PDF
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">play_circle</span>
                      VİDEO
                    </span>
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 2 */}
          <article className="group bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-900">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=450')",
                }}
              ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                VİDEO
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                Dijital Pazarlama Stratejileri ve Analiz
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    İlerleme
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    %12
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-5 overflow-hidden">
                  <div
                    className="bg-slate-900 dark:bg-slate-300 h-1.5 rounded-full"
                    style={{ width: "12%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">play_circle</span>
                      VİDEO
                    </span>
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 3 */}
          <article className="group bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-900">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=450')",
                }}
              ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                PDF
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                Modern Liderlik ve Ekip Yönetimi
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Başlanmadı
                  </span>
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    %0
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-5 overflow-hidden">
                  <div
                    className="bg-slate-300 dark:bg-slate-600 h-1.5 rounded-full"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">picture_as_pdf</span>
                      PDF
                    </span>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition-all shadow-sm">
                    Başlat
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 4 */}
          <article className="group bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-900">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=450')",
                }}
              ></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                SCORM
              </span>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                Veri Bilimi Temelleri ve Python
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    Bitmek Üzere
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    %90
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-5 overflow-hidden">
                  <div
                    className="bg-emerald-500 dark:bg-emerald-400 h-1.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex space-x-2">
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      <span className="material-symbols-outlined text-[14px]">integration_instructions</span>
                      UYGULAMA
                    </span>
                  </div>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
