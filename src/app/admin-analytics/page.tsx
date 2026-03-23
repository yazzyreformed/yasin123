"use client";

import Link from "next/link";
import React from "react";

export default function AdminAnalyticsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 antialiased font-sans flex flex-col">
      {/* MainHeader */}
      <header className="bg-primary text-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link
              href="/dashboard"
              className="w-10 h-10 bg-white rounded flex items-center justify-center font-bold text-xl text-primary hover:bg-slate-100 transition-colors"
            >
              BG
            </Link>
            <div>
              <h1 className="text-xl font-bold tracking-tight">BAYNAL GROUP</h1>
              <p className="text-xs text-blue-200">
                Öğrenme Yönetim Sistemi
              </p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              className="text-sm font-medium hover:text-blue-200 transition-colors"
              href="/dashboard"
            >
              Ana Sayfa
            </Link>
            <Link
              className="text-sm font-medium border-b-2 border-white pb-1"
              href="/admin-analytics"
            >
              Yönetici Paneli
            </Link>
            <Link
              className="text-sm font-medium hover:text-blue-200 transition-colors"
              href="/course-creator"
            >
              Eğitimler
            </Link>
            <div className="flex items-center gap-3 ml-4 border-l border-white/20 pl-4">
              <div className="w-8 h-8 rounded-full bg-slate-500 overflow-hidden ring-1 ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Yönetici Profil"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuS-eA6iNFbrZJv1hUZ43520QQRUL6bne3uW0u93nYUiUC9SuHS4vB70zOzn_ObKdf-jVJg8VMbTprKMslDtGYbbUlXnGEJmXOOC4BAdgj04EIInoh2uUpSxtuNoJeEqnToP4bj8EP2rckvk9O-Ug0GeYOAhfHT6aUDGcJq4QDlBHodb1ghFBhHroCYwE_4ruAv0V_ewuqX4pzcvjXOrPTPhevgPuxQliekt4AACNj9vXvbX-0-eHX2-Jk2CYgJud2RZRrJQl10N9O"
                />
              </div>
              <span className="text-sm font-semibold">M. Baynal</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full p-4 lg:p-8 flex-grow">
        {/* DashboardIntro */}
        <section className="mb-8">
          <h2 className="text-3xl font-extrabold text-primary dark:text-white mb-2">
            Analitikler
          </h2>
          <p className="text-slate-500 dark:text-slate-400 italic">
            Genel öğrenci performansı ve katılım verilerine genel bakış.
          </p>
        </section>

        {/* TopMetrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card: Total Users */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-primary">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Toplam Öğrenci
            </h3>
            <p className="text-2xl font-bold text-primary dark:text-blue-400">
              1,284
            </p>
            <div className="mt-2 text-green-600 dark:text-green-400 text-sm font-medium">
              ↑ %12 geçen ay
            </div>
          </div>
          {/* Card: Completion Rate */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-primary">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Tamamlama Oranları
            </h3>
            <p className="text-2xl font-bold text-primary dark:text-blue-400">
              %78.4
            </p>
            <div className="mt-2 text-green-600 dark:text-green-400 text-sm font-medium">
              ↑ %3.2 hedef üstü
            </div>
          </div>
          {/* Card: Active Courses */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-primary">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Aktif Eğitimler
            </h3>
            <p className="text-2xl font-bold text-primary dark:text-blue-400">
              42
            </p>
            <div className="mt-2 text-slate-400 dark:text-slate-500 text-sm font-medium">
              8 yeni eğitim yayında
            </div>
          </div>
          {/* Card: Average Grade */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 border-l-4 border-l-primary">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Genel Başarı Ort.
            </h3>
            <p className="text-2xl font-bold text-primary dark:text-blue-400">
              84/100
            </p>
            <div className="mt-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
              Kararlı performans
            </div>
          </div>
        </div>

        {/* MainAnalyticsGrid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Student Performance Bar Chart Section */}
          <section className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-primary dark:text-white">
                Öğrenci Performansı (Aylık)
              </h3>
              <select className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:ring-primary focus:border-primary">
                <option>Son 6 Ay</option>
                <option>Son 12 Ay</option>
              </select>
            </div>
            {/* Mock Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 pt-4 px-2 border-b border-l border-slate-100 dark:border-slate-800">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-700 hover:bg-blue-400 transition-colors rounded-t h-[60%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    72
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  Oca
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-700 hover:bg-blue-400 transition-colors rounded-t h-[75%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    81
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  Şub
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-blue-500 dark:bg-blue-600 hover:bg-primary transition-colors rounded-t h-[85%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    89
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  Mar
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-700 hover:bg-blue-400 transition-colors rounded-t h-[70%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    78
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  Nis
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-primary transition-colors rounded-t h-[95%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    96
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  May
                </span>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-[40px] bg-slate-200 dark:bg-slate-700 hover:bg-blue-400 transition-colors rounded-t h-[80%] relative group">
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-primary text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    84
                  </span>
                </div>
                <span className="text-[10px] mt-2 text-slate-400 font-bold uppercase">
                  Haz
                </span>
              </div>
            </div>
          </section>

          {/* Engagement Heatmap Section */}
          <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold text-primary dark:text-white mb-4">
              Erişim Yoğunluğu
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Haftalık aktiflik ısı haritası
            </p>
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
                  <div className="text-[10px] font-bold text-slate-400 self-center">
                    {row.label}
                  </div>
                  {row.cells.map((val, cellIdx) => (
                    <div
                      key={cellIdx}
                      className={`aspect-square rounded transition-transform duration-200 hover:scale-110 hover:z-10 bg-blue-${val} dark:bg-blue-${
                        val > 400 ? val : 900
                      } ${
                        val <= 100 &&
                        "bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50"
                      }`}
                    ></div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center text-[10px] text-slate-400 uppercase font-bold tracking-widest">
              <span>Düşük Katılım</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-blue-300 dark:bg-blue-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-blue-600 dark:bg-blue-600 rounded-sm"></div>
                <div className="w-3 h-3 bg-primary dark:bg-primary-light rounded-sm"></div>
              </div>
              <span>Yüksek Katılım</span>
            </div>
          </section>
        </div>

        {/* StudentListSection */}
        <section className="mt-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-primary dark:text-white">
              Detaylı Öğrenci Performansı
            </h3>
            <div className="flex gap-2">
              <input
                className="text-sm border-slate-200 dark:border-slate-700 dark:bg-slate-800 rounded-lg focus:ring-primary focus:border-primary px-4 py-2"
                placeholder="Öğrenci ara..."
                type="text"
              />
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors">
                Dışa Aktar
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider">
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
                  <td className="px-6 py-4 font-semibold text-primary dark:text-blue-300">
                    Ahmet Yılmaz
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    Siber Güvenlik Temelleri
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary dark:text-blue-400">
                    95
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 rounded-full text-[10px] font-bold uppercase">
                      TAMAMLANDI
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-primary dark:text-blue-300">
                    Ayşe Demir
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    Veri Bilimi ve Yapay Zeka
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary dark:text-blue-400">
                    82
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-full text-[10px] font-bold uppercase">
                      DEVAM EDİYOR
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-primary dark:text-blue-300">
                    Mehmet Kaya
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    Kurumsal İletişim Eğitimi
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-amber-500 h-2 rounded-full"
                        style={{ width: "20%" }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center font-bold text-primary dark:text-blue-400">
                    45
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-full text-[10px] font-bold uppercase">
                      KRİTİK
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/30 text-center border-t border-slate-100 dark:border-slate-800">
            <button className="text-blue-600 dark:text-blue-400 font-bold text-xs hover:underline uppercase tracking-wider">
              Tüm Kayıtları Gör
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-10 bg-slate-900 dark:bg-slate-950 text-slate-400 text-center text-sm border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2023 BAYNAL GROUP LMS - Tüm hakları saklıdır.</p>
          <div className="mt-4 flex justify-center gap-6 text-xs font-medium">
            <Link className="hover:text-white transition-colors" href="#">
              Destek
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Gizlilik Politikası
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Kullanım Koşulları
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
