import { Product } from "@/types/product";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 text-sm capitalize">Kategori: {product.category}</p>
      <p className="text-blue-600 font-bold mt-2">Rp {product.price.toLocaleString("id-ID")}</p>
      
      {/* Panggil komponen Client Component di sini */}
      <AddToCartButton product={product} />
    </div>
  );
}