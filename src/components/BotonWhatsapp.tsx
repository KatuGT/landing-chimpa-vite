
const BotonWhatsapp = () => {
  return (
    <>
      <a
        aria-label="boton de whatsapp"
        id={"boton-whatsapp"}
        href={"https://wa.me/5493516503470"}
        target="_blank"
        rel="noopener noreferrer"
        className="FB-mkt fixed bottom-6 right-2 z-50  grid h-[70px] w-[70px] place-items-center rounded-full bg-green-500 lg:right-6"
      >
        <figure className="relative h-10 w-10 ">
          <img
            alt="logo de whatsapp"
            src={"/SVG/whatsapp-white-icon.svg"}
            className="w-full h-full inset-0"
          />
        </figure>
      </a>
    </>
  );
};

export default BotonWhatsapp;
