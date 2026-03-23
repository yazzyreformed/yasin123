import Link from "next/link";
import React from "react";

export default function CourseCreatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col flex-shrink-0 hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined block">school</span>
          </div>
          <h2 className="font-bold text-lg tracking-tight">BAYNAL GROUP</h2>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors group"
            href="/dashboard"
          >
            <span className="material-symbols-outlined text-[22px]">
              dashboard
            </span>
            <span className="text-sm font-semibold">Panel</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 bg-primary text-white rounded-lg transition-colors shadow-sm shadow-primary/20"
            href="/my-trainings"
          >
            <span className="material-symbols-outlined text-[22px]">
              library_books
            </span>
            <span className="text-sm font-semibold">Kurslarım</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            href="/role-management"
          >
            <span className="material-symbols-outlined text-[22px]">
              person
            </span>
            <span className="text-sm font-semibold">Eğitmenler</span>
          </Link>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            href="/role-management"
          >
            <span className="material-symbols-outlined text-[22px]">
              group
            </span>
            <span className="text-sm font-semibold">Öğrenciler</span>
          </Link>

          <div className="pt-6 pb-2">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
              Sistem
            </p>
          </div>
          <Link
            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
            href="/settings"
          >
            <span className="material-symbols-outlined text-[22px]">
              settings
            </span>
            <span className="text-sm font-semibold">Ayarlar</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxmiyVm-0s0rPaY99T_lbd23nZ71yFfDK9F8nN4wVGLGKw5I3INJ0EZeZWDNc0lYLgCO0a5f3Fx9ECFizSx-iKDWCa8S7MdEAIPHGrm2lh7VreGtKi7OPLwNWqrmqlE43LXGdcV783PJoYuys2s36mePWB6Acpv6TQrbe0wvW0cjRdfm_0d-1C6mWAGNaICoWzJ_TsHhvpakhwquKJw6ZbZ6rz3h7bHXTtSXIltJfY94yce1rbEZpESl3D-NRugVWTvjD9d_RvIQp"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate">Ahmet Yılmaz</p>
              <p className="text-[11px] text-slate-500 font-medium truncate uppercase tracking-tight">
                Eğitim Koordinatörü
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-y-auto custom-scrollbar relative">
        {children}
      </main>
    </div>
  );
}
