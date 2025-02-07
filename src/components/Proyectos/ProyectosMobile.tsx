import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import Video from "./Video";
import "swiper/css";
import "swiper/css/pagination";

const ProyectosMobile = () => {
  return (
    <>
      <span className="mx-auto block w-full text-center text-xl font-thin tracking-[0.3rem] text-azul md:hidden">
        Mirá como trabajamos
      </span>
      <span className="mx-auto mb-10 mt-3 block w-full text-center text-5xl font-bold text-azul md:hidden">
        Proyectos
      </span>
      <div className="pl-5 md:hidden">
        <Swiper
          pagination={{ el: ".videos-pagination" }}
          modules={[Pagination]}
          slidesPerView={1.1}
          spaceBetween={20}
          className="proyectos-videos-swiper"
        >
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto1poster.webp"
              srcMp4="/Videos/proyecto1mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto2poster.webp"
              srcMp4="/Videos/proyecto2mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto3poster.webp"
              srcMp4="/Videos/proyecto3mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto4poster.webp"
              srcMp4="/Videos/proyecto4mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto5poster.webp"
              srcMp4="/Videos/proyecto5mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto6poster.webp"
              srcMp4="/Videos/proyecto6mobile.mp4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Video
              poster="/VideosPosters/proyecto7poster.webp"
              srcMp4="/Videos/proyecto7mobile.mp4"
            />
          </SwiperSlide>
        </Swiper>
        <div className="videos-pagination mt-10 flex justify-center gap-2"></div>
      </div>
    </>
  );
};

export default ProyectosMobile;
