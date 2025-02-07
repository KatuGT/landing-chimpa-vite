import Hero from "./components/Hero";
import Marquesina from "./components/Marquesina";
import {
  CarruselEmpresas,
  Contactanos,
  Contacto,
  Cursor,
  Nosotros,
  Paises,
  Proyectos,
  Servicios,
  VideoIntro,
} from "./components";
import BotonWhatsapp from "./components/BotonWhatsapp";
import FAQ from "./components/FAQ/FAQ";
import ProyectosMobile from "./components/Proyectos/ProyectosMobile";
import Rubros from "./components/Rubros";
import Tecnologias from "./components/Tecnologias";
import Testimonios from "./components/Testimonios";
import { useEffect, useState } from "react";

function App() {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" && window.innerWidth >= 768,
  );

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1024);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="min-h-screen bg-white font-circular font-light">
      <Hero />
      <Marquesina />
      <VideoIntro />
      <Servicios />
      {isDesktop ? <Proyectos /> : <ProyectosMobile />}
      <Tecnologias />
      <Contactanos />
      <div className="mt-10 lg:hidden">
        <Rubros />
      </div>
      <Nosotros />
      <Paises />
      <div className="hidden lg:block">
        <Rubros />
      </div>
      <div className="bg-black">
        <Testimonios />
        <CarruselEmpresas />
      </div>
      <FAQ />
      <Contacto />
      <Cursor />
      <BotonWhatsapp />
    </main>
  );
}

export default App;
