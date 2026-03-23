import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100">
      {/* Sidebar Navigation */}
      <aside
        className="w-64 bg-primary text-white hidden md:flex flex-col flex-shrink-0"
        data-purpose="side-nav"
      >
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <span className="text-primary font-bold text-xl">BG</span>
          </div>
          <span className="text-xl font-bold tracking-tight">BAYNAL GROUP</span>
        </div>

        <nav className="mt-6 flex-1 px-4 flex flex-col space-y-2">
          <Link
            className="flex items-center gap-3 bg-white/10 p-3 rounded-lg transition-colors"
            href="/dashboard"
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
              />
            </svg>
            <span className="font-medium">Panel</span>
          </Link>
          <Link
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
            href="/my-trainings"
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
              />
            </svg>
            <span className="font-medium">Eğitimlerim</span>
          </Link>

          <Link
            className="flex items-center gap-3 hover:bg-white/5 p-3 rounded-lg transition-colors text-slate-300 hover:text-white"
            href="/certificates"
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
              />
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
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-white/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj1BlcKaRzFayE-7133bFM1L1JEZ4nCXBdF_4P7I9djfflKMdxdZuC3npLFDS-R54Ih1G1kwDcttn3S-ocTHB72FXqkTw2_6MlzKN0ObzNI65DaI3b5yYYsV00-culzoCG07iV0IBxCW4QH2WLBCevcOxH0olx1g1Hm8r-xSLEynjFWbtWkpXzopbDvOSZ70HQ28FCOiHhVSVYDR3_TFbhXb2k2bJmcV94u6Hm8sp-gd2dJM3r4cI_FpsKGgug4RT3GCFKsqMHyKC"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Mehmet Yılmaz</p>
              <p className="text-xs text-slate-400 truncate">Kıdemli Uzman</p>
            </div>
          </div>
        </div>
      </aside>

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
