import React from "react";
import Sidebar from "../../components/sidebar";

export default function CoursePlayerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shrink-0 sticky top-0 z-40">
          <h1 className="font-bold text-lg text-slate-900 dark:text-white truncate pr-4">
            İş Sağlığı ve Güvenliği Eğitimi (2024)
          </h1>
          <div className="flex items-center gap-4 shrink-0">
            <span className="text-sm font-semibold text-slate-500 hidden sm:block">İlerleme: %65</span>
            <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden hidden sm:block">
              <div className="h-full bg-emerald-500 w-[65%]"></div>
            </div>
            <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors ml-4">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}
