 
import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
// import FormularioContacto from "./formularioContacto/FormularioContacto";
import FormularioBrevo from "./formularioContacto/FormularioBrevo";
const DURATION = 0.25;

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 1024,
  );

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <header className="relative mx-auto flex h-full min-h-screen flex-col overflow-x-clip bg-cover px-0 md:items-center lg:flex-row ">
      <div
        className="relative left-0 top-0 min-h-screen w-full bg-gradient-to-r from-[#00A3DA] to-[#00214B] lg:absolute
       lg:h-full"
      >
        <div className="relative z-50 mx-auto max-w-[19ch] px-6 pt-11 text-center text-[35px] leading-snug text-white lg:hidden">
          <img
            alt="logo Chimpance Figital"
            src={"/SVG/logoHorizontalBlanco.svg"}
            width={100}
            className="mx-auto mb-5"
          />

          <h2 className="font-thin">Agencia de</h2>
          <h2 className="font-extralight">
            Diseño y Desarrollo de Páginas Web{" "}
          </h2>
        </div>
        <div className=" h-full w-full lg:relative">

          {/* VIDEO DESKTOP */}
          {isDesktop && <div className="absolute left-0 top-0 hidden aspect-[2117/1413] w-full min-w-[1228px] lg:block">
            <video
              autoPlay
              playsInline
              muted
              loop
              poster="/VideosPosters/headerPoster.webp"
              className="hidden w-full object-cover lg:block"
            >
              <source src="/Videos/headerRepowerDesktop.mp4" type="video/mp4" />
            </video>
          </div>}

            {/* VIDEO MOBILE */}
         {!isDesktop && <div className="video-mobile absolute bottom-0 aspect-[1127/1108] max-w-[652px] lg:hidden">
            <video
              autoPlay
              playsInline
              muted
              loop
              poster="/VideosPosters/headerPosterMobile.webp"
              className="lg:hidden"
            >
              <source src="/Videos/headerRepowerMobile.mp4" type="video/mp4" />
            </video>
          </div>}

          {/* IMAGEN DESKTOP */}
          <div className="relative h-full w-full">
            <img
            alt="imagen fondo header"
            src={"/HeroImageDesktopV2.webp"}
            className="hidden absolute h-full w-full object-cover object-left-top lg:block"
            />
          </div>

          {/* IMAGEN MOBILE */}
          <div className="absolute bottom-0 w-full">
            <div className="relative h-[40rem]">
              <img
                alt="imagen fondo header"
                src={"/HeroImageMobileV2.webp"}
                className="h-full inset-0 relative w-full  object-contain object-left-bottom lg:hidden"
              />
            </div>
          </div>
          <div className="cohete absolute bottom-[5%] left-[50%] aspect-square h-[230px] lg:bottom-[20%] lg:left-[5%] lg:h-[700px]  ">
            <div className="relative h-1/2 w-1/2 translate-y-full">
              <img
                alt="ilustracion cohete"
                src={"/cohete.png"}
                className="bottom-0 w-full h-full inset-0 scale-x-[-1] object-contain lg:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="w-full bg-amarillo px-4 py-[11px] text-center text-lg font-thin text-azul lg:hidden">
        <p>eCommerce - eLearning - Sitio Web</p>
      </div>
      <div className="flex h-full w-full items-center justify-center bg-gradiente-celeste-azul py-10 md:flex-[1]  lg:justify-normal lg:bg-none lg:pr-11">
        <motion.div
          initial={{ x: "200px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: DURATION * 2,
            ease: "easeInOut",
          }}
          className="relative h-full rounded-[20px] border-b-white fill-white px-5 py-10 text-white placeholder:text-azul   lg:border-b-azul lg:bg-white lg:fill-azul lg:px-12 lg:text-azul"
        >
          <h2 className="mx-auto hidden max-w-[24ch] text-center text-[20px] font-thin lg:block">
            Agencia de{" "}
            <strong className="font-normal">
              {" "}
              Diseño y Desarrollo de Páginas Web{" "}
            </strong>
          </h2>
          {/* <FormularioContacto header="Hablemos de tu proyecto" section="hero" /> */}
          <FormularioBrevo/>
        </motion.div>
      </div>
    </header>
  );
};

export default Hero;
