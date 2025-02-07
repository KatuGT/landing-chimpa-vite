 
import { useState } from "react";
import { motion } from "framer-motion";
import AccordeonItem from "./AccordeonItem";

const easyQuestions = [
  {
    id: 4,
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Luego de terminar el desarrollo de tu sitio web, ofrecemos 2(dos) meses de soporte totalmente gratuito, para resolver cualquier desajuste que pudiera surgir.",
  },
  {
    id: 5,
    question: "¿Trabajan con Wordpress?",
    answer:
      "Sí. Trabajamos con Wordpress, ofreciendo sitios personalizados o plantillados.",
  },
  {
    id: 6,
    question: "¿Trabajan con Laravel?",
    answer:
      "Sí. Utilizamos el framework de PHP que nos permite desarrollar aplicaciones web robustas y seguras. Aprovechamos Laravel para construir soluciones personalizadas que se ajusten a las necesidades específicas de cada cliente, garantizando un rendimiento óptimo y una arquitectura escalable.",
  },
  {
    id: 7,
    question: "¿Trabajan con Elementor?",
    answer:
      "Sí. Trabajamos con Elementor, un constructor de páginas para WordPress que facilita la creación de sitios web visualmente atractivos y funcionales. Utilizamos Elementor para diseñar páginas web personalizadas que no solo se ven bien, sino que también ofrecen una experiencia de usuario intuitiva y fluida.",
  },
  {
    id: 8,
    question: "¿Trabajan con Bootstrap?",
    answer:
      "Sí, utilizamos Bootstrap, para desarrollar sitios web responsivos y modernos. Bootstrap nos ayuda a implementar un diseño consistente y adaptable en diferentes dispositivos, lo que asegura que tu sitio web tenga una excelente apariencia y funcionalidad en cualquier tamaño de pantalla.",
  },
  {
    id: 9,
    question: "¿Trabajan con Angular?",
    answer:
      "Sí. Utilizamos Angular para construir aplicaciones web de una sola página (SPA) que ofrecen una experiencia de usuario interactiva y dinámica, ideal para proyectos que requieren alta interactividad y rendimiento.",
  },
  {
    id: 11,
    question: "¿Trabajan con React?",
    answer:
      "Sí, utilizamos React, la biblioteca de JavaScript para construir interfaces de usuario interactivas. React es ideal para desarrollar aplicaciones web rápidas y reactivas. Aprovechamos sus características, como el Virtual DOM y los componentes reutilizables, para ofrecer experiencias de usuario altamente eficientes y efectivas.",
  },
  {
    id: 12,
    question: "¿Trabajan con Javascript?",
    answer:
      "Sí, trabajamos con JavaScript, el lenguaje de programación esencial para desarrollar interactividad en sitios web. Utilizamos JavaScript para mejorar la funcionalidad de tu sitio, desde animaciones y efectos visuales hasta la integración de funcionalidades avanzadas que optimizan la experiencia del usuario.",
  },
  {
    id: 13,
    question: "¿Trabajan con Node.js?",
    answer:
      "Sí, trabajamos con Node.js, el entorno de ejecución de JavaScript del lado del servidor. Utilizamos Node.js para desarrollar aplicaciones web escalables y de alto rendimiento. Su arquitectura basada en eventos y su capacidad para manejar múltiples conexiones simultáneas hacen que sea una excelente opción para aplicaciones que requieren alta velocidad y eficiencia. Con Node.js, podemos construir desde servidores web rápidos hasta aplicaciones en tiempo real, garantizando una experiencia fluida y moderna para los usuarios. ",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestion = (id: number) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  const [verMas, setVerMas] = useState(false);

  return (
    <section>
      <div className="hidden bg-[url(/FAQimage.webp)] bg-cover lg:block">
        <motion.article
          initial={{ x: "-100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="mx-auto max-w-screen-xl px-5 pb-24 pt-24 text-2xl font-thin text-white xl:px-0"
        >
          <img alt="Logo Chimpance" src={"/SVG/logoHorizontalBlanco.svg"} className="mb-6" />
          <p className="font-thin">
            Somos nativos digitales. Nacimos y crecimos en la jungla digital.
          </p>
          <p>Sabemos adaptarnos a su ritmo rápido y siempre cambiante.</p>
          <p className="mb-8">
            Trabajamos contigo y tu equipo para que tu empresa no se quede
            atrás.
          </p>
          <a
            href="#contactanosFooter"
            className="group relative flex h-fit w-full items-center justify-center rounded-full bg-amarillo px-[62px] py-[15px] text-[18px] font-normal text-azul shadow-[0_7px_25px_rgba(47,57,211,0.2)] transition-all hover:bg-celeste sm:w-fit"
          >
            <span className="">Contactanos</span>
          </a>
        </motion.article>
      </div>
      <div className="mt-20 px-5 text-azul lg:hidden">
        <h4 className="mb-4 text-center font-thin uppercase tracking-[0.3rem] lg:text-right">
          SOBRE NOSOTROS
        </h4>
        <h3
          className="mx-auto w-full text-center text-[2.75rem] font-normal leading-none lg:mr-0 lg:text-right"
          style={{ width: "min(100%, 450px)" }}
        >
          Somos tu aliado estratégico
        </h3>

        <div className="mt-10">
          <div className="relative mb-10 overflow-hidden rounded-[30px] px-[21px] py-9 shadow-[0px_4px_4px_0px_#00000040]">
            <h4 className="mb-1 text-[20px] font-medium leading-none">
              Somos un equipo interdisciplinario
            </h4>
            <p className="w-[90%] font-thin leading-none">
              cada área del desarrollo es abordada por un experto
            </p>
            <img
              alt="Icono grafica"
              src={"/IconoRecursos/interdiciplinario.png"}
              height={80}
              width={80}
              className="absolute -bottom-5 -right-5 object-contain"
            />
          </div>

          <div className="relative mb-10 overflow-hidden rounded-[30px] px-[21px] py-9 leading-none shadow-[0px_4px_4px_0px_#00000040]">
            <h4 className="mb-1 text-[20px] font-medium">
              Nuestro servicio es profesional
            </h4>
            <p className="w-[90%] font-thin leading-none">
              no somos freelancers
            </p>
            <img
              alt="Icono grafica"
              src={"/IconoRecursos/profesionales.png"}
              height={80}
              width={80}
              className="absolute -bottom-5 -right-5 object-contain"
            />
          </div>

          <div className="relative mb-10 overflow-hidden rounded-[30px] px-[21px] py-9 leading-none shadow-[0px_4px_4px_0px_#00000040]">
            <h4 className="mb-1 text-[20px] font-medium leading-none">
              Nuestro objetivo se cumple cuando vos alcanzás los tuyos
            </h4>
            <p className="w-[90%] font-thin">soporte post-desarrollo</p>
            <img
              alt="Icono grafica"
              src={"/IconoRecursos/objetivo.png"}
              height={80}
              width={80}
              className="absolute -bottom-5 -right-5 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto mb-24 mt-20 max-w-screen-xl px-5 text-azul xl:px-0">
        <h4 className="mb-6 text-center text-4xl uppercase">FAQ</h4>
        <div className="">
          <AccordeonItem
            activeQuestion={activeQuestion}
            handleQuestion={handleQuestion}
            question="¿Cuánto demora el desarrollo de un sitio web?"
            id={1}
          >
            <p>
              El tiempo de finalización de desarrollo varía dependiendo de las
              necesidades que posea el cliente. Por eso, antes de enviar un
              presupuesto con plazos establecidos, realizamos una reunión
              informativa y esclarecedora.{" "}
            </p>
            <p className="">
              Un factor importante, a considerar: la velocidad de desarrollo,
              está sujeta a la agilidad de intercambio de informaciones y
              devoluciones, entre nuestro equipo y el cliente.
            </p>
          </AccordeonItem>
          <AccordeonItem
            activeQuestion={activeQuestion}
            handleQuestion={handleQuestion}
            question="¿Cómo se cotiza mi proyecto?"
            id={2}
          >
            <p>
              Al igual que con los tiempos de desarrollo, la cotización será
              realizada post reunión informativa, con toda los datos que nos
              proveas de tu proyecto. Desde ese momento, tendremos 7 días
              hábiles, para presentarte un presupuesto completo, contemplando:
            </p>
            <ul className="ml-4">
              <li className="list-inside list-disc">Costos</li>
              <li className="list-inside list-disc">Tiempo de realización</li>
              <li className="list-inside list-disc">Medios de pago</li>
              <li className="list-inside list-disc">
                Info. y detalles técnicos del desarrollo
              </li>
            </ul>
          </AccordeonItem>
          <AccordeonItem
            activeQuestion={activeQuestion}
            handleQuestion={handleQuestion}
            question="¿Por qué es importante diseñar el UX y UI de mi página web?"
            id={3}
          >
            <p className="">
              Un sitio web que contempla diseño de experiencia de usuarios (UX)
              e interfaz (UI), es un sitio altamente optimizado. Esto te permite
              brindar a tus clientes potenciales una navegación estratégica y
              amigable, conduciéndolos a una acción determinada. De esta forma,
              no solo alcanzarás tus objetivos comerciales, sino que también
              darás visibilidad a la identidad de tu empresa.
            </p>
          </AccordeonItem>
          {/*  */}
          {/* VER MAS OPCIONES */}
          {/*  */}
          <motion.div initial={false} animate={verMas ? "open" : "closed"}>
            <motion.div
              variants={{
                open: { opacity: 1, height: "auto" },
                closed: { opacity: 0, height: 0 },
              }}
              style={{ pointerEvents: verMas ? "auto" : "none" }}
            >
              {easyQuestions.map((question) => (
                <AccordeonItem
                  key={question.id + question.question}
                  activeQuestion={activeQuestion}
                  handleQuestion={handleQuestion}
                  question={question.question}
                  id={question.id}
                >
                  {question.answer}
                </AccordeonItem>
              ))}
            </motion.div>
          </motion.div>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="z-30 mx-auto mt-4 block w-fit rounded-full border border-azul px-6 py-3 font-thin transition-all hover:bg-azul hover:text-white"
            onClick={() => setVerMas((prev) => !prev)}
          >
            {verMas ? "Ver menos" : "Ver más"}
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
