import { premios } from "../../utils/types/premios";

   
const Premios = ({ descripcion, nombrePremio, imagen, años }: premios) => {
  return (
    <div className="flex flex-col gap-4 py-6 text-[18px] md:flex-row md:items-center md:gap-0">
      <div className="flex-1 text-lg font-extralight  md:font-thin">
        <h4>{descripcion}</h4>
      </div>
      <div className="flex w-full flex-[3] items-center gap-4 md:gap-0">
        <h4 className="text-lg uppercase md:flex-[2] md:text-center">
          {nombrePremio}
        </h4>
        <img alt="Premio FEPI" src={imagen} height={47} width={47} />
        <h4 className="text-lg font-normal   text-celeste md:flex-[2] md:text-center">
          {años}
        </h4>
      </div>
    </div>
  );
};

export default Premios;
