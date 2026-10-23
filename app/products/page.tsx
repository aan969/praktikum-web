import { getProducts } from "@/lib/products";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Daftar Produk (SSG)</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-sm bg-white">
            <h2 className="font-semibold text-lg">{product.name}</h2>
            <p className="text-blue-600 font-medium mb-3">Rp {product.price.toLocaleString("id-ID")}</p>
            <Link
              href={`/products/${product.slug}`}
              className="inline-block bg-blue-600 text-white text-sm px-3 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}