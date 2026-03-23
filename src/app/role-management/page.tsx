"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function RoleManagementPage() {
  const [activeTab, setActiveTab] = useState("all");

  const users = [
    {
      id: "48210",
      initials: "AY",
      name: "Ahmet Yılmaz",
      email: "ahmet.yilmaz@baynal.com",
      role: "Admin",
      roleVariant: "admin",
      status: "Aktif",
      access: true,
    },
    {
      id: "48211",
      initials: "AD",
      name: "Ayşe Demir",
      email: "ayse.demir@baynal.com",
      role: "Eğitmen",
      roleVariant: "instructor",
      status: "Aktif",
      access: true,
    },
    {
      id: "48212",
      initials: "MK",
      name: "Mehmet Kaya",
      email: "mehmet.kaya@baynal.com",
      role: "Öğrenci",
      roleVariant: "student",
      status: "Pasif",
      access: false,
    },
  ];

  return (
    <>
      <div className="p-4 lg:p-8 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-1">
              <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">
                <Link className="hover:text-slate-900 dark:hover:text-white transition-colors" href="/dashboard">
                  Yönetim
                </Link>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="text-slate-900 dark:text-slate-200">
                  Kullanıcı Yönetimi
                </span>
              </nav>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Kullanıcı ve Rol Yönetimi
              </h1>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Sistemdeki tüm kullanıcıları ve yetkilerini buradan kontrol
                edebilirsiniz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                <span>Dışa Aktar</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold transition-all shadow-sm">
                <span className="material-symbols-outlined text-[18px]">
                  person_add
                </span>
                <span>Yeni Kullanıcı Ekle</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0 border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-[24px]">group</span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
                  Toplam Kullanıcı
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  1,248
                </h3>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-800/30">
                <span className="material-symbols-outlined text-[24px]">
                  verified_user
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
                  Aktif Oturum
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  412
                </h3>
              </div>
            </div>
            
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-5 hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="h-14 w-14 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-500 shrink-0 border border-amber-100 dark:border-amber-800/30">
                <span className="material-symbols-outlined text-[24px]">
                  pending_actions
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">
                  Bekleyen Onaylar
                </p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                  18
                </h3>
              </div>
            </div>
          </div>

          {/* Tabs & Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto custom-scrollbar">
              <button
                onClick={() => setActiveTab("all")}
                className={`border-b-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === "all"
                    ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Tüm Kullanıcılar (1,248)
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`border-b-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === "admin"
                    ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Adminler
              </button>
              <button
                onClick={() => setActiveTab("instructor")}
                className={`border-b-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === "instructor"
                    ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Eğitmenler
              </button>
              <button
                onClick={() => setActiveTab("student")}
                className={`border-b-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === "student"
                    ? "border-slate-900 text-slate-900 dark:text-white dark:border-white"
                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                Öğrenciler
              </button>
            </div>
            
            <div className="w-full overflow-x-auto custom-scrollbar">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50/80 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                      Kullanıcı
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest">
                      E-posta Adresi
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">
                      Rol
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">
                      Durum
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-center">
                      Erişim
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-right">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                  {users.map((user, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold text-sm border border-slate-200 dark:border-slate-700 shrink-0 shadow-sm">
                            {user.initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                              {user.name}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                              ID: {user.id}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {user.roleVariant === "admin" && (
                          <span className="inline-flex items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 px-3 py-1 text-xs font-bold text-white dark:text-slate-900 min-w-[80px] shadow-sm">
                            {user.role}
                          </span>
                        )}
                        {user.roleVariant === "instructor" && (
                          <span className="inline-flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 min-w-[80px]">
                            {user.role}
                          </span>
                        )}
                        {user.roleVariant === "student" && (
                          <span className="inline-flex items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900 px-3 py-1 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 min-w-[80px]">
                            {user.role}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {user.status === "Aktif" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            Aktif
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                            Pasif
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <label className="relative inline-flex cursor-pointer items-center">
                          <input
                            defaultChecked={user.access}
                            className="peer sr-only"
                            type="checkbox"
                          />
                          <div className="peer h-6 w-11 rounded-full bg-slate-200 dark:bg-slate-700 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-900 dark:peer-checked:bg-slate-500 peer-checked:after:translate-x-full border border-slate-300 dark:border-slate-600 shadow-sm"></div>
                        </label>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button className="p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                          <span className="material-symbols-outlined text-[20px]">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                          <span className="material-symbols-outlined text-[20px]">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 dark:border-slate-800 px-6 py-5 bg-slate-50/50 dark:bg-slate-900/50 gap-4">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Toplam <span className="font-bold text-slate-900 dark:text-slate-200">1,248</span> kullanıcıdan{" "}
                <span className="font-bold text-slate-900 dark:text-slate-200">1-10</span> arası gösteriliyor
              </p>
              <div className="flex items-center gap-1.5">
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-sm font-bold shadow-sm transition-all">
                  1
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
                  2
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
                  3
                </button>
                <span className="px-2 text-slate-400 dark:text-slate-500 text-sm font-bold">...</span>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all">
                  125
                </button>
                <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Page Footer */}
      <footer className="py-6 px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center mt-auto">
        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          © 2024 BAYNAL GROUP LMS — KURUMSAL EĞİTİM YÖNETİM SİSTEMİ
        </p>
      </footer>
    </>
  );
}
