import  { useEffect, useRef } from "react";
import Stepper from "./Stepper";

const Contador = ({ numero, texto }: { numero: string; texto: string }) => {
  const contadorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = contadorRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          const steps = document.getElementsByClassName(
            "stepper",
          ) as HTMLCollectionOf<HTMLElement>;

          [...steps].forEach((step) => {
            const datasetnum = step.dataset.num || "0";
            const numToStop = datasetnum === "0" ? "10" : datasetnum;
            step.style.top = `-${60 * parseInt(numToStop)}px`;
            step.style.transitionDelay = `-${100 * (10 * parseInt(numToStop))}`;
          });

          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nums = numero.split("");

  return (
    <div ref={contadorRef}>
      <span className="mb-4 text-[36px]">{texto}</span>
      <div className="flex items-center">
        <span className="h-fit bg-gradiente-azul-dos bg-clip-text text-[54px] text-transparent">
          +
        </span>
        <span className="flex h-[60px] overflow-hidden text-[64px] font-normal">
          {nums.map((num, index) => (
            <Stepper dataNum={num} key={index} />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Contador;
