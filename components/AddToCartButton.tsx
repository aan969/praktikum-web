"use client";

import { useState } from "react";
import { Product } from "@/types/product";

export default function AddToCartButton({ product }: { product: Product }) {
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => setAdded(true)}
      className={`mt-2 w-full px-3 py-2 rounded text-white text-sm font-medium transition ${
        added ? "bg-green-600" : "bg-blue-600 hover:bg-blue-700"
      }`}
    >
      {added ? "Ditambahkan ✓" : "Tambah ke Keranjang"}
    </button>
  );
}