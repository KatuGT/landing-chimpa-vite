 
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";

interface InputChimpaProps {
  value: string;
  type: "text" | "number" | "email" | "phone" | "tel";
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: ReactNode; // Tipo para componentes React
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconoMobile: Record<string, any>; // Tipo para JSON de Lottie
  htmlForId: string;
}

export default function InputChimpa({
  value,
  type,
  name,
  onChange,
  onBlur,
  placeholder,
  icon,
  iconoMobile,
  htmlForId,
}: InputChimpaProps) {
  const [isStopped, setIsStopped] = useState(false);
  const lottieElement = useRef<Lottie | null>(null);

  const handleMouseEnter = () => {
    setIsStopped(true);
  };

  const handleMouseLeave = () => {
    setIsStopped(false);
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: iconoMobile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    // No need to manually play the animation, it will be controlled by the isStopped prop
  }, [isStopped]);

  return (
    <div className="relative border-b-inherit">
      <div className="absolute bottom-[15px] hidden h-4 w-4 lg:block">
        {icon}
      </div>
      <div className="absolute bottom-[10px] lg:hidden">
        <Lottie
          ref={lottieElement}
          options={defaultOptions}
          height={24}
          width={24}
          isStopped={isStopped}
        />
      </div>
      <input
        id={htmlForId}
        name={name}
        placeholder=" "
        value={value}
        type={type}
        onChange={onChange}
        onBlur={(e) => {
          onBlur(e);
          handleMouseLeave();
        }}
        onFocus={handleMouseEnter}
        className={`inputChimpa w-full border border-transparent border-b-inherit bg-transparent py-1.5 
          pl-7 font-thin placeholder-inherit outline-none transition-all focus:shadow-none`}
      />
      <label
        htmlFor={htmlForId}
        className="fakePlaceholder absolute bottom-0 left-8 top-[5px] z-10 transition-all lg:left-6"
      >
        {placeholder}
      </label>
    </div>
  );
}
