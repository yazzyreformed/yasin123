"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const mockCourses = [
  {
    id: "1",
    title: "İş Sağlığı ve Güvenliği Eğitimi (2024)",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=450",
    badge: "SCORM",
    progress: 65,
    statusText: "İlerleme",
    icons: [
      { type: "picture_as_pdf", label: "PDF" },
      { type: "play_circle", label: "VİDEO" }
    ]
  },
  {
    id: "2",
    title: "Dijital Pazarlama Stratejileri ve Analiz",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=450",
    badge: "VİDEO",
    progress: 12,
    statusText: "İlerleme",
    icons: [
      { type: "play_circle", label: "VİDEO" }
    ]
  },
  {
    id: "3",
    title: "Modern Liderlik ve Ekip Yönetimi",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=450",
    badge: "PDF",
    progress: 0,
    statusText: "Başlanmadı",
    icons: [
      { type: "picture_as_pdf", label: "PDF" }
    ]
  },
  {
    id: "4",
    title: "Veri Bilimi Temelleri ve Python",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=450",
    badge: "SCORM",
    progress: 100,
    statusText: "Tamamlandı",
    icons: [
      { type: "integration_instructions", label: "UYGULAMA" }
    ]
  }
];

export default function MyTrainingsPage() {
  const [activeTab, setActiveTab] = useState<"devam-edenler" | "tamamlananlar">("devam-edenler");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const displayedCourses = mockCourses.filter(course => 
    activeTab === "devam-edenler" ? course.progress < 100 : course.progress === 100
  );

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : mockCourses.filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center justify-between px-6 md:px-8 relative z-20 shadow-sm">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px] text-slate-500">book_4</span>
          Eğitimlerim
        </h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
          <span className="text-sm font-semibold text-slate-600 dark:text-slate-300">TR</span>
        </div>
      </header>

      {/* Dashboard Body */}
      <div className="flex-1 w-full max-w-7xl mx-auto p-6 md:p-8 space-y-8">
        {/* Navigation & Tabs Area */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex p-1 bg-slate-200/60 dark:bg-slate-800/60 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("devam-edenler")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "devam-edenler"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">motion_photos_on</span>
              Devam Edenler
            </button>
            <button
              onClick={() => setActiveTab("tamamlananlar")}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                activeTab === "tamamlananlar"
                  ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm ring-1 ring-slate-900/5 dark:ring-white/10"
                  : "text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Tamamlananlar
            </button>
          </div>

          <div className="relative z-30" ref={searchRef}>
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              placeholder="Eğitim Ara..." 
              className="w-full sm:w-72 pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 dark:focus:ring-white/10 transition-shadow text-slate-900 dark:text-white"
            />
            
            {/* Live Search Autocomplete Dropdown */}
            {isSearchOpen && searchQuery.trim() !== "" && (
              <div className="absolute top-full right-0 mt-2 w-full sm:w-80 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2">
                {searchResults.length > 0 ? (
                  <ul className="max-h-80 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-700/50">
                    {searchResults.map((course) => (
                      <li key={course.id}>
                        <Link href={`/courses/${course.id}`} className="flex items-center gap-3 p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                          <img src={course.image} alt={course.title} className="w-12 h-10 object-cover rounded-md flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{course.title}</p>
                            <p className="text-xs font-medium text-slate-500 truncate">% {course.progress} Tamamlandı</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-sm font-medium text-slate-500">
                    "{searchQuery}" aramasına uygun eğitim bulunamadı.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedCourses.length === 0 ? (
            <div className="col-span-full py-16 flex items-center justify-center flex-col gap-4">
              <span className="material-symbols-outlined text-[48px] text-slate-300 dark:text-slate-700">inventory_2</span>
              <p className="text-slate-500 font-medium">Bu sekmede gösterilecek eğitim bulunmuyor.</p>
            </div>
          ) : (
            displayedCourses.map((course) => (
              <article key={course.id} className="group bg-white dark:bg-slate-800/80 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col hover:shadow-md transition-all duration-300">
                <div className="relative h-44 bg-slate-100 dark:bg-slate-900">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                    {course.badge}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                    {course.title}
                  </h3>
                  <div className="mt-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-semibold ${course.progress === 100 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-600 dark:text-slate-400'}`}>
                        {course.progress === 100 ? 'Tamamlandı' : course.statusText}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        %{course.progress}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 mb-5 overflow-hidden">
                      <div
                        className={`${course.progress === 100 ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-slate-900 dark:bg-slate-300'} h-1.5 rounded-full transition-all duration-1000`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                      <div className="flex space-x-2">
                        {course.icons.map((icon, idx) => (
                          <span key={idx} className="flex items-center gap-1 text-[11px] font-bold text-slate-500 dark:text-slate-400">
                            <span className="material-symbols-outlined text-[14px]">{icon.type}</span>
                            {icon.label}
                          </span>
                        ))}
                      </div>
                      <Link href={course.progress === 100 ? "/certificates" : "/course-player"} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-white text-white dark:text-slate-900 text-xs font-bold transition-all shadow-sm">
                        {course.progress === 0 ? 'Başlat' : course.progress === 100 ? 'Sertifikayı Gör' : 'Devam Et'}
                        <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
