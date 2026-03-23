"use client";

import Link from "next/link";
import React from "react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col flex-shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-primary font-bold text-xl">
            BG
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">
            BAYNAL GROUP
          </span>
        </div>
        
        <nav className="mt-6 flex-1 px-4 flex flex-col space-y-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium">Panel</span>
          </Link>
          <Link
            href="/my-trainings"
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
          >
            <span className="material-symbols-outlined">library_books</span>
            <span className="font-medium">Eğitimlerim</span>
          </Link>
          <Link
            href="/certificates"
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
          >
            <span className="material-symbols-outlined">workspace_premium</span>
            <span className="font-medium">Sertifikalar</span>
          </Link>

          <Link
            className="flex items-center gap-3 bg-white/10 p-3 rounded-lg transition-colors text-white mt-auto mb-6"
            href="/settings"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium">Ayarlar</span>
          </Link>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profil"
              className="w-10 h-10 rounded-full border border-white/20 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj1BlcKaRzFayE-7133bFM1L1JEZ4nCXBdF_4P7I9djfflKMdxdZuC3npLFDS-R54Ih1G1kwDcttn3S-ocTHB72FXqkTw2_6MlzKN0ObzNI65DaI3b5yYYsV00-culzoCG07iV0IBxCW4QH2WLBCevcOxH0olx1g1Hm8r-xSLEynjFWbtWkpXzopbDvOSZ70HQ28FCOiHhVSVYDR3_TFbhXb2k2bJmcV94u6Hm8sp-gd2dJM3r4cI_FpsKGgug4RT3GCFKsqMHyKC"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Mehmet Yılmaz</p>
              <p className="text-xs text-slate-300 dark:text-slate-400 truncate">
                Kıdemli Uzman
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative custom-scrollbar">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
          <h1 className="text-xl font-bold text-primary dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400">tune</span>
            Hesap Ayarları
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              TR
            </span>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
