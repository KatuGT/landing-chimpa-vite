 

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useIsDragging } from "../store/elementStore";

const Cursor = () => {
  const animatedCursor = useRef(null);

  useGSAP(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY }: { clientX: number; clientY: number } = event;
      gsap.to(animatedCursor.current, {
        x: clientX,
        y: clientY,
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("pointermove", handleMove);
    }
  });

  const IsDragging = useIsDragging((state) => state.IsDragging);

  return (
    <div
      ref={animatedCursor}
      className={`animatedCursor pointer-events-none fixed  left-[-4px] top-[-4px] z-[1000] hidden aspect-square w-[8px] items-center justify-evenly rounded-full bg-white text-inherit mix-blend-difference duration-200 ease-linear xl:flex ${IsDragging && "left-[25px] top-[25px] w-[60px]"}`}
      style={{
        // transform: `translate(${position.x}px, ${position.y}px)`,
        width: IsDragging ? "50px" : "",
      }}
    >
      <span className="testimonioCursor hidden text-inherit">&lt;</span>
      <span className="testimonioCursor hidden text-inherit">&gt;</span>
    </div>
  );
};

export default Cursor;
