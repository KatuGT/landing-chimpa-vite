import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Flecha from "../../assets/SVGicon/Flecha";

const AccordeonItem = ({
  activeQuestion,
  handleQuestion,
  children,
  question,
  id,
}: {
  activeQuestion: number | null;
  handleQuestion: (id: number) => void;
  children: React.ReactNode;
  question: string;
  id: number;
}) => {
  return (
    <>
      <button
        onClick={() => handleQuestion(id)}
        className={`mt-5 boton-FAQ w-full overflow-hidden  rounded-[3.5rem] border     
        border-azul bg-white px-8 py-5 transition-[font-weight] group`}
      >
        <div className="flex w-full items-center justify-between transition-all">
          <span
            className={`text-lg pregunta transition-[font-weight] ${activeQuestion === id ? "font-extralight" : "font-thin"}`}
          >
            {question}
          </span>
          <div
            className={`w-10 shrink-0 ${activeQuestion === id && "rotate-180"} transition-all`}
          >
            <Flecha />
          </div>
        </div>
        <AnimatePresence>
          {activeQuestion === id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", y: "5px" }}
              exit={{ opacity: 0, height: 0 }}
              className="pl-4 text-left font-thin"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default AccordeonItem;
