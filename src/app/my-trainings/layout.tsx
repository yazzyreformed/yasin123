import Link from "next/link";
import React from "react";

export default function MyTrainingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased font-sans">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col flex-shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <span className="text-primary font-bold text-xl">BG</span>
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
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span className="font-medium">Panel</span>
          </Link>
          <Link
            href="/my-trainings"
            className="flex items-center gap-3 bg-white/10 p-3 rounded-lg transition-colors text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              ></path>
            </svg>
            <span className="font-medium">Eğitimlerim</span>
          </Link>

          <Link
            href="/certificates"
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              ></path>
            </svg>
            <span className="font-medium">Sertifikalar</span>
          </Link>
          <Link
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white mt-auto pt-6"
            href="/settings"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">Ayarlar</span>
          </Link>
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Profil"
              className="w-10 h-10 rounded-full border border-white/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOpGLNC1F5s4MLmDI9NajjgeXrLJ-tStxiJoXdUBOE3dawM4uUDR0tyURZvnIo8jABDAHHTugQrMa0la1JA208quA3A0_DeYp7JzGfB2iG1pvCviMPFI2z7jj8yuhukpFLocdFQ3CzB_1QBoQcOG-8nFzR_DrJm-0aKfQ2QrLQAkZ8b3ONoagndz_4i8UxJ2c4SZcA3jP8ETqJEfepizdQUUMv64rn2_4DUdKncI6cX2B4y4JaF6d2JymuQKluYAuIc_1t8td4RxqL"
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
        {children}
      </main>
    </div>
  );
}
