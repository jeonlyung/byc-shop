
import React from "react";

export function ProductCard({ product }: { product: any }) {
  return (
    <div className="border p-2 rounded-lg">
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <h2 className="text-lg font-medium mt-2">{product.name}</h2>
      <p className="text-red-500">{product.price.toLocaleString()}원</p>
    </div>
  );
}
