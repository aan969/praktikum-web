// app/page.tsx
"use client";

import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";
import { formatList, sum } from "@/utils/format";

const sampleProducts: Product[] = [
  { id: "1", name: "Laptop Gaming Pro", price: 15000000, category: "electronics", inStock: true },
  { id: "2", name: "Jaket Denim Vintage", price: 350000, category: "fashion", inStock: true },
  { id: "3", name: "Kopi Arabika Special", price: 75000, category: "food", inStock: true },
];

export default function HomePage() {
  const productNames = formatList(sampleProducts, (p) => p.name);
  const totalPrice = sum(sampleProducts, (p) => p.price);

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Katalog Produk Toko</h1>
      
      <div className="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Ringkasan Sistem (Fungsi Generik)</h2>
        <p className="text-blue-800 text-sm mb-1"><strong>Daftar Produk:</strong> {productNames}</p>
        <p className="text-blue-800 text-sm"><strong>Total Valuasi Harga:</strong> Rp {totalPrice.toLocaleString("id-ID")}</p>
      </div>

      <h2 className="text-xl font-semibold mb-4">Daftar Kartu Produk</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={(p) => alert(`Berhasil menambahkan "${p.name}" ke keranjang!`)}
          />
        ))}
      </div>
    </main>
  );
}