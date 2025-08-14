import React from "react";
import products from "../data/products.json";
import ProductGrid from "../components/layout/ProductGrid";

export default function HomePage() {
  return <ProductGrid products={products} />;
}
