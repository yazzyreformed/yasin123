"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.startsWith(path);

  return (
    <aside
      className="w-64 bg-slate-900 text-white hidden md:flex flex-col flex-shrink-0"
      data-purpose="side-nav"
    >
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
          <span className="text-slate-900 font-bold text-xl">BG</span>
        </div>
        <span className="text-xl font-bold tracking-tight">BAYNAL GROUP</span>
      </div>

      <nav className="mt-6 flex-1 px-4 flex flex-col space-y-2 overflow-y-auto">
        <Link
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive("/dashboard") ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
          href="/dashboard"
        >
          <span className="material-symbols-outlined text-[20px]">grid_view</span>
          <span className="font-semibold text-sm">Panel</span>
        </Link>
        <Link
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive("/all-courses") ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
          href="/all-courses"
        >
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span className="font-semibold text-sm">Katalog</span>
        </Link>
        <Link
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive("/my-trainings") || isActive("/courses") || isActive("/course-player") ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
          href="/my-trainings"
        >
          <span className="material-symbols-outlined text-[20px]">school</span>
          <span className="font-semibold text-sm">Eğitimlerim</span>
        </Link>
        <Link
          className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive("/certificates") ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
          href="/certificates"
        >
          <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
          <span className="font-semibold text-sm">Sertifikalar</span>
        </Link>

        <div className="mt-auto pt-6 pb-2">
          <Link
            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive("/settings") ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
            href="/settings"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <span className="font-semibold text-sm">Ayarlar</span>
          </Link>
        </div>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Avatar"
            className="w-10 h-10 rounded-full border border-slate-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj1BlcKaRzFayE-7133bFM1L1JEZ4nCXBdF_4P7I9djfflKMdxdZuC3npLFDS-R54Ih1G1kwDcttn3S-ocTHB72FXqkTw2_6MlzKN0ObzNI65DaI3b5yYYsV00-culzoCG07iV0IBxCW4QH2WLBCevcOxH0olx1g1Hm8r-xSLEynjFWbtWkpXzopbDvOSZ70HQ28FCOiHhVSVYDR3_TFbhXb2k2bJmcV94u6Hm8sp-gd2dJM3r4cI_FpsKGgug4RT3GCFKsqMHyKC"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold truncate text-white">Mehmet Yılmaz</p>
            <p className="text-xs font-bold text-slate-400 truncate">Kıdemli Uzman</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
