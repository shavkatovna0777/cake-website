import Img from "../LazyLoadImg/Img.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import TitleAndBtn from "../TitleAndBtn/TitleAndBtn.jsx";

export default function ProductCategories({ categoriesProduct }) {
  return (
    <section>
      <div className="container mx-auto">
        <TitleAndBtn title={"Kategoriyalar"} />
        <Swiper
          modules={[Autoplay]}
          className="rounded-xl overflow-hidden lg:h-[200px] md:h-[200px] h-[200px]"
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1.5, spaceBetween: 10 },
            480: { slidesPerView: 2.5, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 25 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {categoriesProduct.map((category) => (
            <SwiperSlide draggable={false} key={category.id}>
              <Link
                to={`/categories/${category.id}`}
                className="text-center border border-[#E6E6E6] rounded-[5px] p-2 flex flex-col cursor-pointer transition-shadow duration-300 hover:shadow-[0_4px_4px_0px_#2C742F40]"
              >
                <Img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-[130px] object-cover rounded-md"
                />
                <p className="mt-2 text-lg font-[500]">{category.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
