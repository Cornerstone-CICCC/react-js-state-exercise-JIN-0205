import { useState } from "react";
import LightToggle from "./components/LightToggle";
import "./App.css";
import LottoNumbers from "./components/LottoNumbers";
import ClickCounter from "./components/ClickCounter";

const App = () => {
  /* Your states here */
  const [isLightsOn, setIsLightsOn] = useState<boolean>(true);
  const [nums, setNums] = useState<number[]>([]);

  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Light Toggle</h2>
      <LightToggle setIsLightsOn={setIsLightsOn} isLightsOn={isLightsOn} />
      <div className={`${!isLightsOn && "isLightsOn"}`}>
        Change this background color using the style attribute
      </div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers setNums={setNums} />
      <div className="output">
        {nums.map((num, index) => (
          <span key={index}>{num} </span>
        ))}
      </div>

      <h2>Click Counter</h2>
      <ClickCounter setCount={setCount} />
      <div className="output">{count}</div>
    </div>
  );
};

export default App;
