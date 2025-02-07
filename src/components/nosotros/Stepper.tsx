const Stepper = ({ dataNum }: { dataNum: string }) => {

    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div
      data-num={dataNum}
      className="stepper relative top-0 flex flex-col transition-all duration-700"
    >
      {array.map((item, index) => {
        return (
          <span
            key={index}
            className="flex h-[60px] items-center justify-center leading-[60x]"
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default Stepper;
