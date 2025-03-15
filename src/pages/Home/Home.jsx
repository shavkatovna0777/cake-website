import React from "react";
import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import { categoriesProduct } from "../../data/data";
import PartyCakes from "../../components/PartyCakes/PartyCakes";

function Home() {
  return (
    <main className="overflow-hidden pb-2">
      <SwipperBigCards />
      <ProductCategories categoriesProduct={categoriesProduct} />
      <PartyCakes />
    </main>
  );
}

export default Home;
