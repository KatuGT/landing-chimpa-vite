
const Contactanos = () => {
  return (
    <section className="relative mt-20 w-full bg-[url('/imagen-recurso-contactanos-mobile.webp')] sm:bg-[url('/imagen-recurso-contactanos.webp')] bg-cover lg:bg-bottom bg-no-repeat">
      <div className="relative z-50 flex flex-col items-center justify-around gap-5 px-8 py-32 lg:flex-row lg:py-28 xl:px-40">
        <h3 className="text-balance text-center text-[40px] text-white lg:text-left lg:text-[48px]">
          Creemos tu próximo proyecto juntos
        </h3>
        <a
          href="#contactanos"
          className="group relative w-full sm:w-fit flex h-fit items-center justify-center rounded-full bg-amarillo px-[62px] py-[15px] text-[16px] transition-all hover:bg-celeste text-azul shadow-[0_7px_25px_rgba(47,57,211,0.2)]"
        >
          <span className="hidden lg:block">
            Hablemos
          </span>
          <span className="lg:hidden">
            Contactanos
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contactanos;
