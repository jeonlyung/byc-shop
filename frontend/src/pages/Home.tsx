
import React from "react";
import { ProductCard } from "../components/ProductCard";

const dummyProducts = [
  { id: "1", name: "프라임 여상하 2호", price: 29000, imageUrl: "/images/product1.jpg" },
  { id: "2", name: "베이직 남상하", price: 31000, imageUrl: "/images/product2.jpg" },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">BYC 신상품</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
