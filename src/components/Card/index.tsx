import React from "react";

import axios from "axios";
import DividerSvg from "../../images/pattern-divider-desktop.svg";
import IconDiceSvg from "../../images/icon-dice.svg";

interface IAdvice {
  slip: {
    id: number;
    advice: string;
  };
}

const Card = () => {
  const [randomAdvice, setRandomAdvice] = React.useState<IAdvice>();

  const [index, setIndex] = React.useState<number>(1);

  const getData = () => {
    return axios
      .get(`https://api.adviceslip.com/advice/${index}`)
      .then((res) => setRandomAdvice(res.data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    getData();
  }, [index]);

  const generate = () => {
    const index = Math.floor(Math.random() * 20 + 1);
    setIndex(index);
  };

  return (
    <div className="flex mt-[100px] relative bg-DarkGrayishBlue rounded-xl p-[30px] flex-col my-0 mx-auto md:w-[100%]  gap-y-5 w-[90%] max-w-[400px] font-extrabold">
      <div className=" text-center text-NeonGreen text-xs uppercase tracking-[0.2em]">
        <p>Advice #{randomAdvice?.slip.id}</p>
      </div>
      <div className="text-center text-[28px] text-LightCyan leading-tight">
        <p key={randomAdvice?.slip.id}>"{randomAdvice?.slip.advice}"</p>
      </div>
      <div className="w-[95%] block  my-0 mx-auto mb-[20px]">
        <img src={DividerSvg} alt="divider" />
      </div>
      <div className="flex items-center justify-center absolute bottom-[-21px] translate-x-[-50%] left-[50%]">
        <button
          className="bg-NeonGreen p-3 rounded-[50%] shadowBtn"
          onClick={generate}
        >
          <img width={20} height={20} src={IconDiceSvg} alt="dice" />
        </button>
      </div>
    </div>
  );
};

export default Card;
