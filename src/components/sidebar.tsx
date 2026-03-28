"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => pathname?.startsWith(path);

  // Close sidebar on route change on mobile
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Floating Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 active:scale-95 transition-all outline-none focus:ring-4 focus:ring-blue-500/30"
        aria-label="Menüyü Aç"
      >
        <span className="material-symbols-outlined text-[28px]">menu</span>
      </button>

      {/* Mobile Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-0 left-0 z-50 h-[100dvh] w-[280px] md:w-64 bg-slate-900 text-white flex flex-col flex-shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-2xl md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        data-purpose="side-nav"
      >
        <div className="p-6 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center shadow-sm">
              <span className="text-slate-900 font-bold text-xl">BG</span>
            </div>
            <span className="text-xl font-bold tracking-tight">BAYNAL GROUP</span>
          </div>
          
          <button 
            className="md:hidden w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <nav className="mt-2 flex-1 px-4 flex flex-col space-y-2 overflow-y-auto custom-scrollbar">
          <Link
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive("/dashboard") ? "bg-blue-600/20 text-blue-400 font-bold select-none" : "text-slate-400 font-medium hover:bg-white/5 hover:text-white"}`}
            href="/dashboard"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span className="text-sm">Panel</span>
          </Link>
          <Link
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive("/all-courses") ? "bg-blue-600/20 text-blue-400 font-bold select-none" : "text-slate-400 font-medium hover:bg-white/5 hover:text-white"}`}
            href="/all-courses"
          >
            <span className="material-symbols-outlined text-[20px]">explore</span>
            <span className="text-sm">Katalog</span>
          </Link>
          <Link
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive("/my-trainings") || isActive("/courses") || isActive("/course-player") ? "bg-blue-600/20 text-blue-400 font-bold select-none" : "text-slate-400 font-medium hover:bg-white/5 hover:text-white"}`}
            href="/my-trainings"
          >
            <span className="material-symbols-outlined text-[20px]">school</span>
            <span className="text-sm">Eğitimlerim</span>
          </Link>
          <Link
            className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive("/certificates") ? "bg-blue-600/20 text-blue-400 font-bold select-none" : "text-slate-400 font-medium hover:bg-white/5 hover:text-white"}`}
            href="/certificates"
          >
            <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
            <span className="text-sm">Sertifikalar</span>
          </Link>

          <div className="mt-auto pt-6 pb-2">
            <Link
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${isActive("/settings") ? "bg-blue-600/20 text-blue-400 font-bold select-none" : "text-slate-400 font-medium hover:bg-white/5 hover:text-white"}`}
              href="/settings"
            >
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span className="text-sm">Ayarlar</span>
            </Link>
          </div>
        </nav>

        <div className="p-6 border-t border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-slate-700 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj1BlcKaRzFayE-7133bFM1L1JEZ4nCXBdF_4P7I9djfflKMdxdZuC3npLFDS-R54Ih1G1kwDcttn3S-ocTHB72FXqkTw2_6MlzKN0ObzNI65DaI3b5yYYsV00-culzoCG07iV0IBxCW4QH2WLBCevcOxH0olx1g1Hm8r-xSLEynjFWbtWkpXzopbDvOSZ70HQ28FCOiHhVSVYDR3_TFbhXb2k2bJmcV94u6Hm8sp-gd2dJM3r4cI_FpsKGgug4RT3GCFKsqMHyKC"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate text-white">Mehmet Yılmaz</p>
              <p className="text-xs font-medium text-slate-400 truncate">Kıdemli Uzman</p>
            </div>
            <Link href="/" className="ml-auto flex items-center justify-center w-8 h-8 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white transition-colors" title="Çıkış Yap">
              <span className="material-symbols-outlined text-[16px]">logout</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
