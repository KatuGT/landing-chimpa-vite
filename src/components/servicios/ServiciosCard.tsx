 
import Lottie from "react-lottie";
import { servicioCard } from "../../utils/types/serviciosCard";

const varianteElegida = {
  amarillo: {
    mainContainer:
      "transition-all bg-amarillo text-azul hover:text-white  hover:bg-gradiente-azul-inclinada",
    separador:
      "border-azul group-hover:border-white after:absolute after:border-b  after:w-full after:border-azul group-hover:after:opacity-0",
    flecha: "fill-azul  group-hover:fill-white",
  },
  azul: {
    mainContainer:
      "transition-all bg-azul text-white  hover:bg-gradiente-azul-inclinada",
    separador: "border-white",
    flecha: "fill-white",
  },
  celeste: {
    mainContainer:
      "transition-all bg-celeste text-white  hover:bg-gradiente-azul-inclinada",
    separador: "border-white",
    flecha: "fill-white",
  },
};

const ServiciosCard = ({
  descripcion,
  titulo,
  variante,
  gif,
}: servicioCard) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: gif,
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };
  return (
    <div
      className={`card-servicio ease group flex w-full min-w-[230px] cursor-pointer flex-col p-4 py-8 sm:w-[45%] md:flex-1 xl:p-[20px] ${varianteElegida[variante].mainContainer}`}
    >
      <article className="ease ">
        <div className="h-[150px] w-auto">
          <div className="mx-auto h-full w-auto ">
            <Lottie options={defaultOptions} style={{ width: "auto" }} />
          </div>
        </div>
        <div className="flex h-[80px] items-end">
          <h2 className="text-[30px] leading-none tracking-tight ease-in-out   lg:tracking-normal ">
            {titulo}
          </h2>
        </div>
        <div
          className={` relative mb-5 mt-4 border-b ${varianteElegida[variante].separador} `}
        />
        <p className="ease text-[16px] font-thin">{descripcion}</p>
      </article>
    </div>
  );
};

export default ServiciosCard;
