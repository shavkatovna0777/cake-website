import { partyCakes } from "../../data/data";
import Img from "../LazyLoadImg/Img";
import TitleAndBtn from "../TitleAndBtn/TitleAndBtn";

function PartyCakes() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <TitleAndBtn />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partyCakes.map((cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-48 ">
                <Img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{cake.name}</h2>
                <p className="text-gray-600 text-sm mb-4">{cake.description}</p>
                <p className="font-bold text-lg mb-2">{cake.price}</p>
                <div className="text-xs text-gray-500 mb-4">
                  <p>O'lchamlari</p>
                  <p>{cake.dimensions}</p>
                </div>
                <button className="bg-teal-800 text-white py-2 px-4 w-full rounded">
                  Savatchaga qo'shish
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartyCakes;
