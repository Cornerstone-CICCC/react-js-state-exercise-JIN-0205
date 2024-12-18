import { Dispatch, SetStateAction } from "react";

interface Props {
  isLightsOn: boolean;
  setIsLightsOn: Dispatch<SetStateAction<boolean>>;
}

const LightToggle = ({ isLightsOn, setIsLightsOn }: Props) => {
  const handleLightOn = () => {
    setIsLightsOn((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleLightOn}>{isLightsOn ? "ON" : "OFF"}</button>
    </div>
  );
};

export default LightToggle;
