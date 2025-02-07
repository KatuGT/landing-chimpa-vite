 
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

const Marquesina = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * 1 * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="hidden overflow-x-hidden lg:flex ">
      <motion.div style={{ x }} className="flex flex-shrink-0">
        <h3 className="ml-16 w-max whitespace-nowrap py-24 text-[70px] font-extralight text-azul xl:text-[100px] ">
          eCommerce eLearning Sitio Web eCommerce eLearning Sitio Web
        </h3>
        <h3 className="ml-16 w-max whitespace-nowrap py-24 text-[70px] font-extralight text-azul xl:text-[100px] ">
          eCommerce eLearning Sitio Web eCommerce eLearning Sitio Web
        </h3>
        <h3 className="ml-16 w-max whitespace-nowrap py-24 text-[70px] font-extralight text-azul xl:text-[100px] ">
          eCommerce eLearning Sitio Web eCommerce eLearning Sitio Web
        </h3>
        <h3 className="ml-16 w-max whitespace-nowrap py-24 text-[70px] font-extralight text-azul xl:text-[100px] ">
          eCommerce eLearning Sitio Web eCommerce eLearning Sitio Web
        </h3>
        <h3 className="ml-16 w-max whitespace-nowrap py-24 text-[70px] font-extralight text-azul xl:text-[100px] ">
          eCommerce eLearning Sitio Web eCommerce eLearning Sitio Web
        </h3>
      </motion.div>
    </div>
  );
};

export default Marquesina;
