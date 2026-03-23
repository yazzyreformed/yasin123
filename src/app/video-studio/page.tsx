"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function VideoStudioPage() {
  const [chapters, setChapters] = useState([
    { id: 1, time: "00:00", title: "Giriş ve Kurs Tanıtımı" },
    { id: 2, time: "12:45", title: "Temel Kavramlar ve Teori" },
  ]);

  const removeChapter = (id: number) => {
    setChapters(chapters.filter((ch) => ch.id !== id));
  };

  const addChapter = () => {
    setChapters([...chapters, { id: Date.now(), time: "00:00", title: "" }]);
  };

  const updateChapter = (id: number, field: "time" | "title", value: string) => {
    setChapters(
      chapters.map((ch) => (ch.id === id ? { ...ch, [field]: value } : ch))
    );
  };

  return (
    <>
      <main className="p-6 lg:p-10 pb-32">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-semibold uppercase tracking-wider">
            <Link className="hover:text-primary transition-colors" href="/dashboard">
              Yönetim Paneli
            </Link>
            <span className="material-symbols-outlined text-[10px]">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-slate-100">
              Video Stüdyosu
            </span>
          </nav>

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left Column: Content Management */}
            <div className="flex-1 space-y-6 min-w-0">
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight">
                  Gelişmiş Video Yükleme
                </h1>
                <p className="text-slate-500 mb-8">
                  Video içeriğinizi yükleyin, otomatik olarak optimize
                  edilmesini sağlayın.
                </p>

                {/* Upload Zone */}
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-center transition-all bg-slate-50/50 dark:bg-slate-800/50 mb-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-primary dark:text-blue-400 text-4xl">
                      cloud_upload
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 text-center">
                    Dosyayı buraya bırakın
                  </h3>
                  <p className="text-slate-400 text-sm text-center mb-8">
                    Veya bilgisayarınızdan manuel olarak seçin
                    <br />
                    MP4, MOV, AVI (Maks 2GB)
                  </p>
                  <button className="bg-primary hover:bg-primary-dark text-white px-10 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-primary/20">
                    Dosya Seçin
                  </button>
                </div>

                {/* Active Upload Progress */}
                <div className="space-y-4 p-5 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                  <div className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-2">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 bg-primary shrink-0 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl animate-spin-slow">
                          sync
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          Ders_04_Ileri_Teknikler.mp4
                        </p>
                        <p className="text-xs text-slate-500">
                          1.2 GB / 1.6 GB • 3.2 MB/s
                        </p>
                      </div>
                    </div>
                    <span className="text-primary dark:text-blue-400 font-black text-lg self-end sm:self-auto">
                      75%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-primary dark:bg-blue-500 h-full rounded-full shadow-[0_0_12px_rgba(30,58,138,0.4)]"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    info
                  </span>
                  Video Detayları
                </h2>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                      Başlık
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700"
                      placeholder="Örn: İleri Seviye Grafik Tasarım"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                      Açıklama
                    </label>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-800 border-transparent rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700 resize-y"
                      placeholder="Ders içeriği hakkında kısa bir bilgi verin..."
                      rows={4}
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Chapters */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-black flex items-center gap-3 text-slate-900 dark:text-white">
                    <span className="material-symbols-outlined text-primary dark:text-blue-400 p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      format_list_bulleted
                    </span>
                    Bölümler
                  </h2>
                  <button
                    onClick={addChapter}
                    className="text-primary dark:text-blue-400 text-xs font-black flex items-center gap-1.5 uppercase hover:opacity-80 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-sm">
                      add_circle
                    </span>
                    Bölüm Ekle
                  </button>
                </div>
                <div className="space-y-3">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="flex gap-2 sm:gap-4 items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 group hover:border-primary/30 dark:hover:border-primary transition-colors"
                    >
                      <input
                        className="w-16 sm:w-20 text-xs font-bold bg-primary dark:bg-blue-600 outline-none text-white px-2 sm:px-3 py-1.5 rounded-lg shadow-sm border-none focus:ring-2 focus:ring-orange-500 text-center"
                        value={chapter.time}
                        onChange={(e) =>
                          updateChapter(chapter.id, "time", e.target.value)
                        }
                      />
                      <input
                        className="flex-1 min-w-0 bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400"
                        type="text"
                        placeholder="Bölüm başlığı"
                        value={chapter.title}
                        onChange={(e) =>
                          updateChapter(chapter.id, "title", e.target.value)
                        }
                      />
                      <button
                        onClick={() => removeChapter(chapter.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors shrink-0 p-1"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-xl">
                          delete
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Settings & Actions */}
            <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
              {/* Status Panel */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-black mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 text-xl">
                    settings_input_component
                  </span>
                  İşleme Durumu
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        SD (480p)
                      </span>
                    </div>
                    <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full font-black border border-green-200 dark:border-green-800">
                      TAMAMLANDI
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-primary dark:bg-blue-400 animate-ping rounded-full relative">
                        <span className="absolute inset-0 bg-primary dark:bg-blue-400 rounded-full w-2.5 h-2.5 animate-none"></span>
                      </span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        HD (1080p)
                      </span>
                    </div>
                    <span className="text-[10px] bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-0.5 rounded-full font-black border border-blue-100 dark:border-blue-800">
                      İŞLENİYOR
                    </span>
                  </div>
                  <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                      <span className="text-sm font-bold text-slate-400">
                        4K Ultra HD
                      </span>
                    </div>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full font-black border border-slate-200 dark:border-slate-700">
                      BEKLİYOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-black mb-4 text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary dark:text-blue-400 text-xl">
                    image
                  </span>
                  Kapak Görseli
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-primary cursor-pointer relative ring-4 ring-primary/10 dark:ring-primary/20 transition-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 1"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw736WQwG7i20uMd9h7QIGNWLP3CMKawc7RYWJs29sTYndTt2wZVz0FAspjZNar93_RGVlnZDVI-F1XN4gOkiOoczY7y8Ru6Ndr66SGbUc_Vq3yrjA6GEtxZpnB-qsxcoNk6ky_8EItS26NJu7e7w4ga3CRrMJXvYhXI8UKiniXqzOipFjJq2A6LhSwkhiz-muM5GKjI2k1OvwuJUGaKCTnJBvgOsn1LsuaiL4nJ-bPEIzaw6Px99bbBrnZesPVZ9Iq1lGczrAgmpc"
                    />
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">
                        check_circle
                      </span>
                    </div>
                  </div>
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-transparent hover:border-primary/40 dark:hover:border-blue-500/40 cursor-pointer transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 2"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfo5qdk0FmqlH3HieOLOW6fuF8vV4bFIemKcMZeSgJaAYNKsveDvxqhUlwYx8AIFtD-FD5A7AIaxEfWT9zuQy9Mic-oC5VK3P_nLC6SXHhehWM5KfIs6-at2I5aPdj0MgPD2NDrbT6t5n_WIIBWaqERn5X9iL1975Pn0WgKh2UgtgbVPS9GhjfSNogU3qAFtRa4RJ6ofdXSI0oOba5yQiiY43JhXAHjmBtxN5BCIiYscvxeeHuYonqZFhc_gPbgQqJ4rfG9m09eAFd"
                    />
                  </div>
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-transparent hover:border-primary/40 dark:hover:border-blue-500/40 cursor-pointer transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 3"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG6BkXsfQeXqyjr1aJUf9l89lVA2RxiJWQk9hqMYfKRh4tOMhD22eau5-WG1s-cFhmZLIbsb7vWqU8yBgqCMbpc2wK9hGOTh3m8NpEV-iygdZoEAdIz773N3Pn6fLE9orsKrJP0IRGxXFzw7SzI7sPNdurPAgcNPViu48-DMRv69qO4oWC0VcK4bEFCkc4MY2p6ETfqSvxDLi_appryjgNaaBJDPjkabds4GS_tsipEvuTd1KtwdptHGVFO1m0V577H5WlU9kh80As"
                    />
                  </div>
                  <button className="aspect-video border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all text-slate-400 hover:text-primary dark:hover:text-blue-400 bg-transparent">
                    <span className="material-symbols-outlined">
                      add_photo_alternate
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider">
                      YÜKLE
                    </span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-2xl font-black transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">check_circle</span>
                  Kaydet ve Yayınla
                </button>
                <button className="w-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                  Taslak Olarak Sakla
                </button>
                <button className="w-full text-red-500 font-bold text-sm py-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-2xl transition-all">
                  İşlemi İptal Et
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-slate-400 text-[10px] font-bold uppercase tracking-widest text-center shrink-0">
        <p>© 2024 BAYNAL GROUP EĞİTİM TEKNOLOJİLERİ. TÜM HAKLARI SAKLIDIR.</p>
      </footer>
    </>
  );
}
