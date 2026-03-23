"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExamEditorPage() {
  const [activeTab, setActiveTab] = useState("sorular");

  return (
    <div className="bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 min-h-screen pb-20">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="text-slate-900 dark:text-white size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px]">school</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">BAYNAL GROUP LMS</h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-300"
            >
              Sınavlar
            </Link>
            <Link
              href="/exam-editor"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors border-b-2 border-slate-900 dark:border-white text-slate-900 dark:text-white pb-1"
            >
              Editör
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-300"
            >
              Sorular
            </Link>
            <Link
              href="/admin-analytics"
              className="text-sm font-medium hover:text-slate-900 dark:hover:text-white transition-colors text-slate-600 dark:text-slate-300"
            >
              Raporlar
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">publish</span>
              Yayınla
            </button>
            <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Kullanıcı Profil Fotoğrafı"
                className="size-full object-cover"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 p-6">
        {/* Left Sidebar Navigation */}
        <aside className="w-full md:w-64 flex flex-col gap-4 shrink-0">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 rounded-lg bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-white dark:text-slate-900 shadow-sm">
                <span className="material-symbols-outlined text-[24px]">edit_note</span>
              </div>
              <div>
                <h1 className="font-bold text-sm">BAYNAL LMS</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
                  Eğitim Yönetimi
                </p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <Link
                href="/dashboard"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  dashboard
                </span>
                <span className="text-sm font-medium">Panel</span>
              </Link>
              <Link
                href="/my-trainings"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  menu_book
                </span>
                <span className="text-sm font-medium">Kurslarım</span>
              </Link>
              <Link
                href="/exam"
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  quiz
                </span>
                <span className="text-sm font-bold">Sınavlar</span>
              </Link>
              <Link
                href="/admin-analytics"
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">
                  analytics
                </span>
                <span className="text-sm font-medium">Raporlar</span>
              </Link>
            </nav>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-sm">
            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">
              Hızlı Ayarlar
            </p>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-semibold">Soruları Karıştır</span>
                <input
                  defaultChecked
                  className="rounded text-slate-900 dark:text-white focus:ring-slate-900 w-4 h-4 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-semibold">Süre Sınırı (dk)</span>
                <input
                  className="w-12 text-xs font-medium bg-transparent border-b border-slate-300 dark:border-slate-600 text-right focus:outline-none focus:border-slate-900 dark:focus:border-white transition-colors"
                  type="number"
                  defaultValue={45}
                />
              </label>
            </div>
          </div>
        </aside>

        {/* Main Editor Area */}
        <main className="flex-1 min-w-0">
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-slate-900 dark:text-white">
              Sınav ve Test Editörü
            </h1>
            <p className="text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
              Yeni bir sınav oluşturun veya mevcut olanları düzenleyin.
            </p>
          </div>

          {/* Tabbed Interface */}
          <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8 mb-6 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab("sorular")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-all uppercase tracking-wider text-xs ${
                activeTab === "sorular"
                  ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Sorular
            </button>
            <button
              onClick={() => setActiveTab("ayarlar")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-all uppercase tracking-wider text-xs ${
                activeTab === "ayarlar"
                  ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Ayarlar
            </button>
            <button
              onClick={() => setActiveTab("onizleme")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-all uppercase tracking-wider text-xs ${
                activeTab === "onizleme"
                  ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Önizleme
            </button>
            <button
              onClick={() => setActiveTab("ogrenciler")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-all uppercase tracking-wider text-xs ${
                activeTab === "ogrenciler"
                  ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Öğrenciler
            </button>
          </div>

          {activeTab === "sorular" && (
            <>
              {/* Question Creation Tools */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-pointer group shadow-sm hover:shadow-md">
                  <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 mb-3 text-[32px] group-hover:scale-110 transition-transform block">
                    checklist
                  </span>
                  <h3 className="font-bold mb-1 text-slate-900 dark:text-white">Çoktan Seçmeli</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                    Tek veya çoklu cevap seçenekleri ekleyin.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-pointer group shadow-sm hover:shadow-md">
                  <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 mb-3 text-[32px] group-hover:scale-110 transition-transform block">
                    swap_horiz
                  </span>
                  <h3 className="font-bold mb-1 text-slate-900 dark:text-white">Eşleştirme</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                    Kavramları tanımları ile eşleştirin.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transition-colors cursor-pointer group shadow-sm hover:shadow-md">
                  <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 mb-3 text-[32px] group-hover:scale-110 transition-transform block">
                    edit_square
                  </span>
                  <h3 className="font-bold mb-1 text-slate-900 dark:text-white">Yazılı / Kompozisyon</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                    Serbest metin yanıtları için alan bırakın.
                  </p>
                </div>
              </div>

              {/* Current Questions List */}
              <section className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Sorular (3)</h2>
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Toplam Puan: 100
                  </span>
                </div>

                {/* Multiple Choice Example */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative group overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-900 dark:bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-4 pl-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold px-2.5 py-1 rounded text-[10px] tracking-widest uppercase">
                        1. Soru
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        Çoktan Seçmeli
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">
                          content_copy
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-move relative top-[-1px]">
                        <span className="material-symbols-outlined text-[18px]">
                          drag_indicator
                        </span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    defaultValue="Aşağıdakilerden hangisi web tasarımında kullanılan bir programlama dilidir?"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700/50 rounded-lg p-4 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-white dark:focus:border-white mb-4 resize-none transition-shadow"
                    placeholder="Soru metnini buraya yazın..."
                    rows={2}
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 group/option">
                      <input
                        defaultChecked
                        className="text-slate-900 dark:text-white focus:ring-slate-900 dark:focus:ring-white border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-slate-900 dark:focus:border-white text-sm py-1 font-medium focus:outline-none transition-colors"
                        type="text"
                        defaultValue="JavaScript"
                      />
                      <span className="text-emerald-600 material-symbols-outlined text-[18px]">
                        check_circle
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/option">
                      <input
                        className="text-slate-900 dark:text-white focus:ring-slate-900 dark:focus:ring-white border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-slate-900 dark:focus:border-white text-sm py-1 font-medium focus:outline-none transition-colors"
                        type="text"
                        defaultValue="Photoshop"
                      />
                    </div>
                    <div className="flex items-center gap-3 group/option">
                      <input
                        className="text-slate-900 dark:text-white focus:ring-slate-900 dark:focus:ring-white border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 cursor-pointer"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-slate-900 dark:focus:border-white text-sm py-1 font-medium focus:outline-none transition-colors"
                        type="text"
                        defaultValue="Figma"
                      />
                    </div>
                    <button className="text-xs text-slate-500 dark:text-slate-400 font-bold mt-2 ml-1 flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[16px]">
                        add
                      </span>{" "}
                      Seçenek Ekle
                    </button>
                  </div>
                </div>

                {/* Written Question Example */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-80 group relative overflow-hidden transition-all hover:opacity-100 hover:border-slate-300 dark:hover:border-slate-700">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-4 pl-2">
                    <div className="flex items-center gap-3">
                      <span className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-bold px-2.5 py-1 rounded text-[10px] tracking-widest uppercase">
                        2. Soru
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                        Yazılı Cevap
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">
                          content_copy
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[18px]">
                          delete
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-move relative top-[-1px]">
                        <span className="material-symbols-outlined text-[18px]">
                          drag_indicator
                        </span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    defaultValue="LMS sistemlerinin eğitimdeki avantajlarını açıklayınız."
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700/50 rounded-lg p-4 text-sm font-medium mb-4 resize-none focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-white dark:focus:border-white transition-shadow"
                    rows={2}
                  />
                  <div className="h-24 bg-slate-100 dark:bg-slate-800/30 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-inner">
                    <span className="text-[11px] uppercase tracking-widest font-bold text-slate-400">
                      Öğrenci yanıt alanı
                    </span>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="flex justify-center pt-4">
                  <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold shadow-sm flex items-center gap-2 transition-all tracking-wide text-sm">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    Yeni Soru Ekle
                  </button>
                </div>
              </section>
            </>
          )}

          {activeTab !== "sorular" && (
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
              <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600 mb-4 block">
                construction
              </span>
              <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
                Yapım Aşamasında
              </h3>
              <p className="text-sm text-slate-500 text-center max-w-sm">
                Bu sekmedeki ({activeTab}) özellikler şu anda geliştirilmektedir. Lütfen
                daha sonra tekrar deneyin.
              </p>
            </div>
          )}
        </main>

        {/* Right Sidebar Settings */}
        <aside className="w-full xl:w-72 flex flex-col gap-6 shrink-0">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2 border-b-2 border-slate-900 dark:border-white pb-1 inline-flex text-slate-900 dark:text-white">
              <span className="material-symbols-outlined text-[18px] text-slate-500">
                settings
              </span>
              Sınav Detayları
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
                  Başlık
                </label>
                <input
                  className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white p-2.5 text-slate-800 dark:text-slate-200 transition-all"
                  type="text"
                  defaultValue="Web Geliştirme Temelleri Vize"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1.5">
                  Kategori
                </label>
                <select className="w-full text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white p-2.5 text-slate-800 dark:text-slate-200 cursor-pointer transition-all">
                  <option>Yazılım Geliştirme</option>
                  <option>Tasarım</option>
                  <option>İşletme</option>
                </select>
              </div>
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-4 mt-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Zaman Sınırı</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm">
                    45 dk
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Geçme Notu</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded border border-slate-200 dark:border-slate-700 shadow-sm">
                    70 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 p-6 rounded-xl shadow-md relative overflow-hidden group border border-transparent dark:border-slate-700">
            <div className="absolute top-0 right-0 p-4 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-8xl">visibility</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2">Önizleme Modu</h4>
              <p className="text-xs font-medium text-white/70 dark:text-slate-500 tracking-wide mb-5">
                Sınavın öğrenci gözünden nasıl göründüğünü kontrol edin.
              </p>
              <button className="w-full py-2.5 bg-white/10 dark:bg-slate-900 hover:bg-white/20 dark:hover:bg-slate-800 dark:text-white rounded-lg text-sm font-bold transition-colors">
                Önizlemeyi Başlat
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
