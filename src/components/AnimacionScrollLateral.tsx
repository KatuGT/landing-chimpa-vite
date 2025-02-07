 

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AnimaciónScrollLateral = () => {
  const container = useRef<HTMLElement>(null);
  const texto = useRef<null | HTMLHeadingElement>(null);

  useGSAP(() => {
    if (texto.current) {
      if (typeof document !== "undefined") {
        const chars = document.querySelectorAll(".char");

        gsap.from(chars, {
          y: 230,
          opacity: 0,
          ease: "elastic",
          stagger: 0.1,
          duration: 1.5,
          yoyo: true,
          delay: 2,
          scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: "top 30%",
            end: "=+3000",
          },
        });
      }

      gsap.to(texto.current, {
        xPercent: -100,
        ease: "none",
        yoyo: true,
        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 3,
          start: "10% top",
          end: "=+3000",
        },
      });
    }
  });

  return (
    <section
      ref={container}
      className="hidden h-screen items-center overflow-x-hidden md:flex"
    >
      <h2
        ref={texto}
        id="texto"
        className="whitespace-nowrap break-keep pl-16 text-[300px] text-azul"
      >
        DISEÑOS UX UI CREATIVOS
      </h2>
    </section>
  );
};

export default AnimaciónScrollLateral;
