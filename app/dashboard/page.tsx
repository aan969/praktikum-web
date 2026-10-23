"use client";

import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    setNow(new Date().toLocaleTimeString("id-ID"));
  }, []);

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Dashboard (SSR)</h1>
      <p className="text-lg text-gray-700">
        Waktu server/client saat permintaan ini diproses:{" "}
        <span className="font-mono font-semibold text-blue-600">
          {now || "Memuat..."}
        </span>
      </p>
      <p className="text-xs text-gray-400 mt-4">
        Refresh halaman — waktu akan selalu diperbarui secara dinamis.
      </p>
    </main>
  );
}