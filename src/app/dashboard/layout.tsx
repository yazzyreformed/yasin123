import Link from "next/link";

import Sidebar from "../../components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100">
      <Sidebar />

      {/* Main Content Area */}
      <main
        className="flex-1 flex flex-col h-screen overflow-y-auto bg-slate-50 dark:bg-slate-900"
        data-purpose="main-dashboard"
      >
        {/* Top Header */}
        <header
          className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8 sticky top-0 z-10"
          data-purpose="header-bar"
        >
          <h1 className="text-xl font-bold text-primary dark:text-white">
            Hoş Geldiniz, Mehmet
          </h1>
          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              TR
            </span>
          </div>
        </header>

        {/* Dashboard Body */}
        {children}
      </main>
    </div>
  );
}
