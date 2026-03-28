"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

const BATCH_TITLES = [
  "Temel Proje Yönetimi",
  "Dijital Pazarlama 101",
  "İleri Seviye Excel Kullanımı",
  "Liderlik ve Gelişim",
  "Kriz İletişimi Stratejileri",
  "Siber Güvenlik Eğitimi",
  "Python ile Veri Analizi",
  "İş Yerinde Etkili İletişim",
];

const BATCH_IMAGES = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=600&h=400",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=600&h=400",
];

const BATCH_BADGES = ["Yeni", "Zorunlu", "Popüler", "Sertifikalı", "Mesleki", "Kişisel Gelişim"];
const BATCH_CATEGORIES = ["Kişisel Gelişim", "Pazarlama", "Teknoloji", "Kişisel Gelişim", "Kişisel Gelişim", "Teknoloji", "Teknoloji", "Kişisel Gelişim"];

const allCourses = Array.from({ length: 24 }).map((_, i) => ({
  id: `cat-${i + 1}`,
  title: BATCH_TITLES[i % BATCH_TITLES.length] + (i >= 8 ? ` (Bölüm ${Math.floor(i / 8) + 1})` : ""),
  category: BATCH_CATEGORIES[i % BATCH_CATEGORIES.length],
  image: BATCH_IMAGES[i % BATCH_IMAGES.length],
  badge: BATCH_BADGES[i % BATCH_BADGES.length],
  duration: `${Math.floor(Math.random() * 3) + 1} Saat ${Math.floor(Math.random() * 60)} Dk`,
  level: i % 3 === 0 ? "İleri Seviye" : i % 2 === 0 ? "Orta Seviye" : "Başlangıç",
  instructor: "Ahmet Yılmaz",
  enrolledUserCount: Math.floor(Math.random() * 500) + 50,
}));

export default function AllCoursesPage() {
  const [activeCategory, setActiveCategory] = useState("Tümü");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = ["Tümü", "Kişisel Gelişim", "Teknoloji", "Pazarlama", "Zorunlu Eğitimler"];

  const displayedCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesCategory = activeCategory === "Tümü" || course.category === activeCategory || (activeCategory === "Zorunlu Eğitimler" && course.badge === "Zorunlu");
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center">
      {/* Top Header */}
      <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 p-6 md:p-8 shrink-0 flex flex-col gap-6 items-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
              <span className="material-symbols-outlined text-blue-600 text-3xl">explore</span>
              Eğitim Kataloğu
            </h1>
            <p className="text-slate-500 font-medium mt-1">Sizin için hazırlanan tüm eğitimleri keşfedin ve gelişiminize yön verin.</p>
          </div>

          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined text-slate-400 absolute left-4 top-1/2 -translate-y-1/2">
              search
            </span>
            <input
              type="text"
              placeholder="Eğitim, kategori veya eğitmen ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-transparent rounded-xl focus:ring-2 focus:ring-blue-500/50 transition-all font-medium text-sm outline-none dark:text-white"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-3 overflow-x-auto w-full max-w-7xl pb-2 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-sm ${
                activeCategory === cat
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md transform -translate-y-0.5"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Main Grid content */}
      <main className="w-full max-w-7xl p-6 md:p-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedCourses.length === 0 ? (
            <div className="col-span-full py-16 flex items-center justify-center flex-col gap-4">
              <span className="material-symbols-outlined text-[48px] text-slate-300 dark:text-slate-700">inventory_2</span>
              <p className="text-slate-500 font-medium text-lg">Bu kategori veya aramaya uygun eğitim bulunamadı.</p>
              <button 
                onClick={() => {setSearchQuery(""); setActiveCategory("Tümü");}}
                className="mt-2 text-blue-600 font-bold hover:underline"
              >
                Filtreleri Temizle
              </button>
            </div>
          ) : (
            displayedCourses.map((course) => (
              <article 
                key={course.id} 
                className="group bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-500 relative"
              >
                {/* Image Section */}
                <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
                  
                  {/* Badge Overlay */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md backdrop-blur-md ${course.badge === 'Zorunlu' ? 'bg-red-500/90 text-white' : 'bg-white/90 text-slate-900'}`}>
                      {course.badge}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md flex items-center justify-center text-white transition-colors">
                      <span className="material-symbols-outlined text-[18px]">favorite_border</span>
                    </button>
                  </div>

                  {/* Duration & Level overlays mapping bottom of image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/90">
                    <span className="flex items-center gap-1.5 text-xs font-bold drop-shadow-md">
                      <span className="material-symbols-outlined text-[16px]">schedule</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold drop-shadow-md">
                      <span className="material-symbols-outlined text-[16px]">leaderboard</span>
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Text/Details Section */}
                <div className="p-5 flex-grow flex flex-col relative z-20 bg-white dark:bg-slate-900 transition-transform duration-500 sm:group-hover:-translate-y-8">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug line-clamp-2 drop-shadow-sm">
                    {course.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mt-auto pt-3 text-slate-500 dark:text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[12px]">person</span>
                    </div>
                    <span className="text-xs font-semibold">{course.instructor}</span>
                    <span className="text-xs font-medium ml-auto flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">group</span>
                      {course.enrolledUserCount} k.
                    </span>
                  </div>
                </div>

                {/* The "Hover to Enroll" action overlay area that slides up from bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transform translate-y-full opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-300 z-30 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)]">
                  <Link href="/course-player" className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
                    Eğitime Kayıt Ol
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  </Link>
                </div>
                
                {/* Mobile "Hover to Enroll" equivalent - visible always on touch devices */}
                <div className="p-5 sm:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                  <Link href="/course-player" className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 active:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-sm transition-colors">
                    Eğitime Kayıt Ol
                    <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
