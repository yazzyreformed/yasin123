"use client";

import React from "react";
import Link from "next/link";

export default function CourseCreatorPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-800 dark:text-slate-200 flex flex-col">
      {/* Header Nav */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-10 px-6 md:px-8 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest">
          <Link href="/dashboard" className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
            Kurslarım
          </Link>
          <span className="material-symbols-outlined text-[14px]">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-white">
            Kurs Oluşturucu
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all tracking-wide">
            <span className="material-symbols-outlined text-[18px]">save</span>
            Kaydet
          </button>
        </div>
      </header>

      <main className="p-6 md:p-8 max-w-6xl mx-auto w-full pb-32 flex-grow">
        {/* Title and Progress */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Kurs Oluşturucu
          </h1>
          <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
            Yeni eğitim içeriğinizi düzenleyin, modülleri yapılandırın ve
            yayınlayın.
          </p>
        </div>

        {/* Multi-step Indicator */}
        <div className="hidden md:grid grid-cols-4 gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-slate-900 dark:bg-slate-100 rounded-full shadow-sm"></div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-lg">
                check_circle
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Genel Bilgiler
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-slate-900 dark:bg-slate-100 rounded-full shadow-sm"></div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-lg">
                edit
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                İçerik Akışı
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 opacity-40">
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="material-symbols-outlined text-lg">settings</span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Ayarlar
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 opacity-40">
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full"></div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="material-symbols-outlined text-lg">publish</span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Yayınla
              </span>
            </div>
          </div>
        </div>

        {/* Workflow Builder Area */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h3 className="text-lg md:text-xl font-bold flex items-center gap-2 text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1">
              <span className="material-symbols-outlined text-slate-500">
                format_list_bulleted
              </span>
              Müfredat Yapısı
            </h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-sm font-semibold transition-colors shadow-sm tracking-wide">
                <span className="material-symbols-outlined text-[18px]">
                  unfold_more
                </span>
                Tümünü Genişlet
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white rounded-lg text-sm font-bold transition-all shadow-sm tracking-wide">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Yeni Modül Ekle
              </button>
            </div>
          </div>

          {/* Module 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 flex items-center gap-4 cursor-move border-b border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-slate-400">
                drag_indicator
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-2.5 py-1 rounded-full tracking-widest uppercase shadow-sm">
                    Modül 1
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Giriş ve Temel Kavramlar
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    edit
                  </span>
                </button>
                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 cursor-pointer rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    expand_less
                  </span>
                </button>
              </div>
            </div>

            {/* Lessons list */}
            <div className="p-5 space-y-3">
              {/* Lesson 1 */}
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-move shadow-sm">
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors">
                  drag_handle
                </span>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">
                    play_circle
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Hoşgeldiniz ve Kurs Tanıtımı
                  </p>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 mt-0.5">
                    Video İçerik • 04:20 Dakika
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-[18px]">
                    settings
                  </span>
                </button>
              </div>

              {/* Lesson 2 */}
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl group hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-move shadow-sm">
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-slate-500 transition-colors">
                  drag_handle
                </span>
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    description
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Temel Terminoloji Rehberi
                  </p>
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 mt-0.5">
                    Doküman (PDF) • 1.2 MB
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined text-[18px]">
                    settings
                  </span>
                </button>
              </div>

              {/* Action Buttons for Lessons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-slate-500 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    videocam
                  </span>
                  VİDEO EKLE
                </button>
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    picture_as_pdf
                  </span>
                  PDF EKLE
                </button>
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:border-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-[18px]">
                    inventory_2
                  </span>
                  SCORM EKLE
                </button>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm opacity-60">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 flex items-center gap-4 cursor-move border-b border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-slate-400">
                drag_indicator
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-200 dark:bg-slate-700 px-2.5 py-1 rounded-full tracking-widest uppercase shadow-sm">
                    Modül 2
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Uygulamalı Teknikler
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="p-2 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    edit
                  </span>
                </button>
                <button className="p-2 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[18px]">
                    delete
                  </span>
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            
            <div className="p-10 text-center border-t border-slate-100 dark:border-slate-800 bg-slate-50/20 dark:bg-transparent">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 mb-4 border border-slate-200 dark:border-slate-700 shadow-sm">
                <span className="material-symbols-outlined text-[20px] text-slate-500">
                  inbox
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wide">
                Bu modül henüz içerik barındırmıyor.
              </p>
              <p className="text-slate-400 text-xs mt-1 font-medium">
                İçerik eklemek için yukarıdaki butonları kullanın.
              </p>
            </div>
          </div>

          {/* Add New Module Placeholder */}
          <button className="w-full py-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl flex flex-col items-center justify-center gap-3 text-slate-500 hover:border-slate-900 dark:hover:border-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group shadow-sm">
            <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all shadow-sm">
              <span className="material-symbols-outlined text-[24px]">add</span>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">
              Yeni Modül Oluştur
            </span>
          </button>
        </div>

        {/* Step Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-bold transition-all uppercase tracking-wide"
            href="/dashboard"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Geri Dön
          </Link>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-all shadow-sm tracking-wide">
              Taslak Kaydet
            </button>
            <button className="flex-1 sm:flex-none justify-center bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all tracking-wide">
              Sonraki Adım
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      {/* Float Action Hint */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-5 py-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-xs font-bold tracking-wide z-50 animate-bounce">
        <span className="material-symbols-outlined text-[18px] text-slate-500">
          info
        </span>
        Sürükle-bırak ile sıralamayı değiştirebilirsiniz
      </div>
    </div>
  );
}
