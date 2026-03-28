"use client";

import React, { useState } from "react";
import Sidebar from "../../components/sidebar";
import Link from "next/link";

export default function VideoStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <button
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-md hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-primary/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-500"
                placeholder="Eğitim veya video ara..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full relative transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white dark:border-slate-900"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none text-slate-900 dark:text-slate-100">
                  Ahmet Baynal
                </p>
                <p className="text-[10px] text-slate-500 font-medium mt-1 uppercase tracking-wider">
                  Yönetici
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Profil"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-primary/10"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALiyXMoSZLY36JvQHJGpEiyrrjXfSowegh51_CYp-NpR8x2DYedIxHVXwrC0bPPYR3VzfGTB425XTQ-h-1QJ_Z869ctd-EmYEsjqo9n8zJnv8G4CZL88iBohb5ADRlNn3_IZVNUvg2VSAB1kvBMXML4dF-MkoRUyt5AcxFoRGj3ml4VtbHPK8PdBE9QSlu03GqZq3zw43bNSbuRAG_jfIG1WVkqNsFSDj68IqZE08Kpo3qpi0HxGx3qIdIVQYJp7aWNC0ub70W7_d0"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
