import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider({ data }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      // loop
      pagination={{ clickable: true }}
    >
      {data.map((berita) => (
        <SwiperSlide key={berita.id}>
          <Link href={`/berita/${berita.id}`}>
            <div className="overflow-hidden h-[54.5vh] w-full">
              <img
                src={berita.image}
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-4 bg-black/60 absolute bottom-0 text-white w-full">
              <h1 className="text-lg">{berita.title}</h1>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
