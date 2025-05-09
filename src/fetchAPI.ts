import type { Product } from "./types";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return await res.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product with ID ${id}`);
  return await res.json();
}
