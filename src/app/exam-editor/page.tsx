"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExamEditorPage() {
  const [activeTab, setActiveTab] = useState("sorular");

  return (
    <div className="bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 min-h-screen pb-20">
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="text-primary dark:text-blue-400 size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <h2 className="text-lg font-bold tracking-tight">BAYNAL GROUP LMS</h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-300"
            >
              Sınavlar
            </Link>
            <Link
              href="/exam-editor"
              className="text-sm font-medium hover:text-primary transition-colors border-b-2 border-primary text-primary dark:text-blue-400 pb-1"
            >
              Editör
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-300"
            >
              Sorular
            </Link>
            <Link
              href="/admin-analytics"
              className="text-sm font-medium hover:text-primary transition-colors text-slate-600 dark:text-slate-300"
            >
              Raporlar
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm">
              <span className="material-symbols-outlined text-sm">publish</span>
              Yayınla
            </button>
            <div className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Kullanıcı Profil Fotoğrafı"
                className="size-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsJ1OIKyPBnEcAQA9dvIn71TGxoFW_ZzYqtyU5iif3fJ-38eathuS2iJr2eC9nqerN60N7MuFWHcXvXGVphmI5RNnOtmWrOy6A-M14UvIPUaaCn9hdIe8LCgf74UrBPJc36HiXz7TD1s6IkQKbCV3uDqpVZKjq0G24HjvpydEer52YEpzV-RMzB-kbhYopnnJvk0oANJO8jcepp7AZPTA7_9M-BrAPQpNpd951nj-tPKrgPQZbFBT7r7N8aUQ89JZE8Gp8dUvnoVN6"
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
              <div className="size-10 rounded-lg bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined">edit_note</span>
              </div>
              <div>
                <h1 className="font-bold text-sm">BAYNAL LMS</h1>
                <p className="text-slate-500 dark:text-slate-400 text-xs">
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
                className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 dark:bg-primary-dark/30 text-primary dark:text-blue-400 transition-colors"
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

          <div className="bg-primary/5 dark:bg-slate-900 border border-primary/10 dark:border-slate-800 p-4 rounded-xl shadow-sm">
            <p className="text-xs font-bold text-primary dark:text-blue-400 uppercase tracking-wider mb-2">
              Hızlı Ayarlar
            </p>
            <div className="space-y-3">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-medium">Soruları Karıştır</span>
                <input
                  defaultChecked
                  className="rounded text-primary focus:ring-primary w-4 h-4 border-slate-300 dark:border-slate-700 dark:bg-slate-800"
                  type="checkbox"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-xs font-medium">Süre Sınırı (dk)</span>
                <input
                  className="w-12 text-xs bg-transparent border-b border-primary/30 dark:border-slate-700 text-right focus:outline-none focus:border-primary dark:focus:border-blue-400"
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
            <h1 className="text-3xl font-black tracking-tight mb-2 text-primary dark:text-white">
              Sınav ve Test Editörü
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Yeni bir sınav oluşturun veya mevcut olanları düzenleyin.
            </p>
          </div>

          {/* Tabbed Interface */}
          <div className="border-b border-slate-200 dark:border-slate-800 flex gap-8 mb-6 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveTab("sorular")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                activeTab === "sorular"
                  ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Sorular
            </button>
            <button
              onClick={() => setActiveTab("ayarlar")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                activeTab === "ayarlar"
                  ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Ayarlar
            </button>
            <button
              onClick={() => setActiveTab("onizleme")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                activeTab === "onizleme"
                  ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              Önizleme
            </button>
            <button
              onClick={() => setActiveTab("ogrenciler")}
              className={`pb-4 border-b-2 font-bold text-sm whitespace-nowrap transition-colors ${
                activeTab === "ogrenciler"
                  ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
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
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-400 transition-colors cursor-pointer group shadow-sm">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 mb-3 text-3xl group-hover:scale-110 transition-transform block">
                    checklist
                  </span>
                  <h3 className="font-bold mb-1">Çoktan Seçmeli</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Tek veya çoklu cevap seçenekleri ekleyin.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-400 transition-colors cursor-pointer group shadow-sm">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 mb-3 text-3xl group-hover:scale-110 transition-transform block">
                    swap_horiz
                  </span>
                  <h3 className="font-bold mb-1">Eşleştirme</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Kavramları tanımları ile eşleştirin.
                  </p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary dark:hover:border-blue-400 transition-colors cursor-pointer group shadow-sm">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 mb-3 text-3xl group-hover:scale-110 transition-transform block">
                    edit_square
                  </span>
                  <h3 className="font-bold mb-1">Yazılı / Kompozisyon</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
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
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary/10 dark:bg-primary-dark/30 text-primary dark:text-blue-400 font-bold px-2 py-1 rounded text-xs">
                        1. Soru
                      </span>
                      <span className="text-xs font-medium text-slate-400 uppercase">
                        Çoktan Seçmeli
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-move">
                        <span className="material-symbols-outlined">
                          drag_indicator
                        </span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    defaultValue="Aşağıdakilerden hangisi web tasarımında kullanılan bir programlama dilidir?"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700/50 rounded-lg p-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-blue-400 dark:focus:border-blue-400 mb-4 resize-none transition-shadow"
                    placeholder="Soru metnini buraya yazın..."
                    rows={2}
                  />
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 group/option">
                      <input
                        defaultChecked
                        className="text-primary dark:text-blue-500 focus:ring-primary dark:focus:ring-blue-500 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-primary dark:focus:border-blue-400 text-sm py-1 focus:outline-none transition-colors"
                        type="text"
                        defaultValue="JavaScript"
                      />
                      <span className="text-green-600 material-symbols-outlined text-sm">
                        check_circle
                      </span>
                    </div>
                    <div className="flex items-center gap-3 group/option">
                      <input
                        className="text-primary dark:text-blue-500 focus:ring-primary dark:focus:ring-blue-500 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-primary dark:focus:border-blue-400 text-sm py-1 focus:outline-none transition-colors"
                        type="text"
                        defaultValue="Photoshop"
                      />
                    </div>
                    <div className="flex items-center gap-3 group/option">
                      <input
                        className="text-primary dark:text-blue-500 focus:ring-primary dark:focus:ring-blue-500 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
                        name="q1"
                        type="radio"
                      />
                      <input
                        className="flex-1 bg-transparent border-b border-transparent group-hover/option:border-slate-200 dark:group-hover/option:border-slate-700 focus:border-primary dark:focus:border-blue-400 text-sm py-1 focus:outline-none transition-colors"
                        type="text"
                        defaultValue="Figma"
                      />
                    </div>
                    <button className="text-xs text-primary dark:text-blue-400 font-bold mt-2 flex items-center gap-1 hover:underline">
                      <span className="material-symbols-outlined text-xs">
                        add
                      </span>{" "}
                      Seçenek Ekle
                    </button>
                  </div>
                </div>

                {/* Written Question Example */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-80 group relative overflow-hidden transition-opacity hover:opacity-100">
                  <div className="absolute top-0 left-0 w-1 h-full bg-slate-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary/10 dark:bg-primary-dark/30 text-primary dark:text-blue-400 font-bold px-2 py-1 rounded text-xs">
                        2. Soru
                      </span>
                      <span className="text-xs font-medium text-slate-400 uppercase">
                        Yazılı Cevap
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <button className="text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors">
                        <span className="material-symbols-outlined">
                          content_copy
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">
                          delete
                        </span>
                      </button>
                      <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-move">
                        <span className="material-symbols-outlined">
                          drag_indicator
                        </span>
                      </button>
                    </div>
                  </div>
                  <textarea
                    defaultValue="LMS sistemlerinin eğitimdeki avantajlarını açıklayınız."
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-transparent dark:border-slate-700/50 rounded-lg p-4 text-sm mb-4 resize-none focus:ring-1 focus:ring-primary focus:border-primary dark:focus:ring-blue-400 dark:focus:border-blue-400 transition-shadow"
                    rows={2}
                  />
                  <div className="h-24 bg-slate-100 dark:bg-slate-800/30 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center">
                    <span className="text-xs text-slate-400 italic">
                      Öğrenci yanıt alanı (Zengin metin editörü)
                    </span>
                  </div>
                </div>

                {/* Floating Action Button */}
                <div className="flex justify-center pt-4">
                  <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform hover:shadow-xl">
                    <span className="material-symbols-outlined">
                      add_circle
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
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary dark:text-blue-400">
                settings
              </span>
              Sınav Detayları
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Başlık
                </label>
                <input
                  className="w-full text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 p-2 text-slate-800 dark:text-slate-200"
                  type="text"
                  defaultValue="Web Geliştirme Temelleri Vize"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase block mb-1">
                  Kategori
                </label>
                <select className="w-full text-sm bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-blue-400 p-2 text-slate-800 dark:text-slate-200 cursor-pointer">
                  <option>Yazılım Geliştirme</option>
                  <option>Tasarım</option>
                  <option>İşletme</option>
                </select>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Zaman Sınırı</span>
                  <span className="bg-primary/10 dark:bg-primary-dark/30 text-primary dark:text-blue-400 text-xs font-bold px-2 py-1 rounded">
                    45 dk
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Geçme Notu</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-1 rounded">
                    70 / 100
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary dark:bg-slate-800 text-white p-6 rounded-xl shadow-md relative overflow-hidden group border border-transparent dark:border-slate-700">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-8xl">visibility</span>
            </div>
            <div className="relative z-10">
              <h4 className="font-bold mb-2">Önizleme Modu</h4>
              <p className="text-xs text-white/70 dark:text-slate-400 mb-4">
                Sınavın öğrenci gözünden nasıl göründüğünü kontrol edin.
              </p>
              <button className="w-full py-2 bg-white/10 dark:bg-slate-700 hover:bg-white/20 dark:hover:bg-slate-600 rounded-lg text-sm font-bold transition-colors">
                Önizlemeyi Başlat
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
