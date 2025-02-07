 
import { ServiciosCard } from "..";
import { useEffect, useRef, useState } from "react";
import gifWeb from "../../assets/lotties/servicioWeb.json";
import gifEcommerce from "../../assets/lotties/servicioTienda.json";
import gifLanding from "../../assets/lotties/servicioonaPage.json";
import gifElearning from "../../assets/lotties/servicioElearning.json";
import { motion } from "framer-motion";
import TitleAnimation from "../TitleAnimation";

const Servicios = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const textTohighlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const { x, y } = event;
      setPosition({ x: x, y: y });
    };

    if (typeof document !== "undefined") {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div id="servicios" className="mb-10 pt-10 text-azul xl:pt-32">
      <span className="mx-auto block w-full text-center  text-xl font-thin uppercase tracking-widest lg:hidden">
        SOBRE NOSOTROS
      </span>
      <span className="mx-auto mb-10 mt-1 block w-full text-center text-5xl font-bold lg:hidden ">
        Qué hacemos
      </span>
      <TitleAnimation
        texto="SOBRE NOSOTROS"
        textClassName="mx-auto block w-full hidden lg:block text-center text-xl font-thin uppercase tracking-widest"
      />
      <TitleAnimation
        texto="Qué hacemos"
        textClassName="mx-auto mb-10 mt-1 block w-full hidden lg:block text-center text-5xl font-bold "
      />
      <motion.div
        initial={{ opacity: 0, y: "100px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="card-container mx-auto flex h-max  max-w-screen-xl flex-col gap-5 px-5 sm:flex-row sm:flex-wrap sm:justify-center lg:px-0"
      >
        <ServiciosCard
          titulo="Página Web"
          descripcion="Tu empresa, en la vidriera global. Sitios intuitivos, rápidos y a medida. "
          variante="azul"
          gif={gifWeb}
        />
        <ServiciosCard
          titulo="E-commerce / Tienda Online"
          descripcion="Tu empresa vendiendo las 24hs. Carrito de compra, catálogo de productos, integración con medios de pagos y envíos, CRM, y APIS"
          variante="celeste"
          gif={gifEcommerce}
        />
        <ServiciosCard
          titulo="Onepage / Landing page"
          descripcion="Un trampolín comercial. Promociona y lanza productos al mercado, generando leads en el acto."
          variante="amarillo"
          gif={gifLanding}
        />

        <ServiciosCard
          titulo="E-learning"
          descripcion="Una educación sin fronteras es posible. Automatiza los procesos de venta y dictado de  cursos online."
          variante="azul"
          gif={gifElearning}
        />
      </motion.div>
      <article className="relative mt-32 hidden w-full overflow-hidden bg-gradiente-azul px-5 py-20 text-white md:py-28 lg:block ">
        <img
          src={"/planetaAzul.webp"}
          className="absolute -right-10 top-0 h-full w-auto"
          alt="imagen planeta tierra, color azul"
        />
        <div className="mx-auto max-w-screen-xl">
          <h3 className="mb-4 text-base font-thin tracking-widest">
            ¿POR QUÉ ELEGIRNOS?
          </h3>
          <div
            ref={textTohighlight}
            className="containerText bg-none md:hover:bg-gradiente-radial-blanco"
            style={{
              backgroundPosition: `${position.x - 150}px ${position.y - 150}px`,
            }}
          >
            <p
              id="porQueElegirnos"
              className="w-1/2 whitespace-break-spaces text-balance bg-no-repeat text-[26px] font-thin leading-none text-white md:text-[36px] md:text-[rgba(235,235,235,0.33)] xl:font-extralight xl:leading-normal"
            >
              Ofrecemos una estrategia digital completa, integrando diseño,
              tecnología y visión de negocio para impulsar el éxito online de tu
              marca.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Servicios;
