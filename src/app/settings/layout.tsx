"use client";

import Link from "next/link";
import React from "react";
import Sidebar from "../../components/sidebar";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased font-sans">
      {/* Sidebar Navigation */}
      <Sidebar />

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
