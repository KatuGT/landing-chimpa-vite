import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const chatVariants = {
  hidden: {
    y: "100%",
  },
  reveal: {
    y: 0,
  },
};

const TitleAnimation = ({
  texto,
  textClassName = "text-[40px] font-thin leading-tight md:text-[60px]",
  spaceTextSize = "text-4xl",
}: {
  texto: string;
  textClassName?: string;
  spaceTextSize?: string;
}) => {
  const transformedArray = texto
    .split("")
    .map((char) => (char === " " ? "-" : char));

  return (
      <motion.h3
        initial="hidden"
        animate="animate"
        whileInView="reveal"
        className={`relative overflow-hidden ${textClassName}`}
      >
        <div>
          {transformedArray.map((l, i) => {
            if (l === "-") {
              return (
                <motion.span
                  variants={chatVariants}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                  }}
                  className={`inline-block ${spaceTextSize} opacity-0`}
                  key={i}
                >
                  {l}
                </motion.span>
              );
            } else {
              return (
                <motion.span
                  variants={chatVariants}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              );
            }
          })}
        </div>
      </motion.h3>
  );
};

export default TitleAnimation;
