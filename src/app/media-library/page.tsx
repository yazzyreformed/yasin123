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
              className="w-full pl-12 pr-4 py-2.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 text-sm transition-all"
              placeholder="Medya kütüphanesinde ara..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="size-11 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-primary transition-colors border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="bg-primary hover:bg-primary-dark text-white h-11 px-6 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined text-xl">
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
            <button className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-md shadow-primary/20">
              Tümü
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                video_library
              </span>{" "}
              Videolar
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                description
              </span>{" "}
              Belgeler
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">image</span>{" "}
              Görseller
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-primary hover:text-primary transition-all">
              Yayınlanmış
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold hover:border-primary hover:text-primary transition-all">
              Taslak
            </button>
          </div>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Video Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video relative bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCqVWZDcvIG997qS4kCXOsE2DEOXUgOWM1Xfmyje7nFztE0skSBCWhrF0jG1dah95J-QHvSpnG_CcnlUpXQKzdaEN49DpUyNSToJo28B_2lfdTg7Pdd1MBOamoQe0JfNXMFQJh8Shkv82bDhjuT2EqSaC72ZZexmaPvKxbjT3qOcln8H_in6GyEZIH1YpTPdjuutrjBNGPjb3h4DaYQcowfb5wqI-qpNz7OXuu54uDq5U-2WU5MJYBAsG5x76B6-U5o43JbG78zHii4')",
                  }}
                ></div>
                <div className="absolute top-3 right-3 flex gap-1">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    Yayınlandı
                  </span>
                </div>
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <button className="size-14 rounded-full bg-white text-primary shadow-xl flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined text-4xl">
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
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                      Kurumsal İletişim Temelleri
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        videocam
                      </span>{" "}
                      Video • 24.5 MB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    12 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        visibility
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video relative bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/20 text-7xl group-hover:scale-110 transition-transform duration-500">
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
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                      2024 Satış Stratejileri Kitapçığı
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        article
                      </span>{" "}
                      PDF • 1.2 MB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    10 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        share
                      </span>
                    </button>
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        download
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Card */}
            <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-video relative bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDq5oPl90sbZjLJObqss4S6ubUaC_cxE2A6IHSUaoz-50HdLE3HbjwNbAwvmzwchpZ9h3DvOUXtQ-V0OIJWF8vvmiiYXgy8EiYR2NAxs7EL3bsHgbVVxRAYa91-w6W32OX35uzs7cmr_wQE3C857ZIUBL6s8xYYbNfxYBxHvIrxt9mE3gEm9eEybREXoDBmyQiW9F-FP2Nfe1nvb-GMVWLVLhtPJ3YIpxcx6UeZK3KcIGEuMaCxNhGi7RwKEK4Ju9YfKXCEWPTE5hmg')",
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
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-primary transition-colors">
                      Merkez Ofis Tanıtım Görseli
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="material-symbols-outlined text-sm">
                        image
                      </span>{" "}
                      Görsel • 850 KB
                    </p>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <div className="mt-5 pt-4 border-t border-slate-50 dark:border-slate-800 flex items-center justify-between">
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
                    08 May 2024
                  </p>
                  <div className="flex gap-1.5">
                    <button className="size-8 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400 hover:text-primary transition-colors flex items-center justify-center">
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
                  <button className="text-slate-400 hover:text-primary transition-colors">
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
                className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:text-primary transition-all disabled:opacity-30"
                disabled
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="size-11 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/25 active:scale-95 transition-transform">
                1
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:text-primary transition-all font-bold text-sm">
                2
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:text-primary transition-all font-bold text-sm">
                3
              </button>
              <button className="size-11 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-white dark:hover:bg-slate-800 hover:border-primary hover:text-primary transition-all active:scale-95 transition-transform">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
