import { Link } from "react-router-dom";
import Img from "../LazyLoadImg/Img";

function MenyuCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      key={category.id}
      className="w-full sm:w-[calc(50%-16px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(20%-16px)] 
                     bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <Img
          src={category.img}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-gray-800">{category.title}</h3>
      </div>
    </Link>
  );
}

export default MenyuCard;
