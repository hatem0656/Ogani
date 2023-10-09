"use client";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { categories } from "@/helpers/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Products() {
  return (
    <>
      <div className="md:container px-7 my-8 relative md:block flex flex-wrap justify-center">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          speed={1500}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {categories.map((category) => {
            return (
              <SwiperSlide key={category.id}>
                <div className="flex flex-col items-center">
                  <Image
                    src={category.img}
                    alt={category.name}
                    className="w-full h-[270px] sm:object-cover object-contain block"
                  ></Image>
                  {/* absolute bottom-[15px] left-[30px] */}
                  <h2 className="bg-white px-4 py-2 text-lg font-bold uppercase tracking-widest translate-y-[-54px] ">
                    {category.name}
                  </h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="prev-btn inline-flex items-center justify-center  mr-3 md:absolute xl:left-[40px] lg:left-[-10px] md:left-[-15px] bottom-1/2 w-[30px] h-[70px] border border-gray-200  ">
          <i className="arrow left"></i>
        </button>
        <button className="next-btn inline-flex items-center justify-center  md:absolute xl:right-[40px] lg:right-[-10px] md:right-[-15px] bottom-1/2 w-[30px] h-[70px] border border-gray-200  ">
          <i className="arrow right"></i>
        </button>
      </div>
    </>
  );
}

export default Products;
