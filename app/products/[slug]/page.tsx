// app/products/[slug]/page.tsx
import { Suspense } from "react";
import { getProductBySlug, getProducts } from "@/lib/products";
import ProductSkeleton from "@/components/ProductSkeleton";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

async function ProductDetail({ slug }: { slug: string }) {
  const product = await getProductBySlug(slug);

  if (!product) return <p className="text-red-500">Produk tidak ditemukan.</p>;

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-1">
        Kategori: <span className="capitalize">{product.category}</span>
      </p>
      <p className="text-lg font-semibold text-blue-600">
        Rp {product.price.toLocaleString("id-ID")}
      </p>
    </div>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  return (
    <main className="p-8 max-w-xl mx-auto">
      <p className="text-sm text-gray-500 mb-4">
        Header halaman muncul instan, detail menyusul...
      </p>

      <Suspense fallback={<ProductSkeleton />}>
        <ProductDetail slug={resolvedParams.slug} />
      </Suspense>
    </main>
  );
}