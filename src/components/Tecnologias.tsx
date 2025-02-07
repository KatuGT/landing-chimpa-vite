import TitleAnimation from "./TitleAnimation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";

import varita from "../assets/lotties/varita.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: varita,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const tecnologias = [
  { nombre: "Wordpress", imagen: "/wordpress.webp" },
  { nombre: "Bootstrap", imagen: "/bootstrap.webp" },
  { nombre: "Tailwind", imagen: "/tailwind.webp" },
  { nombre: "JavaScript", imagen: "/js.webp" },
  { nombre: "Laravel", imagen: "/laravel.webp" },
  { nombre: "Angular", imagen: "/angular.webp" },
  { nombre: "React", imagen: "/react.webp" },
];

const DURATION = 0.25;
const STAGGER = 0.025;

const chatVariants = {
  hidden: {
    x: "100%",
  },
  reveal: {
    x: 0,
  },
};

const Tecnologias = () => {
  return (
    <section className="mt-20 flex items-center gap-5 overflow-hidden px-5 text-azul lg:px-10">
      <figure
        className="hidden  flex-1 lg:block  lg:flex-[1.5]"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(0, 163, 218, 0.3) 0%, rgba(0, 163, 218, 0) 100%)",
        }}
      >
        <img
          alt="sitio web para empresas"
          src={"/HeroImageMobile.webp"}
          className="mx-auto"
          style={{ width: "min(100%, 470px)" }}
        />
      </figure>
      <div className="flex-[2]">
        <article style={{ width: "min(100%, 580px)" }}>
          <span className="font-thin uppercase tracking-[0.4rem] lg:hidden">
            TECNOLOGÍAS
          </span>
          <div className="relative mb-12 flex items-center">
            <h3 className=" relative mt-7 text-4xl lg:hidden">
              <span className="absolute -right-[5rem] top-1 block ">
                <Lottie options={defaultOptions} height={150} width={150} />
              </span>
              Las herramientas <br /> que potencian <br />
              tu empresa
            </h3>
          </div>

          <TitleAnimation
            texto="TECNOLOGÍAS"
            textClassName="hidden lg:block font-thin uppercase tracking-[0.4rem]"
          />
          <TitleAnimation
            texto="Las herramientas que"
            textClassName="hidden lg:block mt-7 text-5xl"
          />
          <TitleAnimation
            texto="potencian tu empresa"
            textClassName="hidden lg:block text-5xl mb-7"
          />
          <p className="text-2xl font-thin">
            Trabajamos con tecnología innovadora, para brindarte soluciones
            modernas y a la altura de los objetivos de tu marca.
          </p>
        </article>

        <motion.div
          initial="hidden"
          animate="animate"
          whileInView="reveal"
          className="mt-12 flex items-baseline justify-between gap-0 overflow-hidden md:gap-7 lg:justify-between xl:justify-normal xl:gap-7"
        >
          {tecnologias.map((tecnologia, i) => (
            <motion.figure
              variants={chatVariants}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="w-fit "
              key={tecnologia.nombre}
            >
              <img
                alt={"Desarrollo en " + tecnologia.nombre}
                className="mx-auto w-[33px] sm:w-11  md:w-[58px]"
                src={tecnologia.imagen}
              />
              <p className="mt-1 text-center text-[10px] font-thin md:text-lg">
                {tecnologia.nombre}
              </p>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tecnologias;
