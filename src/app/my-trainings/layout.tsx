import Link from "next/link";
import React from "react";
import Sidebar from "../../components/sidebar";

export default function MyTrainingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased font-sans">
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative custom-scrollbar">
        {children}
      </main>
    </div>
  );
}
