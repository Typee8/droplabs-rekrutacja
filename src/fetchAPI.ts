import type { Product } from "./types";

export async function fetchAllProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  console.log("products fetched");
  return await res.json();
}

export async function fetchProduct(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch product with ID ${id}`);
  console.log("product fetched");
  return await res.json();
}
