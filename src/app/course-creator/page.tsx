"use client";

import React from "react";
import Link from "next/link";

export default function CourseCreatorPage() {
  return (
    <>
      {/* Header Nav */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md sticky top-0 z-10 px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
          <Link href="/dashboard" className="hover:text-primary transition-colors cursor-pointer">
            Kurslarım
          </Link>
          <span className="material-symbols-outlined text-sm leading-none">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            Kurs Oluşturucu
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md shadow-primary/20 transition-all">
            <span className="material-symbols-outlined text-lg">save</span>
            Kaydet
          </button>
        </div>
      </header>

      <div className="p-8 max-w-6xl mx-auto w-full pb-32">
        {/* Title and Progress */}
        <div className="mb-10">
          <h1 className="text-3xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">
            Kurs Oluşturucu
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Yeni eğitim içeriğinizi düzenleyin, modülleri yapılandırın ve
            yayınlayın.
          </p>
        </div>

        {/* Multi-step Indicator */}
        <div className="grid grid-cols-4 gap-6 mb-12 hidden md:grid">
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-primary rounded-full"></div>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg fill-1">
                check_circle
              </span>
              <span className="text-xs font-bold uppercase tracking-widest">
                Genel Bilgiler
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-1.5 w-full bg-primary rounded-full"></div>
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-lg font-bold">
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
            <h3 className="text-xl font-bold flex items-center gap-2.5 text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-primary">
                format_list_bulleted
              </span>
              Müfredat Yapısı
            </h3>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-sm font-semibold transition-colors">
                <span className="material-symbols-outlined text-lg">
                  unfold_more
                </span>
                Tümünü Genişlet
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white hover:bg-primary-dark rounded-lg text-sm font-bold transition-all shadow-sm shadow-primary/20">
                <span className="material-symbols-outlined text-lg">add</span>
                Yeni Modül Ekle
              </button>
            </div>
          </div>

          {/* Module 1 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 flex items-center gap-4 cursor-move border-b border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-slate-400">
                drag_indicator
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black text-primary bg-primary/10 dark:bg-primary/20 px-2 py-0.5 rounded tracking-widest uppercase">
                    Modül 1
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Giriş ve Temel Kavramlar
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 dark:hover:bg-primary/20 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    edit
                  </span>
                </button>
                <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    delete
                  </span>
                </button>
                <div className="w-px h-6 bg-slate-200 dark:bg-slate-700 mx-1"></div>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-slate-600 dark:hover:text-slate-300">
                  expand_less
                </span>
              </div>
            </div>

            {/* Lessons list */}
            <div className="p-5 space-y-3">
              {/* Lesson 1 */}
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl group hover:border-primary/40 dark:hover:border-primary/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-all cursor-move">
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                  drag_handle
                </span>
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    play_circle
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Hoşgeldiniz ve Kurs Tanıtımı
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Video İçerik • 04:20 Dakika
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    settings
                  </span>
                </button>
              </div>

              {/* Lesson 2 */}
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl group hover:border-primary/40 dark:hover:border-primary/40 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-all cursor-move">
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 group-hover:text-primary transition-colors">
                  drag_handle
                </span>
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    description
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Temel Terminoloji Rehberi
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Doküman (PDF) • 1.2 MB
                  </p>
                </div>
                <button className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-primary transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    settings
                  </span>
                </button>
              </div>

              {/* Action Buttons for Lessons */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:border-primary/40 dark:hover:border-primary/40 hover:text-primary dark:hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    videocam
                  </span>
                  + VİDEO EKLE
                </button>
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    picture_as_pdf
                  </span>
                  + PDF EKLE
                </button>
                <button className="flex items-center justify-center gap-2 py-4 px-4 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all">
                  <span className="material-symbols-outlined text-[20px]">
                    inventory_2
                  </span>
                  + SCORM EKLE
                </button>
              </div>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm opacity-60">
            <div className="bg-slate-50 dark:bg-slate-800/80 p-5 flex items-center gap-4 cursor-move border-b border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-slate-400">
                drag_indicator
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-300 px-2 py-0.5 rounded tracking-widest uppercase">
                    Modül 2
                  </span>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    Uygulamalı Teknikler
                  </h4>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <button className="p-2 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    edit
                  </span>
                </button>
                <button className="p-2 text-slate-400 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
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
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 mb-3">
                <span className="material-symbols-outlined text-slate-400">
                  inbox
                </span>
              </div>
              <p className="text-slate-400 text-sm font-semibold tracking-tight">
                Bu modül henüz içerik barındırmıyor.
              </p>
              <p className="text-slate-400 text-xs mt-1">
                İçerik eklemek için yukarıdaki butonları kullanın.
              </p>
            </div>
          </div>

          {/* Add New Module Placeholder */}
          <button className="w-full py-8 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex flex-col items-center justify-center gap-3 text-slate-400 hover:border-primary/40 hover:text-primary hover:bg-primary/5 dark:hover:bg-primary/5 transition-all group">
            <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
              <span className="material-symbols-outlined text-2xl">add</span>
            </div>
            <span className="text-sm font-extrabold uppercase tracking-[0.2em]">
              Yeni Modül Oluştur
            </span>
          </button>
        </div>

        {/* Step Footer */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-all"
            href="/dashboard"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Geri Dön
          </Link>
          <div className="flex gap-4 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
              Taslak Kaydet
            </button>
            <button className="flex-1 sm:flex-none justify-center bg-primary hover:bg-primary-dark text-white px-10 py-3 rounded-lg font-bold flex items-center gap-3 shadow-xl shadow-primary/20 transition-all transform hover:translate-x-1">
              Sonraki Adım
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      {/* Float Action Hint */}
      <div className="absolute bottom-8 right-8 flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full shadow-2xl text-xs font-bold tracking-tight z-50 animate-bounce">
        <span className="material-symbols-outlined text-primary text-xl">
          info
        </span>
        Sürükle-bırak ile sıralamayı değiştirebilirsiniz
      </div>
    </>
  );
}
