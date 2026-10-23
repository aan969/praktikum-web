import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">Selamat Datang di Praktikum Web 2</h1>
      <p className="text-gray-600 mb-6">Modul 3: React Server Components & Suspense</p>
      <Link
        href="/products"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Lihat Daftar Produk
      </Link>
    </main>
  );
}