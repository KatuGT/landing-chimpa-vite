 

import { boton } from "../../utils/types/boton";

const Boton = ({
  variante,
  texto,
  href,
  animado = false,
  textoChico = false,
}: boton) => {

  const botonVariantea = {
    amarilloAzul: "bg-amarillo hover:bg-azul",
    bordeado: "bg-white border-2 border-azul hover:bg-azul",
    amarilloCeleste: "bg-amarillo hover:bg-celeste",
    blanco: "bg-white hover:bg-azul text-azul font-thin",
  };

  return (
    <a
      href={href}
      className={`rounded-full w-fit ${animado && "hover:scale-[0.9]"} ${botonVariantea[variante]} ${textoChico ? "text-[15px]" : "text-[18px]"} flex items-center px-[24px] py-3 text-center font-circular font-extralight leading-[18px] text-azul transition-all duration-300 hover:text-white`}
    >
      {texto}
    </a>
  );
};

export default Boton;
