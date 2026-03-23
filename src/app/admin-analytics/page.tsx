"use client";

import Link from "next/link";
import React from "react";

export default function AdminAnalyticsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 antialiased font-sans flex flex-col">
      {/* MainHeader */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link
              href="/dashboard"
              className="w-10 h-10 bg-slate-900 dark:bg-white rounded flex items-center justify-center font-bold text-xl text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
            >
              BG
            </Link>
            <div>
              <h1 className="text-xl font-bold tracking-widest uppercase text-slate-900 dark:text-white">BAYNAL GROUP</h1>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Öğrenme Yönetim Sistemi
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors tracking-wide"
              href="/dashboard"
            >
              Ana Sayfa
            </Link>
            <Link
              className="text-sm font-bold text-slate-900 dark:text-white border-b-2 border-slate-900 dark:border-white pb-1 tracking-wide"
              href="/admin-analytics"
            >
              Yönetici Paneli
            </Link>
            <Link
              className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors tracking-wide"
              href="/course-creator"
            >
              Eğitimler
            </Link>
            <div className="flex items-center gap-3 ml-4 border-l border-slate-200 dark:border-slate-700 pl-4">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-slate-100 dark:ring-slate-800 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Yönetici Profil"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuS-eA6iNFbrZJv1hUZ43520QQRUL6bne3uW0u93nYUiUC9SuHS4vB70zOzn_ObKdf-jVJg8VMbTprKMslDtGYbbUlXnGEJmXOOC4BAdgj04EIInoh2uUpSxtuNoJeEqnToP4bj8EP2rckvk9O-Ug0GeYOAhfHT6aUDGcJq4QDlBHodb1ghFBhHroCYwE_4ruAv0V_ewuqX4pzcvjXOrPTPhevgPuxQliekt4AACNj9vXvbX-0-eHX2-Jk2CYgJud2RZRrJQl10N9O"
                />
              </div>
              <span className="text-sm font-bold text-slate-900 dark:text-white">M. Baynal</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full p-4 lg:p-8 flex-grow">
        {/* DashboardIntro */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Analitikler
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide">
            Genel öğrenci performansı ve katılım verilerine genel bakış.
          </p>
        </section>

        {/* TopMetrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card: Total Users */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Toplam Öğrenci
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              1,284
            </p>
            <div className="mt-2 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-widest">
              ↑ %12 geçen ay
            </div>
          </div>
          {/* Card: Completion Rate */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Tamamlama Oranları
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              %78.4
            </p>
            <div className="mt-2 text-green-600 dark:text-green-500 text-xs font-bold uppercase tracking-widest">
              ↑ %3.2 hedef üstü
            </div>
          </div>
          {/* Card: Active Courses */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Aktif Eğitimler
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              42
            </p>
            <div className="mt-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              8 yeni eğitim yayında
            </div>
          </div>
          {/* Card: Average Grade */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1">
              Genel Başarı Ort.
            </h3>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">
              84/100
            </p>
            <div className="mt-2 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
              Kararlı performans
            </div>
          </div>
        </div>

        {/* MainAnalyticsGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Performance Bar Chart Section */}
          <section className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Öğrenci Performansı (Aylık)
              </h3>
              <select className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:ring-slate-900 focus:border-slate-900 font-bold text-slate-700 dark:text-slate-300 shadow-sm transition-all focus:ring-2">
                <option>Son 6 Ay</option>
                <option>Son 12 Ay</option>
              </select>
            </div>
            {/* Mock Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 pt-4 px-2 border-b-2 border-l-2 border-slate-100 dark:border-slate-800">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors rounded-t-sm h-[60%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    72
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  Oca
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors rounded-t-sm h-[75%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    81
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  Şub
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 transition-colors rounded-t-sm h-[85%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    89
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  Mar
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors rounded-t-sm h-[70%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    78
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  Nis
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-900 dark:bg-slate-400 transition-colors rounded-t-sm h-[95%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    96
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  May
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors rounded-t-sm h-[80%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold shadow-sm">
                    84
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase tracking-widest">
                  Haz
                </span>
              </div>
            </div>
          </section>

          {/* Engagement Heatmap Section */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              Erişim Yoğunluğu
            </h3>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">
              Haftalık aktiflik ısı haritası
            </p>
            {/* Using inline styles or safe slate tailwind colors for heatmap to ensure they work without JIT issues */}
            <div className="grid grid-cols-8 gap-1">
              {[
                { label: "Pzt", cells: [50, 100, 300, 500, 200, 400, 600] },
                { label: "Sal", cells: [200, 400, 600, 800, 500, 300, 400] },
                { label: "Çar", cells: [100, 200, 400, 700, 600, 300, 100] },
                { label: "Per", cells: [300, 500, 800, 900, 700, 500, 400] },
                { label: "Cum", cells: [200, 400, 600, 700, 500, 300, 200] },
                { label: "Cmt", cells: [50, 50, 100, 200, 100, 50, 50] },
                { label: "Paz", cells: [50, 50, 50, 100, 50, 50, 50] },
              ].map((row, i) => (
                <React.Fragment key={i}>
                  <div className="text-[10px] font-bold text-slate-400 self-center tracking-wide">
                    {row.label}
                  </div>
                  {row.cells.map((val, cellIdx) => {
                    // map visual values to slate tailwind classes commonly available
                    let bgColorClass = "bg-slate-100 dark:bg-slate-800";
                    if (val > 100 && val <= 300) bgColorClass = "bg-slate-300 dark:bg-slate-700";
                    if (val > 300 && val <= 500) bgColorClass = "bg-slate-500 dark:bg-slate-500";
                    if (val > 500 && val <= 700) bgColorClass = "bg-slate-700 dark:bg-slate-300";
                    if (val > 700) bgColorClass = "bg-slate-900 dark:bg-slate-100";
                    
                    return (
                      <div
                        key={cellIdx}
                        className={`aspect-square rounded-sm transition-transform duration-200 hover:scale-110 hover:z-10 ${bgColorClass}`}
                      ></div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center text-[10px] text-slate-400 uppercase font-bold tracking-widest">
              <span>Düşük</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-slate-100 dark:bg-slate-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-500 dark:bg-slate-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-700 dark:bg-slate-300 rounded-sm"></div>
                <div className="w-3 h-3 bg-slate-900 dark:bg-slate-100 rounded-sm"></div>
              </div>
              <span>Yüksek</span>
            </div>
          </section>
        </div>

        {/* StudentListSection */}
        <section className="mt-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Detaylı Öğrenci Performansı
            </h3>
            <div className="flex gap-2">
              <input
                className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:ring-slate-900 focus:border-slate-900 px-4 py-2 font-medium"
                placeholder="Öğrenci ara..."
                type="text"
              />
              <button className="bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900 px-6 py-2 rounded-lg text-sm font-bold transition-colors shadow-sm tracking-wide">
                Dışa Aktar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-6 py-4">Öğrenci Adı</th>
                  <th className="px-6 py-4">Eğitim</th>
                  <th className="px-6 py-4 text-center">İlerleme</th>
                  <th className="px-6 py-4 text-center">Puan</th>
                  <th className="px-6 py-4 text-center">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                    Ahmet Yılmaz
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">
                    Siber Güvenlik Temelleri
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-slate-900 dark:bg-slate-300 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">
                    95
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      TAMAMLANDI
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                    Ayşe Demir
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">
                    Veri Bilimi ve Yapay Zeka
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-slate-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">
                    82
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-slate-300 border border-blue-200 dark:border-slate-700 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      DEVAM EDİYOR
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-900 dark:text-white">
                    Mehmet Kaya
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-600 dark:text-slate-300">
                    Kurumsal İletişim Eğitimi
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-slate-300 dark:bg-slate-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-slate-900 dark:text-white">
                    45
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      KRİTİK
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/30 text-center border-t border-slate-200 dark:border-slate-800">
            <button className="text-slate-900 dark:text-white font-bold text-xs hover:underline uppercase tracking-widest transition-all">
              Tüm Kayıtları Gör
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-10 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-center text-sm border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-semibold text-xs tracking-widest uppercase mb-4">
            © 2024 BAYNAL GROUP Eğitim Teknolojileri A.Ş. Tüm hakları saklıdır.
          </p>
          <div className="flex justify-center gap-6 text-xs font-bold uppercase tracking-widest">
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Destek
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Gizlilik Politikası
            </Link>
            <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="#">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
