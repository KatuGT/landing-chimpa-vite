 
import { motion } from "framer-motion";

const logosMitad1 = [
  {
    empresa: "Amerian",
    logo: "/SVG/LogosEmpresas/amerian.png",
  },
  {
    empresa: "Villanueva",
    logo: "/SVG/LogosEmpresas/villanueva.svg",
  },
  {
    empresa: "Aapresid",
    logo: "/SVG/LogosEmpresas/aapresid.svg",
  },
  {
    empresa: "Silmag",
    logo: "/SVG/LogosEmpresas/silmag.svg",
  },
  {
    empresa: "Cinergia",
    logo: "/SVG/LogosEmpresas/cinergia.svg",
  },
  {
    empresa: "Copa",
    logo: "/SVG/LogosEmpresas/copa.svg",
  },
];

const logosMitad2 = [
  {
    empresa: "Efitech",
    logo: "/SVG/LogosEmpresas/efitech.svg",
  },
  {
    empresa: "Banker",
    logo: "/SVG/LogosEmpresas/banker.svg",
  },
  {
    empresa: "Freiberg",
    logo: "/SVG/LogosEmpresas/freiberg70.svg",
  },
  {
    empresa: "Porta",
    logo: "/SVG/LogosEmpresas/porta.svg",
  },
  {
    empresa: "Tribunal",
    logo: "/SVG/LogosEmpresas/tribunal.svg",
  },
  {
    empresa: "Unc",
    logo: "/SVG/LogosEmpresas/unc.svg",
  },
  {
    empresa: "Municipalidad",
    logo: "/SVG/LogosEmpresas/municipálidad.svg",
  },
];

const CarruselEmpresas = () => {
  return (
    <>
      <div className="relative hidden w-full  flex-shrink-0 items-center overflow-hidden bg-black pb-10 sm:flex sm:pb-32">
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad1.concat(logosMitad2).map((logo, index) => (
            <div
              className="relative my-0 ml-[60px] h-[60px]  w-auto"
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad1.concat(logosMitad2).map((logo, index) => (
            <div
              className="relative my-0 ml-[60px] h-[60px] w-auto "
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative flex w-full  flex-shrink-0 items-center overflow-hidden bg-black pb-10 sm:hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad1.map((logo, index) => (
            <div
              className="relative my-0 ml-[60px] h-[60px] w-auto  "
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0" }}
          transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad1.map((logo, index) => (
            <div
              className="relative my-0 ml-[60px]  h-[60px] w-auto "
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative flex w-full  flex-shrink-0 items-center overflow-hidden bg-black pb-32 sm:hidden">
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad2.map((logo, index) => (
            <div
              className="relative my-0 ml-[60px] h-[60px] w-auto  "
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 50, repeat: Infinity }}
          className="flex flex-shrink-0 items-center"
        >
          {logosMitad2.map((logo, index) => (
            <div
              className="relative my-0 ml-[60px]  h-[60px] w-auto "
              key={index}
            >
              <img
                className="h-full w-auto"
                alt={`Logo empresa ${logo.empresa}`}
                src={logo.logo}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default CarruselEmpresas;
