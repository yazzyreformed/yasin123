import Link from "next/link";
import React from "react";

export default function MediaLibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">rocket_launch</span>
          </div>
          <div>
            <h2 className="font-bold text-lg tracking-tight leading-none text-primary dark:text-slate-100">
              BAYNAL
            </h2>
            <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mt-1 uppercase">
              LMS Panel
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 mt-4 overflow-y-auto custom-scrollbar">
          <Link
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            href="/dashboard"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
              dashboard
            </span>
            <span className="text-sm font-semibold">Panel</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            href="/course-creator"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
              book_4
            </span>
            <span className="text-sm font-semibold">Kurslarım</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary text-white shadow-xl shadow-primary/25"
            href="/media-library"
          >
            <span className="material-symbols-outlined">folder_open</span>
            <span className="text-sm font-semibold">Medya Kütüphanesi</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            href="/role-management"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
              group
            </span>
            <span className="text-sm font-semibold">Kullanıcılar</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
            href="/settings"
          >
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
              settings
            </span>
            <span className="text-sm font-semibold">Ayarlar</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div
              className="size-10 rounded-full bg-cover border-2 border-white dark:border-slate-700 shadow-sm"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwIi_Djh0_wy6R5pGkbdXzKLIPPPNfo1NFPyCpPmHIIv2pCg_PA7d8a7gSTmwGrSGDcqw2Z5ZKPF8jnHyQIOBfhdFv_-CNmvMiEy-anfLDSoWCJ-KRh_UVwaHPnIv6WqsbzDsDoXkz8QDhwy5TYQJgJ61qfftYu7tMEX_bGGkcku9Pazf1SPA2RK6sOvkBpqjBgSo355ATxRAO2AVBcdAPZKiqASQ0jUu5iU2XC9gFQ3vZgpYVaT8LOINPPJ5heMTy1pOpOO3PPaKh')",
              }}
            ></div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold truncate">Ahmet Yılmaz</p>
              <p className="text-[10px] text-slate-500 truncate uppercase tracking-wider">
                Yönetici
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto bg-slate-50 dark:bg-slate-950">
        {children}
      </main>
    </div>
  );
}
