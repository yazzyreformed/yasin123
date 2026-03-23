"use client";

import React, { useState } from "react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profil");

  return (
    <div className="p-8 pb-32 max-w-5xl mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-2">
          Ayarlar ve Tercihler
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Kişisel bilgilerinizi, güvenlik ayarlarınızı ve bildirim tercihlerinizi buradan yapılandırın.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="md:w-64 shrink-0 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab("profil")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "profil"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">person</span>
            Kişisel Bilgiler
          </button>
          <button
            onClick={() => setActiveTab("guvenlik")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "guvenlik"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">lock</span>
            Güvenlik Şifre
          </button>
          <button
            onClick={() => setActiveTab("bildirimler")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "bildirimler"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">notifications_active</span>
            Bildirimler
          </button>
          <button
            onClick={() => setActiveTab("tercihler")}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-semibold transition-all text-sm ${
              activeTab === "tercihler"
                ? "bg-primary text-white shadow-lg shadow-primary/20"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">palette</span>
            Görünüm
          </button>
        </div>

        {/* Form Area */}
        <div className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          {activeTab === "profil" && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-xl font-bold dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Kişisel Bilgiler
              </h3>
              
              <div className="flex items-center gap-6 mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDj1BlcKaRzFayE-7133bFM1L1JEZ4nCXBdF_4P7I9djfflKMdxdZuC3npLFDS-R54Ih1G1kwDcttn3S-ocTHB72FXqkTw2_6MlzKN0ObzNI65DaI3b5yYYsV00-culzoCG07iV0IBxCW4QH2WLBCevcOxH0olx1g1Hm8r-xSLEynjFWbtWkpXzopbDvOSZ70HQ28FCOiHhVSVYDR3_TFbhXb2k2bJmcV94u6Hm8sp-gd2dJM3r4cI_FpsKGgug4RT3GCFKsqMHyKC"
                  alt="Avatar"
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-slate-100 dark:ring-slate-800"
                />
                <div className="flex flex-col gap-2">
                  <button className="px-5 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold rounded-lg transition-colors text-sm border border-slate-200 dark:border-slate-700">
                    Fotoğrafı Değiştir
                  </button>
                  <button className="text-xs font-semibold text-red-500 hover:text-red-700 transition-colors">
                    Fotoğrafı Kaldır
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Ad</label>
                  <input
                    type="text"
                    defaultValue="Mehmet"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white font-medium transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Soyad</label>
                  <input
                    type="text"
                    defaultValue="Yılmaz"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white font-medium transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">E-posta Adresi</label>
                  <input
                    type="email"
                    defaultValue="mehmet.yilmaz@baynalgroup.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white font-medium transition-all"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hakkımda</label>
                  <textarea
                    rows={4}
                    defaultValue="Eğitim teknolojileri ve öğrenim süreçleri üzerine çalışıyorum."
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white font-medium transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">save</span>
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          )}

          {activeTab === "guvenlik" && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-xl font-bold dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Güvenlik ve Şifre
              </h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mevcut Şifre</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Yeni Şifre</label>
                  <input
                    type="password"
                    placeholder="En az 8 karakter"
                    className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Yeni Şifre (Tekrar)</label>
                  <input
                    type="password"
                    placeholder="Şifreyi doğrulayın"
                    className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-900 dark:text-white transition-all"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold dark:text-white">İki Adımlı Doğrulama (2FA)</h4>
                    <p className="text-sm text-slate-500 mt-1">Hesabınızı SMS veya Authenticator ile daha güvenli hale getirin.</p>
                  </div>
                  <button className="px-5 py-2.5 outline outline-2 outline-slate-200 dark:outline-slate-700 hover:outline-primary hover:text-primary text-slate-600 dark:text-slate-300 font-bold rounded-lg transition-all text-sm">
                    Aktifleştir
                  </button>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button className="px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center gap-2">
                  Şifreyi Güncelle
                </button>
              </div>
            </div>
          )}

          {activeTab === "bildirimler" && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <h3 className="text-xl font-bold dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Bildirim Tercihleri
              </h3>

              <div className="space-y-6">
                <label className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Platform Duyuruları</h4>
                    <p className="text-xs text-slate-500 mt-1">Sistem güncellemeleri ve yeni özellikler.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Eğitim Hatırlatıcıları</h4>
                    <p className="text-xs text-slate-500 mt-1">Yaklaşan dersler ve sınavlar için hatırlatmalar.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                  </div>
                </label>

                <label className="flex items-center justify-between cursor-pointer p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors opacity-75">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">E-posta Pazarlama</h4>
                    <p className="text-xs text-slate-500 mt-1">İndirimler, kampanyalar ve haftalık bültenler.</p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-primary"></div>
                  </div>
                </label>
              </div>
            </div>
          )}

          {activeTab === "tercihler" && (
            <div className="p-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <h3 className="text-xl font-bold dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                Sistem Görünümü ve Dil
              </h3>

              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">Arayüz Dili</label>
                  <select className="w-full md:w-1/2 lg:w-1/3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20 appearance-none font-semibold text-slate-700 dark:text-slate-200">
                    <option value="tr">Türkçe (TR)</option>
                    <option value="en">English (US)</option>
                    <option value="de">Deutsch (DE)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-4">Tema Seçimi (Otomatik Dark Mode)</label>
                  <div className="flex gap-4">
                    <div className="border border-primary ring-2 ring-primary/20 rounded-xl p-2 cursor-pointer bg-white">
                      <div className="w-24 h-16 bg-white border border-slate-200 shadow-sm rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-amber-500">light_mode</span>
                      </div>
                      <p className="text-center font-bold text-xs mt-2 text-primary">Açık</p>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-xl p-2 cursor-pointer opacity-80">
                      <div className="w-24 h-16 bg-slate-900 border border-slate-800 shadow-sm rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-blue-300">dark_mode</span>
                      </div>
                      <p className="text-center font-bold text-xs mt-2 text-slate-500">Koyu</p>
                    </div>
                    <div className="border border-slate-200 dark:border-slate-700 hover:border-slate-300 rounded-xl p-2 cursor-pointer opacity-80 hidden md:block">
                      <div className="w-24 h-16 bg-gradient-to-r from-white to-slate-900 border border-slate-300 dark:border-slate-700 shadow-sm rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400">brightness_auto</span>
                      </div>
                      <p className="text-center font-bold text-xs mt-2 text-slate-500">Sistem</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">Şu anda "Sistem" teması (Dark Mode) tarayıcınızın ayarlarına bağlı olarak global düzeyde native olarak çalışmaktadır.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
