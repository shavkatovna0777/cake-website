import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import MenyuCard from "../../components/Cards/MenyuCard.jsx";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import TitleAndBtn from "../../components/TitleAndBtn/TitleAndBtn";
import { categories, categoriesProduct } from "../../data/data.js";
function Products() {
  return (
    <div>
      <div className="container">
        <Breadcrumb />
        <TitleAndBtn title={"Menyu"} />
        <div className="flex flex-wrap justify-center gap-4 py-8">
          {categories.map((category) => (
            <MenyuCard category={categories}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
