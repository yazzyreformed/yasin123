import React from "react";

export default function MediaLibraryPage() {
  return (
    <>
      {/* Header */}
      <header className="h-20 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-10">
        <div className="flex items-center gap-4 w-1/2">
          <div className="relative w-full max-w-lg">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              className="w-full pl-12 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900/50 dark:focus:ring-white/20 dark:focus:border-white/50 text-sm transition-all"
              placeholder="Medya kütüphanesinde ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="size-11 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 h-11 px-6 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95">
            <span className="material-symbols-outlined text-[20px]">
              cloud_upload
            </span>
            Yükle
          </button>
        </div>
      </header>

      {/* Page Content */}
      <div className="p-10 pb-20">
        <div className="flex flex-col gap-8">
          {/* Title & Summary */}
          <div className="flex flex-col gap-1.5">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">
              Medya Kütüphanesi
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Tüm eğitim materyalleri, videolar, belgeler ve görseller için
              merkezi depolama alanı.
            </p>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
            <button className="px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold shadow-sm">
              Tümü
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                video_library
              </span>{" "}
              Videolar
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                description
              </span>{" "}
              Belgeler
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">image</span>{" "}
              Görseller
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all">
              Yayınlanmış
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all">
              Taslak
            </button>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Video Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 flex gap-1">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Yayınlandı
                  </span>
                </div>
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button className="size-14 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-[36px]">
                      play_arrow
                    </span>
                  </button>
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 text-white text-[10px] font-bold backdrop-blur-md">
                  12:45
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      Kurumsal İletişim Temelleri
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        videocam
                      </span>{" "}
                      Video • 24.5 MB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    12 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">
                        visibility
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-200 dark:text-slate-700 text-7xl group-hover:scale-110 transition-transform duration-500">
                  picture_as_pdf
                </span>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Taslak
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      2024 Satış Stratejileri Kitapçığı
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        article
                      </span>{" "}
                      PDF • 1.2 MB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    10 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        share
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-video relative bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600')",
                  }}
                ></div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Yayınlandı
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      Merkez Ofis Tanıtım Görseli
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        image
                      </span>{" "}
                      Görsel • 850 KB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    08 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        edit
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-red-500 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Archived Card */}
            <div className="group bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 opacity-80 hover:opacity-100">
              <div className="aspect-video relative bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-6xl group-hover:rotate-12 transition-transform">
                  inventory_2
                </span>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-400 dark:bg-slate-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Arşivlendi
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
                      Eski İSG Yönetmeliği 2023
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        archive
                      </span>{" "}
                      PDF • 3.4 MB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    15 Ara 2023
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-slate-300 hover:text-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        restore
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-slate-300 hover:text-red-500 transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between pt-10 border-t border-slate-200 dark:border-slate-800">
            <p className="text-sm font-medium text-slate-500">
              Toplam 24 öğeden{" "}
              <span className="text-slate-900 dark:text-white font-bold">1-4</span>{" "}
              arası gösteriliyor
            </p>
            <div className="flex gap-2">
              <button
                className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all disabled:opacity-30 disabled:pointer-events-none"
                disabled
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-11 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-sm shadow-sm active:scale-95 transition-transform">
                1
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all font-bold text-sm">
                2
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all font-bold text-sm">
                3
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all active:scale-95">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
