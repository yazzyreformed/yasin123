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
          <nav className="flex items-center gap-2 text-[10px] text-slate-500 mb-6 font-bold uppercase tracking-widest">
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="/dashboard">
              Yönetim Paneli
            </Link>
            <span className="material-symbols-outlined text-[12px]">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
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
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 rounded-2xl p-8 lg:p-12 flex flex-col items-center justify-center transition-all bg-slate-50/50 dark:bg-slate-800/50 mb-8 group cursor-pointer">
                  <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-md transition-all border border-slate-100 dark:border-slate-700 shadow-sm">
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 text-[32px]">
                      cloud_upload
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 text-center">
                    Dosyayı buraya bırakın
                  </h3>
                  <p className="text-slate-500 font-medium text-xs text-center mb-8">
                    Veya bilgisayarınızdan manuel olarak seçin
                    <br />
                    MP4, MOV, AVI (Maks 2GB)
                  </p>
                  <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 px-10 py-3 rounded-xl font-bold text-sm transition-all shadow-sm">
                    Dosya Seçin
                  </button>
                </div>

                {/* Active Upload Progress */}
                <div className="space-y-4 p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-2">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-10 h-10 bg-slate-900 dark:bg-slate-100 shrink-0 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-white dark:text-slate-900 text-[20px] animate-spin-slow">
                          sync
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          Ders_04_Ileri_Teknikler.mp4
                        </p>
                        <p className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                          1.2 GB / 1.6 GB • 3.2 MB/s
                        </p>
                      </div>
                    </div>
                    <span className="text-slate-900 dark:text-white font-black text-lg self-end sm:self-auto px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                      75%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                    <div
                      className="bg-slate-900 dark:bg-slate-400 h-full rounded-full transition-all duration-500"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Meta Information */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-8 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-black mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                    info
                  </span>
                  Video Detayları
                </h2>
                <div className="grid gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Başlık
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-white dark:focus:border-white transition-all text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700 font-medium text-sm"
                      placeholder="Örn: İleri Seviye Grafik Tasarım"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Açıklama
                    </label>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-800/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-white dark:focus:border-white transition-all text-slate-900 dark:text-white placeholder-slate-400 border border-slate-200 dark:border-slate-700 resize-y font-medium text-sm"
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
                    <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
                      format_list_bulleted
                    </span>
                    Bölümler
                  </h2>
                  <button
                    onClick={addChapter}
                    className="text-slate-900 dark:text-white text-[10px] font-bold flex items-center gap-1.5 uppercase hover:bg-slate-100 dark:hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors shadow-sm"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      add
                    </span>
                    Bölüm Ekle
                  </button>
                </div>
                <div className="space-y-3">
                  {chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="flex gap-2 sm:gap-4 items-center p-3 sm:p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 group hover:border-slate-400 dark:hover:border-slate-500 transition-colors shadow-sm hover:shadow-md"
                    >
                      <input
                        className="w-16 sm:w-20 text-[11px] uppercase tracking-widest font-bold bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 outline-none px-2 sm:px-3 py-1.5 rounded-lg shadow-sm border-none focus:outline-none focus:ring-1 focus:ring-slate-400 text-center"
                        value={chapter.time}
                        onChange={(e) =>
                          updateChapter(chapter.id, "time", e.target.value)
                        }
                      />
                      <input
                        className="flex-1 min-w-0 bg-transparent border-none p-0 text-sm font-medium focus:ring-0 text-slate-900 dark:text-white placeholder-slate-400 outline-none"
                        type="text"
                        placeholder="Bölüm başlığı"
                        value={chapter.title}
                        onChange={(e) =>
                          updateChapter(chapter.id, "title", e.target.value)
                        }
                      />
                      <button
                        onClick={() => removeChapter(chapter.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors shrink-0 p-1 cursor-pointer"
                        title="Sil"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full xl:w-80 flex flex-col gap-6 shrink-0">
              {/* Status Panel */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-black mb-6 text-slate-900 dark:text-white flex items-center gap-2 border-b-2 border-slate-900 dark:border-white pb-1 inline-flex">
                  <span className="material-symbols-outlined text-slate-500 text-[18px]">
                    settings_input_component
                  </span>
                  İşleme Durumu
                </h2>
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        SD (480p)
                      </span>
                    </div>
                    <span className="text-[10px] bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 px-2 py-0.5 rounded-full font-black border border-emerald-200 dark:border-emerald-800 uppercase tracking-widest">
                      TAMAMLANDI
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-slate-900 dark:bg-white animate-ping rounded-full relative">
                        <span className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full w-2.5 h-2.5 animate-none"></span>
                      </span>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        HD (1080p)
                      </span>
                    </div>
                    <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-2 py-0.5 rounded-full font-black border border-slate-200 dark:border-slate-700 uppercase tracking-widest shadow-sm">
                      İŞLENİYOR
                    </span>
                  </div>
                  <div className="flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                      <span className="text-sm font-bold text-slate-500">
                        4K Ultra HD
                      </span>
                    </div>
                    <span className="text-[10px] bg-slate-50 dark:bg-slate-800 text-slate-500 px-2 py-0.5 rounded-full font-black border border-slate-200 dark:border-slate-700 uppercase tracking-widest">
                      BEKLİYOR
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
                <h2 className="text-lg font-black mb-4 text-slate-900 dark:text-white flex items-center gap-2 border-b-2 border-slate-900 dark:border-white pb-1 inline-flex">
                  <span className="material-symbols-outlined text-slate-500 text-[18px]">
                    image
                  </span>
                  Kapak Görseli
                </h2>
                <div className="grid grid-cols-2 gap-3 mb-4 mt-2">
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-slate-900 dark:border-white cursor-pointer relative ring-4 ring-slate-900/10 dark:ring-white/10 transition-shadow">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 1"
                      className="w-full h-full object-cover"
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-[28px]">
                        check_circle
                      </span>
                    </div>
                  </div>
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-transparent hover:border-slate-400 dark:hover:border-slate-500 cursor-pointer transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 2"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300"
                    />
                  </div>
                  <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border-2 border-transparent hover:border-slate-400 dark:hover:border-slate-500 cursor-pointer transition-all">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="Önizleme 3"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300"
                    />
                  </div>
                  <button className="aspect-video border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-slate-900 dark:hover:border-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-slate-400 hover:text-slate-900 dark:hover:text-white bg-transparent">
                    <span className="material-symbols-outlined text-[24px]">
                      add_photo_alternate
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      YÜKLE
                    </span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button className="w-full bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-black transition-all shadow-sm flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Kaydet ve Yayınla
                </button>
                <button className="w-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm">
                  Taslak Olarak Sakla
                </button>
                <button className="w-full text-red-500 font-bold text-sm py-3 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-all">
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
