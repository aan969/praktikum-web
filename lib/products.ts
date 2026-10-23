// lib/products.ts
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "fashion" | "food" | "electronics";
  inStock: boolean;
}

export async function getProducts(): Promise<Product[]> {
  return [
    { id: "1", slug: "laptop", name: "Laptop", price: 12000000, category: "electronics", inStock: true },
    { id: "2", slug: "kaos", name: "Kaos", price: 85000, category: "fashion", inStock: true },
    { id: "3", slug: "kopi", name: "Kopi", price: 25000, category: "food", inStock: false },
  ];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
}