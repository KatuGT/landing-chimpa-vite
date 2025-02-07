import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsDragging } from "../store/elementStore";
import "swiper/css";
import "swiper/css/pagination";

const testimonio = [
  {
    datoExtra: "",
    texto:
      "«En Cinergia Estudio Creativo trabajamos hace años con Los Chimpa… un equipo sumamente acertivo, atento a cada detalle, con buena onda y una calidad profesional destacable que busca siempre proponer más allá de lo imaginado. Con ellxs sumamos fuerzas y nos potenciamos en proyectos de todo tipo de magnitudes. Valoramos su actitud permanente de estar actualizadxs con las últimas tendencias y de aceptar desafíos que nos empujan a crecer y superarnos en el vertiginoso mundo de las comunicaciones digital. Garantía de confianza.»",
    autor: "Guillermo Brandán",
    empresa: "Cinergia Estudio Creativo",
    fotoAutor: "/fotoCinergia.webp",
    puestoTrabajo: "Director Ejecutivo",
  },
  {
    datoExtra: "Positive: Professionalism, Responsiveness",
    texto:
      "Working with Chimpace Digital was a pleasure. I couldn’t be happier with the turnout. Santiago and his team is very professional and guided us throughout the entire process. They had answers for all the questions I threw their way and just made things happen. I can’t recommend them enough!",
    autor: "Florencia Del Villar",
    empresa: "De Colores",
    fotoAutor: "/fotoDeColores.webp",
    puestoTrabajo: "Directora Ejecutiva",
  },

  {
    datoExtra: "",
    texto:
      "Trabajamos con Chimpa en varios proyectos digitales que demandaban de una prolijidad y entregas con mucha atención al detalle, estuvieron a la altura y se complementaron con nuestro equipo de diseño a la perfección.",
    autor: "Alejandro Ahumada",
    empresa: "22 DG",
    fotoAutor: "/foto22DG.webp",
    puestoTrabajo: "Fundador",
  },
];

const Testimonios = () => {
  const contenedorTestimonio = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      gsap.from(contenedorTestimonio.current, {
        y: 400,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contenedorTestimonio.current,
        },
      });
    },
    { scope: contenedorTestimonio },
  );

  const getIsDraging = useIsDragging((state) => state.getIsDragging);

  const handleOnMouseDown = () => {
    getIsDraging(true);
  };

  const handleOnMouseUp = () => {
    getIsDraging(false);
  };

  return (
    <div className="bg-black pb-10 pt-20">
      <section
        onMouseUp={handleOnMouseUp}
        id="testimonios"
        ref={contenedorTestimonio}
        className="relative mx-auto mb-28 h-max max-w-[1320px]"
      >
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-testimonios",
            renderBullet: function (index: number, className: string) {
              return `
                <div class="${className} relative"> 
                  <img src=${testimonio[index].fotoAutor} class="h-[80px] md:h-[55px] aspect-square" alt="fotoAutor"/>
                  <div class="circulitos h-2 w-2 opacity-50 bg-gradiente-azul-inclinada rounded-full absolute -bottom-8 md:-bottom-14 ${index == 0 && "-right-12 md:-right-10"}  ${index == 2 && "-left-12 md:-left-10"}"></div>
                </div> `;
            },
          }}
          modules={[Pagination]}
          className="swiper-testimonios"
        >
          {testimonio.map((testimonio, index) => (
            <SwiperSlide key={index} onMouseDown={handleOnMouseDown}>
              <article className="relative px-[5%] pt-14 text-center text-[18px] font-thin text-white sm:px-[15%]">
                <span className="absolute left-[48%] top-0 mx-auto">
                  <img
                    alt="Comillas"
                    src="/SVG/comillas.svg"
                    height={26}
                    width={26}
                  />
                </span>
                {testimonio.datoExtra && (
                  <p className="mb-8">{testimonio.datoExtra}</p>
                )}
                <p className="mb-9 leading-7">{testimonio.texto}</p>
                <p className="text-[24px] font-light">{testimonio.autor}</p>
                <p className="text-[16px] font-thin opacity-80">
                  {testimonio.puestoTrabajo} • {testimonio.empresa}
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-testimonios !relative mt-10 flex justify-center gap-5 md:mt-6"></div>
      </section>
    </div>
  );
};

export default Testimonios;
