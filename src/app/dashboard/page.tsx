import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Performans Özeti</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Eğitim gelişiminiz ve güncel istatistikleriniz.
          </p>
        </div>
        <Link 
          href="/my-trainings"
          className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium rounded-lg transition-colors border border-slate-200 dark:border-slate-700 gap-2"
        >
          Tüm Eğitimlerim
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>

      {/* Progress Section */}
      <section data-purpose="progress-tracker">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Active Courses Widget */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Eğitim Tamamlama
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">12 / 15</h3>
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="material-symbols-outlined text-[14px]">trending_up</span>
                <span>%80 Başarı Oranı</span>
              </div>
            </div>
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 100 100">
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
                  className="text-slate-800 dark:text-slate-300 transition-all duration-1000 ease-out"
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
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-200">
                %80
              </span>
            </div>
          </div>

          {/* Points Widget */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Liderlik Puanı
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">4.250</h3>
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-[14px]">leaderboard</span>
                <span>Kurum İçi Sıralama: #4</span>
              </div>
            </div>
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">workspace_premium</span>
            </div>
          </div>

          {/* Learning Hours */}
          <div className="bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Eğitim Süresi
              </p>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">24.5 S</h3>
              <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                <span className="material-symbols-outlined text-[14px]">track_changes</span>
                <span>Aylık Hedef: 30 S</span>
              </div>
            </div>
            <div className="w-14 h-14 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 flex-shrink-0">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Courses Outline */}
      <section data-purpose="upcoming-courses">
        <div className="bg-white dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-slate-500">event</span>
              Yaklaşan Eğitimler
            </h2>
          </div>
          
          <div className="divide-y divide-slate-100 dark:divide-slate-700/50">
            {/* List Item 1 */}
            <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex-shrink-0">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">HAZ</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">22</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Liderlik
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 md:hidden">
                      <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                      22 Haz 2024
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">LDR-01</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">Etkin Ekip Yönetimi ve İletişim</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                    Ekiplerin verimliliğini artırmak için gerekli temel iletişim stratejileri ve güncel operasyonel uygulamalar.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-6 sm:mt-0 mt-2">
                <div className="flex -space-x-3 items-center">
                  <img alt="Katılımcı" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvZ8_yDTfAnxS7_x-fH_6_acLXTC5v2bXBWr-0wv1KcA5ySNJNXiOviK_jJhSs3A7dzyI1EyQNFsYB0pLvc5LnFov58Ix2l9KZuo0y10ooE6gjCH38YgaYu6Mhe-bWKDZw0P7MHHiuWur0k1hDxvMIz50SK_uPVpTRuSdjz4bDw6vs28xBd54XZp0oacmtAngRAAQa60-D1ZLKAuRBVCA84iDYs5GJajoclqdQqy2bg1GnxyZshe5y10Xxft2nhuCx_fiQ7YsxMohZ" />
                  <img alt="Katılımcı" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxiOqp94ac7oa6XyqfsbmJ06RoSLD3imWmT8qZTdnHYSpiTjqVAelecJVRIUuDETaSKz-Bav-5judComF8NXl46k0vQ3y0l2XP755r9ptCSouQDWH8wsjkhQV8xxVAqTGNJ9blMu5m5vT2L3zQm5yeM_d3j6Yc6uDi_7NAWVL8oMPc1Ot35qPzhnN6Ofw2bb-PtpmpAmrOh-UePMzGpSX6VOcanhJ8FUIAwBeP09YXkKdweU1PtTcOxwGf0PSwTCHr0E8-ytZeXIlt" />
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 z-10">
                    +14
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm whitespace-nowrap border border-slate-700">
                  Görüntüle
                </button>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="flex items-start gap-4">
                <div className="hidden md:flex flex-col items-center justify-center w-16 h-16 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex-shrink-0">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">HAZ</span>
                  <span className="text-lg font-black text-slate-900 dark:text-white">25</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Teknoloji
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1 md:hidden">
                      <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                      25 Haz 2024
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">DGT-04</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1">Sağlıkta Yeni Dijital Sistemler</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
                    Günlük iş süreçlerinde dijital sistem entegrasyonu ve hasta verilerinin güvenli yönetimi.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto gap-6 sm:mt-0 mt-2">
                <div className="flex -space-x-3 items-center">
                  <img alt="Katılımcı" className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAysDz32YmNzudxotdEWkiRWk1DYsgIYrCROzfDJaQi2exEmDr2oRrf5IsHsXMD4qKkNCsfJEPfAm-jx4ir6rIPopLklaVbBuZl-QhxDBbvSgTdELIr4rMopT_Ew1K0A9QVTjbif8aTzBq7AgLPQCcNKjJDj4NRqrzO2CbllB1S2-5SJXP1tXDa8QTWuzXPe8okUi0IpcDpZnYqUQQ6EVF4Jm7cMsbVh66G1n5AcQmBnbDxdiMiEV2WPIwyZuG7c1RxMurjYt2B8vCW" />
                  <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-600 dark:text-slate-300 z-10">
                    +45
                  </div>
                </div>
                <button className="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm whitespace-nowrap border border-slate-700">
                  Görüntüle
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
