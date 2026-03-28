"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Handle any login credentials and proceed
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate a brief network request for a premium feel
    setTimeout(() => {
      router.push("/dashboard");
    }, 1200);
  };

  return (
    <main className="min-h-screen flex bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-500/30 selection:text-blue-900 dark:selection:text-blue-100">
      {/* Left Visual Area (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 origin-center scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1920&h=1080')",
          }}
        />
        
        {/* Glassmorphic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-900/90 backdrop-blur-[2px]" />

        <div className="relative z-10 p-12">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-slate-900 font-black text-2xl tracking-tighter">BG</span>
          </div>
        </div>

        <div className="relative z-10 p-12 pb-20">
          <div className="space-y-6">
            <h1 className="text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
              Kurumsal Eğitimde <br />
              <span className="text-blue-400">Yeni Nesil Deneyim</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-md leading-relaxed">
              Çalışanlarınızın gelişimini destekleyin, modern ve etkileşimli eğitim içerikleriyle geleceğe hazırlanın.
            </p>
          </div>
          
          {/* Decorative stats/badges */}
          <div className="flex gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 max-w-[200px]">
              <div className="font-black text-3xl text-white mb-1">10k+</div>
              <div className="text-sm font-medium text-slate-400">Aktif Öğrenci</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 max-w-[200px]">
              <div className="font-black text-3xl text-white mb-1">98%</div>
              <div className="text-sm font-medium text-slate-400">Başarı Oranı</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Login Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
        {/* Decorative background blurs for dark mode */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none hidden dark:block" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none hidden dark:block" />

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-slate-900 dark:bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white dark:text-slate-900 font-black text-lg">BG</span>
            </div>
            <span className="text-xl font-bold tracking-tight uppercase">
              Baynal Group
            </span>
          </div>

          <div className="mb-10 text-left">
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight">
              Tekrar Hoş Geldiniz!
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Sisteme istediğiniz herhangi bir bilgi ile giriş yapabilirsiniz. Test modunda çalışmaktadır.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block" htmlFor="email">
                  E-posta Adresi
                </label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    mail
                  </span>
                  <input
                    id="email"
                    type="email"
                    placeholder="ornek@baynalgroup.com"
                    defaultValue="demo@baynalgroup.com"
                    required
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 block" htmlFor="password">
                    Şifre
                  </label>
                  <Link href="#" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Şifremi Unuttum
                  </Link>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                    lock
                  </span>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    defaultValue="demo1234"
                    required
                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl py-3.5 pl-11 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 py-2">
              <label className="relative flex cursor-pointer items-center rounded-full p-0" htmlFor="remember">
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-300 dark:border-slate-700 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10"
                  id="remember"
                  defaultChecked
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </label>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 cursor-pointer select-none" htmlFor="remember">
                Beni Hatırla
              </label>
            </div>

            {/* Submit Button */}
            <button
              disabled={isLoading}
              type="submit"
              className="w-full relative flex items-center justify-center py-3.5 px-4 bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-900/10 dark:bg-white dark:hover:bg-slate-100 dark:focus:ring-white/10 text-white dark:text-slate-900 rounded-xl font-bold text-sm lg:text-base transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
            >
              <span className={`transition-all duration-300 ${isLoading ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                Giriş Yap
              </span>
              
              {/* Loading Spinner inside button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isLoading ? "opacity-100" : "opacity-0"}`}>
                <svg className="animate-spin h-5 w-5 text-white dark:text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mt-10">
            Hesabınız yok mu?{' '}
            <Link href="#" className="text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all">
              Kurum kodunuz ile kaydolun
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
