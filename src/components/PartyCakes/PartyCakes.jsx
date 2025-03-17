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
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <div className="relative">
                <Img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-48 object-cover"
                />
                {cake.discount && (
                  <div className="absolute top-0 right-0">
                    <div
                      className="bg-amber-100 text-amber-800 py-1 px-3 text-xs font-medium transform rotate-45"
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "-22px",
                        width: "100px",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 235, 200, 0.9)",
                        transform: "rotate(-5deg)",
                        transformOrigin: "center",
                        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      {cake.discountText}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">{cake.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cake.description}</p>

                <div className="flex flex-col mb-3">
                  <div className="flex items-baseline">
                    <span className="text-gray-900 font-bold text-lg">
                      {cake.price}
                    </span>
                    {cake.originalPrice && (
                      <span className="ml-2 text-gray-400 text-sm line-through">
                        {cake.originalPrice}
                      </span>
                    )}
                  </div>
                  {cake.servings && (
                    <span className="text-gray-500 text-xs mt-1">
                      {cake.servings}
                    </span>
                  )}
                </div>

                <button className="bg-color hover:bg-green-600 text-white w-full py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer">
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
