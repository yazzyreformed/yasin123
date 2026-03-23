"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RoleManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 w-72 flex flex-col bg-slate-900 text-white z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 flex items-center justify-between lg:justify-start gap-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-blue-600 text-3xl">
              school
            </span>
            <h2 className="text-white text-lg font-bold tracking-tight">
              BAYNAL GROUP LMS
            </h2>
          </div>
          <button
            className="lg:hidden text-slate-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-medium">Panel</span>
          </Link>
          <Link
            href="/course-creator"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">library_books</span>
            <span className="font-medium">Eğitimler</span>
          </Link>
          <Link
            href="/role-management"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="font-medium">Kullanıcılar</span>
          </Link>
          <Link
            href="/admin-analytics"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-medium">Raporlar</span>
          </Link>

          <div className="pt-4 pb-2 px-4">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Sistem
            </p>
          </div>
          <Link
            href="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-medium">Ayarlar</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <span className="material-symbols-outlined">security</span>
            <span className="font-medium">Güvenlik</span>
          </Link>
        </nav>

        <div className="p-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full bg-slate-700 flex-shrink-0"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkp6ZakFcXq5KTTTaN-vgnx6cS1vBWrFnL2zo_pCp5tgoY6HcgDW_rIvyRNV9mqn4cW6VjXK1UCzxhSHiFQG400IL234SWnGeceQh93O_7fVvbdTEFtxss5PAB1Oj9I-0p_bK1UW5hrppeTeO7ZlLQQw3PfP8nJ8imGZcvGey47deN78ubHT7bCKDt5Zd_YAVR45Fr8TR4nQL1Tj33P7FWz5OM9RV_0R0StJS4MtCM5DCV8bp3L_weT7wkRxaS4RUGV2UMG-aBezjb")',
                backgroundSize: "cover",
              }}
            ></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-white">
                Admin Panel
              </p>
              <p className="text-xs text-slate-400 truncate">
                admin@baynal.com
              </p>
            </div>
            <button className="text-slate-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-100 dark:bg-slate-950">
        {/* Top Bar */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="material-symbols-outlined text-blue-600">
              school
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-4 w-full max-w-xl">
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                search
              </span>
              <input
                className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg text-sm focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                placeholder="Kullanıcı, e-posta veya rol ara..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 ml-auto lg:ml-0">
            <button className="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <button className="p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}
