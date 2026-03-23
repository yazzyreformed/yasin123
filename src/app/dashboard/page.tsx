import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Progress Section */}
      <section data-purpose="progress-tracker">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-primary dark:text-slate-100">İlerlemem</h2>
          <Link className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline" href="/my-trainings">
            Tümünü Gör
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Active Courses Widget */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Tamamlanan Eğitimler
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-white mt-1">12 / 15</h3>
              <p className="text-xs text-green-600 dark:text-green-400 mt-2 font-medium">
                ↑ %80 Tamamlanma
              </p>
            </div>
            <div className="relative w-20 h-20">
              <svg className="w-20 h-20" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100 dark:text-slate-700"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                />
                <circle
                  className="text-blue-600 progress-ring-circle"
                  cx="50"
                  cy="50"
                  fill="transparent"
                  r="40"
                  stroke="currentColor"
                  strokeDasharray="251.2"
                  strokeDashoffset="50.24"
                  strokeLinecap="round"
                  strokeWidth="8"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-sm font-bold dark:text-white">
                %80
              </span>
            </div>
          </div>

          {/* Points Widget */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Kazanılan Puanlar
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-white mt-1">4.250</h3>
              <p className="text-xs text-amber-600 dark:text-amber-500 mt-2 font-medium">
                Ayın Liderlik Tablosunda #4
              </p>
            </div>
            <div className="w-12 h-12 bg-amber-50 dark:bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 dark:text-amber-400">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Learning Hours */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Öğrenme Saati
              </p>
              <h3 className="text-3xl font-bold text-primary dark:text-white mt-1">24.5 S</h3>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-medium">
                Haftalık Hedef: 30 S
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 dark:text-blue-400">
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Upcoming Courses */}
        <div className="lg:col-span-3 space-y-6" data-purpose="upcoming-courses">
          <h2 className="text-lg font-bold text-primary dark:text-slate-100">
            Yaklaşan Eğitimler
          </h2>
          <div className="space-y-4">
            {/* Course Card 1 */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0 flex items-center justify-center text-primary dark:text-blue-400 font-bold">
                LDR-01
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 uppercase">
                    Liderlik
                  </span>
                  <span className="text-xs text-slate-400">22 Haz 2024</span>
                </div>
                <h4 className="text-lg font-bold text-primary dark:text-slate-100 mt-1">
                  Etkin Ekip Yönetimi ve İletişim
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  Ekiplerin verimliliğini artırmak için gerekli temel iletişim stratejileri.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="user"
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZ8_yDTfAnxS7_x-fH_6_acLXTC5v2bXBWr-0wv1KcA5ySNJNXiOviK_jJhSs3A7dzyI1EyQNFsYB0pLvc5LnFov58Ix2l9KZuo0y10ooE6gjCH38YgaYu6Mhe-bWKDZw0P7MHHiuWur0k1hDxvMIz50SK_uPVpTRuSdjz4bDw6vs28xBd54XZp0oacmtAngRAAQa60-D1ZLKAuRBVCA84iDYs5GJajoclqdQqy2bg1GnxyZshe5y10Xxft2nhuCx_fiQ7YsxMohZ"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="user"
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxiOqp94ac7oa6XyqfsbmJ06RoSLD3imWmT8qZTdnHYSpiTjqVAelecJVRIUuDETaSKz-Bav-5judComF8NXl46k0vQ3y0l2XP755r9ptCSouQDWH8wsjkhQV8xxVAqTGNJ9blMu5m5vT2L3zQm5yeM_d3j6Yc6uDi_7NAWVL8oMPc1Ot35qPzhnN6Ofw2bb-PtpmpAmrOh-UePMzGpSX6VOcanhJ8FUIAwBeP09YXkKdweU1PtTcOxwGf0PSwTCHr0E8-ytZeXIlt"
                    />
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-300">
                      +14
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                    Eğitime Başla
                  </button>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex-shrink-0 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold">
                DGT-04
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 uppercase">
                    Teknoloji
                  </span>
                  <span className="text-xs text-slate-400">25 Haz 2024</span>
                </div>
                <h4 className="text-lg font-bold text-primary dark:text-slate-100 mt-1">
                  Yapay Zeka Araçları ve Verimlilik
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  Günlük iş süreçlerinde AI entegrasyonu ile zaman tasarrufu.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="user"
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAysDz32YmNzudxotdEWkiRWk1DYsgIYrCROzfDJaQi2exEmDr2oRrf5IsHsXMD4qKkNCsfJEPfAm-jx4ir6rIPopLklaVbBuZl-QhxDBbvSgTdELIr4rMopT_Ew1K0A9QVTjbif8aTzBq7AgLPQCcNKjJDj4NRqrzO2CbllB1S2-5SJXP1tXDa8QTWuzXPe8okUi0IpcDpZnYqUQQ6EVF4Jm7cMsbVh66G1n5AcQmBnbDxdiMiEV2WPIwyZuG7c1RxMurjYt2B8vCW"
                    />
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-500 dark:text-slate-300">
                      +45
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors">
                    Eğitime Başla
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
