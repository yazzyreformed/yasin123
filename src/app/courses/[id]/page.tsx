"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Reuse the exact same mock data from MyTrainingsPage for consistency
const mockCourses = [
  {
    id: "1",
    title: "İş Sağlığı ve Güvenliği Eğitimi (2024)",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600&h=450",
    badge: "SCORM",
    progress: 65,
    statusText: "İlerleme",
    desc: "Zorunlu İSG eğitimlerinin detaylı ve interaktif modüllerle sunulmuş güncel versiyonudur.",
    duration: "4 Saat 15 Dk",
    instructor: "Uzman Ali Yılmaz",
    modules: [
      { id: 1, title: "Modül 1: Temel Kavramlar", duration: "45 Dk", completed: true },
      { id: 2, title: "Modül 2: Risk Analizi", duration: "1 Saat", completed: true },
      { id: 3, title: "Modül 3: Acil Durum Planları", duration: "1 Saat 30 Dk", completed: false },
    ],
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
    desc: "Marka bilinirliğini artırmak ve dönüşüm oranlarını analiz etmek için ileri seviye stratejiler.",
    duration: "12 Saat 30 Dk",
    instructor: "Doç. Dr. Ayşe Kaya",
    modules: [
      { id: 1, title: "SEO Temelleri", duration: "4 Saat", completed: true },
      { id: 2, title: "Meta Business Suite ve Reklamlar", duration: "5 Saat", completed: false },
      { id: 3, title: "Google Analytics 4 Çözümleri", duration: "3 Saat 30 Dk", completed: false },
    ],
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
    desc: "Kriz anlarında takım yönetimi ve karar mekanizmalarının etkinleştirilmesi.",
    duration: "6 Saat",
    instructor: "Kemal Demir",
    modules: [
      { id: 1, title: "Liderlik Stilleri", duration: "2 Saat", completed: false },
      { id: 2, title: "Çatışma Yönetimi", duration: "2 Saat", completed: false },
      { id: 3, title: "Değerlendirme Sınavı", duration: "2 Saat", completed: false },
    ],
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
    desc: "Büyük veri analizi için Python kullanımına giriş ve popüler kütüphanelerin uygulamalı eğitimi.",
    duration: "24 Saat",
    instructor: "Prof. Dr. Sinan Can",
    modules: [
      { id: 1, title: "Python'a Giriş", duration: "6 Saat", completed: true },
      { id: 2, title: "Pandas ve Numpy ile Veri Manipülasyonu", duration: "10 Saat", completed: true },
      { id: 3, title: "Make Machine Learning Model", duration: "8 Saat", completed: true },
    ],
    icons: [
      { type: "integration_instructions", label: "UYGULAMA" }
    ]
  }
];

export default function CourseDetailPage() {
  const params = useParams();
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      const found = mockCourses.find(c => c.id === params.id);
      setCourse(found || null);
    }
  }, [params]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col items-center gap-4 animate-pulse">
          <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 border-t-slate-900 dark:border-t-white rounded-full animate-spin"></div>
          <p className="text-slate-500 font-bold tracking-widest uppercase text-sm">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Top Header */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-6 md:px-8 relative z-10 shadow-sm sticky top-0">
        <div className="flex items-center gap-4">
          <Link href="/my-trainings" className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </Link>
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight hidden md:block line-clamp-1 max-w-[400px]">
            {course.title}
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg text-sm font-bold shadow-sm hover:bg-slate-800 dark:hover:bg-white transition-all">
            <span className="material-symbols-outlined text-[18px]">{course.progress === 100 ? 'workspace_premium' : 'play_arrow'}</span>
            {course.progress === 100 ? 'Sertifikayı İndir' : 'Eğitime Devam Et'}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full bg-slate-900 relative overflow-hidden h-[300px] md:h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${course.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
        <div className="absolute inset-0 max-w-5xl mx-auto px-6 md:px-8 flex flex-col justify-end pb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md text-[11px] uppercase font-black tracking-widest bg-white/10 text-white backdrop-blur-md border border-white/20">
              {course.badge}
            </span>
            <span className={`px-3 py-1 rounded-md text-[11px] uppercase font-black tracking-widest ${course.progress === 100 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-blue-500/20 text-blue-400 border-blue-500/30'} flex items-center gap-1 backdrop-blur-md border`}>
              <span className="material-symbols-outlined text-[14px]">{course.progress === 100 ? 'check_circle' : 'trending_up'}</span>
              % {course.progress} Tamamlandı
            </span>
          </div>
          <h2 className="text-2xl md:text-5xl font-black text-white max-w-3xl leading-tight mb-4 tracking-tight drop-shadow-md">
            {course.title}
          </h2>
          <p className="text-slate-300 md:text-lg max-w-2xl leading-relaxed font-medium">
            {course.desc}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full max-w-5xl mx-auto p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 -mt-8 relative z-10">
        
        {/* Left Col: Modules */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="material-symbols-outlined text-[24px]">view_list</span>
              Eğitim İçeriği ve Modüller
            </h3>
            
            <div className="space-y-4">
              {course.modules?.map((mod: any, i: number) => (
                <div key={mod.id} className={`p-4 rounded-2xl border ${mod.completed ? 'bg-emerald-50/50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/40' : 'bg-slate-50 border-slate-200 dark:bg-slate-800/50 dark:border-slate-700'} flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-colors`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${mod.completed ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400' : 'bg-white dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 shadow-sm'}`}>
                      <span className="material-symbols-outlined text-[22px]">{mod.completed ? 'check_circle' : 'lock'}</span>
                    </div>
                    <div>
                      <h4 className={`font-bold text-base ${mod.completed ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>{mod.title}</h4>
                      <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-wider">{mod.duration}</p>
                    </div>
                  </div>
                  <button className={`sm:ml-4 px-5 py-2 rounded-lg text-xs font-bold transition-all w-full sm:w-auto ${mod.completed ? 'bg-white dark:bg-slate-800 text-slate-600 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-sm' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'}`}>
                    {mod.completed ? 'Tekrar İzle' : 'Kilitli'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Col: About Instructor & Details */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Özet Bilgiler</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">person</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Eğitmen</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{course.instructor}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">schedule</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Toplam Süre</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{course.duration}</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">translate</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Dil</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">Türkçe</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
