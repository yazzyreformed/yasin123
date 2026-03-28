import Link from "next/link";
import React from "react";
import Sidebar from "../../components/sidebar";

export default function CertificatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased font-sans">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative custom-scrollbar">
        {children}
      </main>
    </div>
  );
}
