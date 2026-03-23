"use client";

import React from "react";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-8 relative z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <nav aria-label="Breadcrumb" className="flex text-xs font-bold text-slate-500 uppercase tracking-widest">
            <ol className="flex items-center space-x-2">
              <li>
                <Link className="hover:text-slate-800 dark:hover:text-white transition-colors" href="/dashboard">
                  LMS
                </Link>
              </li>
              <li>
                <span className="material-symbols-outlined text-[14px] text-slate-400">chevron_right</span>
              </li>
              <li className="text-slate-900 dark:text-white">Sertifikalarım</li>
            </ol>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors relative rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">TR</span>
        </div>
      </header>

      <div className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-slate-500">workspace_premium</span>
              Sertifikalarım
            </h1>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Tamamladığınız eğitimler sonucu kazandığınız resmi belgeler.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-sm font-semibold rounded-lg shadow-sm transition-colors border border-transparent dark:border-slate-200 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
            <span className="material-symbols-outlined text-[18px]">download</span>
            Tümünü İndir (ZIP)
          </button>
        </div>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Certificates */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Toplam Sertifika
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                12
              </h3>
            </div>
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
          </div>
          {/* Verified Badges */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Doğrulanmış
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                8
              </h3>
            </div>
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
          </div>
          {/* Progress */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Başarı Puanı
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                94<span className="text-lg text-slate-400 font-medium">/100</span>
              </h3>
            </div>
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
          </div>
        </section>

        {/* Certification Gallery */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-slate-500">grid_view</span>
              Dijital Sertifikalar
            </h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm font-semibold text-slate-500 flex-shrink-0">
                Filtrele:
              </span>
              <select className="text-sm border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-slate-900/10 font-medium text-slate-700 dark:text-slate-300 w-full sm:w-auto cursor-pointer">
                <option>Tüm Kategoriler</option>
                <option>Yazılım</option>
                <option>Yönetim</option>
              </select>
            </div>
          </div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Certificate Card 1 */}
            <div className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=450')",
                  }}
                ></div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
                {/* Verified Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur text-emerald-700 shadow-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    DOĞRULANMIŞ
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors title-font">
                    İleri Seviye Web Geliştirme
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    Temmuz 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-700 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30"
                    title="e-Devlet üzerinden doğrulanabilir belge."
                  >
                    <span className="material-symbols-outlined text-[14px]">account_balance</span>
                    <span>e-Devlet ile Doğrula</span>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Card 2 */}
            <div className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=450')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur text-emerald-700 shadow-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[12px]">verified</span>
                    DOĞRULANMIŞ
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors title-font">
                    Dijital Pazarlama Stratejileri
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    Haziran 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-red-700 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30"
                    title="e-Devlet üzerinden doğrulanabilir belge."
                  >
                    <span className="material-symbols-outlined text-[14px]">account_balance</span>
                    <span>e-Devlet ile Doğrula</span>
                  </div>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Card 3 */}
            <div className="group bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-900 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=450')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-slate-900 px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors title-font">
                    Yapay Zeka Temelleri
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    Mayıs 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    <span className="material-symbols-outlined text-[14px]">pending</span>
                    DOĞRULAMA BEKLİYOR
                  </span>
                  <button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center w-8 h-8 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700">
                    <span className="material-symbols-outlined text-[20px]">download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div className="flex items-center gap-2 grayscale opacity-80">
            <div className="w-8 h-8 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm shadow-sm">
              BG
            </div>
            <span className="font-bold text-slate-900 dark:text-white tracking-widest uppercase">
              Baynal Group
            </span>
          </div>
          <div className="text-slate-500 dark:text-slate-400 font-medium">
            © 2024 Baynal Group LMS. Tüm hakları saklıdır.
          </div>
          <div className="flex gap-6 font-semibold text-slate-500 dark:text-slate-400">
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Gizlilik Politikası
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Kullanım Şartları
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Destek
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
