import { Contador, Premios } from "..";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TitleAnimation from "../TitleAnimation";
import useVideoPlay from "../../customHooks/useVideoPlay";

const Nosotros = () => {
  gsap.registerPlugin(ScrollTrigger);

  const contenedorNosotros = useRef(null);
  const fotoGrupo = useRef(null);
  const premios = useRef(null);

  useGSAP(
    () => {
      gsap.to(fotoGrupo.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: contenedorNosotros.current,
        },
      });

      gsap.from(premios.current, {
        y: 400,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: contenedorNosotros.current,
        },
      });
    },
    { scope: contenedorNosotros },
  );
  const videoNosotros = useRef<HTMLVideoElement>(null!);

  useVideoPlay(videoNosotros);

  return (
    <section
      ref={contenedorNosotros}
      className="mx-auto mb-24 max-w-screen-xl px-5 sm:pl-10 xl:px-0"
    >
      <section
        id="nosotros"
        className="mb-16 flex items-center gap-20 overflow-x-clip pt-10 md:pt-20 text-azul  xl:gap-40"
      >
        <article className="flex-1">
          <h4 className="mb-4 font-thin uppercase tracking-[0.4rem]  lg:hidden">
            CONÓCENOS
          </h4>
          <h3 className="mb-6 text-5xl lg:hidden">Somos Chimpancé</h3>
          <TitleAnimation
            texto="CONÓCENOS"
            textClassName="mb-4 font-thin uppercase tracking-[0.4rem]  hidden lg:block"
          />
          <TitleAnimation
            texto="Somos Chimpancé"
            textClassName="mb-6 text-5xl  hidden lg:block"
          />

          <p className="text-[24px] font-thin">
            Una agencia de Diseño Web y Marketing Digital orientada al
            desarrollo corporativo.
          </p>
          <p className="text-[24px] font-thin">
            Nacimos y crecimos en la jungla digital. Sabemos adaptarnos a su
            ritmo rápido y siempre cambiante. Por eso trabajamos con empresas y
            equipos que no quieren quedarse atrás.
          </p>
          <div className="mt-10 flex gap-10">
            <Contador numero={"9"} texto="Años" />
            <Contador numero={"100"} texto="Proyectos" />
          </div>
        </article>
        <picture className="relative hidden  w-full flex-1 lg:block ">
          <img
            alt="imagen de celular ilustrativa"
            src={"/celular.png"}
            className="absolute left-0 right-0 mx-auto h-full w-auto"
          />
          <video
            ref={videoNosotros}
            preload="none"
            loop
            playsInline
            poster={"/VideosPosters/posterNosotros.png"}
            className="proyectoVideo lozad mt-px aspect-[9/16] h-[690px] w-full object-contain"
          >
            {/* <source src={srcwebm} type="video/webm" /> */}
            <source src={"/Videos/Nosotros.mp4"} type="video/mp4" />
            Tu navegador no soporta la etiqueta de Videos.
          </video>
        </picture>
      </section>
      <section className="flex flex-col items-stretch gap-10 text-azul lg:flex-row lg:items-center">
        <div className="flex flex-[1] items-center gap-3.5">
          <div className="h-10 w-fit">
            <img  alt="flecha amarilla" src={"/IconoRecursos/flechaAmarilla.png"} className="h-full w-auto object-contain"/>
          </div>
          <h3 className="text-[48px] font-normal text-left">Premios</h3>
        </div>
        <div className="flex justify-center gap-10 sm:hidden">
          <figure className="w-fit">
            <img
              alt="imagen premio Dirección de arte en internet"
              src={"/SVG/premioFEPI.svg"}
              className="relative mx-auto h-[100px] w-[100px] object-top "
            />
            <h4 className="mt-2 text-center text-lg font-thin">FEPI DE ORO</h4>
            <h4 className="text-center text-lg leading-none text-celeste">
              2021
            </h4>
          </figure>
          <figure className="w-fit">
            <img
              alt="imagen premio Comunicación de Identidad Corporativa"
              src={"/SVG/premioEIKON.svg"}
              className="mx-auto h-[103px] w-[103px]"
            />
            <h4 className="mt-1.5 text-center text-lg font-thin">EIKON</h4>
            <h4 className="text-center text-lg leading-none text-celeste">
              2021
            </h4>
          </figure>
        </div>
        <div ref={premios} className="hidden flex-[4] font-thin sm:block">
          <Premios
            años="2021"
            descripcion="Dirección de arte en internet"
            imagen={"/SVG/premioFEPI.svg"}
            nombrePremio="FEPI DE ORO"
          />
          <hr className="border-azul opacity-30" />
          <Premios
            años="2021"
            descripcion="Comunicación de Identidad Corporativa"
            imagen={"/SVG/premioEIKON.svg"}
            nombrePremio="EIKON"
          />
        </div>
      </section>
    </section>
  );
};

export default Nosotros;
