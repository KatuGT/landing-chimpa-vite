import TitleAnimation from "./TitleAnimation";

const Paises = () => {
  return (
    <section className="mx-auto mb-28 flex max-w-screen-xl flex-col gap-5 px-5 text-azul sm:gap-14 lg:flex-row lg:items-center xl:px-0">
      <div
        className=" lg:mx-0 flex-[4] "
        style={{ width: "min(100%, 450px)" }}
      >
        <h4 className="mb-4 text-sm font-thin uppercase tracking-[0.3rem] lg:hidden">
          TRABAJAMOS GLOBALMENTE
        </h4>
        <h3 className="w-full text-balance text-5xl  font-normal sm:leading-[1.10] lg:hidden 2xl:w-[70%]">
          De Argentina Para el Mundo
        </h3>
        <TitleAnimation
          texto="TRABAJAMOS GLOBALMENTE"
          textClassName="mb-4 hidden lg:block font-thin uppercase tracking-[0.3rem]"
          spaceTextSize="text-base"
        />
        <TitleAnimation
          texto="De Argentina Para el Mundo"
          textClassName="w-full hidden lg:block text-balance text-5xl font-normal sm:leading-[1.10] 2xl:w-[70%]"
        />
      </div>
      <div className="flex-[5]">
        <div className="lgmb-2 mb-8 flex flex-wrap justify-center gap-2 sm:flex sm:flex-nowrap lg:mb-[30px] lg:justify-evenly">
          <img
            alt="bandera de Argentina"
            src={"/SVG/banderaArgentina.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Uruguay"
            src={"/SVG/banderaUruguay.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Colombia"
            src={"/SVG/banderaColombia.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Paraguay"
            src={"/SVG/banderaParaguay.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:flex-nowrap lg:justify-evenly">
          <img
            alt="bandera de Estados Unidos"
            src={"/SVG/banderaEstadosUnidos.svg"}
            className="h-auto w-[58px] sm:w-20  transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Brasil"
            src={"/SVG/banderaBrasil.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Chile"
            src={"/SVG/banderaChile.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de España"
            src={"/SVG/banderaEspaña.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
          <img
            alt="bandera de Alemania"
            src={"/SVG/banderaAlemania.svg"}
            className="h-auto w-[58px] sm:w-20 transition-all duration-300 md:w-[103px] md:opacity-20 md:hover:opacity-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Paises;
