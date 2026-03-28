"use client";

import React, { useState } from "react";
import Link from "next/link";

const modules = [
  {
    id: 1,
    title: "Modül 1: Temel Kavramlar",
    duration: "45 Dk",
    completedBlocks: 3,
    totalBlocks: 3,
    items: [
      { id: 101, type: "video", title: "İSG Nedir?", duration: "10:00", completed: true },
      { id: 102, type: "video", title: "Tarihsel Gelişim", duration: "15:00", completed: true },
      { id: 103, type: "quiz", title: "Bölüm Sonu Sınavı", duration: "20:00", completed: true },
    ]
  },
  {
    id: 2,
    title: "Modül 2: Risk Analizi ve Değerlendirme",
    duration: "1 Saat",
    completedBlocks: 1,
    totalBlocks: 4,
    items: [
      { id: 201, type: "video", title: "Risk Nedir? Tehlike Nedir?", duration: "12:30", completed: true },
      { id: 202, type: "video", title: "Risk Değerlendirme Metodolojisi", duration: "22:15", current: true },
      { id: 203, type: "pdf", title: "Matris Yöntemi Örnekleri (PDF)", duration: "10:00", locked: true },
      { id: 204, type: "quiz", title: "Risk Analizi Sınavı", duration: "15:15", locked: true },
    ]
  },
  {
    id: 3,
    title: "Modül 3: Acil Durum Planları",
    duration: "1 Saat 30 Dk",
    completedBlocks: 0,
    totalBlocks: 3,
    items: [
      { id: 301, type: "video", title: "Yangın ve Tahliye", duration: "30:00", locked: true },
      { id: 302, type: "video", title: "İlk Yardım Temelleri", duration: "45:00", locked: true },
      { id: 303, type: "quiz", title: "Acil Durum Sınavı", duration: "15:00", locked: true },
    ]
  }
];

export default function CoursePlayerPage() {
  const [activeTab, setActiveTab] = useState("hakkinda");
  const [expandedModules, setExpandedModules] = useState<number[]>([1, 2]);

  const toggleModule = (id: number) => {
    setExpandedModules(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden bg-slate-100 dark:bg-slate-950">
      
      {/* Left Area: Video & Content Details */}
      <div className="flex-1 flex flex-col overflow-y-auto custom-scrollbar bg-white dark:bg-slate-900 shadow-sm relative z-10">
        
        {/* Video Player Area */}
        <div className="w-full bg-black relative aspect-video flex-shrink-0 group flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200&h=675')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <button className="relative z-10 w-20 h-20 bg-blue-600/90 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:scale-105 hover:bg-blue-500 transition-all group-hover:opacity-100">
            <span className="material-symbols-outlined text-[40px] ml-2">play_arrow</span>
          </button>

          {/* Player Custom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/90 to-transparent flex flex-col gap-2">
            <div className="w-full h-1 bg-white/30 rounded-full cursor-pointer overflow-hidden relative group/bar">
              <div className="h-full bg-blue-500 w-[45%]"></div>
              <div className="absolute top-1/2 -translate-y-1/2 left-[45%] w-3 h-3 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transform -translate-x-1/2 transition-opacity"></div>
            </div>
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button className="hover:text-blue-400 transition-colors"><span className="material-symbols-outlined text-[24px]">pause</span></button>
                <button className="hover:text-blue-400 transition-colors hidden sm:block"><span className="material-symbols-outlined text-[20px]">skip_next</span></button>
                <div className="flex items-center gap-2 group/vol">
                  <button className="hover:text-blue-400 transition-colors"><span className="material-symbols-outlined text-[20px]">volume_up</span></button>
                  <div className="w-16 h-1 bg-white/30 rounded-full overflow-hidden hidden group-hover/vol:block cursor-pointer">
                    <div className="h-full bg-white w-full"></div>
                  </div>
                </div>
                <span className="text-xs font-medium font-mono hidden sm:inline text-white/80">09:58 / 22:15</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-sm font-bold opacity-80 hover:opacity-100 hidden sm:block">1x</button>
                <button className="hover:text-blue-400 transition-colors"><span className="material-symbols-outlined text-[20px]">closed_caption</span></button>
                <button className="hover:text-blue-400 transition-colors"><span className="material-symbols-outlined text-[20px]">settings</span></button>
                <button className="hover:text-blue-400 transition-colors"><span className="material-symbols-outlined text-[24px]">fullscreen</span></button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details Below Video */}
        <div className="p-6 md:p-8 max-w-4xl w-full mx-auto flex-grow flex flex-col">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Risk Değerlendirme Metodolojisi
          </h2>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 sticky top-0 bg-white dark:bg-slate-900 z-10">
            <button 
              onClick={() => setActiveTab("hakkinda")}
              className={`pb-4 px-2 font-bold text-sm border-b-2 transition-all mr-6 ${activeTab === 'hakkinda' ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              İçerik Hakkında
            </button>
            <button 
              onClick={() => setActiveTab("soru-cevap")}
              className={`pb-4 px-2 font-bold text-sm border-b-2 transition-all mr-6 ${activeTab === 'soru-cevap' ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Soru & Cevap 
              <span className="ml-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs">12</span>
            </button>
            <button 
              onClick={() => setActiveTab("notlar")}
              className={`pb-4 px-2 font-bold text-sm border-b-2 transition-all mr-6 ${activeTab === 'notlar' ? 'border-slate-900 dark:border-white text-slate-900 dark:text-white' : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
            >
              Notlarım
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-grow pb-8 text-slate-700 dark:text-slate-300">
            {activeTab === "hakkinda" && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
                <p className="leading-relaxed">
                  Bu bölümde, iş sağlığı ve güvenliği kapsamında tehlikelerin tespiti ve risklerin kantitatif/kalitatif yöntemlerle nasıl değerlendirileceğini detaylıca inceleyeceğiz. Olasılık ve Şiddet matrisi en yaygın kullanılan yaklaşımdır.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="w-14 h-14 bg-white dark:bg-blue-900 flex items-center justify-center rounded-2xl shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[28px] text-blue-600 dark:text-blue-400">picture_as_pdf</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Eğitim Sunumu ve Matris Formülü</h4>
                    <p className="text-sm">İlgili dersin PDF formatındaki detaylı notlarını ve risk hesaplama tablosunu indirin.</p>
                  </div>
                  <button className="sm:ml-auto whitespace-nowrap px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-sm shadow-sm hover:shadow transition-all flex items-center gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                    <span className="material-symbols-outlined text-[18px]">download</span>
                    Tümünü İndir
                  </button>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">Eğitmen Notu</h4>
                  <div className="flex items-start gap-4">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxmiyVm-0s0rPaY99T_lbd23nZ71yFfDK9F8nN4wVGLGKw5I3INJ0EZeZWDNc0lYLgCO0a5f3Fx9ECFizSx-iKDWCa8S7MdEAIPHGrm2lh7VreGtKi7OPLwNWqrmqlE43LXGdcV783PJoYuys2s36mePWB6Acpv6TQrbe0wvW0cjRdfm_0d-1C6mWAGNaICoWzJ_TsHhvpakhwquKJw6ZbZ6rz3h7bHXTtSXIltJfY94yce1rbEZpESl3D-NRugVWTvjD9d_RvIQp" alt="Eğitmen" className="w-12 h-12 rounded-full object-cover shrink-0 ring-2 ring-slate-200 dark:ring-slate-700" />
                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-b-xl rounded-tr-xl rounded-tl-sm text-sm border border-slate-100 dark:border-slate-800">
                      "Risk seviyesi kabul edilemez (Kırmızı Bölge) çıktığında her zaman önce işi durdurup kaynağında yok etme opsiyonunu düşünmeliyiz. Kişisel koruyucu donanımlar her zaman son çaredir."
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "soru-cevap" && (
              <div className="space-y-6 flex flex-col items-center justify-center py-10 opacity-70">
                <span className="material-symbols-outlined text-[64px] text-slate-300 dark:text-slate-600">forum</span>
                <p className="font-medium text-slate-500">Soru sormak için yeterli ilerlemeyi (En az %50) tamamlamalısınız.</p>
              </div>
            )}
            {activeTab === "notlar" && (
              <div className="space-y-4">
                <textarea 
                  placeholder="Videoda önemli gördüğünüz yerleri buraya not alın..." 
                  className="w-full h-32 p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none resize-none text-sm text-slate-900 dark:text-white"
                ></textarea>
                <div className="flex justify-end">
                  <button className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">save</span>
                    Notu Kaydet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right Area: Course Curriculum (Curriculum Playlist) */}
      <div className="lg:w-[400px] w-full bg-slate-50 dark:bg-slate-950 border-l border-slate-200 dark:border-slate-800 flex flex-col flex-shrink-0 relative z-20 h-[50vh] lg:h-auto">
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0 flex items-center justify-between">
          <h3 className="font-bold text-slate-900 dark:text-white">Kurs İçeriği</h3>
          <span className="material-symbols-outlined text-slate-400 cursor-pointer lg:hidden">close</span>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {modules.map((mod, index) => (
            <div key={mod.id} className="border-b border-slate-200 dark:border-slate-800">
              {/* Accordion Header */}
              <button 
                onClick={() => toggleModule(mod.id)}
                className="w-full text-left p-4 md:p-5 bg-white dark:bg-slate-900 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {mod.title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                    <span>{mod.completedBlocks} / {mod.totalBlocks} Tamamlandı</span>
                    <span className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></span>
                    <span>{mod.duration}</span>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-slate-400 transform transition-transform duration-300 ${expandedModules.includes(mod.id) ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>

              {/* Accordion Body */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out bg-slate-50 dark:bg-slate-950 ${
                  expandedModules.includes(mod.id) ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <ul className="flex flex-col">
                  {mod.items.map((item, i) => (
                    <li key={item.id}>
                      <button 
                        disabled={item.locked}
                        className={`w-full text-left p-4 flex gap-4 transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${
                          item.current ? "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500" : "border-l-4 border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/50"
                        }`}
                      >
                        {/* Icon */}
                        <div className="mt-0.5 shrink-0 flex items-center justify-center">
                          {item.completed ? (
                            <span className="material-symbols-outlined text-emerald-500 text-[20px]">check_circle</span>
                          ) : item.locked ? (
                            <span className="material-symbols-outlined text-slate-400 text-[20px]">lock</span>
                          ) : item.type === 'video' ? (
                            <span className={`material-symbols-outlined text-[20px] ${item.current ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400'}`}>play_circle</span>
                          ) : item.type === 'quiz' ? (
                            <span className="material-symbols-outlined text-[20px] text-slate-500 dark:text-slate-400">quiz</span>
                          ) : (
                            <span className="material-symbols-outlined text-[20px] text-slate-500 dark:text-slate-400">picture_as_pdf</span>
                          )}
                        </div>

                        {/* Title & Meta */}
                        <div className="flex-1 flex flex-col justify-center min-w-0">
                          <p className={`text-sm tracking-tight leading-snug truncate mb-1 ${item.current ? 'font-bold text-blue-800 dark:text-blue-300' : 'font-medium text-slate-700 dark:text-slate-300'} ${item.completed ? 'text-slate-500' : ''}`}>
                            {i + 1}. {item.title}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[14px] text-slate-400">{item.type === 'video' ? 'movie' : item.type === 'quiz' ? 'assignment' : 'description'}</span>
                            <span className="text-[11px] font-bold text-slate-400 tracking-wider font-mono">{item.duration}</span>
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
