import React from "react";
import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import { categoriesProduct } from "../../data/data";
import PartyCakes from "../../components/PartyCakes/PartyCakes";
import MiniCakes from "../../components/MiniCakes/MiniCakes";
import BigCakes from "../../components/BigCakes/BigCakes";
import BigPies from "../../components/BigPies/BigPies";
import CheeseCakes from "../../components/CheeseCakes/CheeseCakes";
import ContactSection from "../../components/ContactSection/ContactSection";

function Home() {
  return (
    <main className="overflow-hidden pb-2">
      <SwipperBigCards />
      <ProductCategories categoriesProduct={categoriesProduct} />
      <PartyCakes />
      <MiniCakes />
      <BigCakes title={""} datas={[]} to={"to"} />
      <BigPies />
      <CheeseCakes />
      <ContactSection />
    </main>
  );
}

export default Home;
