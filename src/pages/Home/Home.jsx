import SwipperBigCards from "../../components/SwipperBigCards/SwipperBigCards";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import { categoriesProduct, categories } from "../../data/data";
import PartyCakes from "../../components/PartyCakes/PartyCakes";
import ContactSection from "../../components/ContactSection/ContactSection";

function Home() {
  return (
    <main className="overflow-hidden pb-2 flex flex-col gap-[50px]">
      <SwipperBigCards />
      <ProductCategories categoriesProduct={categoriesProduct} />
      {categories.map((category) => {
        return <PartyCakes category={category} />;
      })}
      <ContactSection />
    </main>
  );
}

export default Home;
