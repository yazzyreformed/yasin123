"use client";

import React from "react";
import Link from "next/link";

export default function CertificatesPage() {
  return (
    <>
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <nav
            aria-label="Breadcrumb"
            className="flex text-xs font-bold text-slate-400 uppercase tracking-widest"
          >
            <ol className="flex items-center space-x-2">
              <li>
                <Link
                  className="hover:text-primary transition-colors"
                  href="/dashboard"
                >
                  LMS
                </Link>
              </li>
              <li>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
                </svg>
              </li>
              <li className="text-primary dark:text-blue-400">Sertifikalarım</li>
            </ol>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            TR
          </span>
        </div>
      </header>

      <div className="flex-1 flex flex-col p-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary dark:text-blue-400 tracking-tight">
              Sertifikalarım
            </h1>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Tamamladığınız eğitimler sonucu kazandığınız resmi belgeler.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-blue-400 transition-all">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              Tümünü İndir (ZIP)
            </button>
          </div>
        </div>

        {/* StatsGrid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Certificates */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Toplam Sertifika
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-blue-400 mt-1">
                12
              </h3>
            </div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          {/* Verified Badges */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Doğrulanmış
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-blue-400 mt-1">
                8
              </h3>
            </div>
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                ></path>
              </svg>
            </div>
          </div>
          {/* Progress */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Başarı Puanı
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-blue-400 mt-1">
                94/100
              </h3>
            </div>
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/30 text-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* CertificationGallery */}
        <section>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-lg font-bold text-primary dark:text-blue-400">
              Dijital Sertifikalar
            </h2>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-sm font-medium text-slate-500 flex-shrink-0">
                Filtrele:
              </span>
              <select className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg py-1.5 px-3 focus:ring-primary focus:border-primary font-medium text-slate-700 dark:text-slate-300 w-full sm:w-auto">
                <option>Tüm Kategoriler</option>
                <option>Yazılım</option>
                <option>Yönetim</option>
              </select>
            </div>
          </div>

          {/* Certification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Certificate Card 1 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAKTDnyxAP733ZJHDeNa16QUtXixeVESwrTK-oW66rgDyZIeUF1YjYJy7n7HHpAfdtXDKMMPuRzdiPQOENWG8wbaAaPjBfM0XRhPwfZxZO8s3O7Tb_nI3Ov6tDFCUkK8o0P7-KiWODVcoCSrcmEoeDHjd0t3tbYh_8rcPQdg5uua7PWjUvOwAjb6yGPiex62aeJ_m8218wNEAC52LtleQVW-Eu_PB4sq9sna0Zb7HNjlLQZodfFuchLjAl9bMy3qUSDEPxe2BmrQoMo')",
                  }}
                ></div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/60 dark:bg-primary-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
                {/* Verified Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-green-500 text-white shadow-sm uppercase">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    DOĞRULANMIŞ
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-primary dark:text-blue-300 mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    İleri Seviye Web Geliştirme
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Baynal Group Academy • Temmuz 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <div
                    className="flex items-center gap-2 px-2 py-1 rounded-md text-[10px] text-white font-bold cursor-help bg-gradient-to-br from-red-600 to-red-800"
                    title="e-Devlet üzerinden doğrulanabilir belge."
                  >
                    <span className="bg-white text-red-600 px-1 rounded-sm">
                      e-Devlet
                    </span>
                    <span>İle Doğrula</span>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Card 2 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAau84xnKy8HIrXRBMBgy6CmArYyOPhHBKuDnBJSKYtU4hbjGChAHRRkCe_HqcdqhqTH9KaSpUx7gDKGFOhaT3X9kvnaZtRJ5WFcuky5KAFYXPGipIBwf3KwobjrO6_3y79B2baQ8c4GCUuFmfyUwgwCkO1YD5OtRQbcYrkj6zTEHJT52LzMBvl6oBGTAIztH5UxstkQdFKRQJr1yWNdKYwFL7YjeheBsZ-4BPwpEPoYRWYBpk1hAVnM8DbxGNdTyKtJkRpJTr0XWs-')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-primary/60 dark:bg-primary-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-green-500 text-white shadow-sm uppercase">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    DOĞRULANMIŞ
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-primary dark:text-blue-300 mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Dijital Pazarlama Stratejileri
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Baynal Group Academy • Haziran 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <div
                    className="flex items-center gap-2 px-2 py-1 rounded-md text-[10px] text-white font-bold cursor-help bg-gradient-to-br from-red-600 to-red-800"
                    title="e-Devlet üzerinden doğrulanabilir belge."
                  >
                    <span className="bg-white text-red-600 px-1 rounded-sm">
                      e-Devlet
                    </span>
                    <span>İle Doğrula</span>
                  </div>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Certificate Card 3 */}
            <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
              <div className="relative aspect-[4/3] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGup4DO0Zw8A9Og7lttnFJUFsE_QZb847ljwPG9AyTIyYZSqdcSKJZrJ47uLEdCLb2TQr68L0k0AmHX0tUbwB1f6tkF0-0WcJqvFdmPz4ZhibcKnqb5X_ack3K6xcCAROLnz3QIWvHuU7P9hexUtBCa5ImY7M-Z9xvofrhtaYsLICA2YhcvCWrgVMy0LLXrjNp0AaaGdHstCQb67p3Pr5fPvSl5WLMHEsaoRNhPPwaFk8GfKVi-VlsrAqUv4J_AIOTy3PHNFuNQrW9')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-primary/60 dark:bg-primary-dark/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                  <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm shadow-lg transform hover:scale-105 transition-transform">
                    Görüntüle
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-primary dark:text-blue-300 mb-1 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Yapay Zeka Temelleri
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                    Baynal Group Academy • Mayıs 2023
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    DOĞRULAMA BEKLİYOR
                  </span>
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 -mx-8 px-8 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 grayscale opacity-80">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-lg">
                BG
              </div>
              <span className="font-bold text-lg tracking-tight text-primary uppercase">
                Baynal Group
              </span>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              © 2023 Baynal Group LMS. Tüm hakları saklıdır.
            </div>
            <div className="flex gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
              <Link className="hover:text-primary transform transition-colors" href="#">
                Gizlilik Politikası
              </Link>
              <Link className="hover:text-primary transform transition-colors" href="#">
                Kullanım Şartları
              </Link>
              <Link className="hover:text-primary transform transition-colors" href="#">
                Destek
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
