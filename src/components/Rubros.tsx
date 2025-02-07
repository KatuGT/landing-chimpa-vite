import TitleAnimation from "./TitleAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const rubros = [
  {
    nombre: "Agro",
    imagen: "/rubros/Agro.png",
  },
  {
    nombre: "Educación",
    imagen: "/rubros/Educacion.png",
  },
  {
    nombre: "Gobierno",
    imagen: "/rubros/Gobierno.png",
  },
  {
    nombre: "Salud",
    imagen: "/rubros/Salud.png",
  },
  {
    nombre: "Retail",
    imagen: "/rubros/Retail.png",
  },
  {
    nombre: "Venta por mayor",
    imagen: "/rubros/VentaPorMayor.png",
  },
  {
    nombre: "Real State",
    imagen: "/rubros/RealState.png",
  },
  {
    nombre: "Industria Aérea",
    imagen: "/rubros/IndustriaAerea.png",
  },
];

const Rubros = () => {
  return (
    <>
      <section className="mx-auto mb-16 flex max-w-screen-xl flex-col gap-5 px-5 text-azul sm:gap-14 lg:flex-row lg:items-center xl:px-0">
        <div className="order-2 mt-4 grid flex-[5] grid-cols-4 justify-items-center gap-y-8 lg:order-1 lg:justify-items-start">
          {rubros.map((rubro) => (
            <figure key={rubro.nombre} className="w-fit">
              <img
                alt={"Desarrollos para " + rubro.nombre}
                src={rubro.imagen}
                className="mx-auto h-[70px] w-auto sm:h-[100px]"
              />
              <span className="mt-1 block w-full text-center text-[12px] font-thin sm:text-lg">
                {rubro.nombre === "Venta por mayor" ? (
                  <>
                    Venta <br className="lg:hidden" />
                    por mayor
                  </>
                ) : rubro.nombre === "Industria Aérea" ? (
                  <>
                    Industria <br className="lg:hidden" /> Aérea
                  </>
                ) : (
                  rubro.nombre
                )}
              </span>
            </figure>
          ))}
        </div>
        <div className="order-1 flex-[4] lg:order-2">
          <h4 className="mb-4 text-center text-sm font-thin uppercase tracking-[0.3rem] lg:hidden lg:text-right">
            TRAYECTORIA Y EXPERIENCIA
          </h4>
          <h3
            className="mx-auto ml-auto w-full text-center text-4xl font-normal sm:leading-[1.10] md:text-5xl lg:mr-0 lg:hidden lg:text-right"
            style={{ width: "min(100%, 450px)" }}
          >
            Acompañando a varios rubros en el mercado
          </h3>
          <TitleAnimation
            texto="TRAYECTORIA Y EXPERIENCIA"
            textClassName="lg:block hidden mb-4 text-center font-thin uppercase tracking-[0.3rem] lg:text-right"
            spaceTextSize="text-base"
          />

          <TitleAnimation
            texto="Acompañando a"
            textClassName="hidden lg:block mx-auto ml-auto w-full text-center text-5xl font-normal sm:leading-[1.10] lg:mr-0 lg:text-right lg:text-right"
          />
          <TitleAnimation
            texto="varios rubros en el"
            textClassName=" hidden lg:block  mx-auto ml-auto w-full text-center text-5xl font-normal sm:leading-[1.10] lg:mr-0 lg:text-right lg:text-right"
          />
          <TitleAnimation
            texto="mercado"
            textClassName="mb-4 hidden lg:block  mx-auto ml-auto w-full text-center text-5xl font-normal sm:leading-[1.10] lg:mr-0 lg:text-right lg:text-right"
          />
        </div>
      </section>
      <div className="mb-10" id="mockupsProyectos">
        <Swiper
          pagination={{
            clickable: true,
            el: ".mockups-pagination",
          }}
          slidesPerView={"auto"}
          spaceBetween={0}
          modules={[Pagination]}
          className="swiper-mockups"
        >
          <SwiperSlide>
            <img
              alt="proyecto Bertoli"
              src={"/mockupProyectos/bertoli.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto ZonaInmo"
              src={"/mockupProyectos/zonainmo.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Aapresid"
              src={"/mockupProyectos/aapresid.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Silmag"
              src={"/mockupProyectos/silmag.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Paracol"
              src={"/mockupProyectos/paracol.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Aeromas"
              src={"/mockupProyectos/Aeromas.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Marph"
              src={"/mockupProyectos/marph.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              alt="proyecto Gaintza"
              src={"/mockupProyectos/gaintzo.webp"}
              className="object-cover"
            />
          </SwiperSlide>
          <div className="mockups-pagination mt-10 flex justify-center gap-2"></div>
        </Swiper>
      </div>
    </>
  );
};

export default Rubros;
