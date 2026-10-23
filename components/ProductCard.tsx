// components/ProductCard.tsx
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mt-1">Rp {product.price.toLocaleString("id-ID")}</p>
      <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded text-gray-700 capitalize">
        {product.category}
      </span>
      <div className="mt-4">
        <button
          onClick={() => onAddToCart?.(product)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm font-medium transition"
        >
          Tambah ke Keranjang
        </button>
      </div>
    </div>
  );
}