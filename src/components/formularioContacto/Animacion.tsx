 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Animacion = () => {

  useGSAP(() => {
    const tlTextoAnimado = gsap.timeline({ repeat: -1, yoyo: true });
    tlTextoAnimado.to("#textoAnimado", {
      duration: 3,
      text: "evolución digital",
      delay: 0,
    });
  });

  return (
    <div className="flex flex-[1] px-5 lg:px-0 items-center justify-center ">
      <p
        className="text-center text-3xl font-thin text-white md:ml-auto md:pl-8 md:text-left md:text-6xl"
        style={{ width: "min(100%, 550px)" }}
      >
        La <span className="font-normal text-amarillo" id="textoAnimado"></span>{" "}
        que tu empresa necesita.
      </p>
    </div>
  );
};

export default Animacion;
