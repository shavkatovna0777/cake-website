import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Button } from "../../ui/Button.jsx";
import Img from "../LazyLoadImg/Img.jsx";

export default function ProductCategories({ categoriesProduct }) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[36px] font-semibold ">Kategoriyalar</h2>
          <Button variant="ghost" className="flex items-center gap-[5px]">
            Barchasini ko‘rish
            <HiOutlineArrowSmallRight />
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {categoriesProduct.map((category, index) => (
            <div
              key={index}
              className="text-center border rounded-lg p-2 shadow-sm"
            >
              <Img
                src={category.image}
                alt={category.name}
                className="w-full h-32 object-cover rounded-md"
              />
              <p className="mt-2 text-sm font-semibold">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
