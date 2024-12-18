import { Dispatch, SetStateAction } from "react";

interface Props {
  setNums: Dispatch<SetStateAction<number[]>>;
}
const LottoNumbers = ({ setNums }: Props) => {
  const handleLotto = () => {
    setNums([]);
    for (let i = 0; i < 7; i++) {
      const newNum = Math.floor(Math.random() * 50) + 1;
      setNums((prevNums) => [...prevNums, newNum]);
    }
  };
  return (
    <div>
      <button onClick={handleLotto}>Lotto Button</button>
    </div>
  );
};

export default LottoNumbers;
