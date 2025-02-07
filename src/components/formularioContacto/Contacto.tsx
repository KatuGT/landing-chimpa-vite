import { Animacion, FormularioContacto } from "..";

const Contacto = () => {
  return (
    <div
      id="contactanosFooter"
      className="h-full gap-10 min-h-screen flex flex-col justify-between bg-gradiente-azul-dos bg-cover pb-8 pt-14 lg:bg-[url(/footerBG.svg)]"
    >
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-center">
        <Animacion />
        <div className="lg:ml-10 px-5 flex-1">
          <div className="mx-auto max-h-[560px] fill-white text-white md:mx-0 m lg:aspect-[400/550]">
            <FormularioContacto header="Contáctanos" section='footer' />
          </div>
        </div>
      </div>
      <div className="relative bottom-0 h-full">
        <figure className="relative mx-auto aspect-[4/1] h-[45px]">
          <img alt="logo Chimpance Figital" src={"/SVG/logoHorizontalBlanco.svg"} />
        </figure>
        <p className="font-thin text-white opacity-60 text-center">Córdoba, Argentina</p>
      </div>
    </div>
  );
};

export default Contacto;
