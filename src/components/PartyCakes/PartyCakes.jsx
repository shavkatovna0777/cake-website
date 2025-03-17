import ProductCard from "../Cards/ProductCard";
import TitleAndBtn from "../TitleAndBtn/TitleAndBtn";

function PartyCakes({ category }) {
  return (
    <section>
      <div className="container mx-auto px-4">
        <TitleAndBtn title={category.title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((cake) => (
            <ProductCard cake={cake}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartyCakes;
