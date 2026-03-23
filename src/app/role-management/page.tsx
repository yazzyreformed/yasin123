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
      <div className="p-4 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="flex flex-col gap-1">
              <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                <Link className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="/dashboard">
                  Yönetim
                </Link>
                <span className="material-symbols-outlined text-sm">
                  chevron_right
                </span>
                <span className="text-slate-900 dark:text-slate-200">
                  Kullanıcı Yönetimi
                </span>
              </nav>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Kullanıcı ve Rol Yönetimi
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Sistemdeki tüm kullanıcıları ve yetkilerini buradan kontrol
                edebilirsiniz.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm">
                <span className="material-symbols-outlined text-lg">
                  download
                </span>
                <span>Dışa Aktar</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                <span className="material-symbols-outlined text-lg">
                  person_add
                </span>
                <span>Yeni Kullanıcı Ekle</span>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Toplam Kullanıcı
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  1,248
                </h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                <span className="material-symbols-outlined">
                  verified_user
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Aktif Oturum
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  412
                </h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 rounded-lg bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                <span className="material-symbols-outlined">
                  pending_actions
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Bekleyen Onaylar
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  18
                </h3>
              </div>
            </div>
          </div>

          {/* Tabs & Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
            <div className="flex border-b border-slate-200 dark:border-slate-800 px-6 overflow-x-auto custom-scrollbar">
              <button
                onClick={() => setActiveTab("all")}
                className={`border-b-2 px-6 py-4 text-sm font-bold whitespace-nowrap transition-colors ${
                  activeTab === "all"
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Tüm Kullanıcılar (1,248)
              </button>
              <button
                onClick={() => setActiveTab("admin")}
                className={`border-b-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === "admin"
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Adminler
              </button>
              <button
                onClick={() => setActiveTab("instructor")}
                className={`border-b-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === "instructor"
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Eğitmenler
              </button>
              <button
                onClick={() => setActiveTab("student")}
                className={`border-b-2 px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors ${
                  activeTab === "student"
                    ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400"
                    : "border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                }`}
              >
                Öğrenciler
              </button>
            </div>
            
            <div className="w-full overflow-x-auto custom-scrollbar">
              <table className="w-full text-left whitespace-nowrap">
                <thead>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                      Kullanıcı
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                      E-posta Adresi
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">
                      Rol
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">
                      Durum
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-center">
                      Erişim
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-right">
                      İşlemler
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {users.map((user, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs border border-slate-200 dark:border-slate-700 shrink-0">
                            {user.initials}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                              {user.name}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-tight">
                              ID: {user.id}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {user.roleVariant === "admin" && (
                          <span className="inline-flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 min-w-[70px]">
                            {user.role}
                          </span>
                        )}
                        {user.roleVariant === "instructor" && (
                          <span className="inline-flex items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50 min-w-[70px]">
                            {user.role}
                          </span>
                        )}
                        {user.roleVariant === "student" && (
                          <span className="inline-flex items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 min-w-[70px]">
                            {user.role}
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {user.status === "Aktif" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800/50">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            Aktif
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
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
                          <div className="peer h-5 w-9 rounded-full bg-slate-200 dark:bg-slate-700 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full border border-slate-300 dark:border-slate-600 peer-checked:border-blue-600"></div>
                        </label>
                      </td>
                      <td className="px-6 py-4 text-right space-x-1">
                        <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20">
                          <span className="material-symbols-outlined text-xl">
                            edit
                          </span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
                          <span className="material-symbols-outlined text-xl">
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
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200 dark:border-slate-800 px-6 py-4 bg-slate-50/30 dark:bg-slate-900/30 gap-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 text-center sm:text-left">
                Toplam <span className="font-bold text-slate-900 dark:text-slate-200">1,248</span> kullanıcıdan{" "}
                <span className="font-bold text-slate-900 dark:text-slate-200">1-10</span> arası gösteriliyor
              </p>
              <div className="flex items-center gap-1">
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-lg">
                    chevron_left
                  </span>
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-600/20 transition-all">
                  1
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                  2
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                  3
                </button>
                <span className="px-1 text-slate-400 dark:text-slate-500 text-sm">...</span>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-slate-600 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">
                  125
                </button>
                <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 transition-all">
                  <span className="material-symbols-outlined text-lg">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Page Footer */}
      <footer className="py-4 px-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center mt-auto">
        <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">
          © 2024 BAYNAL GROUP LMS — KURUMSAL EĞİTİM YÖNETİM SİSTEMİ
        </p>
      </footer>
    </>
  );
}
