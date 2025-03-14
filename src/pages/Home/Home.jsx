import React from "react";
import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";

function Home() {
  return (
    <main className="overflow-hidden">
      <SwipperBigCards />
      <ProductCategories catecategoriesProduct={categoriesProduct} />
    </main>
  );
}

export default Home;
