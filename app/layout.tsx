import "./globals.css";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Praktikum Web 2 - Modul 4",
  description: "SSR, SSG, dan ISR pada Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav className="bg-blue-900 text-white p-4 flex gap-6 shadow-md">
          <Link href="/" className="hover:underline font-medium">Beranda</Link>
          <Link href="/products" className="hover:underline font-medium">Produk</Link>
          <Link href="/dashboard" className="hover:underline font-medium">Dashboard</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}