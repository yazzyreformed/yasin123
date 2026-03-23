"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function MyTrainingsPage() {
  const [activeTab, setActiveTab] = useState<"devam-edenler" | "tamamlananlar">(
    "devam-edenler"
  );

  return (
    <>
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10">
        <h1 className="text-xl font-bold text-primary dark:text-white">Eğitimlerim</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-primary transition-colors">
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
          </button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            TR
          </span>
        </div>
      </header>

      {/* Dashboard Body */}
      <div className="flex-1 flex flex-col p-8">
        {/* DashboardTabs */}
        <div className="border-b border-slate-200 dark:border-slate-800 mb-8">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-slate-500 dark:text-slate-400">
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("devam-edenler")}
                className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group transition-colors ${
                  activeTab === "devam-edenler"
                    ? "text-primary dark:text-blue-400 border-primary dark:border-blue-400 active"
                    : "border-transparent hover:text-primary dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-2 ${
                    activeTab === "devam-edenler"
                      ? "text-primary dark:text-blue-400"
                      : "text-slate-400 group-hover:text-primary dark:group-hover:text-blue-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Devam Edenler
              </button>
            </li>
            <li className="mr-2">
              <button
                onClick={() => setActiveTab("tamamlananlar")}
                className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group transition-colors ${
                  activeTab === "tamamlananlar"
                    ? "text-primary dark:text-blue-400 border-primary dark:border-blue-400 active"
                    : "border-transparent hover:text-primary dark:hover:text-blue-400 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <svg
                  className={`w-4 h-4 mr-2 ${
                    activeTab === "tamamlananlar"
                      ? "text-primary dark:text-blue-400"
                      : "text-slate-400 group-hover:text-primary dark:group-hover:text-blue-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    clipRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                Tamamlananlar
              </button>
            </li>
          </ul>
        </div>

        {/* CourseGrid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Course Card 1 */}
          <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeEkpOeerh40fcr88i5xWP6d6-75PsqY5_elzjS7_PbqR95Le3lJ15FQq2GyXQXU9ZPHKdpbxmJIAMbZmCiws_0baNcTsm0aakW9F6ZT2z4B2r1Qr-S-dwMVNviDrb88t3ZNczwGU5fswWo7zCE0eNo-U2XIlkSztZIm-1pUnhPf68tmTxOz67fQKyxhS_rV7vovovbECMmZ1GStalnATWKOyMl3W1PYhGvaDtb-5mAoZ2Rtf9A8Vk3M056tlRvDk7B57X651HIpo')",
                }}
              ></div>
              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                SCORM
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-tight">
                İş Sağlığı ve Güvenliği Eğitimi (2024)
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                    İlerleme: %65
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 uppercase">
                      PDF
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 uppercase">
                      Video
                    </span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:text-primary dark:hover:text-primary-light transition-colors">
                    Devam Et →
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 2 */}
          <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZpyWSanTAmIVDyXL_kc74041HD8geECTst0fWpTuzppM4U4vjixo-72Ntrwh9T8cphPsZCVgu0fEdt2uB1BkDNYXoNHL2Sa5BzZFMHMSlKe_KQs17bi3DdNST53u-OToGCaSPCbeHQMyrzEUyCg-yWcDQaKLKyJ41NPuRdpvdOIiG1EyGoZS_SntI1KZqDzSOOMizUW2OiU2_btMWB32viyBaMpbnWcpPIQABDtKl_Q4jfRoSre4x6TzKZdt0eybNhiz405os-EZ')",
                }}
              ></div>
              <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                VIDEO
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-tight">
                Dijital Pazarlama Stratejileri ve Analiz
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                    İlerleme: %12
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: "12%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 uppercase">
                      Video
                    </span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:text-primary dark:hover:text-primary-light transition-colors">
                    Devam Et →
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 3 */}
          <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB6UVonV78A6Q91GygFzXMtJl--I-z6t83zQJvMRMrZFgUM1DbFhdbgIr20_2RXnk-4KXWbp2-0o-DxhNSE5PMqlRPjSJKI7ZdQ2XgNNU02seWlsW-GUG3ArQ9nlNSgif6fEu33M_AzaF1I8hNFdMUBrtpQJNRkhrKLnLEAHM5ftRQ4_34Cj6tCM86m21jAMdtdf45eVM4Ybic7yQ9L00xjKcy2rrMFsgLKmVrYuJ3mR21euRmrmirDgwsLHur-6vM5-Isu-AJ90YsB')",
                }}
              ></div>
              <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                PDF
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-tight">
                Modern Liderlik ve Ekip Yönetimi
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                    İlerleme: %0
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                  <div
                    className="bg-slate-300 dark:bg-slate-600 h-2 rounded-full"
                    style={{ width: "2%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 uppercase">
                      PDF
                    </span>
                  </div>
                  <button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold transition-colors shadow-sm">
                    Başlat →
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Course Card 4 */}
          <article className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div className="relative h-44 bg-slate-100 dark:bg-slate-800">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAC3N3i2jPV-LkEzNAhU9Q6tXDSny5vIz5gwU3EYA2InG0tbxSHXYJ7enQdYXRDnllrKxWdTffhBXTiPJQugnzXJ2-NoQbAN8eb6uoeV8mG5dzoLYE1vRyVfRKPS8_tkcr9Nt4tQt6VFTDQRItUZduzK80gCxpWBfX6gSgDe9SMbQpv6YVzUojEw02f1AAFW3v-7DnC_F4lYM7AG5wYxvXWSTJLRxr3fNWiffF1--lnedsqDetGpe9A7Rjccrd3NqJZ4z6qkxcFGa-h')",
                }}
              ></div>
              <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                SCORM
              </span>
            </div>
            <div className="p-5 flex-grow flex flex-col">
              <h3 className="text-lg font-bold text-primary dark:text-white mb-2 leading-tight">
                Veri Bilimi Temelleri ve Python
              </h3>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 italic">
                    İlerleme: %90
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mb-4">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-primary dark:text-blue-300 uppercase">
                      Uygulama
                    </span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 text-sm font-bold hover:text-primary dark:hover:text-primary-light transition-colors">
                    Bitirmek Üzeresin →
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>

        {/* Footer */}
        <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 -mx-8 px-8 bg-slate-50 dark:bg-slate-950">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">
              © 2024 BAYNAL GROUP Learning Management System. Tüm hakları saklıdır.
            </div>
            <div className="flex space-x-6">
              <Link
                className="text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm font-medium"
                href="#"
              >
                Gizlilik Politikası
              </Link>
              <Link
                className="text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm font-medium"
                href="#"
              >
                Kullanım Şartları
              </Link>
              <Link
                className="text-slate-400 hover:text-primary dark:hover:text-primary-light transition-colors text-sm font-medium"
                href="#"
              >
                Destek
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
