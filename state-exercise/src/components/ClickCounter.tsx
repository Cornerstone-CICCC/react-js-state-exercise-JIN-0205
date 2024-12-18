import { Dispatch, SetStateAction, useState } from "react";
interface Props {
  setCount: Dispatch<SetStateAction<number>>;
}
const ClickCounter = ({ setCount }: Props) => {
  const handleCount = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleCount}>click</button>
    </div>
  );
};

export default ClickCounter;
