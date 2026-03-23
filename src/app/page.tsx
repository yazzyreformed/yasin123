"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-4">
      <div className="flex w-full max-w-5xl bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl min-h-[700px]">
        {/* Left Side: Image/Branding */}
        <div className="hidden lg:flex lg:w-1/2 relative bg-primary/10 overflow-hidden items-center justify-center p-12">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-80"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYR6KVur2byYmi95Oxh8m8kro14SQZTZ3lhW6L0pm_uWgcpwW8McbMKDB6E--K17bz4FsG3Wd_ue4qeg74l44XX2gZNf5ewLxR9ISXiWYX117IDtRMshFBgdLBt1w3U_-75jP0Jhs5SdiMCJ76xoHtapwU_bfcgsBoSJr09k4aO1Egk_wDQ9tW6GdgoXGQxaFA_laWxjfpJLeAzOoOehK2gf2_MUTDzBkBBoIw_tnlRdMBCZ4XDpjZGWyYISU51mcZdN9nzxpmqVIU')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent" />
          </div>
          <div className="relative z-10 text-white">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-white p-2 rounded-lg">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-black tracking-tight">BAYNAL GROUP</h1>
            </div>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Geleceği Birlikte <br />
              İnşa Ediyoruz
            </h2>
            <p className="text-white/80 text-lg max-w-md">
              LMS platformumuza hoş geldiniz. Eğitimlerinize ve gelişim
              yolculuğunuza buradan devam edebilirsiniz.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 py-12">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="bg-primary p-1.5 rounded-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
              BAYNAL GROUP
            </h2>
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              Giriş Yap
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Hesap bilgilerinizi girerek oturum açın.
            </p>
          </div>

          {/* Actually redirecting to dashboard for demo purposes */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                htmlFor="email"
              >
                E-posta
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  mail
                </span>
                <input
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-slate-100"
                  id="email"
                  placeholder="eposta@baynalgroup.com"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
                htmlFor="password"
              >
                Şifre
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  lock
                </span>
                <input
                  className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-slate-900 dark:text-slate-100"
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  required
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  type="button"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                  type="checkbox"
                />
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 transition-colors">
                  Beni Hatırla
                </span>
              </label>
              <Link
                className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                href="#"
              >
                Şifremi Unuttum
              </Link>
            </div>

            {/* Submit Button */}
            <button
              className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-dark hover:translate-y-[-1px] transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              Giriş Yap
              <span className="material-symbols-outlined text-xl">login</span>
            </button>
          </form>

          {/* Social Login Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-slate-500">
                veya şununla devam et
              </span>
            </div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Google Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuHF3DR2cr6zSUN-DpY4x9LIvELoeXHJpnCKGClI3qrdA5gha7yxsosC-xwAGIbFkym-4x8Dm_F-4R6NGVdVZ5yClMVtkK0jkQmfbQs9_K90inF_-KjQjEnCR2f9W9_4wxAmzrFyXg45sYAZeAIEPKKyuIlJ4oGGUvd5zfz0nxPtvxDZF75sccCHPYJYjnFFmf7rZDAnUZBHs-qjAaw8h0dJqE_gYYI3xk2QU2ouL7hSpLo0gx_X6wJoLralx6Q5DzYMTfpc1I2cLs"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Microsoft Logo"
                className="w-5 h-5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYZU_zYb733IJdzOB1EOce-x2o0-_0_GeI9cjbRBVJYAcqqVRGTtL0_LPkWDjheJGXwltw6b0CoeAXhzIcHMSTTBiIkNGE_eLdj44pmBFBSX5CPlkNJN96asBXA4EBbDvCYLkw983ijGlIJzhaihHUunqXWcoOe8OywQMEmu3EI3xQ1Lnc1JOCjk5wMOGeefGRVgAlVhrmwgMHgGjxaNsZ1oeMBMJmRmE36XA_DzEEIb1JRG515LBsBSor1uqjiAyf5K_ZTnbwdiyI"
              />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Microsoft
              </span>
            </button>
          </div>

          {/* Footer Link */}
          <div className="mt-10 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Hesabınız yok mu?{" "}
              <Link
                className="text-primary font-bold hover:underline"
                href="#"
              >
                Hemen Kaydolun
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
